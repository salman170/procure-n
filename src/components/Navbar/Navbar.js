import React from "react";
import "./Navbar.css"
import logo from "./logo.png"
import { FaSignInAlt } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className="Navbar " >
      <div className="rightSideContent p-6 ">
        <div><h2>Home</h2></div>
        <div><h2>About</h2></div>
      </div>
      <div className="Navbar-image">
        <img
          src={logo}
          alt="logo"
          srcset=""
        />
      </div>
      <div className="leftSideContent p-6">
      <div><h2>Services</h2></div>
      <div><h2>Contact Us</h2></div>
      <div>

      <FaSignInAlt  size={35}/>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
