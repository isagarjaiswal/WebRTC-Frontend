import React, { createContext, useEffect, useReducer } from "react";
import { chatReducer } from "../reducers/chatReducer";
import {
  addHistoryAction,
  addMessageAction,
  toggleChatAction,
} from "../reducers/chatActions";
import { ws } from "../ws";

export const ChatContext = createContext({
  chat: {
    messages: [],
    isChatOpen: false,
  },
  sendMessage: (message, roomId, author) => {},
  toggleChat: () => {},
});

export const ChatProvider = ({ children }) => {
  const [chat, chatDispatch] = useReducer(chatReducer, {
    messages: [],
    isChatOpen: false,
  });
  const sendMessage = (message, author, roomId) => {
    const messageData = {
      content: message,
      timestamp: new Date().getTime(),
      author: author,
    };
    console.log({ messageData });
    chatDispatch(addMessageAction(messageData));
    ws.emit("send-message", roomId, messageData);
  };

  const addMessage = (message) => {
    console.log("ne message", message);
    chatDispatch(addMessageAction(message));
  };

  const addHistory = (messages) => {
    console.log({ messages });
    chatDispatch(addHistoryAction(messages));
  };

  const toggleChat = () => {
    chatDispatch(toggleChatAction(!chat.isChatOpen));
  };

  useEffect(() => {
    ws.on("add-message", addMessage);
    ws.on("get-messages", addHistory);

    return () => {
      ws.off("add-message");
      ws.off("get-messages");
    };
  });
  return (
    <ChatContext.Provider value={{ chat, sendMessage, toggleChat }}>
      {children}
    </ChatContext.Provider>
  );
};
