import React from "react";
import "../components/Resetpassword.css";

function Reset() {
  return (
    <div className="container-img">
      <div className="sec">
        <h1>Reset Password</h1>
        <p>Change your password to login your account</p>
        <input type="text" placeholder="New Password" className="new-pass" />
        <input type="text" placeholder="Confirm Password" className="con-pass" />
        <div className="but-reset">
          <a href="/Login">
            {" "}
            <button>SUBMIT</button>
          </a>
        </div>

        <div className="backtologin">
          <a href="/Login">
            {" "}
            <p> Back to Login </p>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Reset;
