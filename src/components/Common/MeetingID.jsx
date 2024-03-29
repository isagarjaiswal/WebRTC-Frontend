import React, { useContext } from "react";
import { RoomContext } from "../../context/index";

export const MeetingID = ({ className }) => {
  const { setRoomId, roomId } = useContext(RoomContext);
  return (
    <input
      className={`input-name ${className}`}
      placeholder="Enter Meet ID"
      onChange={(e) => setRoomId(e.target.value)}
      value={roomId}
    />
  );
};

