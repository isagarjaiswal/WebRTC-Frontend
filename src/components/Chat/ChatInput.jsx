import { useContext, useState } from "react";
import { ChatContext, RoomContext, UserContext } from "../../context/index";
import { Button } from "../index";
import "./Chat.css";

export const ChatInput = () => {
  const [message, setMessage] = useState("");
  const { sendMessage } = useContext(ChatContext);
  const { roomId } = useContext(RoomContext);
  const { userId } = useContext(UserContext);

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
        <Button aria-label="Send message" type="submit">
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
