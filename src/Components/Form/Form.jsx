import React, { createContext, useState } from "react";

export const FormContext = createContext(null);

const Form = ({ children, initialValues, handleSubmit }) => {
  const [formValue, setFormValue] = useState(initialValues);

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form
        className="form"
        onSubmit={(e) => {
          handleSubmit(e, { ...formValue });
          setFormValue(initialValues);
        }}
      >
        <FormContext.Provider value={{ formValue: formValue, handleChange }}>
          {children}
        </FormContext.Provider>
        <button className="submit-btn" type="submit">
          Email a login link
        </button>
      </form>
    </>
  );
};

export default Form;
