import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import "../Home.css";

import image from "url:../images/PortfolioHomeBG2.jpg";

const imageAltText = "Techport 13 office";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt={imageAltText} />
      <div className="content">
        <h1>{name}</h1>
        <h2>{title}</h2>
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