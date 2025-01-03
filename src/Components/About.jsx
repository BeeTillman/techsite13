import React, { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
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
    <section ref={sectionRef} id="about" className="about-section section-transition">
      <div className="section-overlay overlay-top"></div>
      <div className="section-overlay overlay-bottom"></div>
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Techport Thirteen was founded in 1996. We have the experience, 
          knowledge, and expertise to provide a wide range of services 
          your company needs to get the most out of the ServiceNow platform.
        </p>
        <p>
          From implementation services to as-needed project assistance to 
          long-term support, Techport Thirteen has years of experience 
          providing ServiceNow support for companies in virtually every industry.
        </p>
      </div>
    </section>
  );
};

export default About;