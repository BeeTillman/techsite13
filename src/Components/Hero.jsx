import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../styles.css";

import image1 from "../images/tpsiteOfficeStock1.jpg";
import image2 from "../images/tpsiteOfficeStock1.jpg";
import image3 from "../images/tpsiteOfficeStock1.jpg";

const quotes = [
  "Dedicated exclusively to the ServiceNow Platform.",
  "Recognized as a Premier Partner with ServiceNow.",
  "Experienced, Knowledgable, Professional",
];

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
<Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div>
          <img src={image1} alt="Empowering your business" />
          <p className="legend">{quotes[0]}</p>
        </div>
        <div>
          <img src={image2} alt="Transforming technology" />
          <p className="legend">{quotes[1]}</p>
        </div>
        <div>
          <img src={image3} alt="Trusted partner" />
          <p className="legend">{quotes[2]}</p>
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;