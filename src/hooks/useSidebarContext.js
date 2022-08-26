import React, { createContext } from "react";
import { useState } from "react";

export const SidebarContext = createContext(null);

const useSidebarContext = ({ children }) => {
  const [clickLink, setClickLink] = useState(false);
  const [profileLogin, setProfileLogin] = useState(null);

  return (
    <SidebarContext.Provider
      value={{ setClickLink, setProfileLogin, clickLink, profileLogin }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default useSidebarContext;
