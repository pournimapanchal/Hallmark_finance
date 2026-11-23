import React from "react";
// import { FaDirections } from "react-icons/fa";
import contactImg from "../Assets/img/connect.jpg";
const Contact = () => {
  return (
    <>
      {/* Page Title */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2>Contact Us</h2>
          <p className="text-muted">
            We are here to help you with your financial needs.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container py-5">
  <div className="row g-4 align-items-center">

    {/* Contact Image */}
    <div className="col-lg-7">
      <img
        src={contactImg}
        alt="Contact Us"
        className="img-fluid rounded shadow"
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
        }}
      />
    </div>

    {/* Contact Info */}
    <div className="col-lg-5">
      <h4 className="mb-4">Our Office</h4>

      <div className="mb-3">
        <strong>Address</strong>
        <p className="text-muted">
          Rupa Solitaire Unit No.810, 8th Floor, C Wing, Sec - 1, MBP,
          Mahape, Navi Mumbai, Maharashtra - 400710
        </p>
      </div>

      <div className="mb-3">
        <strong>Phone</strong>
        <p className="text-muted">+91 8097614040</p>
      </div>

      <div className="mb-3">
        <strong>Email</strong>
        <p className="text-muted">info@hallmark-finance.com</p>
      </div>

      <div className="mb-3">
        <strong>Working Hours</strong>
        <p className="text-muted">
          Mon - Sat : 10:00 AM - 6:00 PM <br />
          Sun : Closed
        </p>
      </div>
    </div>

  </div>
</section>

      {/* Google Map */}
      <section className="container pb-5">
        <div className="ratio ratio-16x9 mb-3">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482548.9754668227!2d72.4057388305664!3d19.11143403582964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0c28cdf949b%3A0x5199d1d2c6607fb7!2sRUPA%20SOLITAIRE%2C%20MILLENNIUM%20BUSINESS%20PARK%2C%20Millenium%20Business%20Park%2C%20Sector%202%2C%20Kopar%20Khairane%2C%20Navi%20Mumbai%2C%20Maharashtra%20400710!5e0!3m2!1sen!2sin!4v1777700868999!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Hallmark Commerce Pvt Ltd"
            
          ></iframe>
        </div>
        <div className="mb-3">
  

  {/* ✅ Get Directions Button BELOW address */}
 <div className="text-center mt-2">
  <a
    href="https://www.google.com/maps?q=Rupa+Solitaire+Millennium+Business+Park+Mahape+Navi+Mumbai"
    target="_blank"
    rel="noreferrer"
    className="btn btn-success btn-sm"
  >
    Get Directions
  </a>
</div>
</div>
      </section>
    </>
  );
};

export default Contact;
