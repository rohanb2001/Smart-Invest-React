import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const useLoginValidation = () => {
  const { userData } = useAuth();
  const navigate = useNavigate();

  const loginValidation = (values) => {
    if (
      userData.email === values.email &&
      userData.password === values.password
    ) {
      navigate("/profile");
    }
  };

  return {
    loginValidation,
  };
};

export default useLoginValidation;
