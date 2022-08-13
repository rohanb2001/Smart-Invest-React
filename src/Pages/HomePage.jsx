import React from "react";
import Footer from "../Common/Footer";
import MainContent from "../Components/MainContent";
import { ToastContainer } from "react-toastify";

const HomePage = () => {
  return (
    <>
      <MainContent />
      <Footer />
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default HomePage;
