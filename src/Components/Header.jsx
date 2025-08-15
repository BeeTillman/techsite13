// src/Components/Header.jsx
import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import logo from "url:../images/tpsiteTpLogo.png";

const Header = () => {
  const [isHeaderVisible, setHeaderVisibility] = useState(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let hideTimeout;
    let finishScrollTimeout;

    const handleScroll = () => {
      if (window.innerWidth > 768) {
        const heroSection = document.getElementById("hero");
        const heroHeight = heroSection ? heroSection.offsetHeight : 0;
        const scrollY = window.scrollY;

        if (scrollY <= heroHeight) {
          setHeaderVisibility(true);
        } else {
          setHeaderVisibility(false);
          clearTimeout(hideTimeout);
          hideTimeout = setTimeout(() => setHeaderVisibility(true), 2000);
          clearTimeout(finishScrollTimeout);
          finishScrollTimeout = setTimeout(() => setHeaderVisibility(true), 300);
        }
      } else {
        setHeaderVisibility(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(hideTimeout);
      clearTimeout(finishScrollTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((open) => !open);
  };

  // Smooth scroll handler for nav links
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className={`header ${isHeaderVisible ? "visible" : "hidden"}`}>
      <img src={logo} alt="Techport 13 Logo" className="header-logo" />

      <button className="menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
        ☰
      </button>

      <nav className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <a href="#hero" className="nav-link" onClick={(e) => handleNavClick(e, "hero")}> 
          Home
        </a>
        <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, "about")}> 
          About
        </a>
        <a href="#team" className="nav-link" onClick={(e) => handleNavClick(e, "team")}> 
          Our Team
        </a>
        <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, "contact")}> 
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Header;
