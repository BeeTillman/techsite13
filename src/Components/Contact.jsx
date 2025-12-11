import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

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
    <section id="contact" className="contact section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
          <p>
            Here at Techport13 we love making connections and meeting new people. 
            If you're interested in learning more about our services or getting to know us, 
            please send us a message and we will get back to you soon.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="info-box mb-4">
              <i className="bx bx-map"></i>
              <h3>Our Address</h3>
              <p>4505 Peachtree Lakes Dr, Berkeley Lake, GA 30096</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box mb-4">
              <i className="bx bx-envelope"></i>
              <h3>Email Us</h3>
              <p>info@techport13.com</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box mb-4">
              <i className="bx bx-phone-call"></i>
              <h3>Call Us</h3>
              <p>+1 (404) 919-2660</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <iframe
              className="mb-4 mb-lg-0"
              src="https://www.google.ca/maps/d/u/0/embed?mid=14bmOdIqxiPEk68RLpXKVrq8yYl7IZLI&ehbc=2E312F&noprof=1"
              frameBorder="0"
              style={{ border: 0, width: "100%", height: "420px" }}
              allowFullScreen
              title="Techport13 Location"
            ></iframe>
          </div>

          <div className="col-lg-6">
            <form ref={form} onSubmit={sendEmail} className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="from_name" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" name="email_address" className="form-control" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" name="company_name" className="form-control" placeholder="Company" />
              </div>
              <div className="form-group mt-3">
                <input type="text" name="phone_number" className="form-control" placeholder="Phone Number" />
              </div>
              <div className="form-group mt-3">
                <textarea name="message" className="form-control" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className={`loading ${status === "sending" ? "d-block" : ""}`}>Loading</div>
                <div className={`error-message ${status === "error" ? "d-block" : ""}`}>
                  Failed to send message. Please try again.
                </div>
                <div className={`sent-message ${status === "success" ? "d-block" : ""}`}>
                  Your message has been sent. Thank you!
                </div>
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
