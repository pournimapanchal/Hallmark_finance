import React, { useEffect } from "react";
import aboutImg from "../Assets/img/about.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-md-6" data-aos="fade-right">
            <h2>About Hallmark Finance</h2>

            <p>
              Hallmark Finance is a registered NBFC dedicated to providing
              transparent and flexible lending solutions across India. With a
              team of financial professionals, we simplify borrowing for
              individuals and businesses.
            </p>

            <h5>Our Vision</h5>
            <p className="text-muted">
              To be the preferred partner for finance solutions, enabling
              growth and opportunity for customers nationwide.
            </p>

            <h5>Our Mission</h5>
            <p className="text-muted">
              To deliver seamless, trustworthy, and customer-centric financial
              services, leveraging innovation and expertise to empower
              individuals and enterprises.
            </p>

            <h5>Our Services</h5>
            <p className="text-muted">
              We offer a wide range of financial solutions including personal loans,
              business loans, education loans, commercial financing, health loans,
              vehicle financing, mutual fund investments, credit cards, and insurance.
            </p>

            <h5>Our Values</h5>
            <ul className="text-muted">
              <li>Integrity – Transparent processes and ethical practices.</li>
              <li>Customer First – Tailored solutions for individual needs.</li>
              <li>Innovation – Using technology to simplify finance.</li>
              <li>Excellence – Commitment to superior service delivery.</li>
            </ul>

            <h5>Our Achievements</h5>
            <p className="text-muted">
              With thousands of satisfied customers and a growing network across
              India, Hallmark Finance has been recognized for its reliability,
              innovative lending solutions, and customer-centric approach.
            </p>

            <h5>Commitment to Customers</h5>
            <p className="text-muted">
              We strive to provide quick approvals, competitive interest rates,
              and flexible repayment options, ensuring that our customers achieve
              their financial goals effortlessly.
            </p>
          </div>

          {/* Right Image */}
          <div className="col-md-5 offset-md-1" data-aos="fade-left">
            <img
              src={aboutImg}
              className="img-fluid rounded shadow-sm"
              alt="About Hallmark Finance"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;