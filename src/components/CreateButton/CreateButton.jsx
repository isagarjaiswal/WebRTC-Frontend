import { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";
import { UserContext } from "../../context/UserContext";
import { Button } from "../Common/Button";

export const Join = () => {
  const { userName, setUserName } = useContext(UserContext);
  const { createRoom } = useContext(RoomContext);

  const onSubmit = (e) => {
    e.preventDefault();
    createRoom(userName);
  };

  return (
    <form onSubmit={onSubmit} className="">
      <input
        className=""
        placeholder="Enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Button className="py-2 px-8 text-xl">Start new meeting</Button>
    </form>
  );
};
