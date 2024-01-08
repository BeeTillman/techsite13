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

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "ESP8266 Stock Ticker",
    description:
      "A stock ticker that uses an ESP8266 to connect to the internet and display stock prices on a liquid crystal display.",
    url: "https://github.com/BeeTillman/ESP8266_StockTicker",
  },
  {
    title: "Unreal Engine Beginners Course",
    description: "A course for beginners to learn how to use Unreal Engine to create games.",
    url: "https://www.youtube.com/@FortunaInteractive",
  },
  {
    title: "Football Simulator",
    description:
      "A football simulator that uses Java to simulate a football game between two full 53-man rosters with coaches & ratings.",
    url: "https://github.com/BeeTillman/FootballSimulator",
  },
  {
    title: "ReTerra - Space Colonization",
    description:
      "An open world space colonization game that uses Unreal Engine's Visual Scripting system and C++.",
    url: "https://www.youtube.com/watch?v=UVR0OqfLbNc&list=PLcZRITBdTrbgjXZYpDHS5SFKVHNMmAhBC&pp=iAQB",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
