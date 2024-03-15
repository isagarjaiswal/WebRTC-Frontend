import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SharingScreenButton } from "../../components/SharingScreenButton/SharingScreenButton";
// import { ChatButton } from "../../components/Chat/ChatButton";
import { VideoPlayer } from "../../components/VideoPlayer/VideoPlayer";
import { Chat } from "../../components/Chat/Chat";
import { RoomContext } from "../../context/RoomContext";
import { UserContext } from "../../context/UserContext";
import { ChatContext } from "../../context/ChatContext";
import { ws } from "../../ws";
import "./Room.css";
// import { NameInput } from "../../components/Common/Name";
import {
  Camera,
  // CameraOff,
  Disc,
  Mic,
  // MicOff,
  Phone,
  // ScreenShare,
} from "lucide-react";

export const Room = () => {
  const { id } = useParams();
  const {
    stream,
    screenStream,
    peers,
    shareScreen,
    screenSharingId,
    setRoomId,
  } = useContext(RoomContext);
  const { userName, userId } = useContext(UserContext);
  const { toggleChat, chat } = useContext(ChatContext);
  // const [allStream, setAllStream] = useState("");

  useEffect(() => {
    if (stream) ws.emit("join-room", { roomId: id, peerId: userId, userName });
  }, [id, userId, stream, userName]);

  useEffect(() => {
    setRoomId(id || "");
  }, [id, setRoomId]);

  const screenSharingVideo =
    screenSharingId === userId ? screenStream : peers[screenSharingId]?.stream;

  const { [screenSharingId]: sharing, ...peersToShow } = peers;
  // const timestamp = new Date().toLocaleTimeString([], {
  //   hour: "2-digit",
  //   minute: "2-digit",
  // });

  return (
    <div className="main-room-container">
      <div className="room-container">
        <div className="left-room-container">
          <div className="pin-display">
            <div className="temp-class">
              {screenSharingVideo && (
                <VideoPlayer
                  isPin={true}
                  className="pin-display-vp"
                  stream={screenSharingVideo}
                />
              )}
            </div>
          </div>
          <div className="video-controller">
            <button className="btns">
              <Camera />
              {/* <CameraOff /> */}
            </button>
            <button className="btns">
              <Mic />
              {/* <MicOff /> */}
            </button>
            <button className="btns">
              <Phone className="rotate" size={36} strokeWidth={2} />
            </button>
            <button disabled={true} className="btns">
              {/* <ScreenShare /> */}
              <SharingScreenButton onClick={shareScreen} />
            </button>
            <button className="btns">
              <Disc />
            </button>
          </div>
        </div>

        <div className="right-room-container">
          <div className="chat-video-btn-container">
            <div className="chat-video-btn">
              <button
                className={`${chat.isChatOpen ? "" : "active-btn-class"}`}
                onClick={toggleChat}
              >
                Participant
              </button>
              <button
                onClick={toggleChat}
                className={`${chat.isChatOpen ? "active-btn-class" : ""}`}
              >
                Chat
              </button>
            </div>
          </div>

          <div className="chat-participant-container">
            {chat.isChatOpen && (
              <div className="chat-container">
                <Chat />
              </div>
            )}

            {!chat.isChatOpen && (
              <div className="participant-container">
                {screenSharingId !== userId && (
                  <div className="participant">
                    <VideoPlayer
                      className={"participant-class-for-vp"}
                      stream={stream}
                    />
                    {/* <NameInput className={"user-name-input"} /> */}
                  </div>
                )}
                {Object.values(peersToShow)
                  .filter((peer) => !!peer.stream)
                  .map((peer) => (
                    <div className="participant" key={peer.peerId}>
                      <VideoPlayer
                        userName={peer.userName}
                        className={"participant-class-for-vp"}
                        stream={peer.stream}
                      />
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* <div className="main-room-container">
<div className="room-container">
  {screenSharingVideo && (
    <div className="">
      <VideoPlayer stream={screenSharingVideo} />
    </div>
  )}

  <div
    className={`grid gap-4 ${
      screenSharingVideo ? "w-1/5 grid-col-1" : "grid-cols-4"
    }`}
  >
    {screenSharingId !== userId && (
      <div className="mystream-video-container">
        <VideoPlayer stream={stream} />
        <NameInput className={"user-name-input"} />
      </div>
    )}

    {Object.values(peersToShow)
      .filter((peer) => !!peer.stream)
      .map((peer) => (
        <div key={peer.peerId}>
          <VideoPlayer stream={peer.stream} />
          <div>{peer.userName}</div>
        </div>
      ))}
  </div>
  {chat.isChatOpen && (
    <div className="border-l-2 pb-28">
      <Chat />
    </div>
  )}
</div>
<div className="room-btn-container">
  <SharingScreenButton onClick={shareScreen} />
  <ChatButton onClick={toggleChat} isOpen={chat.isChatOpen} />
</div>
</div> */
