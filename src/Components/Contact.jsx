import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact = () => {
  const form = useRef();
  const sectionRef = useRef(null);
  const [status, setStatus] = useState("");

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

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs.sendForm("service_19px7xt", "template_hxvren9", form.current, "AD9kASCtB252sXVHL").then(
      () => {
        setStatus("success");
        form.current.reset();
      },
      () => {
        setStatus("error");
      }
    );
  };

  return (
    <section ref={sectionRef} id="contact" className="contact-section section-transition">
      <div className="section-overlay overlay-top"></div>
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p className="subtitle">Get in touch with our team</p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <input type="text" name="from_name" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="text" name="company_name" placeholder="Company" required />
          </div>
          <div className="form-group">
            <input type="email" name="email_address" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="tel" name="phone_number" placeholder="Phone Number" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && <p className="success">Message sent successfully!</p>}
          {status === "error" && <p className="error">Failed to send message. Please try again.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
