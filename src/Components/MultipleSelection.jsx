import React from "react";
import { useContext } from "react";
import { useState } from "react";
import * as Icons from "../Common/icons";
import { AuthContext } from "../hooks/useAuthContext";

const MultipleSelection = ({ types }) => {
  const { userData, setUserData } = useContext(AuthContext);
  const [selected, setSelected] = useState(() => userData.gender);
  console.log(userData.gender);

  const handleClick = (idx) => {
    setSelected((prevIdx) => idx);
    console.log(selected, Math.random());
    setUserData({ ...userData, gender: selected });
  };

  return (
    <>
      <div className="gender-selection">
        {types.map((type, idx) => (
          <div
            className={`gender ${selected === idx && "gender-active"}`}
            key={idx}
            onClick={() => handleClick(idx)}
          >
            <div className="gender-details">
              {Icons[`Fa${type}`]()} {type}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MultipleSelection;
