import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router";
import { useFirebase } from "../../context";
import googleIcon from "../../images/Google_Icons.webp";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { isLoggedIn, signinWithGoogle } = useFirebase();

  const handleSigninWithAnotherProvider = async () => {
    try {
      console.log("Login user...");
      await signinWithGoogle();
      console.log("Login User !!");
    } catch (error) {
      console.error("Error signing in with another provider:", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    isLoggedIn && navigate("/home");
  }, [navigate, isLoggedIn]);

  return (
    <div className="login-page">
      <div className="login-form">
        <button
          className={`google-btn  ${!error || "google-btn-danger"}`}
          onClick={handleSigninWithAnotherProvider}
        >
          <img alt="GoogleImg" src={googleIcon}></img>
          Login with Google
        </button>
      </div>
    </div>
  );
};
