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
      <button className="sign-out-btn-pushable" onClick={handleSignout}>
        <span className="sign-out-btn-shadow"></span>
        <span className="sign-out-btn-edge"></span>
        <span className="sign-out-btn-front text">Sign Out</span>
      </button>
    </>
  );
};
