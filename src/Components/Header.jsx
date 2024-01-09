import React, { useState, useEffect } from "react";
import "../Header.css";

const Header = () => {
  const [isHeaderVisible, setHeaderVisibility] = useState(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let timeoutId;
    let scrollFinishedTimeoutId;

    const handleScroll = () => {
      // Check if the user is on a computer
      const isOnComputer = window.innerWidth > 768; // Adjust the threshold as needed
    
      if (isOnComputer) {
        const homeSection = document.getElementById("home");
    
        if (homeSection) {
          const homeSectionHeight = homeSection.offsetHeight;
          const scrollPosition = window.scrollY;
    
          // Check if the scroll position is within the home section
          if (scrollPosition <= homeSectionHeight) {
            setHeaderVisibility(true);
            return; // Exit early if in the home section
          }
        }
    
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
      } else {
        // On mobile, set the header to always be visible without fading
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
