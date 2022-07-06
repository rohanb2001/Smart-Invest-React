import React, { useContext } from "react";
import { FormContext } from "./Form";

const FormInput = ({ labelContent, type, placeholder, name }) => {
  const { formValue, handleChange } = useContext(FormContext);

  return (
    <>
      <label className="form-label">{labelContent}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="form-input"
        value={formValue[name] || ""}
        onChange={handleChange}
      />
    </>
  );
};

export default FormInput;
