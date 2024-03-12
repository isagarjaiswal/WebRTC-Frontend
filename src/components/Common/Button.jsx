import React from "react";
import "./Button.css";

export const Button = ({ children, onClick, className, type }) => {
  return (
    <button
      style={{
        backgroundColor: "green",
        color: "white",
      }}
      type={type || "submit"}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
};

