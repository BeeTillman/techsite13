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
    <section ref={sectionRef} id="contact" className="contact section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Here at Techport13 we love making connections and meeting new people. If you're interested in joining our team or getting to know us please send us a message and we will get back to you soon.</p>
        </div>

        <div className="contact-two-col">
          <div>
            <div className="info-column">
              <div className="info-box mb-4">
                <i className="bx bx-map"></i>
                <h3>Our Address</h3>
                <p>4505 Peachtree Lakes Dr<br />Berkeley Lake, GA 30096</p>
              </div>
              <div className="info-box mb-4">
                <i className="bx bx-envelope"></i>
                <h3>Email Us</h3>
                <p>info@techport13.com</p>
              </div>
              <div className="info-box mb-4">
                <i className="bx bx-phone-call"></i>
                <h3>Call Us</h3>
                <p>+1 (404) 919-2660</p>
              </div>
            </div>
          </div>

          <div>
            <form ref={form} onSubmit={sendEmail} className="php-email-form">
              <div className="grid">
                <div className="form-group">
                  <input type="text" name="from_name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" name="email_address" id="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="company_name" id="company" placeholder="Company" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="phone_number" id="phone" placeholder="Phone Number" />
                </div>
                <div className="form-group full-width">
                  <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div className="form-group full-width">
                  <label htmlFor="file_upload">Upload File (Optional)</label>
                  <input type="file" className="form-control-file" id="file_upload" name="file_upload" />
                </div>
              </div>
              <div className="my-3">
                <div className={`loading ${status === "sending" ? "d-block" : "d-none"}`}>Loading</div>
                <div className={`error-message ${status === "error" ? "d-block" : "d-none"}`}>Failed to send message. Please try again.</div>
                <div className={`sent-message ${status === "success" ? "d-block" : "d-none"}`}>Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center">
                <button type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
