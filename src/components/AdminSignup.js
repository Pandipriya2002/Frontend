
import React, { useState } from "react";

import "./AdminSignup.css";

import axios from "axios";

const AdminSignup = () => {
  
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");


  const [submitted, setSubmitted] = useState(false);

  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);

    setSubmitted(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);

    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);

    setSubmitted(false);
  };

  

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/AddAdmin", {
        admin_mail: email,

        admin_password: password,

        admin_name: name,

      })

      .then((Response) => {
        console.log(Response.data);

        alert("Successfully Signup");
      })

      .catch((err) => {
        console.log(err);

        console.log(err.Response);
      });

    if (
      name === "" ||
      email === "" ||
      password === "" 
     
    ) {
      setError(true);
    } else {
      setSubmitted(true);

      setError(false);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text"> Admin Sign Up </div>

        <div className="underline"></div>
      </div>

      <div className="inputs" align="center">
        <form>
          <label className="label">Name</label>

          <input
            onChange={handleName}
            className="input"
            value={name}
            type="text"
          />

          <label className="label">Email</label>

          <input
            onChange={handleEmail}
            className="input"
            value={email}
            type="email"
          />

          <label className="label">Password</label>

          <input
            onChange={handlePassword}
            className="input"
            value={password}
            type="password"
          />

          <button onClick={handleSubmit} className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSignup;


       
