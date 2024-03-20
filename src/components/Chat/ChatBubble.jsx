import { useContext } from "react";
import { RoomContext, UserContext } from "../../context/index";
import "./Chat.css";

export const ChatBubble = ({ message }) => {
  const { peers } = useContext(RoomContext);
  const { userId } = useContext(UserContext);
  const author = message.author && peers[message.author].userName;
  console.log({ author });
  const userName = author || "Anonimus";
  const isSelf = message.author === userId;
  const time = new Date(message.timestamp).toLocaleTimeString();

  return (
    <>
      <div className={`msg ${!isSelf ? "left-msg" : "right-msg"}`}>
        <div className={`msg-bubble`}>
          <div className={`msg-info`}>
            <div className={`msg-info-name`}>{isSelf ? "You" : userName}</div>
            <div className={`msg-info-time`}>{time}</div>
          </div>
          <div className={`msg-text`}>{message.content}</div>
        </div>
      </div>
    </>
  );
};

// 20
// import { useContext } from "react";
// import { RoomContext, UserContext } from "../../context/index";
// import "./Chat.css";

// export const ChatBubble = ({ message }) => {
//   const { me, peers } = useContext(RoomContext);
//   const { userId } = useContext(UserContext);
//   const author = message?.author && peers[message?.author]?.userName;
//   const userName = author || "Anonimus";
//   const isSelf = message.author === userId;
//   const time = new Date(message.timestamp).toLocaleTimeString();
//   return (
//     <>
//       <div className={`msg ${!isSelf ? "left-msg" : "right-msg"}`}>
//         <div className={`msg-bubble`}>
//           <div className={`msg-info`}>
//             <div className={`msg-info-name`}>{isSelf ? "You" : userName}</div>
//             <div className={`msg-info-time`}>{time}</div>
//           </div>
//           <div className={`msg-text`}>{message.content}</div>
//         </div>
//       </div>
//     </>
//   );
// };
// 20

/* <div className="chat-bubble">
<div className="msg-brake-line"></div>
<div className="name-time-container">
  <div>{isSelf ? "You" : userName}</div>
  <div>{time}</div>
</div>
<div className="one-msg">{message.content}</div>
</div> */

// let userName = "Anonymous";
//   let isSelf = false;
//   if (message.author && peers && peers[message.author]) {
//     const author = peers[message.author];
//     userName = author.userName || userName; // Use the author's username if available
//     isSelf = message.author === userId;
//   }
//   const time = new Date().toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//   });
