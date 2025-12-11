import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>Techport13</h3>
            </div>

            <div className="col-lg-3 col-md-6">
              <p>
                4505 Peachtree Lakes Dr<br />
                Berkeley Lake, GA 30096<br />
                United States
              </p>
            </div>

            <div className="col-lg-3 col-md-6">
              <strong>Phone:</strong> +1 (404) 919-2660<br />
              <strong>Email:</strong> info@techport13.com<br />
              <strong>Homepage:</strong> https://techport13.com/
            </div>

            <div className="col-lg-3 col-md-6">
              <strong>Careers:</strong>{" "}
              <a href="https://careers.techport13.com">
                careers.techport13.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright-wrap d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start"></div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="https://www.facebook.com/techport13/" className="facebook" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://www.instagram.com/techport_13/?hl=en" className="instagram" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/techport-thirteen-inc-/mycompany/" className="linkedin" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
