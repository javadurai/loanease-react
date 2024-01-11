import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer>
      <div className="container pt-4">
        <div className="row">
          <div className="col-lg-4">
            <h4>Who We Are</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae urna at lectus pulvinar tristique. Nullam sodales volutpat orci, eu tincidunt ipsum fringilla nec.</p>
          </div>
          <div className="col-lg-4">
            <h4>Get In Touch</h4>
            <p>
              <FontAwesomeIcon icon={faMapMarker} /> 123 Main Street, City, Country
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> +1 123-456-7890
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> myemail@email.com
            </p>
          </div>
          <div className="col-lg-4">
            <h4>Connect With Us</h4>
            <div className="social-icons">
              <a href="/#" className="btn btn-social-icon btn-facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="/#" className="btn btn-social-icon btn-twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="/#" className="btn btn-social-icon btn-instagram">
                {" "}
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="/#" className="btn btn-social-icon btn-linkedin">
                {" "}
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-12 text-center">
            <p>
              &copy; <span>{currentYear}</span> LoanEase. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
