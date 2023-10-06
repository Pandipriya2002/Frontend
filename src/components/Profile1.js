import React, { useState } from "react";

import "./Profile1.css";

// import AccountCircleIcon from '@mui/icons-material/AccountCircle';¿

function Profile1() {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("hi")

    const answer = window.confirm("Do you want to save changes?");

    if (answer) {
      setText("Address Saved Suceessfully");

      // Save it!

      console.log("Thing was saved to the database.");
    } else {
      // Do nothing!

      console.log("Thing was not saved to the database.");
    }
  };

  return (
    <div className="main-pro1">
      <div className="Outer">
        <div className="order">
          <h>HELLO,</h>

          <h1>Pandipriya</h1>
        </div>

        <div className="Address">
          <a href="/MY ORDERS" className="myorder">
            {" "}
            MY ORDERS
          </a>

          <h1>ACCOUNT SETTING </h1>

          <p>Profile Information</p>

          <a href="/ManageAddress" className="mad">
            {" "}
            Manage Address
          </a>

          <p>PAN Information</p>
          <hr></hr>

          <a href="/PAYMENTS" className="mad">
            {" "}
            PAYMENTS
          </a>

          <p>Saved UPI</p>

          <p>Saved Cards</p>
          <hr></hr>

          <h1>MY STUFF</h1>

          <p>Reward Points</p>

          <p>Ratings</p>

          <a href="/LOGOUT" className="mad">
            {" "}
            LOGOUT
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="profile1">
          <h1 className="ma">Manage Addresses</h1>

          {/*

   <title> Add Input Box</title>

   <h1> Add Input Box</h1>

   <div class="input-container">

    <input type="text" class="input-field"></input> */}

          <div className="chennai">
            <h2 className="dum">Address: </h2>

            <h6 className="dumadd">
              No 4/587, Senthamil Nagar, Velachery Medavakkam Main Road,{" "}
              <br></br>
              Velachery - Tambaram Main Rd, opp. to Jeyachandran Textile,{" "}
              <br></br>
              Chennai, Tamil Nadu 600100.
            </h6>
          </div>

          <button className="save">SAVE</button>

          {text}

          <></>
        </div>
      </form>
    </div>
  );
}

export default Profile1;
