import React, { useContext } from "react";
import Footer from "../Common/Footer";
import MainContent from "../Components/MainContent";
import { AuthContext } from "../hooks/useAuthContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  const { userData } = useContext(AuthContext);
  {
    userData && toast.success("Created account successfully");
  }

  return (
    <>
      <MainContent />
      <Footer />
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default HomePage;
