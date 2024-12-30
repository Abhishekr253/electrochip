import React, { useState } from "react";
import "./Navbar.css";
import img1 from "../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={img1} alt="Logo" className="ms-5"/>
        Electrochip
      </div>
      <button className={`navbar-toggler ${isOpen ? "open" : ""}`} onClick={toggleNavbar}>
        ☰
      </button>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a className="nav-link active" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link" href="/">
            About
          </a>
        </li>
        <li>
          <a className="nav-link" href="/">
            Services
          </a>
        </li>
        <li>
          <a className="nav-link" href="/">
            Blog
          </a>
        </li>
        <li>
          <a className="nav-link" href="/">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
