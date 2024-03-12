import { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";
import { UserContext } from "../../context/UserContext";

export const ChatBubble = ({ message }) => {
  const { peers } = useContext(RoomContext);
  const { userId } = useContext(UserContext);
  const author = message.author && peers[message.author].userName;
  console.log({ author });
  const userName = author || "Anonimus";
  const isSelf = message.author === userId;
  const time = new Date(message.timestamp).toLocaleTimeString();

  return (
    <div style={{ display: "flex", gap: "20px" }} className="">
      <div className="">
        <div
          style={{ textAlign: ` ${isSelf ? "left" : "right"}` }}
          className=""
        >
          {message.content}
          <p
            style={{ textAlign: ` ${isSelf ? "left" : "right"}` }}
            className=""
          >
            {time}
          </p>
        </div>
        <div
          style={{ textAlign: ` ${isSelf ? "left" : "right"}` }}
          className=""
        >
          {isSelf ? "You" : userName}
        </div>
      </div>
    </div>
  );
};
