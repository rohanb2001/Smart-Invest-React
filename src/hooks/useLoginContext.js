import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const LoginContext = createContext(null);

const useLoginContext = ({ children }) => {
  const [profile, setProfile] = useState(true);

  return (
    <LoginContext.Provider value={{ setProfile, profile }}>
      {children}
    </LoginContext.Provider>
  );
};

export default useLoginContext;
