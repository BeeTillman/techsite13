// src/Components/Apply.jsx
import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPiggyBank, faHeartbeat, faUsers } from "@fortawesome/free-solid-svg-icons";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import "../styles/Apply.css";

const Apply = ({ isVisible }) => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const fileInputRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [resumeName, setResumeName] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && entry.target.classList.add("visible"),
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  if (!isVisible) return null;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setResumeName(file ? file.name : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const fileEl = fileInputRef.current;
    if (!fileEl || !fileEl.files.length) {
      alert("Please upload a resume before submitting.");
      setStatus("idle");
      return;
    }
    const file = fileEl.files[0];

    try {
      const fbRef = storageRef(storage, `resumes/${Date.now()}_${file.name}`);
      await uploadBytes(fbRef, file);
      const downloadURL = await getDownloadURL(fbRef);

      let urlField = formRef.current.querySelector('input[name="resume_url"]');
      if (!urlField) {
        urlField = document.createElement("input");
        urlField.type = "hidden";
        urlField.name = "resume_url";
        formRef.current.appendChild(urlField);
      }
      urlField.value = downloadURL;

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
    <section ref={sectionRef} id="apply" className="apply-section section-transition">
      {/* Top fade */}
      <div className="section-overlay overlay-top" />

      {/* Perks & Benefits */}
      <div className="apply-content">
        <h2>Perks &amp; Benefits</h2>
        <div className="benefits-grid">
          {[
            {
              icon: faPiggyBank,
              title: "401k Matching",
              desc: "We match 50% of all pre-tax 401(k) contributions you make.",
            },
            {
              icon: faHeartbeat,
              title: "Health Insurance",
              desc: "Top-notch medical, dental, and vision coverage.",
            },
            {
              icon: faUsers,
              title: "Team Bonding",
              desc: "Work hard, play hard.",
            },
          ].map(({ icon, title, desc }) => (
            <div className="benefit-card" key={title}>
              <FontAwesomeIcon icon={icon} className="benefit-icon" />
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="section-overlay overlay-bottom" />

      {/* Application Form */}
      <div className="interview-section">
        <div className="application-section">
          <h2>Submit Your Application</h2>
          <p className="subtitle">Take the first step towards our team</p>

          <form ref={formRef} className="application-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="applicant_name" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="applicant_email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <select name="source" required defaultValue="">
                <option value="" disabled>
                  How did you hear about us?
                </option>
                <option value="career_fair">Career Fair</option>
                <option value="web">Web</option>
                <option value="word_of_mouth">Word of Mouth</option>
                <option value="handshake">Handshake</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <input type="text" name="subject" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" required />
            </div>
            <div className="form-group">
              <label className={`file-upload ${resumeName ? "selected" : ""}`}>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  required
                  onChange={handleFileChange}
                  ref={fileInputRef}
                />
                <span>{resumeName || "Upload Resume"}</span>
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
