import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpg';
import underline from '../../assets/nav_underline.svg';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (section) => {
    setMenu(section);
    setMobileMenuOpen(false); // Close menu on navigation
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" />

      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <li>
          <a href="#home" onClick={() => handleClick('home')}>
            <p>Home</p>
            {menu === 'home' && <img src={underline} alt="underline" />}
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => handleClick('about')}>
            <p>About Me</p>
            {menu === 'about' && <img src={underline} alt="underline" />}
          </a>
        </li>
        <li>
          <a href="#services" onClick={() => handleClick('services')}>
            <p>Services</p>
            {menu === 'services' && <img src={underline} alt="underline" />}
          </a>
        </li>

        {/* ✅ New Certifications Section */}
        <li>
          <a href="#certifications" onClick={() => handleClick('certifications')}>
            <p>Certifications</p>
            {menu === 'certifications' && <img src={underline} alt="underline" />}
          </a>
        </li>

        <li>
          <a href="#work" onClick={() => handleClick('work')}>
            <p>Projects</p>
            {menu === 'work' && <img src={underline} alt="underline" />}
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => handleClick('contact')}>
            <p>Contact</p>
            {menu === 'contact' && <img src={underline} alt="underline" />}
          </a>
        </li>
      </ul>

      <a className="nav-connect" href="#contact" onClick={() => handleClick('contact')}>
        Let's Talk
      </a>
    </nav>
  );
};

export default Navbar;
