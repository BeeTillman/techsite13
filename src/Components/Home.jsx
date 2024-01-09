import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import "../Home.css"; // Assuming you have a CSS file for styling

import image from "../images/PortfolioHomeBG2.jpg";

const imageAltText = "An image of me";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt={imageAltText} />
      <div className="content">
        <h1>{name}</h1>
        <h2>SOFTWARE ENGINEER & APP DEVELOPER.</h2>
        <div className="arrow-container">
          <img src={arrowSvg} className="arrow" alt={imageAltText} />
        </div>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
