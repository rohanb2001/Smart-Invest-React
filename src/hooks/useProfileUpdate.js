import { useContext } from "react";
import { useState } from "react";
import { userDataFields } from "../utils/userData";
import { AuthContext } from "./useAuthContext";

const useProfileUpdate = () => {
  const { setUserData, userData } = useContext(AuthContext);
  // const [profileForm, setProfileForm] = useState({ ...userDataFields });

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("credentials", JSON.stringify(userData));
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return {
    handleSubmit,
    handleChange,
  };
};

export default useProfileUpdate;
