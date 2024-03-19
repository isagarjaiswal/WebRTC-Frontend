import React from "react";
import { SignOutButton } from "../index";
import { useFirebase } from "../../context/FirebaseContext";
import "./Navbar.css";

export const Navbar = () => {
  const { userName } = useFirebase();
  return (
    <div className="navbar-container">
      <div className="logo">Group Gaze</div>
      <div className="nav-header">
        <div className="username-in-navbar">{userName}</div>
        <SignOutButton />
      </div>
    </div>
  );
};
