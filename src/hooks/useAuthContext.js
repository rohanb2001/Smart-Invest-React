import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

const useAuthContext = ({ children }) => {
  const [userData, setUserData] = useState(null);

  return (
    <AuthContext.Provider value={{ setUserData, userData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default useAuthContext;
