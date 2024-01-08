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
              <i className="fa fa-map-marker"></i> 123 Main Street, City, Country
            </p>
            <p>
              <i className="fa fa-phone"></i> +1 123-456-7890
            </p>
            <p>
              <i className="fa fa-envelope"></i> myemail@email.com
            </p>
          </div>
          <div className="col-lg-4">
            <h4>Connect With Us</h4>
            <div className="social-icons">
              <a href="/#" className="btn btn-social-icon btn-facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/#" className="btn btn-social-icon btn-twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/#" className="btn btn-social-icon btn-instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/#" className="btn btn-social-icon btn-linkedin">
                <i className="fab fa-linkedin-in"></i>
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
