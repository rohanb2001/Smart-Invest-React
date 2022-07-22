import React from "react";
import FormContent from "./FormContent";
import GenderSelection from "./GenderSelection";
import UserProfile from "./UserProfile";

const FormWrapper = () => {
  return (
    <>
      <div className="form-content">
        <div className="profile-content">
          <UserProfile />
          <GenderSelection />
          <FormContent />
        </div>
      </div>
    </>
  );
};

export default FormWrapper;
