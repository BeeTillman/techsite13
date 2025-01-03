import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrella, faPiggyBank, faHeartbeat, faUsers } from '@fortawesome/free-solid-svg-icons';
import '../styles/Apply.css';

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
        <div className="benefits-section">
          <h2>Perks & Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <FontAwesomeIcon icon={faUmbrella} className="benefit-icon" />
              <h3>Generous Paid Time Off</h3>
              <p>Flexible vacation policy and paid holidays to ensure work-life balance.</p>
            </div>
            <div className="benefit-card">
              <FontAwesomeIcon icon={faPiggyBank} className="benefit-icon" />
              <h3>Generous 401k Matching</h3>
              <p>Competitive 401(k) matching to secure your financial future.</p>
            </div>
            <div className="benefit-card">
              <FontAwesomeIcon icon={faHeartbeat} className="benefit-icon" />
              <h3>Health Insurance</h3>
              <p>Comprehensive health, dental, and vision coverage for you and your family.</p>
            </div>
            <div className="benefit-card">
              <FontAwesomeIcon icon={faUsers} className="benefit-icon" />
              <h3>Team Bonding</h3>
              <p>Regular team events and activities to foster a collaborative environment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apply;