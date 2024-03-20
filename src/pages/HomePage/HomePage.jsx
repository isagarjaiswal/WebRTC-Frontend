import React from "react"; // useContext
import "./HomePage.css";
import {
  Button,
  //  MeetingID,
  NameInput,
  Navbar,
} from "../../components";
// import { RoomContext, UserContext } from "../../context/index";
import { ws } from "../../ws";

export const HomePage = () => {
  // const { roomId } = useContext(RoomContext);
  // const { setRoomId, roomId } = useContext(RoomContext);
  // const { userName, setUserName } = useContext(UserContext);

  const createRoom = () => {
    // ws.emit("create-room", { roomId });
    ws.emit("create-room");
  };

  return (
    <div className="homepage-container">
      <Navbar />
      <div className="room-form-container">
        <NameInput />
        <Button onClick={createRoom} className="">
          Start new meeting
        </Button>
        {/* <MeetingID /> */}
      </div>
    </div>
  );
};
