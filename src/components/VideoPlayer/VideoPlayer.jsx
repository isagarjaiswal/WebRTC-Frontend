import React, { useEffect, useRef, useState } from "react";
import "./VideoPlayer.css";
import { Mic, MicOff } from "lucide-react";

export const VideoPlayer = ({
  stream,
  className,
  userName = "Annonminous",
  isPin,
  isMuted = true,
}) => {
  const videoRef = useRef(null);
  const [isMute, setIsMute] = useState(false);
  useEffect(() => {
    if (videoRef.current && stream) videoRef.current.srcObject = stream;
    videoRef.current.style.transform = "scaleX(-1)";
  }, [stream]);

  const toggleAudio = () => {
    if (stream) {
      const audioTrack = stream.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !isMute;
        setIsMute(!isMute);
      }
    }
  };

  return (
    <div className="video-player-container">
      <div
        className={`username-in-videoplayer ${
          isPin && "username-in-pin-videoplayer"
        }`}
      >
        {userName.length > 20 ? userName.substring(0, 20) + "..." : userName}
      </div>

      <button onClick={toggleAudio} className="icons-in-vp mic-icon">
        {isMute ? <Mic /> : <MicOff />}
      </button>
      {stream ? (
        <video className={className} ref={videoRef} autoPlay muted={isMute} />
      ) : (
        <div className="video-error-message">
          Permission denied for video call.
        </div>
      )}
    </div>
  );
};
