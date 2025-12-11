import React from "react";
import aboutImg from "url:../images/tpsiteOfficeStock1.jpg";

const About = () => {
  return (
    <section id="about" className="about d-flex">
      <div className="container">
        <div className="row">
          <div className="col about-center order-first" data-aos="zoom-in" data-aos-delay="150">
            <img src={aboutImg} className="img-fluid" alt="Techport13 team collaboration" />
          </div>
          <div className="col content" data-aos="fade-right">
            <h3>About Techport Thirteen</h3>
            <p className="fst-italic">
              Techport Thirteen was founded in 1996. We have the experience, knowledge, and expertise to
              provide a wide range of services your company needs to get the most out of the ServiceNow
              platform. From implementation services to as-needed project assistance to long-term support,
              Techport Thirteen has years of experience providing ServiceNow support for companies in
              virtually every industry.
            </p>
            <ul>
              <li>
                <i className="bi bi-check-circle"></i>
                We are dedicated exclusively to the ServiceNow Platform with deep expertise and specialization.
              </li>
              <li>
                <i className="bi bi-check-circle"></i>
                We are recognized as a Premier Partner with ServiceNow, ensuring access to the latest features and support.
              </li>
              <li>
                <i className="bi bi-check-circle"></i>
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
