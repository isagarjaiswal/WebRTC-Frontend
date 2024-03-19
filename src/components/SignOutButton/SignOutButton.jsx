import React from "react";
import { useFirebase } from "../../context";
import { useNavigate } from "react-router-dom";
import "./SignOutButton.css";

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
      <button class="sign-out-btn-pushable" onClick={handleSignout}>
        <span class="sign-out-btn-shadow"></span>
        <span class="sign-out-btn-edge"></span>
        <span class="sign-out-btn-front text">Sign Out</span>
      </button>
    </>
  );
};
