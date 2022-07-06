import React from "react";
import Form from "../Components/Form/Form";
import FormInput from "../Components/Form/FormInput";

const SignUp = () => {
  return (
    <>
      <section className="main-content">
        <div className="content">
          <h1>Create a free account</h1>
        </div>
        <div className="form-content">
          <Form>
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
              type="number"
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
