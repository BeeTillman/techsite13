import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import Apply from "./Components/Apply";
import "./styles/main.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Hero />
            <About />
            <Team />
            <Contact />
          </>
        }
      />
      <Route path="/apply" element={<Apply isVisible={true} />} />
    </Routes>
  );
}

export default App;