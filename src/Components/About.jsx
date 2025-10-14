import React, { useEffect, useRef } from "react";
import "../styles/About.css";
import aboutImage from "url:../images/tpsiteOfficeStock1.jpg";

const About = () => {
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
    <section ref={sectionRef} id="about" className="about d-flex" aria-labelledby="about-heading">
      <div className="container">
        <div className="row">
          <div className="col about-center order-first" data-aos="zoom-in" data-aos-delay="150">
            <img src={aboutImage} className="img-fluid" alt="Team collaboration and ServiceNow development" />
          </div>
          <div className="col content" data-aos="fade-right">
            <h3 id="about-heading">About Techport Thirteen</h3>
            <p className="fst-italic">
              Techport Thirteen was founded in 1996. We have the experience, knowledge, and expertise to
              provide a wide range of services your company needs to get the most out of the ServiceNow
              platform. From implementation services to as-needed project assistance to long-term support,
              Techport Thirteen has years of experience providing ServiceNow support for companies in
              virtually every industry.
            </p>
            <ul role="list">
              <li>
                <i className="bi bi-check-circle" aria-hidden="true"></i> 
                We are dedicated exclusively to the ServiceNow Platform with deep expertise and specialization.
              </li>
              <li>
                <i className="bi bi-check-circle" aria-hidden="true"></i> 
                We are recognized as a Premier Partner with ServiceNow, ensuring access to the latest features and support.
              </li>
              <li>
                <i className="bi bi-check-circle" aria-hidden="true"></i> 
                We empower businesses through digital transformation with cutting-edge ServiceNow solutions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
