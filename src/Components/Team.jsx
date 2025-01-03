import React, { useEffect, useRef, useState } from "react";
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
  { name: "Alec Dino", image: tpsitePfpADino },
  { name: "Amy Robben", image: tpsitePfpARobben },
  { name: "Ben Vargas", image: tpsitePfpBVargas },
  { name: "Billups Tillman", image: tpsitePfpBTillman },
  { name: "Dustin Green", image: tpsitePfpDGreen },
  { name: "Dylan Diener", image: tpsitePfpDDiener },
  { name: "Hunter Bailey", image: tpsitePfpHBailey },
  { name: "Jerrod Davenport", image: tpsitePfpJDavenport },
  { name: "Jordan Johnson", image: tpsitePfpJJJohnson },
  { name: "Josh Eason", image: tpsitePfpJEason },
  { name: "Josh Clements", image: tpsitePfpJClements },
  { name: "Joshua Montag", image: tpsitePfpJMontag },
  { name: "Justin Little", image: tpsitePfpJLittle },
  { name: "Kevin Lindsay", image: tpsitePfpKLindsay },
  { name: "Kyle Harrison", image: tpsitePfpKHarrison },
  { name: "Lexi Fouts", image: tpsitePfpLFouts },
  { name: "Manish Patel", image: tpsitePfpMPatel },
  { name: "Michael Debs", image: tpsitePfpMDebs },
  { name: "Michael Thrasher", image: tpsitePfpMThrasher },
  { name: "Patrick Hutson", image: tpsitePfpPHutson },
  { name: "Sebastian Steen", image: tpsitePfpSSteen },
  { name: "Stephen D'Angelo", image: tpsitePfpSDAngelo },
  { name: "Steven Chaney", image: tpsitePfpSChaney },
  { name: "Zach Watkins", image: tpsitePfpZWatkins },
];

const Team = () => {
  const sectionRef = useRef(null);
  const [visibleMembers, setVisibleMembers] = useState([]);
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const MEMBERS_TO_SHOW = 10;
  const CYCLE_INTERVAL = 12500;

  useEffect(() => {
    const getNextGroup = (index) => {
      const totalGroups = Math.ceil(teamMembers.length / MEMBERS_TO_SHOW);
      const normalizedIndex = index % totalGroups;
      const start = normalizedIndex * MEMBERS_TO_SHOW;
      const end = Math.min(start + MEMBERS_TO_SHOW, teamMembers.length);

      if (end - start < MEMBERS_TO_SHOW) {
        return [
          ...teamMembers.slice(start),
          ...teamMembers.slice(0, MEMBERS_TO_SHOW - (end - start)),
        ];
      }

      return teamMembers.slice(start, end);
    };

    // Set initial members
    setVisibleMembers(getNextGroup(0));

    // Set up interval for cycling members
    const interval = setInterval(() => {
      // Start transition
      setIsTransitioning(true);

      // After fade out, update members
      setTimeout(() => {
        setCurrentGroupIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          setVisibleMembers(getNextGroup(nextIndex));
          return nextIndex;
        });

        // After new members are set, remove transition state
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50); // Short delay to ensure DOM update
      }, 600); // Match the CSS transition duration
    }, CYCLE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  // Add a useEffect to handle visibility when members change
  useEffect(() => {
    if (!isTransitioning) {
      const members = document.querySelectorAll(".team-member");
      members.forEach((member) => {
        member.classList.add("visible");
      });
    }
  }, [visibleMembers, isTransitioning]);

  return (
    <section ref={sectionRef} id="team" className="team-section section-transition">
      <div className="section-overlay overlay-top"></div>
      <div className="team-content">
        <h2>Meet Our Team</h2>
        <p className="subtitle">We pride ourselves on our people</p>
        <div className="team-grid">
          {visibleMembers.map((member) => (
            <div
              key={`${member.name}-${currentGroupIndex}`}
              className={`team-member ${isTransitioning ? "transitioning" : ""}`}
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
