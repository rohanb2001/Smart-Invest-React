import React from "react";
import { FaMale, FaFemale } from "../Common/icons";

const GenderSelection = () => {
  return (
    <>
      <div className="gender-selection">
        <div className="gender">
          <div className="gender-details">
            <FaMale /> Male
          </div>
        </div>
        <div className="gender">
          <div className="gender-details">
            <FaFemale /> Female
          </div>
        </div>
      </div>
    </>
  );
};

export default GenderSelection;
