import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import { ChatBubble } from "./ChatBubble";
import { ChatInput } from "./ChatInput";

export const Chat = () => {
  const { chat } = useContext(ChatContext);
  return (
    <div className="" style={{ display: "flex", justifyContent: "columns" }}>
      <div>
        {chat.messages.map((message) => (
          <ChatBubble message={message} key={message.timestamp + (message?.author || "anonymous")} />
        ))}
      </div>
      <ChatInput />
    </div>
  );
};
