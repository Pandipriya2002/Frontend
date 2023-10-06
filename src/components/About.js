import React from "react";

import logo from '../images/rentlogo.png';

import "./About.css";

function About() {
  return (
    <div>
      <div>
        {" "}
        <img src={logo} className="l" alt="rentlogo" />{" "}
      </div>

      <center>
        <h1 className="rent">RENTAL RIDE</h1>

        <p class="para">
          {" "}
          Now a days most of the people needs temporary things like camera
          ,Gimbal,etc..Our web application is fulfills the need of people.
          <br></br>
          First customer login/signup to our website .After completing customer
          page registration ,first step admin will check customer details and
          customer proof.<br></br>
          Then customer go to product page and then customer can view products,
          product description then rent amount, deposit amount.If customer want
          the product ,they will order the product.<br></br>
          We will give the product to rent and also we collect some percent of
          deposit amount. <br></br>
          If the customer has handed over the product without any damage ,we
          will refund the deposit amount.{" "}
        </p>
      </center>
    </div>
  );
}

export default About;
