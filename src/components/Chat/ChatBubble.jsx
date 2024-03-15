import { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";
import "./Chat.css";
import { UserContext } from "../../context/UserContext";
export const ChatBubble = ({ message }) => {
  const { peers } = useContext(RoomContext);
  const { userId } = useContext(UserContext);
  const author = message.author && peers[message.author].userName;
  const userName = author || "Anonimus";
  const isSelf = message.author === userId;
  const time = new Date(message.timestamp).toLocaleTimeString();

  return (
    <div>
      <div>
        <div>
          {message.content}
          <div>{time}</div>
        </div>
        <div>{isSelf ? "You" : userName}</div>
      </div>
    </div>
  );
};
