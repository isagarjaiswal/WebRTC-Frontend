import { Button } from "../Common/Button";
import { NameInput } from "../Common/Name";
import { ws } from "../../ws";
export const Join = () => {
  const createRoom = () => {
    ws.emit("create-room");
  };

  return (
    <div className="">
      <NameInput />
      <Button onClick={createRoom} className="py-2 px-8 text-xl">
        Start new meeting
      </Button>
    </div>
  );
};
