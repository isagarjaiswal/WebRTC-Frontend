import { useEffect, useRef } from "react";

export const VideoPlayer = ({ stream, className }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) videoRef.current.srcObject = stream;
  }, [stream]);
  return (
    <video
      data-testid="peer-video"
      ref={videoRef}
      autoPlay
      muted={true}
      className={className}
    />
  );
};

// import React, { useEffect, useRef, useState } from "react";
// import "./VideoPlayer.css";
// import { Mic, MicOff } from "lucide-react";

// export const VideoPlayer = ({
//   stream,
//   className,
//   userName = "Annonminous",
//   isPin,
//   // isMuted = true,
// }) => {
//   console.log({ stream });
//   const videoRef = useRef(null);
//   const [isMute, setIsMute] = useState(false);

//   useEffect(() => {
//     if (videoRef.current && stream) videoRef.current.srcObject = stream;
//   }, [stream]);

//   const toggleAudio = () => {
//     if (stream) {
//       const audioTrack = stream.getAudioTracks()[0];
//       if (audioTrack) {
//         audioTrack.enabled = !isMute;
//         setIsMute(!isMute);
//       }
//     }
//   };

//   return (
//     <div className="video-player-container">
//       <div
//         className={`username-in-videoplayer ${
//           isPin && "username-in-pin-videoplayer"
//         }`}
//       >
//         {stream && userName.length > 20
//           ? userName.substring(0, 20) + "..."
//           : userName}
//       </div>
//       <button onClick={toggleAudio} className="icons-in-vp mic-icon">
//         {stream && isMute ? <Mic /> : <MicOff />}
//       </button>

//       {stream ? (
//         <video className={className} ref={videoRef} autoPlay />
//       ) : (
//         <div className="video-error-message">
//           Permission denied for video call.
//         </div>
//       )}
//     </div>
//   );
// };
