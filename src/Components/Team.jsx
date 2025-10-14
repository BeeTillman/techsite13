import React, { useEffect, useRef, useState } from "react";
import "../styles/Team.css";
import tpsitePfpMPatel from "url:../images/tpsitePfpMPatel.png";
import tpsitePfpMThrasher from "url:../images/tpsitePfpMThrasher.png";
import tpsitePfpJClements from "url:../images/tpsitePfpJClements.png";
import tpsitePfpSChaney from "url:../images/tpsitePfpSChaney.png";
import tpsitePfpJShirling from "url:../images/tpsitePfpJShirling.png";
import tpsitePfpKLindsay from "url:../images/tpsitePfpKLindsay.png";
import tpsitePfpMDebs from "url:../images/tpsitePfpMDebs.png";
import tpsitePfpSSteen from "url:../images/tpsitePfpSSteen.png";
import tpsitePfpARobben from "url:../images/tpsitePfpARobben.png";
import tpsitePfpLFouts from "url:../images/tpsitePfpLFouts.png";
import tpsitePfpJEason from "url:../images/tpsitePfpJEason.png";
import tpsitePfpJJohnson from "url:../images/tpsitePfpJJohnson.png";
import tpsitePfpJMontag from "url:../images/tpsitePfpJMontag.png";
import tpsitePfpZWatkins from "url:../images/tpsitePfpZWatkins.png";
import tpsitePfpDGreen from "url:../images/tpsitePfpDGreen.png";
import tpsitePfpJLittle from "url:../images/tpsitePfpJLittle.png";
import tpsitePfpADino from "url:../images/tpsitePfpADino.png";
import tpsitePfpDDiener from "url:../images/tpsitePfpDDiener.png";
import tpsitePfpHBailey from "url:../images/tpsitePfpHBailey.png";
import tpsitePfpSDAngelo from "url:../images/tpsitePfpSDAngelo.png";
import tpsitePfpBTillman from "url:../images/tpsitePfpBTillman.png";
import tpsitePfpBVargas from "url:../images/tpsitePfpBVargas.png";
import tpsitePfpCBrauer from "url:../images/tpsitePfpCBrauer.png";
import tpsitePfpJDavenport from "url:../images/tpsitePfpJDavenport.png";
import tpsitePfpKHarrison from "url:../images/tpsitePfpKHarrison.png";
import tpsitePfpNAkula from "url:../images/tpsitePfpNAkula.png";
import tpsitePfpPhutson from "url:../images/tpsitePfpPhutson.png";

const teamMembers = [
  { name: "Manish Patel", title: "CEO & Founder", image: tpsitePfpMPatel },
  { name: "Michael Thrasher", title: "Developer & Consultant", image: tpsitePfpMThrasher },
  { name: "Josh Clements", title: "Developer & Consultant", image: tpsitePfpJClements },
  { name: "Steven Chaney", title: "Developer & Consultant", image: tpsitePfpSChaney },
  { name: "Jeff Shirling", title: "Developer & Consultant", image: tpsitePfpJShirling },
  { name: "Kevin Lindsay", title: "Developer & Consultant", image: tpsitePfpKLindsay },
  { name: "Michael Debs", title: "Developer & Consultant", image: tpsitePfpMDebs },
  { name: "Sebastian Steen", title: "Developer & Consultant", image: tpsitePfpSSteen },
  { name: "Amy Robben", title: "Developer & Consultant", image: tpsitePfpARobben },
  { name: "Lexi Fouts", title: "Developer & Consultant", image: tpsitePfpLFouts },
  { name: "Jordan Eason", title: "Developer & Consultant", image: tpsitePfpJEason },
  { name: "Jordan Johnson", title: "Developer & Consultant", image: tpsitePfpJJohnson },
  { name: "Josh Montag", title: "Developer & Consultant", image: tpsitePfpJMontag },
  { name: "Zach Watkins", title: "Developer & Consultant", image: tpsitePfpZWatkins },
  { name: "Dustin Green", title: "Developer & Consultant", image: tpsitePfpDGreen },
  { name: "John Little", title: "Developer & Consultant", image: tpsitePfpJLittle },
  { name: "Alec Dino", title: "Developer & Consultant", image: tpsitePfpADino },
  { name: "Dylan Diener", title: "Developer & Consultant", image: tpsitePfpDDiener },
  { name: "Hunter Bailey", title: "Developer & Consultant", image: tpsitePfpHBailey },
  { name: "Stephen D'Angelo", title: "Developer & Consultant", image: tpsitePfpSDAngelo },
  { name: "Billups Tillman", title: "Developer & Consultant", image: tpsitePfpBTillman },
  { name: "Calvin Brauer", title: "Developer & Consultant", image: tpsitePfpCBrauer },
  { name: "Jerrod Davenport", title: "Developer & Consultant", image: tpsitePfpJDavenport },
  { name: "Kyle Harrison", title: "Developer & Consultant", image: tpsitePfpKHarrison },
  { name: "Nithya Akula", title: "Developer & Consultant", image: tpsitePfpNAkula },
  { name: "Patrick Hutson", title: "Developer & Consultant", image: tpsitePfpPhutson },
];

const Team = () => {
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(teamMembers.length / 4));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(teamMembers.length / 4));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(teamMembers.length / 4)) % Math.ceil(teamMembers.length / 4));
    setIsAutoPlaying(false);
  };

  const getVisibleMembers = () => {
    const start = currentSlide * 4;
    return teamMembers.slice(start, start + 4);
  };

  return (
    <section ref={sectionRef} id="our-team" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Our Team</h2>
          <p>Meet the dedicated individuals who make up the heart and soul of our company. Our employees are a diverse and talented group, working together to bring innovation and excellence to everything we do.</p>
        </div>

        <div className="testimonials-slider">
          <div className="testimonials-container">
            {getVisibleMembers().map((member, index) => (
              <div key={`${member.name}-${currentSlide}`} className="testimonial-item">
                <img src={member.image} className="testimonial-img" alt={`Portrait of ${member.name}, ${member.title}`} />
                <h3>{member.name}</h3>
                <h4>{member.title}</h4>
              </div>
            ))}
          </div>
          
          <div className="testimonials-controls">
            <button className="testimonials-btn prev" onClick={prevSlide} aria-label="Previous team members">
              <i className="bi bi-chevron-left"></i>
            </button>
            <button className="testimonials-btn next" onClick={nextSlide} aria-label="Next team members">
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
          
          <div className="testimonials-pagination">
            {Array.from({ length: Math.ceil(teamMembers.length / 4) }).map((_, index) => (
              <button
                key={index}
                className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsAutoPlaying(false);
                }}
                aria-label={`Go to team members ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
