import React from "react";
import Form from "./Form/Form";
import FormInput from "./Form/FormInput";
import MainImage from "../assets/image/MainImage.svg";

const MainContent = () => {
  return (
    <>
      <section className="main-content">
        <div className="content">
          <img src={MainImage} />
          <h1>Sign in or create a free account</h1>
        </div>
        <div className="form-content">
          <Form>
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
          </Form>
        </div>
      </section>
    </>
  );
};

export default MainContent;
