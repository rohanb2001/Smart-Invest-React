import React, { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const FormContext = createContext(null);

const Form = ({ children, initialValues, handleSubmit }) => {
  const [formValue, setFormValue] = useState(initialValues);
  const location = useLocation();

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit({ ...formValue });
          setFormValue(initialValues);
        }}
      >
        <FormContext.Provider value={{ formValue, handleChange }}>
          {children}
        </FormContext.Provider>
        <button className="submit-btn" type="submit">
          {location.pathname === "/signup"
            ? "Create a account"
            : "Email a login link"}
        </button>
      </form>
    </>
  );
};

export default Form;
