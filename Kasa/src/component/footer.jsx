import React from 'react';
import "../css/footer.css";
import logo from "../images/logofooter.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
      <img src={logo} alt="logo footer" />
      </div>
      <div className="content">
        <p>&copy; 2020 Kasa. All<span className="mobile-text"> rights reserved</span></p>
      </div>
    </footer>
  );
}

export default Footer;