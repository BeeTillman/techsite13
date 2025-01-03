import React from "react";
import "../styles.css";

const Contact = () => {
  return (
    <section className="padding" id="contact">
      <h2 style={{ textAlign: "center" }} className="large">
        Contact Us
      </h2>
      <div className="container">
        <p style={{ textAlign: "center" }}>
          Have questions or need assistance? Reach out to us at <a href="mailto:info@techport13.com">info@techport13.com</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;