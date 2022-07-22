import React from "react";
import { useContext } from "react";
import { FaMale, FaFemale } from "../Common/icons";
import { AuthContext } from "../hooks/useAuthContext";
import MultipleSelection from "./MultipleSelection";

const GenderSelection = () => {
  const { userData } = useContext(AuthContext);

  return <MultipleSelection types={["Male", "Female"]} />;
};

export default GenderSelection;
