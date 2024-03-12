import { Button } from "../Common/Button";

export const ChatButton = ({ onClick }) => {
  return (
    <Button className="p-4 mx-2 text-xl" onClick={onClick}>
      send chat
    </Button>
  );
};
