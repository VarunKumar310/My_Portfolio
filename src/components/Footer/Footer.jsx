import React from 'react';
import './Footer.css';
import { FaArrowUp } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>Varun Kumar<span className="dot">.</span></h2>
        <p>Full-Stack Developer | DSA Enthusiast | Cloud & DevOps Learner</p>
      </div>

      <div className="footer-center">
        <a href="#">Terms & Services</a>
        <a href="#">Privacy Policy</a>
        <a href="#contact">Connect with Me</a>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© 2025 Varun Kumar. All Rights Reserved.</p>
        <AnchorLink href="#home" className="footer-up"><FaArrowUp /></AnchorLink>
      </div>
    </footer>
  );
};

export default Footer;
