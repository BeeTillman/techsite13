import React, { useState, useEffect } from "react";
import "../Header.css";

const Header = () => {
  const [isHeaderVisible, setHeaderVisibility] = useState(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let timeoutId;
    let scrollFinishedTimeoutId;

    const handleScroll = () => {
      setHeaderVisibility(false);
    
      clearTimeout(timeoutId);
    
      timeoutId = setTimeout(() => {
        setHeaderVisibility(true);
      }, 2000);
    
      // After scrolling finishes, set the header to visible immediately
      clearTimeout(scrollFinishedTimeoutId);
    
      scrollFinishedTimeoutId = setTimeout(() => {
        setHeaderVisibility(true);
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`header ${isHeaderVisible ? "visible" : "hidden"}`}>
      <div className="menu-toggle" onClick={toggleMobileMenu}>
        ☰ {/* Hamburger menu icon */}
      </div>
      <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <a href="#home" className="nav-link">
          Home
        </a>
        <a href="#portfolio" className="nav-link">
          Experience
        </a>
        <a href="#skills" className="nav-link">
          Skills
        </a>
        <a href="#about" className="nav-link">
          Expertise
        </a>
        <a href="#footer" className="nav-link">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Header;
