import React, { useContext, useEffect, useRef } from "react";
import { ChatContext } from "../../context/index";
import { ChatBubble, ChatInput } from "../index";
import "./Chat.css";
import ScrollToBottom from "react-scroll-to-bottom";

export const Chat = () => {
  const { chat } = useContext(ChatContext);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat.messages]);

  console.log({ allMsg: chat.messages });

  return (
    <>
      <div className="msger-chat">
        <ScrollToBottom>
          {chat.messages.map((message, index) => (
            <ChatBubble
              message={message}
              key={message.timestamp + (message?.author || "anonymous") + index}
            />
          ))}
          <div ref={messagesEndRef} />
        </ScrollToBottom>
      </div>
      <ChatInput />
    </>
  );
};

// import { useContext } from "react";
// import { ChatContext } from "../../context/index";
// import { ChatBubble, ChatInput } from "../index";
// import "./Chat.css";
// import ScrollToBottom from "react-scroll-to-bottom";
// export const Chat = () => {
//   const { chat } = useContext(ChatContext);
//   return (
//     <>
//       <div className={`msger-chat`}>
//         <ScrollToBottom>
//           {chat.messages.map((message) => (
//             <ChatBubble
//               message={message}
//               key={message.timestamp + (message?.author || "anonymous")}
//             />
//           ))}
//         </ScrollToBottom>
//       </div>
//       <ChatInput />
//     </>
//   );
// };
