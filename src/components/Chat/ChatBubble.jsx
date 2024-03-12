import { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";

export const ChatBubble = ({ message }) => {
  const { me, peers } = useContext(RoomContext);
  const isSelf = message.author === me?.id;
  const author = message.author && peers[message.author];
  const authorUserName = author?.userName || "Anonymous";
  const time = new Date(message.timestamp).toLocaleTimeString();

  return (
    <div className="">
      <div className="">
        <div className="">
          {message.content}
          <p className="">{time}</p>
        </div>
        <div className="">{isSelf ? "You" : authorUserName}</div>
      </div>
    </div>
  );
};
