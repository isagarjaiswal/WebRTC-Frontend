import { useContext } from "react";
import { ChatContext } from "../../context/index";
import { ChatBubble, ChatInput } from "../index";
import "./Chat.css";

export const Chat = () => {
  const { chat } = useContext(ChatContext);
  return (
    <>
      <div className={`msger-chat`}>
        {chat.messages.map((message) => (
          <ChatBubble
            message={message}
            key={message.timestamp + (message?.author || "anonymous")}
          />
        ))}
      </div>
      <ChatInput />
    </>
  );
};
