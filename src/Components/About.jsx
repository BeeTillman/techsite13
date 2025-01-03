import React, { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY;
        const sectionTop = rect.top + scrollPosition;
        
        if (scrollPosition > sectionTop - window.innerHeight && 
            scrollPosition < sectionTop + rect.height) {
          const relativeScroll = scrollPosition - sectionTop;
          // Inverted the effect by adding minus sign and reduced rate for smoothness
          const parallaxRate = -(relativeScroll * 0.15); 
          contentRef.current.style.transform = `translateY(${parallaxRate}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="about" className="about-section">
      <div className="section-overlay overlay-top"></div>
      <div className="section-overlay overlay-bottom"></div>
      <div ref={contentRef} className="about-content">
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