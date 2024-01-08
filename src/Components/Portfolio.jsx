/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";
import PortfolioCard from "./Card";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
import defaultImage from "../images/motion-background.jpg";
import ESP8266STDemo from "../images/ESP8266STDemo.png";
import Cursor from "./Cursor";

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
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <PortfolioCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
