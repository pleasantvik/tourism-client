import React from "react";
import { Link } from "react-router-dom";

export const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src="/img/logo-green.png" alt="Natours logo" />
      </div>
      <ul className="footer__nav">
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/download">Download apps</Link>
        </li>
        <li>
          <Link to="/guide">Become a guide</Link>
        </li>
        <li>
          <Link to="/career">Careers</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <p className="footer__copyright">
        © by Adedayo Victor. React version of Jonas natours project
      </p>
    </div>
  );
};
