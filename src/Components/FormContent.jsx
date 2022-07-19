import React from "react";

const FormContent = () => {
  return (
    <>
      <div className="form">
        <form>
          <div className="fields">
            <div className="unique-field">
              <label>Full Name</label>
              <input type="text" defaultValue="Ayan Banerjee" />
            </div>
          </div>
          <div className="fields">
            <div className="unique-field">
              <label>Mobile Number</label>
              <p>8777217400</p>
            </div>
          </div>
          <div className="fields">
            <div className="unique-field">
              <label>Email ID</label>
              <input type="text" defaultValue="ayanbanerjee102@gmail.com" />
            </div>
          </div>
          <div className="fields">
            <div className="unique-field">
              <label>Date of Birth (DD/MM/YYYY)</label>
              <input type="date" defaultValue="08/12/1997" />
            </div>
          </div>
          <div className="fields">
            <div className="unique-field">
              <label>Annual Income</label>
              <select name="gender" defaultValue={"none"}>
                <option value="none">1-5 lakhs</option>
                <option value="male">5-10 lakhs</option>
                <option value="female">10-15lakhs</option>
                <option value="other">15-20 lakhs</option>
                <option value="other">more than 20 lakhs</option>
              </select>
            </div>
          </div>
          <div className="fields">
            <div className="unique-field">
              <label>Martial Status</label>
              <select name="gender" defaultValue={"none"}>
                <option value="none">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">other</option>
              </select>
            </div>
          </div>
          <div className="fields">
            <div className="unique-field">
              <label>City</label>
              <input type="text" defaultValue="Kolkata,West Bengal" />
            </div>
          </div>
        </form>
        <button className="btn">Save</button>
      </div>
    </>
  );
};

export default FormContent;
