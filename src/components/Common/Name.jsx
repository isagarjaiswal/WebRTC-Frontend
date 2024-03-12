import React, { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";

const NameInput = () => {
  const { userName, setUserName } = useContext(RoomContext);

  return (
    <input
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      className=""
      style={{ border: "1px solid red" }}
    />
  );
};

export default NameInput;
