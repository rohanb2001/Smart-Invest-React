import React, { useContext, useEffect } from "react";
import Footer from "../Common/Footer";
import MainContent from "../Components/MainContent";
import { ToastContainer } from "react-toastify";
import { SidebarContext } from "../hooks/useSidebarContext";

const HomePage = () => {
  const { setProfileLogin } = useContext(SidebarContext);

  useEffect(() => {
    setProfileLogin(false);
  }, []);

  return (
    <>
      <MainContent />
      <Footer />
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default HomePage;
