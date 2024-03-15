import { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";
import "./Chat.css";
import { UserContext } from "../../context/UserContext";
export const ChatBubble = ({ message }) => {
  const { peers } = useContext(RoomContext);
  const { userId } = useContext(UserContext);
  // const author = message.author && peers[message.author].userName;
  // const userName = author || "Anonimus";
  // const isSelf = message.author === userId;
  // const time = new Date(message.timestamp).toLocaleTimeString();
  // console.log({ chatBubble: message.content });
  let userName = "Anonymous"; // Default username if author is not found
  let isSelf = false;

  if (message.author && peers && peers[message.author]) {
    const author = peers[message.author];
    userName = author.userName || userName; // Use the author's username if available
    isSelf = message.author === userId;
  }
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  console.log({ chatBubble: message.content });
  return (
    <>
      <div className={`msg ${ !isSelf ? "left-msg" : "right-msg"}`}>
        <div className={`msg-bubble`}>
          <div className={`msg-info`}>
            <div className={`msg-info-name`}>{isSelf ? "You" : userName}</div>
            <div className={`msg-info-time`}>{time}</div>
          </div>

          <div className={`msg-text`}>{message.content}</div>
        </div>
      </div>
    </>
  );
};

/* <div className="chat-bubble">
<div className="msg-brake-line"></div>
<div className="name-time-container">
  <div>{isSelf ? "You" : userName}</div>
  <div>{time}</div>
</div>
<div className="one-msg">{message.content}</div>
</div> */
