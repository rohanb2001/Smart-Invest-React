import React, { createContext, useState } from "react";

export const FormContext = createContext(null);

const Form = ({ children, initialValues }) => {
  const [formValue, setFormValue] = useState(initialValues);

  return (
    <>
      <form className="form">
        <FormContext.Provider value={{ formValue: formValue }}>
          {children}
        </FormContext.Provider>
        <button className="submit-btn">Email a login link</button>
      </form>
    </>
  );
};

export default Form;
