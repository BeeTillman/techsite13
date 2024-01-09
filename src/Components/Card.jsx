import React from "react";
import PropTypes from "prop-types";
import "../styles.css";

const PortfolioCard = ({ title, description, imageUrl, link, onMouseOver, onMouseOut }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div
      className="portfolio-card"
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default PortfolioCard;
