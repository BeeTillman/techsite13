import React from "react";
import "../Header.css"; // Assuming you have a CSS file for styling

const Header = () => {
  return (
    <div className="header">
      <a href="#home" className="nav-link">// home</a>
      <a href="#portfolio" className="nav-link">// experience</a>
      <a href="#about" className="nav-link">// expertise</a>
      <a href="#footer" className="nav-link">// contact</a>
    </div>
  );
};

export default Header;
