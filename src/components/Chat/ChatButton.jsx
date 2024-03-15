import { Button } from "../Common/Button";
import "./Chat.css"

export const ChatButton = ({ onClick, isOpen }) => {
  console.log({ isOpen });
  return (
    <Button onClick={onClick}>
      {isOpen ? <>Chat Close</> : <>Chat Open</>}
    </Button>
  );
};
