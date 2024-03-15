import { useContext, useState } from "react";
import { ChatContext } from "../../context/ChatContext";
import { RoomContext } from "../../context/RoomContext";
import { UserContext } from "../../context/UserContext";
import { Button } from "../Common/Button";
import "./Chat.css";
// import { SendHorizontal } from "lucide-react";
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
        className="msg-inputarea"
      >
        <input
          type="text"
          className="msg-input"
          placeholder="Enter your message..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <Button
          aria-label="Send message"
          type="submit"
          className="msg-send-btn"
        >
          Send
        </Button>
      </form>
    </>
  );
};

/* <form
onSubmit={(e) => {
  e.preventDefault();
  sendMessage(message, userId, roomId);
  setMessage("");
}}
className="form-container-chat-input"
>
<div className="message-input-container">
  <textarea
    className="message-input"
    placeholder="Type your message..."
    autocomplete="off"
    onChange={(e) => setMessage(e.target.value)}
    value={message}
    rows={4}
    maxLength={200} // Example maximum length
    aria-label="Type your message" // Accessibility label
  />
  <Button
    className="send-button"
    type="submit"
    aria-label="Send message" // Accessibility label
  >
    Send
  </Button>
</div>
</form> */
