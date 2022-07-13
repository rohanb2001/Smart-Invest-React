import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { LoginContext } from "./useLoginContext";

const useLoginValidation = () => {
  const { setProfile, profile } = useContext(LoginContext);
  const { userData } = useAuth();
  const navigate = useNavigate();

  const loginValidation = (values) => {
    if (
      userData.email === values.email &&
      userData.password === values.password
    ) {
      navigate("/profile");
      setProfile(true);
    } else {
      setProfile(false);
    }
  };

  return {
    currentUser: profile ? true : false,
    profile,
    setProfile,
    loginValidation,
  };
};

export default useLoginValidation;
