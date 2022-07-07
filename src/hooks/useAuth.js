import { useContext, useEffect } from "react";
import { AuthContext } from "./useAuthContext";

const useAuth = () => {
  const { setUserData, userData } = useContext(AuthContext);

  useEffect(() => {
    setUserData(JSON.parse(sessionStorage.getItem("credentials")));
  }, []);

  const clearStorage = () => {
    sessionStorage.removeItem("credentials");
    setUserData(null);
  };

  const setDataToStorage = (values) => {
    sessionStorage.setItem("credentials", JSON.stringify(values));
    setUserData(values);
  };

  return {
    userData,
    setDataToStorage,
    clearStorage,
  };
};

export default useAuth;
