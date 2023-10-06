import React from "react";

import "../components/Payment.css";

import image from "../images/payment.png";

function Payment() {
  return (
    <div className="payment-success">
      <img src={image} />

      <h2>Order Successful</h2>

      <p>Thank you for your purchase!</p>

      <button type="submit">OK</button>
    </div>
  );
}

export default Payment;
