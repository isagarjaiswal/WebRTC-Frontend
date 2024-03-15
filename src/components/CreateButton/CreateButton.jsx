import { Button } from "../Common/Button";
import { NameInput } from "../Common/Name";
import { ws } from "../../ws";
import "./CreateButton.css";
import MeetingID from "../Common/MeetingID";
import { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";

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
