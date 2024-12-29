import React from "react";
import "./Navbar.css";
import img1 from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img className="imgg" src={img1} alt="Logo" style={{ height: "30px", marginRight: "10px" }} />
        <p className="text1">Electrochip</p>
      </div>
      <ul className="nav-links">
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
