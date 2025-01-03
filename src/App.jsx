import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Team from "./Components/Team";

import "./styles/main.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Hero />
      <About />
      <Team />
    </div>
  );
};

export default App;
