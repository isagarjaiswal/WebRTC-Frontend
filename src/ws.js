import socketIOClient from "socket.io-client";

const WS = "https://webrtc-backend-1.onrender.com";
// const WS = "http://localhost:8080/";
export const ws = socketIOClient(WS);
