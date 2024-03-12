import {
  createContext,
  useEffect,
  useState,
  useReducer,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";
import Peer from "peerjs";
import {
  addPeerStreamAction,
  addPeerNameAction,
  removePeerAction,
  addAllParticipants,
} from "../reducers/peerAction";
import { peersReducer } from "../reducers/peerReducer";
import { UserContext } from "./UserContext";
import { ws } from "../ws";

export const RoomContext = createContext({
  peers: {},
  shareScreen: () => {},
  setRoomId: () => {},
  screenSharingId: "",
  roomId: "",
});

export const RoomProvider = ({ children }) => {
  const { userId, userName, setUserName } = useContext(UserContext);

  console.log({ ws });
  const navigate = useNavigate();
  const [me, setMe] = useState();
  const [stream, setStream] = useState();
  const [peers, dispatch] = useReducer(peersReducer, {});
  const [screenSharingId, setScreenSharingId] = useState("");
  const [roomId, setRoomId] = useState();

  const enterRoom = ({ roomId }) => {
    navigate(`/room/${roomId}`);
  };
  const getUsers = ({ participants }) => {
    dispatch(addAllParticipants(participants));
  };

  const removePeer = (peerId) => {
    dispatch(removePeerAction(peerId));
  };

  const switchStream = (stream) => {
    setStream(stream);
    setScreenSharingId(me?.id || "");
    Object.values(me?.connections).forEach((connection) => {
      const videoTrack = stream
        ?.getTracks()
        .find((track) => track.kind === "video");
      connection[0].peerConnection
        .getSenders()[1]
        .replaceTrack(videoTrack)
        .catch((err) => console.error(err));
    });
  };

  const shareScreen = () => {
    if (screenSharingId) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then(switchStream);
    } else {
      navigator.mediaDevices.getDisplayMedia({}).then(switchStream);
    }
  };

  const createRoom = (name) => {
    setUserName(name);
    ws.emit("create-room");
  };

  useEffect(() => {
    const peer = new Peer(userId);
    setMe(peer);

    try {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          setStream(stream);
        });
    } catch (error) {
      console.error(error);
    }

    ws.on("room-created", enterRoom);
    ws.on("get-users", getUsers);
    ws.on("user-disconnected", removePeer);
    ws.on("user-started-sharing", (peerId) => setScreenSharingId(peerId));
    ws.on("user-stopped-sharing", () => setScreenSharingId(""));

    return () => {
      ws.off("room-created");
      ws.off("get-users");
      ws.off("user-disconnected");
      ws.off("user-started-sharing");
      ws.off("user-stopped-sharing");
      ws.off("user-joined");
      me?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (screenSharingId) {
      ws.emit("start-sharing", { peerId: screenSharingId, roomId });
    } else {
      ws.emit("stop-sharing");
    }
  }, [screenSharingId, roomId]);

  useEffect(() => {
    if (!me) return;
    if (!stream) return;
    ws.on("user-joined", ({ peerId, userName: name }) => {
      const mycall = me.call(peerId, stream, {
        metadata: { userName },
      });
      mycall.on("stream", (peerStream) => {
        dispatch(addPeerStreamAction(peerId, peerStream));
      });
      dispatch(addPeerNameAction(peerId, name));
    });

    me.on("call", (call) => {
      dispatch(addPeerNameAction(call.peer, call.metadata.userName));
      call.answer(stream);
      call.on("stream", (peerStream) => {
        dispatch(addPeerStreamAction(call.peer, peerStream));
      });
    });

    return () => {
      ws.off("user-joined");
    };
  }, [me, stream, userName]);

  return (
    <RoomContext.Provider
      value={{
        me,
        stream,
        peers,
        roomId,
        screenSharingId,
        shareScreen,
        setRoomId,
        createRoom,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};
