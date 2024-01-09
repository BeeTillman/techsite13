/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import "../Header.css"; // Assuming you have a CSS file for styling

const Header = () => {
  const [isHeaderVisible, setHeaderVisibility] = useState(true);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      setHeaderVisibility(false);

      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        setHeaderVisibility(true);
      }, 2000); // Adjust the delay as needed (2 seconds in this example)
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isHeaderVisible ? "visible" : "hidden"}`}>
      <a href="#home" className="nav-link">
        // home
      </a>
      <a href="#portfolio" className="nav-link">
        // experience
      </a>
      <a href="#skills" className="nav-link">
        // skills
      </a>
      <a href="#about" className="nav-link">
        // expertise
      </a>
      <a href="#footer" className="nav-link">
        // contact
      </a>
    </div>
  );
};

export default Header;
