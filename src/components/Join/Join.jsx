import { useContext } from "react";
import { MeetingID, NameInput, Button } from "../index";
import { RoomContext } from "../../context/index";
import { ws } from "../../ws";
import "./Join.css";

export const Join = () => {
  const { roomId } = useContext(RoomContext);
  const createRoom = () => {
    ws.emit("create-room", roomId);
  };

  return (
    <div className="homepage-container">
      <div className="homepage-sub-container">
        <NameInput />
        <MeetingID />
        <Button onClick={createRoom}>Start new meeting</Button>
      </div>
    </div>
  );
};
