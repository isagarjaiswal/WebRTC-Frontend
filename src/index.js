import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Home } from "./pages/Home/Home";
import { Room } from "./pages/Room/Room";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { RoomProvider } from "./context/RoomContext";
import { ChatProvider } from "./context/ChatContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <RoomProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/room/:id"
              element={
                <ChatProvider>
                  <Room />
                </ChatProvider>
              }
            />
          </Routes>
        </RoomProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();