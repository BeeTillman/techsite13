// Portfolio.jsx
import React from "react";
import PortfolioCard from "./Card";
import "../styles.css";

import defaultImage from "../images/motion-background.jpg";
import ESP8266STDemo from "../images/ESP8266STDemo.png";

const handleMouseOver = () => {
  document.dispatchEvent(new Event("mousedown"));
};

const handleMouseOut = () => {
  document.dispatchEvent(new Event("mouseup"));
};

const projectList = [
  {
    title: "ESP8266 Stock Ticker",
    description: "Internet of Things",
    imageUrl: ESP8266STDemo,
    link: "https://github.com/BeeTillman/ESP8266_StockTicker",
  },
  {
    title: "Unreal Engine Beginners Course",
    description: "Game Development",
    link: "https://www.youtube.com/@FortunaInteractive",
    imageUrl: defaultImage,
  },
  {
    title: "Football Simulator",
    description: "App Development",
    link: "https://github.com/BeeTillman/FootballSimulator",
    imageUrl: defaultImage,
  },
  {
    title: "ReTerra - Space Colonization",
    description: "Game Development",
    link: "https://www.youtube.com/watch?v=UVR0OqfLbNc&list=PLcZRITBdTrbgjXZYpDHS5SFKVHNMmAhBC&pp=iAQB",
    imageUrl: defaultImage,
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }} className="large">
        My Work
      </h2>
      <div className="container">
        {projectList.map((project, index) => (
          <div
            className="box"
            key={index}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onFocus={handleMouseOver}
            onBlur={handleMouseOut}
          >
            <PortfolioCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
