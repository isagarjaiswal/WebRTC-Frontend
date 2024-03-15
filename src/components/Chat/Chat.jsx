import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import { ChatBubble } from "./ChatBubble";
import { ChatInput } from "./ChatInput";
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
