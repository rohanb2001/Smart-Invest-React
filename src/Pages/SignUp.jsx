import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../Components/Form/Form";
import FormInput from "../Components/Form/FormInput";
import useAuth from "../hooks/useAuth";

const SignUp = () => {
  const { setDataToStorage } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    setDataToStorage(values);
    navigate("/");
    console.log(values);
  };

  return (
    <>
      <section className="main-content">
        <div className="content">
          <h1>Create a free account</h1>
        </div>
        <div className="form-content">
          <Form
            initialValues={{
              username: "",
              email: "",
              password: "",
              confirmpassword: "",
              number: "",
            }}
            handleSubmit={handleSubmit}
          >
            <FormInput
              type="text"
              placeholder={"Enter your name..."}
              name="username"
              labelContent={"Username"}
            />
            <FormInput
              type="email"
              placeholder={"your@company.com"}
              name="email"
              labelContent={"Email address"}
            />
            <FormInput
              type="password"
              placeholder={"Enter password..."}
              name="password"
              labelContent={"Password"}
            />
            <FormInput
              type="password"
              placeholder={"Enter password..."}
              name="Confirm password"
              labelContent={"Confirm Password"}
            />
            <FormInput
              type="text"
              placeholder={"Enter your number..."}
              name="number"
              labelContent={"Mobile Number"}
            />
          </Form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
