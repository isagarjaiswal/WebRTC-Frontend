import React from "react";
import "./Button.css";

export const Button = ({ children, onClick, className, type }) => {
  return (
    <button
      type={type || "submit"}
      onClick={onClick}
      className={`${className} main-btn`}
    >
      {children}
    </button>
  );
};
