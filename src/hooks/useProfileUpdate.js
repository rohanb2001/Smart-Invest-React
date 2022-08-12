import { useContext } from "react";
import { AuthContext } from "./useAuthContext";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useProfileUpdate = () => {
  const { setUserData, userData } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("credentials", JSON.stringify(userData));
    toast.success("Saved Successful");
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
