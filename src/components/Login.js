import React, { useState } from "react";

import "./Login.css";


// import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",

        headers: {
          "content-Type": "application/json",
        },

        body: JSON.stringify({
          customer_mail: email,
          customer_password: password,
        }),
      });

      const data = await response.json();
      

      console.log(data);
    } catch (error) {
      console.error("Error", error); // Handle login errors
    }
  };

  return (
    <div className="container1">
      <h2 className="text1">Login</h2>

      <div className="inputs1" align="center">
        <form onSubmit={handleLogin}>
          <div className="lable1">
            <label>Email</label>

            <input
              type="email"
              className="input1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="lable1">
            <label>Password</label>

            <input
              type="password"
              className="input1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            {/* <a href="/Productdescription" >
            <button type="submit" className="btn1">
             Login 
            </button>
            </a> */}
          </div>
        </form>
        <a href="/Productdescription" >
            <button type="submit" className="btn1">
             Login 
            </button>
            </a>
      </div>

      {error && <p>{error}</p>}
    </div>
  );
}

export default LoginPage;
