import { useState } from "react";

const useFormValidation = (initialValues) => {
  const [form, setForm] = useState(initialValues);
  const [error, setError] = useState(null);

  const validating = () => {
    for (let key in form) {
      if (form[key] === "") {
        setError({
          key,
          message: `Please fill the details!`,
        });
        return false;
      }
    }

    if (form.password.length < 6) {
      setError({
        key: "password",
        message: `Password should be minimum 6 characters!`,
      });
      return false;
    }

    if (form.confirmpassword && form.confirmpassword !== form.password) {
      setError({
        key: "confirmpassword",
        message: `Password doesn't match!`,
      });
      return false;
    }

    setError(null);
    return true;
  };

  return {
    form,
    error,
    validating,
    setForm,
  };
};

export default useFormValidation;
