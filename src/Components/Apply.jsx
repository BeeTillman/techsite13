import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUmbrella, faPiggyBank, faHeartbeat, faUsers } from "@fortawesome/free-solid-svg-icons";
import "../styles/Apply.css";

const Apply = ({ isVisible }) => {
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

  if (!isVisible) return null;

  return (
    <section ref={sectionRef} id="apply" className="apply-section section-transition">
      <div className="section-overlay overlay-top"></div>
      <div className="apply-content">
        <h2>Perks & Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <FontAwesomeIcon icon={faUmbrella} className="benefit-icon" />
            <h3>Generous Paid Time Off</h3>
            <p>
              We believe our employees work better when they have autonomy over their own schedule.
              Unlimited PTO allows each member of the Techport13 family to visit loved ones, take a
              vacation, or simply a day to decompress.
            </p>
          </div>
          <div className="benefit-card">
            <FontAwesomeIcon icon={faPiggyBank} className="benefit-icon" />
            <h3>Generous 401k Matching</h3>
            <p>
              We match 50% of all pre-tax 401(k) contributions you make, up to the government
              maximum per year.
            </p>
          </div>
          <div className="benefit-card">
            <FontAwesomeIcon icon={faHeartbeat} className="benefit-icon" />
            <h3>Health Insurance</h3>
            <p>
              We provide top notch medical, dental, and vision coverage for you and your family,
              including a zero-cost option.
            </p>
          </div>
          <div className="benefit-card">
            <FontAwesomeIcon icon={faUsers} className="benefit-icon" />
            <h3>Team Bonding</h3>
            <p>
              Team building and bonding are crucial because they foster trust, collaboration, and a
              sense of unity among team members, leading to improved communication, productivity,
              and overall work satisfaction.
            </p>
          </div>
        </div>
      </div>
      <div className="interview-section">
        <h2>Our Interview Process</h2>
        <p className="subtitle">
          At Techport13 our hiring process takes a laid-back approach, resembling more of a casual
          chat at your favorite coffee spot than a formal interrogation. We believe in making every
          step comfortable and stress-free, ensuring that candidates can showcase their true selves
          in a relaxed setting.
        </p>

        <div className="process-grid">
          <div className="process-card">
            <div className="step-number">1</div>
            <h3>First Contact</h3>
            <p>
              No matter where we meet we will be keen to discuss potential collaboration and explore
              how your skills align with our opportunities
            </p>
          </div>

          <div className="process-card">
            <div className="step-number">2</div>
            <h3>Phone Call</h3>
            <p>
              If theres more to discuss after our introduction, you can expect us to reach out for a
              conversation about the next steps in the hiring process.
            </p>
          </div>

          <div className="process-card">
            <div className="step-number">3</div>
            <h3>Phone Interview</h3>
            <p>
              During a phone interview, we will access your skills and qualifications and see if
              it's a fit for the roles we're looking for.
            </p>
          </div>

          <div className="process-card">
            <div className="step-number">4</div>
            <h3>Face-to-Face</h3>
            <p>
              At this phase, you will be invited for a face-to-face interview, where you'll have the
              opportunity to meet with the hiring team in person and delve deeper into your skills
              and work experiences, and ask us questions about Techport13.
            </p>
          </div>

          <div className="process-card">
            <div className="step-number">5</div>
            <h3>Making an Offer</h3>
            <p>
              At this time a formal offer is extended, outlining the terms and conditions of
              employment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
Apply.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default Apply;
