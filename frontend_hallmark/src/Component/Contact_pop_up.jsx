import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "./Contact_pop_up.css";

const ContactPopup = ({ show, closePopup }) => {
  if (!show) {
    return null;
  }

  return (
    <div
      className="popup-overlay"
      onClick={closePopup}
    >
      <div
        className="popup-box"
        onClick={(e) => e.stopPropagation()}
      >
        <h3>Contact Us</h3>

        {/* WhatsApp */}
        <a
          href="https://wa.me/918097614040"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn whatsapp"
        >
          <FaWhatsapp className="contact-icon" />
          Chat on WhatsApp
        </a>

        {/* Call */}
        <a
          href="tel:+918097614040"
          className="contact-btn call"
        >
          <FaPhoneAlt className="contact-icon" />
          Call Now
        </a>

        {/* Close */}
        <button
          type="button"
          className="close-btn"
          onClick={closePopup}
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default ContactPopup;