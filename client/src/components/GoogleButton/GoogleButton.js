import React from "react";
import "./GoogleButton.css";

export const GoogleButton = ({ passedEvent, type }) => {
  return (
    <button onClick={passedEvent} type={type} className="google-btn">
      <img
        src="https://img.icons8.com/fluency/30/000000/google-logo.png"
        alt="Google login"
      />
      <p>LOGIN USING GOOGLE</p>
    </button>
  );
};
