import { useContext, useState } from "react";
import { ChatContext } from "../../context/ChatContext";
import { RoomContext } from "../../context/RoomContext";
import { UserContext } from "../../context/UserContext";
import { Button } from "../Common/Button";
import "./Chat.css";

export const ChatInput = () => {
  const [message, setMessage] = useState("");
  const { sendMessage } = useContext(ChatContext);
  const { roomId } = useContext(RoomContext);
  const { userId } = useContext(UserContext);
  console.log({ "Chat-Input-Msg": message });

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(message, userId, roomId);
          setMessage("");
        }}
        className="form-container-chat-input"
      >
        <div className=" textarea-container">
          <textarea
            className="textarea-chat-input"
            autocomplete="off"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Type to write a message"
          />
          <Button type="submit" className="send-btn">
            Send
          </Button>
        </div>
      </form>
    </>
  );
};
