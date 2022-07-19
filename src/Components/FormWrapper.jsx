import React from "react";
import FormContent from "./FormContent";
import GenderSelection from "./GenderSelection";
import UserDetails from "./UserDetails";
import UserProfile from "./UserProfile";

const FormWrapper = () => {
  return (
    <>
      <div className="form-content">
        <div className="profile-content">
          <UserProfile />
          <UserDetails />
          <GenderSelection />
          <FormContent />
        </div>
      </div>
    </>
  );
};

export default FormWrapper;
