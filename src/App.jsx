import React, { useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import Apply from "./Components/Apply";
import "./styles/main.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const App = () => {
  const [isApplyVisible, setIsApplyVisible] = useState(false);

  const handleApplyClick = (event) => {
    event?.preventDefault();

    setIsApplyVisible(true);

    setTimeout(() => {
      const applySection = document.getElementById("apply");
      if (applySection) {
        applySection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div id="main">
      <Header onApplyClick={handleApplyClick} />
      <Hero />
      <About />
      <Team />
      <Contact />
      <Apply isVisible={isApplyVisible} />
    </div>
  );
};

export default App;