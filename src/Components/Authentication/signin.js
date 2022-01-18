import React, { useState } from "react";
import SignupForm from "./signup-form";
import LoginForm from "./login-form";
import "./signin.scss";

const SignIn = () => {
  const [signup, setSignup] = useState("selected");
  const [signin, setSignin] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const activateSignup = () => {
    setSignup("selected");
    setSignin(null);
  };

  const activateSignin = () => {
    setSignup(null);
    setSignin("selected");
  };
  return (
    <div className="padding-small center-margin">
      {errorMessage && (
        <div className="warning-bar center-margin">
          <p>{errorMessage}</p>
        </div>
      )}
      <div className=" authentication">
        <div>
          <button onClick={activateSignup} className={signup}>
            Sign Up
          </button>
          <button onClick={activateSignin} className={signin}>
            Sign In
          </button>
        </div>
        {signup === "selected" ? (
          <SignupForm error={setErrorMessage} />
        ) : (
          <LoginForm />
        )}
      </div>
    </div>
  );
};

export default SignIn;
