import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { SidebarContext } from "../hooks/useSidebarContext";
import { FaMedkit, AiFillBell, FiLogOut } from "./icons";

const Navbar = () => {
  const [direct, setDirect] = useState(true);
  const { userData } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const { profileLogin } = useContext(SidebarContext);

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
          {profileLogin === true ? (
            <div className="logout-notification">
              <AiFillBell className="lg-icon" />
              <FiLogOut className="lg-icon" />
            </div>
          ) : (
            <div className="register-signin">
              <a> Build Your Dev Portfolio</a>
              {userData ? (
                ""
              ) : (
                <a onClick={handleChange}> {direct ? "Sign up" : "Sign in"}</a>
              )}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
