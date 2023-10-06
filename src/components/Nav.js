import react from "react";
import navcss from "../components/Nav.css";
import logo from "../images/logo1.png";

function Nav() {
  return (
    <nav className="navbar">
      <img src={logo} className="logocls" alt="logo" />
      <h1 id="head">RENTAL RIDE</h1>
      <ul className="nav-lists">
        <li>
          <a href="/" className="home">
            HOME
          </a>
        </li>
        <li>
          <a href="/About" className="About">
            ABOUT US
          </a>
        </li>
        <li>
          <a href="/Login" className="login">
            LOGIN
          </a>
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn">SIGNUP</button>
            <div class="dropdown-content">
              <a href="/signup">Customer </a>
              <a href="/dmsignup">Deliver</a>
              <a href="/adminsignup">Admin</a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
