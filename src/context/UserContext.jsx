import { createContext, useEffect, useState } from "react";
import { v4 as uuidV4 } from "uuid";
// import { useFirebase } from "./FirebaseContext";

export const UserContext = createContext({
  userId: "",
  userName: "",
  setUserName: () => {},
});

export const UserProvider = ({ children }) => {
  // const { userName: name } = useFirebase();

  const [userId] = useState(localStorage.getItem("userId") || uuidV4());
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || ""
  );

  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);

  useEffect(() => {
    localStorage.setItem("userId", userId);
  }, [userId]);

  return (
    <UserContext.Provider value={{ userId, userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};
