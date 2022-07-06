import React from "react";
import { FaMedkit } from "./icons";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav-content">
          <div className="heading">
            <FaMedkit className="icon" />
            <h2>SmartInvest</h2>
          </div>
          <div className="register-signin">
            <a> Build Your Dev Portfolio</a>
            <a> Sign up</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
