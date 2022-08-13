import React, { createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import useFormValidation from "../../hooks/useFormValidation";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const FormContext = createContext({
  form: {},
  error: null,
});

const Form = ({ children, initialValues, handleSubmit }) => {
  // const [formValue, setFormValue] = useState(initialValues);
  const { form, error, validating, setForm } = useFormValidation(initialValues);
  const location = useLocation();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          if (validating()) {
            handleSubmit({ ...form });
            toast.success("Account created successfully", { theme: "colored" });
            setForm({});
          }
        }}
      >
        <FormContext.Provider value={{ form, error, handleChange }}>
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
