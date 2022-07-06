import React from "react";
import { FaMedkit } from "./icons";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <FaMedkit className="icon" />
          <h2>
            Build Your Developer Portfolio and climb the engineering career
            ladder.
          </h2>
        </div>
        <div className="list">
          <div className="description-list">
            <ul>
              <li>Search</li>
              <li>Articles</li>
              <li>Talks</li>
              <li>Prodcast</li>
              <li>Tools</li>
            </ul>
          </div>
          <div className="price-list">
            <ul>
              <li>Pricing</li>
              <li>Store</li>
              <li>banerjeerohan279@gmail.com</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
