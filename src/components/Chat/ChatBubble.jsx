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
  const time = new Date(message.timestamp).toLocaleTimeString();
  console.log({ chatBubble: message.content });
  return (
    <div className="chat-bubble">
      <div>
        {message.content}
        <div>{time}</div>
      </div>
      <div>{isSelf ? "You" : userName}</div>
    </div>
  );
};
