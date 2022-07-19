import React from "react";
import FormWrapper from "../Components/FormWrapper";
import SideBar from "../Components/SideBar";

const ProfilePage = () => {
  return (
    <>
      <section className="main-profile-content">
        <SideBar />
        <FormWrapper />
      </section>
    </>
  );
};

export default ProfilePage;
