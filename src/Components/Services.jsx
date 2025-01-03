import React from "react";
import "../styles.css";

const servicesList = [
  { title: "Consulting", description: "Expert IT consulting services to help you achieve your business goals." },
  { title: "Cloud Services", description: "Cloud solutions to enhance your business operations and scalability." },
  { title: "Cybersecurity", description: "Comprehensive cybersecurity services to protect your business." },
  { title: "Software Development", description: "Custom software development tailored to your business needs." },
];

const Services = () => {
  return (
    <section className="padding" id="services">
      <h2 style={{ textAlign: "center" }} className="large">
        Our Services
      </h2>
      <div className="container">
        {servicesList.map((service, index) => (
          <div className="box" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;