import React, { useContext } from "react";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import FormWrapper from "../Components/FormWrapper";
import SideBar from "../Components/SideBar";
import { SidebarContext } from "../hooks/useSidebarContext";

const ProfilePage = () => {
  // const { clickLink } = useContext(SidebarContext);

  const { clickLink, profileLogin, setProfileLogin } =
    useContext(SidebarContext);
  const location = useLocation();

  useEffect(() => {
    setProfileLogin(true);
  }, []);

  return (
    <>
      <section className="main-profile-content">
        <SideBar />
        {clickLink ? <Outlet /> : <FormWrapper />}
      </section>
    </>
  );
};

export default ProfilePage;
