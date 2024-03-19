import React, { useState, useContext } from "react";
import { RoomContext } from "../../context";
import "./UserMediaControlManager.css";
import { Camera, Disc, Mic, Phone, ScreenShare } from "lucide-react";

export const UserMediaControlManager = ({ stream }) => {
  const { shareScreen } = useContext(RoomContext);
  const [isMute, setIsMute] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);

  const toggleAudio = () => {
    if (stream) {
      const audioTrack = stream.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !isMute;
        setIsMute(!isMute);
      }
    }
  };

  const toggleCamera = () => {
    if (stream) {
      const videoTrack = stream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !isCameraOff;
        setIsCameraOff(!isCameraOff);
      }
    }
  };
  return (
    <div className="User-Media-Control-Manager">
      <button onClick={toggleCamera} className="btns">
        <Camera />
        {/* <CameraOff /> */}
      </button>
      <button onClick={toggleAudio} className="btns">
        <Mic />
        {/* <MicOff /> */}
      </button>
      <button className="btns">
        <Phone className="rotate" size={36} strokeWidth={2} />
      </button>
      <button onClick={shareScreen} className="btns">
        <ScreenShare />
      </button>
      <button className="btns">
        <Disc />
      </button>
    </div>
  );
};
