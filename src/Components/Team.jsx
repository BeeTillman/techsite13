import React, { useEffect, useRef } from "react";
import image1 from "../images/motion-background.jpg";
import image2 from "../images/tpsitePfpBTillman.png";

const teamMembers = [
  {
    name: "John Doe",
    image: image1,
  },
  {
    name: "Jane Smith",
    image: image2,
  },
  {
    name: "Jane Smith",
    image: image2,
  },
  {
    name: "Jane Smith",
    image: image2,
  },
  {
    name: "Jane Smith",
    image: image2,
  },
  {
    name: "Jane Smith",
    image: image2,
  },
  {
    name: "Jane Smith",
    image: image2,
  },
  {
    name: "Jane Smith",
    image: image2,
  },
  {
    name: "Jane Smith",
    image: image2,
  },
  {
    name: "Jane Smith",
    image: image2,
  },
  {
    name: "Jane Smith",
    image: image2,
  },
  {
    name: "Jane Smith",
    image: image2,
  },
  {
    name: "Jane Smith",
    image: image2,
  },
];

const Team = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add visible class to section for fade-in
          entry.target.classList.add('visible');
          // Add visible class to team members for individual animations
          entry.target.querySelectorAll('.team-member').forEach(member => {
            member.classList.add('visible');
          });
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
    <section ref={sectionRef} id="team" className="team-section section-transition">
      <div className="section-overlay overlay-top"></div>
      <div className="team-content">
        <h2>Meet Our Team</h2>
        <p className="subtitle">We pride ourselves on our people</p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-image-container">
                <img src={member.image} alt={member.name} className="member-image" />
              </div>
              <h3>{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;