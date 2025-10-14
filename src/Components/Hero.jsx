import React, { useEffect, useRef } from "react";
import "../styles/Hero.css";

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="d-flex align-items-center" role="banner">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10 text-center">
            <h1>Techport Thirteen</h1>
            <h2>Dedicated exclusively to the ServiceNow Platform. Recognized as a Premier Partner with ServiceNow, empowering businesses through digital transformation.</h2>
            <div>
              <a href="#about" className="btn-get-started scrollto" aria-label="Learn more about Techport13">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
