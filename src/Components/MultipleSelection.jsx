import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import * as Icons from "../Common/icons";
import { AuthContext } from "../hooks/useAuthContext";

const MultipleSelection = ({ types }) => {
  const { userData, setUserData } = useContext(AuthContext);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (userData && userData.gender) {
      setSelected(userData.gender);
    }
  }, [userData]);

  const handleClick = (idx) => {
    setSelected((previous) => idx);
    setUserData((userData) => {
      return { ...userData, gender: idx };
    });
  };

  return (
    <>
      <div className="gender-selection">
        {types.map((type, idx) => (
          <div
            className={`gender ${selected === idx + 1 && "gender-active"}`}
            key={idx}
            onClick={() => handleClick(idx + 1)}
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
