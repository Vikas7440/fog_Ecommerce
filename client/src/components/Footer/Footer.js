import React from "react";
import { NavLink } from "react-router-dom";
import { FooterStyle } from "./style";

const Footer = () => {
  return (
    <FooterStyle>
      <footer className="footer">
        <div className="footer__body">
          <div className="footer__body-logo">
            <h1>Funiro.</h1>
            <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
          </div>
          <div className="footer__body-info">
            <ul className="footer__body-info-content">
              <h1 className="footer__body-info-content-link-h1">Links</h1>
              <li className="footer__body-info-content-link">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="footer__body-info-content-link">
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li className="footer__body-info-content-link">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="footer__body-info-content-link">
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
            <ul className="footer__body-info-content">
              <h1 className="footer__body-info-content-link-h1">Help</h1>
              <li className="footer__body-info-content-link">
                <NavLink to="#">Payment Options</NavLink>
              </li>
              <li className="footer__body-info-content-link">
                <NavLink to="#">Returns</NavLink>
              </li>
              <li className="footer__body-info-content-link">
                <NavLink to="#">Privacy Policies</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__body-form">
            <p className="footer__body-link">Newsletter</p>
            <form className="footer__body-form-detail">
              <input
                className="footer__body-form-detail-input"
                placeholder="Enter Your Email Address"
                type="email"
              />
              <button type="submit" className="footer__body-form-detail-click">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {/* <hr className="footer__body-line" /> */}
        <div className="footer__body-rights">
          <h1 className="footer__body-rights-data">
            2024 Funiro. All rights reserved.feqak
          </h1>
        </div>
      </footer>
    </FooterStyle>
  );
};

export default Footer;
