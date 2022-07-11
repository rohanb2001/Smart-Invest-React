import React, { useContext } from "react";
import { AiFillInfoCircle } from "../../Common/icons";
import { FormContext } from "./Form";

let errorMessageStyles = {
  position: "absolute",
  right: "0",
  bottom: "-1.6rem",
  display: "flex",
  alignItems: "center",
  letterSpacing: "1.1px",
};

const FormInput = ({ labelContent, type, placeholder, name }) => {
  const { form, error, handleChange } = useContext(FormContext);

  const renderError = () => {
    return (
      <small style={errorMessageStyles}>
        <AiFillInfoCircle
          style={{ color: "tomato", marginRight: "0.2rem", fontSize: "1rem" }}
        />{" "}
        {"  "}
        {error.message}
      </small>
    );
  };

  return (
    <>
      <label className="form-label">{labelContent}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="form-input"
        value={form[name] || ""}
        onChange={handleChange}
      />
      {error && error.key === name && renderError()}
    </>
  );
};

export default FormInput;
