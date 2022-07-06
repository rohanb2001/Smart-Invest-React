import React from "react";

const FormInput = ({ labelContent, type, placeholder, name }) => {
  return (
    <>
      <label className="form-label">{labelContent}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="form-input"
      />
    </>
  );
};

export default FormInput;
