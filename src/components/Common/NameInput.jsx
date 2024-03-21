import React, { useContext } from "react";
import { UserContext } from "../../context/index";
import "./NameInput.css";

export const NameInput = ({ className }) => {
  const { userName, setUserName } = useContext(UserContext);
  return (
    <input
      className={`input-name ${className}`}
      placeholder="Enter your name"
      onChange={(e) => setUserName(e.target.value)}
      value={userName}
    />
  );
};
