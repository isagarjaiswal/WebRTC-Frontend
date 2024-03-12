import { useContext, useState } from "react";
import { ChatContext } from "../../context/ChatContext";
import { RoomContext } from "../../context/RoomContext";
import { UserContext } from "../../context/UserContext";
import { Button } from "../Common/Button";

export const ChatInput = () => {
  const [message, setMessage] = useState("");
  const { sendMessage } = useContext(ChatContext);
  const { roomId } = useContext(RoomContext);
  const { userId } = useContext(UserContext);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(message, userId, roomId);
          setMessage("");
        }}
      >
        <div className="flex ">
          <textarea
            className="border rounded"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <Button type="submit" className="">
            send
          </Button>
        </div>
      </form>
    </div>
  );
};
