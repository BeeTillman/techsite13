import React from "react";

const Hero = () => {
  const handleLearnMore = (e) => {
    e.preventDefault();
    const about = document.getElementById("about");
    if (about) {
      about.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10 text-center">
            <h1>Techport Thirteen</h1>
            <h2>
              Dedicated exclusively to the ServiceNow Platform. Recognized as a Premier Partner 
              with ServiceNow, empowering businesses through digital transformation.
            </h2>
            <div>
              <a href="#about" className="btn-get-started scrollto" onClick={handleLearnMore}>
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
