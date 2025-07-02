// src/Components/Apply.jsx

import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUmbrella,
  faPiggyBank,
  faHeartbeat,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import "../styles/Apply.css";

const Apply = ({ isVisible }) => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  // Intersection Observer to fade in perks
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  if (!isVisible) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Grab the file input
    const fileInput = formRef.current.querySelector('input[name="resume"]');
    const file = fileInput.files[0];
    if (!file) {
      alert("Please upload a resume before submitting.");
      return setStatus("idle");
    }

    try {
      // Upload to Firebase Storage under "resumes/"
      const fileRef = storageRef(storage, `resumes/${Date.now()}_${file.name}`);
      await uploadBytes(fileRef, file);

      // Get a publicly accessible URL
      const downloadURL = await getDownloadURL(fileRef);

      // Inject resume_url into a hidden input so EmailJS sees it
      let urlInput = formRef.current.querySelector('input[name="resume_url"]');
      if (!urlInput) {
        urlInput = document.createElement("input");
        urlInput.type = "hidden";
        urlInput.name = "resume_url";
        formRef.current.appendChild(urlInput);
      }
      urlInput.value = downloadURL;

      // Send all form data (including resume_url) via EmailJS
      await emailjs.sendForm(
        "service_19px7xt",
        "template_lyrqimq",
        formRef.current,
        "AD9kASCtB252sXVHL"
      );

      setStatus("success");
    } catch (err) {
      console.error("Apply form error:", err);
      setStatus("error");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="apply"
      className="apply-section section-transition"
    >
      <div className="section-overlay overlay-top" />

      <div className="apply-content">
        <h2>Perks & Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <FontAwesomeIcon icon={faUmbrella} className="benefit-icon" />
            <h3>Generous Paid Time Off</h3>
            <p>You work better when you live better.</p>
          </div>
          <div className="benefit-card">
            <FontAwesomeIcon icon={faPiggyBank} className="benefit-icon" />
            <h3>Generous 401k Matching</h3>
            <p>
              We match 50% of all pre-tax 401(k) contributions you make, up to the government maximum per year.
            </p>
          </div>
          <div className="benefit-card">
            <FontAwesomeIcon icon={faHeartbeat} className="benefit-icon" />
            <h3>Health Insurance</h3>
            <p>
              We provide top-notch medical, dental, and vision coverage for you and your family, including a zero-cost option.
            </p>
          </div>
          <div className="benefit-card">
            <FontAwesomeIcon icon={faUsers} className="benefit-icon" />
            <h3>Team Bonding</h3>
            <p>
              Team building and bonding foster trust, collaboration, and unity, improving communication, productivity, and satisfaction.
            </p>
          </div>
        </div>
      </div>

      <div className="section-overlay overlay-bottom" />

      <div className="interview-section">
        <div className="application-section">
          <h2>Submit Your Application</h2>
          <p className="subtitle">Take the first step towards our team</p>

          <form
            ref={formRef}
            className="application-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                name="applicant_name"
                placeholder="Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="applicant_email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <select name="source" required defaultValue="">
                <option value="" disabled>
                  How did you hear about us?
                </option>
                <option value="career_fair">Career Fair</option>
                <option value="web">Web</option>
                <option value="word_of_mouth">Word of Mouth</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                required
              />
            </div>
            <div className="form-group">
              <label className="file-upload">
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  required
                />
                <span>Upload Resume</span>
              </label>
            </div>
            <button type="submit" className="submit-btn">
              {status === "sending"
                ? "Sending…"
                : status === "success"
                ? "Sent!"
                : status === "error"
                ? "Try Again"
                : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

Apply.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default Apply;