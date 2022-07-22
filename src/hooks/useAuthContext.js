import React, { createContext, useState } from "react";
import { userDataFields } from "../utils/userData";

export const AuthContext = createContext(null);

const useAuthContext = ({ children }) => {
  const [userData, setUserData] = useState({ ...userDataFields });

  return (
    <AuthContext.Provider value={{ setUserData, userData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default useAuthContext;
