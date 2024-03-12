import { createContext, useEffect, useState } from "react";
import { v4 as uuidV4 } from "uuid";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || ""
  );

  const [userId] = useState(localStorage.getItem("userId") || uuidV4());
  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);

  return (
    <UserContext.Provider value={{ userName, setUserName, userId }}>
      {children}
    </UserContext.Provider>
  );
};
