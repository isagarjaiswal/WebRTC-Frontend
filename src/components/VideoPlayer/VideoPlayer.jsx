import React, { useEffect, useRef } from "react";
import "./VideoPlayer.css";
import {
  // Maximize,
  Mic,
  // Minimize
} from "lucide-react";

export const VideoPlayer = ({
  stream,
  className,
  userName = "Annonminous",
  isPin,
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) videoRef.current.srcObject = stream;
    videoRef.current.style.transform = "scaleX(-1)";
  }, [stream]);
  return (
    <div className="video-player-container">
      <div
        className={`username-in-videoplayer ${
          isPin && "username-in-pin-videoplayer"
        }`}
      >
        {userName.length > 20 ? userName.substring(0, 20) + "..." : userName}
      </div>
      <button className="icons-in-vp mic-icon">
        <Mic color="#fff" />
      </button>
      <video className={className} ref={videoRef} autoPlay muted={true} />
    </div>
  );
};
