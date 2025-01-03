import React, { useEffect, useRef } from "react";
import image1 from "../images/motion-background.jpg";
import tpsitePfpBTillman from "../images/tpsitePfpBTillman.png";
import tpsitePfpADino from "../images/tpsitePfpADino.png";
import tpsitePfpARobben from "../images/tpsitePfpARobben.png";
import tpsitePfpDGreen from "../images/tpsitePfpDGreen.png";
import tpsitePfpDDiener from "../images/tpsitePfpDDiener.png";
import tpsitePfpHBailey from "../images/tpsitePfpHBailey.png";
import tpsitePfpJDavenport from "../images/tpsitePfpJDavenport.png";
import tpsitePfpJJJohnson from "../images/tpsitePfpJJohnson.png";
import tpsitePfpJEason from "../images/tpsitePfpJEason.png";
import tpsitePfpJClements from "../images/tpsitePfpJClements.png";
import tpsitePfpJMontag from "../images/tpsitePfpJMontag.png";
import tpsitePfpJLittle from "../images/tpsitePfpJLittle.png";
import tpsitePfpKLindsay from "../images/tpsitePfpKLindsay.png";
import tpsitePfpKHarrison from "../images/tpsitePfpKHarrison.png";
import tpsitePfpLFouts from "../images/tpsitePfpLFouts.png";
import tpsitePfpMPatel from "../images/tpsitePfpMPatel.png";
import tpsitePfpMDebs from "../images/tpsitePfpMDebs.png";
import tpsitePfpMThrasher from "../images/tpsitePfpMThrasher.png";
import tpsitePfpPHutson from "../images/tpsitePfpPhutson.png";
import tpsitePfpSSteen from "../images/tpsitePfpSSteen.png";
import tpsitePfpSDAngelo from "../images/tpsitePfpSDAngelo.png";
import tpsitePfpSChaney from "../images/tpsitePfpSChaney.png";
import tpsitePfpZWatkins from "../images/tpsitePfpZWatkins.png";
import tpsitePfpBVargas from "../images/tpsitePfpBVargas.png";

const teamMembers = [
  {
    name: "Alec Dino",
    image: tpsitePfpADino,
  },
  {
    name: "Amy Robben",
    image: tpsitePfpARobben,
  },
  {
    name: "Ben Vargas",
    image: tpsitePfpBVargas,
  },
  {
    name: "Billups Tillman",
    image: tpsitePfpBTillman,
  },
  {
    name: "Dustin Green",
    image: tpsitePfpDGreen,
  },
  {
    name: "Dylan Diener",
    image: tpsitePfpDDiener,
  },
  {
    name: "Hunter Bailey",
    image: tpsitePfpHBailey,
  },
  {
    name: "Jerrod Davenport",
    image: tpsitePfpJDavenport,
  },
  {
    name: "Jordan Johnson",
    image: tpsitePfpJJJohnson,
  },
  {
    name: "Jordan Eason",
    image: tpsitePfpJEason,
  },
  {
    name: "Josh Clements",
    image: tpsitePfpJClements,
  },
  {
    name: "Josh Montag",
    image: tpsitePfpJMontag,
  },
  {
    name: "John Little",
    image: tpsitePfpJLittle,
  },
  {
    name: "Kevin Lindsay",
    image: tpsitePfpKLindsay,
  },
  {
    name: "Kyle Harrison",
    image: tpsitePfpKHarrison,
  },
  {
    name: "Lexi Fouts",
    image: tpsitePfpLFouts,
  },
  {
    name: "Manish Patel",
    image: tpsitePfpMPatel,
  },
  {
    name: "Michael Debs",
    image: tpsitePfpMDebs,
  },
  {
    name: "Michael Thrasher",
    image: tpsitePfpMThrasher,
  },
  {
    name: "Patrick Hutson",
    image: tpsitePfpPHutson,
  },
  {
    name: "Sebastian Steen",
    image: tpsitePfpSSteen,
  },
  {
    name: "Stephen D’Angelo",
    image: tpsitePfpSDAngelo,
  },
  {
    name: "Steven Chaney",
    image: tpsitePfpSChaney,
  },
  {
    name: "Zach Watkins",
    image: tpsitePfpZWatkins,
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