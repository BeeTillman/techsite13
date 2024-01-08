/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(18, 18, 18, 0.25)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#home">//  home</a>
      <a href="#portfolio">//  experience</a>
      <a href="#about">//  expertise</a>
      <a href="#footer">//  contact</a>
    </div>
  );
};

export default Header;
