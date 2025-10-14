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
    // Back to top functionality
    const backToTop = document.createElement('a');
    backToTop.href = '#';
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="bi bi-arrow-up-short"></i>';
    document.body.appendChild(backToTop);

    const toggleBackToTop = () => {
      if (window.scrollY > 100) {
        backToTop.classList.add('active');
      } else {
        backToTop.classList.remove('active');
      }
    };

    const scrollToTop = (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    window.addEventListener('scroll', toggleBackToTop);
    backToTop.addEventListener('click', scrollToTop);

    return () => {
      window.removeEventListener('scroll', toggleBackToTop);
      backToTop.removeEventListener('click', scrollToTop);
      if (backToTop.parentNode) {
        backToTop.parentNode.removeChild(backToTop);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
