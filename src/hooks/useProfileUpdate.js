import { useContext } from "react";
import { AuthContext } from "./useAuthContext";

import useToast from "./useToast";

const useProfileUpdate = () => {
  const { setUserData, userData } = useContext(AuthContext);
  const { showToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("credentials", JSON.stringify(userData));
    showToast("update");
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
