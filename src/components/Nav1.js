import react from "react";
import navcss from "../components/Nav1.css";
import logo from "../images/logo1.png";

const Nav1 = () => {
  return (
    <nav className="navbar-1">
      <img src={logo} className="logocls-1" alt="logo" />

      <ul className="nav-lists-1">
        <li>
          {/* <a href="/" className="search"> */}
          <input type="text" placeholder="Search your items"></input>
          {/* </a> */}
        </li>

        <li>
          <a href="/" className="home-1">
            {" "}
            HOME{" "}
          </a>
        </li>

        <li>
          <a href="/Seller" className="seller-1">
            {" "}
            ADD PRODUCTS{" "}
          </a>
        </li>

        <li>
          <a href="/Login" className="login-1">
            {" "}
            LOGIN{" "}
          </a>
        </li>
        <li>
          <a href="/Profile" className="profile-1">
            {" "}
            PROFILE{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav1;
