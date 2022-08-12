import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../hooks/useAuthContext";
import useProfileUpdate from "../hooks/useProfileUpdate";

const FormContent = () => {
  const { userData } = useContext(AuthContext);
  const { username, number, email, dob, martialStatus, annualIncome } =
    userData;

  const { profileForm, handleSubmit, handleChange } = useProfileUpdate();

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="fields">
            <div className="unique-field">
              <label>Full Name</label>
              <input
                type="text"
                name="username"
                defaultValue={username}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="fields">
            <div className="unique-field">
              <label>Mobile Number</label>
              <p>{`${number}`}</p>
            </div>
          </div>
          <div className="fields">
            <div className="unique-field">
              <label>Email ID</label>
              <input
                type="text"
                name="email"
                defaultValue={email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="fields">
            <div className="unique-field">
              <label>Date of Birth (DD/MM/YYYY)</label>
              <input
                type="date"
                defaultValue={dob}
                name="dob"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="fields">
            <div className="unique-field">
              <label>Annual Income</label>
              <select
                name="annualIncome"
                value={annualIncome || ""}
                onChange={handleChange}
              >
                <option value="none">1-5 lakhs</option>
                <option value="5-10 lakhs">5-10 lakhs</option>
                <option value="10-15lakhs">10-15lakhs</option>
                <option value="15-20 lakhs">15-20 lakhs</option>
                <option value="more than 20 lakhs">more than 20 lakhs</option>
              </select>
            </div>
          </div>
          <div className="fields">
            <div className="unique-field">
              <label>Martial Status</label>
              <select
                name="martialStatus"
                onChange={handleChange}
                value={martialStatus || ""}
              >
                <option value="select">Select</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widow">Widow(er)</option>
              </select>
            </div>
          </div>
          <div className="fields">
            <div className="unique-field">
              <label>City</label>
              <input
                type="text"
                name="City"
                defaultValue="Kolkata,West Bengal"
                onChange={handleChange}
              />
            </div>
          </div>
          <br />
          <button className="btn" type="submit">
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default FormContent;
