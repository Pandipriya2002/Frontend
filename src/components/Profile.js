import React from "react";

import "./Profile.css";

// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Profile() {
  return (
    <div className="main-pro">
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

          <a href="/PAYMENTS" className="pay">
            {" "}
            PAYMENTS
          </a>

          <p>Saved UPI</p>

          <p>Saved Cards</p>
          <hr></hr>

          <h1>MY STUFF</h1>

          <p>Reward Points</p>

          <p>Ratings</p>

          <a href="/LOGOUT" className="log">
            {" "}
            LOGOUT
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
