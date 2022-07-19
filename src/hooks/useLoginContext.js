import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const LoginContext = createContext(null);

const useLoginContext = ({ children }) => {
  const [userLoggedin, setUserLoggedIn] = useState(null);

  useEffect(() => {
    const loggedUser = sessionStorage.getItem("credentials");
    setUserLoggedIn(Boolean(loggedUser));
  }, []);

  return (
    <LoginContext.Provider value={{ setUserLoggedIn, userLoggedin }}>
      {children}
    </LoginContext.Provider>
  );
};

export default useLoginContext;
