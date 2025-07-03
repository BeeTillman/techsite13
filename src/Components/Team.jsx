import React, { useEffect, useRef, useState } from "react";
import "../styles/Team.css";
import tpsitePfpBTillman from "url:../images/tpsitePfpBTillman.png";
import tpsitePfpADino from "url:../images/tpsitePfpADino.png";
import tpsitePfpARobben from "url:../images/tpsitePfpARobben.png";
import tpsitePfpDGreen from "url:../images/tpsitePfpDGreen.png";
import tpsitePfpDDiener from "url:../images/tpsitePfpDDiener.png";
import tpsitePfpHBailey from "url:../images/tpsitePfpHBailey.png";
import tpsitePfpJDavenport from "url:../images/tpsitePfpJDavenport.png";
import tpsitePfpJJJohnson from "url:../images/tpsitePfpJJohnson.png";
import tpsitePfpJEason from "url:../images/tpsitePfpJEason.png";
import tpsitePfpJClements from "url:../images/tpsitePfpJClements.png";
import tpsitePfpJMontag from "url:../images/tpsitePfpJMontag.png";
import tpsitePfpJLittle from "url:../images/tpsitePfpJLittle.png";
import tpsitePfpKLindsay from "url:../images/tpsitePfpKLindsay.png";
import tpsitePfpKHarrison from "url:../images/tpsitePfpKHarrison.png";
import tpsitePfpLFouts from "url:../images/tpsitePfpLFouts.png";
import tpsitePfpMPatel from "url:../images/tpsitePfpMPatel.png";
import tpsitePfpMDebs from "url:../images/tpsitePfpMDebs.png";
import tpsitePfpMThrasher from "url:../images/tpsitePfpMThrasher.png";
import tpsitePfpPHutson from "url:../images/tpsitePfpPhutson.png";
import tpsitePfpSSteen from "url:../images/tpsitePfpSSteen.png";
import tpsitePfpSDAngelo from "url:../images/tpsitePfpSDAngelo.png";
import tpsitePfpSChaney from "url:../images/tpsitePfpSChaney.png";
import tpsitePfpZWatkins from "url:../images/tpsitePfpZWatkins.png";
import tpsitePfpBVargas from "url:../images/tpsitePfpBVargas.png";

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
  { name: "John Little", image: tpsitePfpJLittle },
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

    setVisibleMembers(getNextGroup(0));

    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentGroupIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          setVisibleMembers(getNextGroup(nextIndex));
          return nextIndex;
        });

        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 600);
    }, CYCLE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

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
      <div className="section-overlay overlay-bottom"></div>
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
