import React from "react";
import { useFirebase } from "../../context";
import { useNavigate } from "react-router-dom";

export const SignOutButton = () => {
  const { signOut } = useFirebase();
  const navigate = useNavigate();

  const handleSignout = async () => {
    try {
      await signOut();
      console.log("User signed out successfully");
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <>
      <button onClick={handleSignout}>Sign Out</button>
    </>
  );
};

