import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {
  UserProvider,
  RoomProvider,
  ChatProvider,
  FirebaseProvider,
} from "./context/index";
import App from "./App.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseProvider>
        <UserProvider>
          <RoomProvider>
            <ChatProvider>
              <App />
            </ChatProvider>
          </RoomProvider>
        </UserProvider>
      </FirebaseProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
