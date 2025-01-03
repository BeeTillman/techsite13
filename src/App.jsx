import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import "./styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Hero />
    </div>
  );
};

export default App;