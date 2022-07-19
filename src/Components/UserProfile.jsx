import React from "react";
import MaleAvatar from "../assets/image/male-avatar.svg";

const UserProfile = () => {
  return (
    <>
      <div className="user-profile">
        <img src={MaleAvatar} />
        <div className="user">
          <h3>Ayan Banerjee</h3>
          <p>Profile Completion: 100%</p>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
