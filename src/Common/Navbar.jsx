import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaMedkit } from "./icons";

const Navbar = () => {
  const [direct, setDirect] = useState(true);
  const { isLoggedIn, userData } = useAuth();
  const navigate = useNavigate();

  console.log(isLoggedIn, userData);

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
            {userData ? (
              ""
            ) : (
              <a onClick={handleChange}> {direct ? "Sign up" : "Sign in"}</a>
            )}
            {/* <a onClick={handleChange}>
              {isLoggedIn ? "" : direct ? "Sign up" : "Sign in"}
            </a> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
