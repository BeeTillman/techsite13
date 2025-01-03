import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import "./styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import About from "./Components/About";
import Team from "./Components/Team";

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