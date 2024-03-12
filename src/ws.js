import socketIOClient from "socket.io-client";

// const WS = "http://localhost:8080";
const WS = "https://webrtc-backend-1.onrender.com";
export const ws = socketIOClient(WS);