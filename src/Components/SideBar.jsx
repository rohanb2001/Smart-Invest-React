import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AiFillHome,
  BsClipboardData,
  AiOutlineUser,
  IoMdHelp,
  FiSettings,
} from "../Common/icons";
import { SidebarContext } from "../hooks/useSidebarContext";

const SideBar = () => {
  const { setClickLink } = useContext(SidebarContext);

  return (
    <>
      <div className="side-bar">
        <ul onClick={() => setClickLink(true)}>
          <li>
            <Link to="dashboard">
              <AiFillHome className="lg-icon" /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="policies">
              <BsClipboardData className="lg-icon" /> Policies
            </Link>
          </li>
          <li>
            <Link to="profile">
              <AiOutlineUser className="lg-icon" /> Profile
            </Link>
          </li>
          <li>
            <Link to="help">
              <IoMdHelp className="lg-icon" /> Help & Message
            </Link>
          </li>
          <li>
            <Link to="settings">
              <FiSettings className="lg-icon" /> Settings
            </Link>
          </li>
        </ul>
        <div className="side-color"></div>
      </div>
    </>
  );
};

export default SideBar;
