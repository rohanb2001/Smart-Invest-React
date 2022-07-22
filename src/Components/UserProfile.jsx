import React, { useContext } from "react";
import MaleAvatar from "../assets/image/male-avatar.svg";
import { AuthContext } from "../hooks/useAuthContext";
import useProfileUpdate from "../hooks/useProfileUpdate";

const UserProfile = () => {
  const { userData } = useContext(AuthContext);
  const { username } = userData;

  return (
    <>
      <div className="user-profile">
        <img src={MaleAvatar} />
        <div className="user">
          <h3>{username}</h3>
          <p>Profile Completion: 100%</p>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
