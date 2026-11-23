
import React from "react";
import "./Footer.css";
import logo from "../Assets/img/Hall_mark.png";

const Footer = () => {
  return (
    <footer className="site-footer bg-dark text-light mt-5 pt-5 pb-3">
      <div className="container">
        <div className="row g-4">

          {/* COMPANY INFO */}
          <div className="col-md-4">
            <div className="d-flex align-items-center mb-3">
              <img
                src={logo}
                alt="Hallmark Logo"
                className="footer-logo me-2"
              />

              <h5 className="text-white mb-0">
                Hallmark Commerce Pvt. Ltd
              </h5>
            </div>

            <p>
              Please remember that how far you go is
              <br />
              up to you. There is no substitute for your
              <br />
              own work and effort in succeeding.
            </p>
          </div>

          {/* SERVICES - NO LINKS */}
          <div className="col-md-2">
            <h6>Services</h6>

            <ul className="list-unstyled">
              <li>Personal Loans</li>
              <li>Business Loans</li>
              <li>Education Loans</li>
              <li>Gold Loans</li>
              <li>Health Loans</li>
              <li>Home Loans</li>
            </ul>
          </div>

          {/* CONTACT - NO LINKS */}
          <div className="col-md-4 footer-contact">
            <h6>Contact</h6>

            <p>
              Rupa Solitaire Unit No.810, 8th Floor,
              <br />
              C Wing, Sec - 1, MBP, Mahape, Navi
              <br />
              Mumbai, Maharashtra - 400710
            </p>

            <p className="phone-number">
              +91 8097614040
            </p>
          </div>

          {/* WORKING HOURS */}
          <div className="col-md-2 open-hours">
            <h6>Working Hours</h6>

            <p className="small">
              Mon - Sat : 10:00 AM - 6:00 PM
            </p>

            <p className="small sunday-off">
              Sun : Closed
            </p>
          </div>

        </div>

        <hr className="border-secondary" />

        {/* COPYRIGHT & PRIVACY POLICY */}
<div className="text-center text-md-start small">
  © {new Date().getFullYear()} Hallmark Commerce Pvt. Ltd.
  All rights reserved.
  <span className="ms-2">|</span>
  <span className="ms-2">Privacy Policy</span>
</div>
      </div>
    </footer>
  );
};

export default Footer;
