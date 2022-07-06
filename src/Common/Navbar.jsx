import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMedkit } from "./icons";

const Navbar = () => {
  const [direct, setDirect] = useState(true);
  const navigate = useNavigate();

  const handleChange = () => {
    setDirect(!direct);
    if (direct === true) {
      navigate("/signup");
    } else {
      navigate("/");
    }
  };

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
            <a onClick={handleChange}> {direct ? "Sign up" : "Sign in"}</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
