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
  const memberRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible'); // Remove visible class when scrolling away
          }
        });
      },
      { 
        threshold: 0.2, // Trigger when 20% of element is visible
        rootMargin: '0px' 
      }
    );

    // Observe each team member
    memberRefs.current.forEach((member) => {
      if (member) observer.observe(member);
    });

    return () => {
      memberRefs.current.forEach((member) => {
        if (member) observer.unobserve(member);
      });
    };
  }, []);

  return (
    <section id="team" className="team-section section-transition">
      <div className="section-overlay overlay-top"></div>
      <div className="team-content">
        <h2>Meet Our Team</h2>
        <p className="subtitle">We pride ourselves on our people</p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="team-member"
              ref={el => memberRefs.current[index] = el}
            >
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