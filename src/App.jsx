import React, { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./styles/main.css";

function App() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false
      });
    }

    const backToTop = document.querySelector(".back-to-top");
    if (backToTop) {
      const toggleBackToTop = () => {
        if (window.scrollY > 100) {
          backToTop.classList.add("active");
        } else {
          backToTop.classList.remove("active");
        }
      };
      window.addEventListener("scroll", toggleBackToTop);
      return () => window.removeEventListener("scroll", toggleBackToTop);
    }
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center" onClick={scrollToTop}>
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default App;
