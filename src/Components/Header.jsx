import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import logo from "../images/tpsiteTpLogo.png";

const Header = ({ onApplyClick }) => {
  const [isHeaderVisible, setHeaderVisibility] = useState(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let timeoutId;
    let scrollFinishedTimeoutId;

    const handleScroll = () => {
      const isOnComputer = window.innerWidth > 768;

      if (isOnComputer) {
        const homeSection = document.getElementById("home");

        if (homeSection) {
          const homeSectionHeight = homeSection.offsetHeight;
          const scrollPosition = window.scrollY;

          if (scrollPosition <= homeSectionHeight) {
            setHeaderVisibility(true);
            return;
          }
        }

        setHeaderVisibility(false);

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
          setHeaderVisibility(true);
        }, 2000);

        clearTimeout(scrollFinishedTimeoutId);

        scrollFinishedTimeoutId = setTimeout(() => {
          setHeaderVisibility(true);
        }, 300);
      } else {
        setHeaderVisibility(true);
      }
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
      <img src={logo} alt="Techport 13 Logo" className="header-logo" />
      <button className="menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
        ☰
      </button>
      <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <a href="#hero" className="nav-link">
          Home
        </a>
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#team" className="nav-link">
          Our Team
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
        <a href="#apply" className="nav-link" onClick={onApplyClick}>
          Apply
        </a>
      </div>
    </div>
  );
};

export default Header;
