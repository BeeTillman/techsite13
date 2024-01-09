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
      }, 200); // Adjust the delay as needed (200 milliseconds in this example)
    };

    const handleScrollEnd = () => {
      clearTimeout(timeoutId);
      setHeaderVisibility(true);
    };

    window.addEventListener("scroll", handleScroll);

    // Use capture phase to handle the scroll end event early
    window.addEventListener("scroll", handleScrollEnd, true);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollEnd, true);
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
