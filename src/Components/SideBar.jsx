import React from "react";
import {
  AiFillHome,
  BsClipboardData,
  AiOutlineUser,
  IoMdHelp,
  FiSettings,
} from "../Common/icons";

const SideBar = () => {
  return (
    <>
      <div className="side-bar">
        <ul>
          <li>
            <a href="#">
              <AiFillHome className="lg-icon" /> Dashboard
            </a>
          </li>
          <li>
            <a href="#">
              <BsClipboardData className="lg-icon" /> Policies
            </a>
          </li>
          <li>
            <a href="#">
              <AiOutlineUser className="lg-icon" /> Profile
            </a>
          </li>
          <li>
            <a href="#">
              <IoMdHelp className="lg-icon" /> Help & Message
            </a>
          </li>
          <li>
            <a href="#">
              <FiSettings className="lg-icon" /> Settings
            </a>
          </li>
        </ul>
        <div className="side-color"></div>
      </div>
    </>
  );
};

export default SideBar;
