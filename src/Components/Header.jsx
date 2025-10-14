// src/Components/Header.jsx
import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import logo from "url:../images/tpsiteTpLogo.png";

const Header = () => {
  const [isHeaderScrolled, setHeaderScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setHeaderScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <header id="header" className={`${isHeaderScrolled ? 'header-scrolled' : ''}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <a href="#hero" className="logo" aria-label="Techport13 Home">
          <img src={logo} alt="Techport13 Logo" className="img-fluid" />
        </a>

        <nav id="navbar" className="navbar" role="navigation" aria-label="Main navigation">
          <ul role="menubar">
            <li role="none">
              <a className="nav-link scrollto active" href="#hero" role="menuitem" aria-current="page" onClick={(e) => handleNavClick(e, "hero")}>
                Home
              </a>
            </li>
            <li role="none">
              <a className="nav-link scrollto" href="#about" role="menuitem" onClick={(e) => handleNavClick(e, "about")}>
                About
              </a>
            </li>
            <li role="none">
              <a className="nav-link scrollto" href="#our-team" role="menuitem" onClick={(e) => handleNavClick(e, "our-team")}>
                Our Team
              </a>
            </li>
            <li role="none">
              <a className="nav-link scrollto" href="#contact" role="menuitem" onClick={(e) => handleNavClick(e, "contact")}>
                Contact
              </a>
            </li>
          </ul>
          <button 
            className={`mobile-nav-toggle ${isMobileMenuOpen ? 'bi-x' : 'bi-list'}`} 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu" 
            aria-expanded={isMobileMenuOpen}
          >
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="navbar-mobile">
            <div className="mobile-nav-toggle" onClick={toggleMobileMenu}>
              <i className="bi bi-x"></i>
            </div>
            <ul>
              <li>
                <a className="scrollto" href="#hero" onClick={(e) => handleNavClick(e, "hero")}>
                  Home
                </a>
              </li>
              <li>
                <a className="scrollto" href="#about" onClick={(e) => handleNavClick(e, "about")}>
                  About
                </a>
              </li>
              <li>
                <a className="scrollto" href="#our-team" onClick={(e) => handleNavClick(e, "our-team")}>
                  Our Team
                </a>
              </li>
              <li>
                <a className="scrollto" href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
