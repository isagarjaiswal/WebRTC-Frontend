import React, { useContext } from "react";
import "./HomePage.css";
import { Button, MeetingID, NameInput, Navbar } from "../../components";
import { RoomContext } from "../../context/index";
import { ws } from "../../ws";

export const HomePage = () => {
  const { roomId } = useContext(RoomContext);
  const createRoom = () => {
    ws.emit("create-room", roomId);
  };
  return (
    <div className="homepage-container">
      <Navbar />
      <div className="room-form-container">
        <div className="room-form">
          <NameInput />
          <MeetingID />
          <Button onClick={createRoom}>Start new meeting</Button>
        </div>
      </div>
    </div>
  );
};
