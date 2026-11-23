import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import personal from "../Assets/img/Personal.jpg";
import business from "../Assets/img/business.jpg";
import education from "../Assets/img/education.jpg";
import commercial from "../Assets/img/commercial.jpg";
import health from "../Assets/img/health.jpg";
import security from "../Assets/img/loan.jpg";
import used from "../Assets/img/used.jpg";

import credit from "../Assets/img/creditcard.jpg";
import insurance from "../Assets/img/insurance.jpg";
import gold from "../Assets/img/gold_loan.webp";
import home from "../Assets/img/home.jpg";

import ContactPopup from "../Component/Contact_pop_up";

import {
  FaMoneyBillWave,
  FaArrowRight
} from "react-icons/fa";

import "./Services.css";


const services = [
  {
    id: "personal",
    title: "Personal Loan",
    slug: "personal",
    img: personal,
    desc: "Unsecured loans for personal needs such as medical expenses, travel, weddings or home improvements with quick processing.",
    points: [
      "No collateral required (eligible applicants)",
      "Quick documentation",
      "Competitive interest rates",
    ],
    btn: "Apply Now",
  },

  {
    id: "business",
    title: "Business Loan",
    slug: "business",
    img: business,
    desc: "Working capital and term loans for SMEs, entrepreneurs, and startups to manage inventory, business expansion, machinery purchases, or cash flow requirements.",
    points: [
      "Interest Rate: 19.9% per annum",
      "Eligibility: Self-Employed Individuals",
      "Business Experience: Minimum 3 Years",
      "Minimum Monthly Income: Above ₹30,000",
      "Flexible repayment options",
      "Fast loan approval & disbursal",
      "Minimal documentation",
    ],
    btn: "Apply Now",
    reverse: true,
  },

  {
    id: "education",
    title: "Education Loan",
    slug: "education",
    img: education,
    desc: "Finance higher education in India or abroad including tuition fees, living expenses and exam-related costs.",
    points: [
      "Tuition & living cost coverage",
      "Moratorium during study period",
      "Easy co-applicant process",
    ],
    btn: "Apply Now",
  },

  {
    id: "gold",
    title: "Gold Loan",
    slug: "gold",
    img: gold,
    desc: "Get instant funds by pledging your gold with minimal documentation and quick approval process.",
    points: [
      "Instant loan against gold",
      "Low interest rates",
      "Safe & secure storage",
      "Interest Rate: 12.9% per annum",
      "Loan Tenure: Up to 1 Year",
      "Minimal documentation",
      "Quick approval & instant disbursal",
    ],
    btn: "Apply Now",
    reverse: true,
  },

  {
    id: "commercial",
    title: "Commercial Loan",
    slug: "commercial",
    img: commercial,
    desc: "Financing for commercial real estate, equipment and large capital expenditure needs.",
    points: [
      "Capital expenditure loans",
      "Equipment financing",
      "Structured repayments",
    ],
    btn: "Apply Now",
  },

  {
    id: "health",
    title: "Health Loan",
    slug: "health",
    img: health,
    desc: "Medical financing for surgeries, treatments and emergencies with quick approval and flexible EMIs.",
    points: [
      "Fast processing",
      "Minimal documentation",
      "Affordable EMI options",
    ],
    btn: "Apply Now",
    reverse: true,
  },

  {
    id: "security",
    title: "Loan Against Security",
    slug: "security",
    img: security,
    desc: "Secure loans backed by property, shares, mutual funds or fixed deposits at lower interest rates.",
    points: [
      "Lower interest rates",
      "Higher eligibility",
      "Flexible tenure",
    ],
    btn: "Apply Now",
  },

  {
    id: "used",
    title: "Vehicle Loan",
    slug: "vehicle",
    img: used,
    desc: "Easy financing for pre-owned cars and two-wheelers with quick approval.",
    points: [
      "Used cars & bikes",
      "Fast processing",
      "Easy EMI options",
    ],
    btn: "Apply Now",
    reverse: true,
  },

  {
    id: "credit",
    title: "Credit Card",
    slug: "credit",
    img: credit,
    desc: "Apply for credit cards with rewards, cashback and flexible credit limits.",
    points: [
      "Rewards & cashback cards",
      "Quick eligibility check",
      "Minimal documentation",
    ],
    btn: "Apply Now",
  },

  {
    id: "insurance",
    title: "Insurance",
    slug: "insurance",
    img: insurance,
    desc: "Comprehensive insurance plans for life, health, vehicles and general coverage.",
    points: [
      "Life & health insurance",
      "Vehicle & general insurance",
      "Customized plans",
    ],
    btn: "Apply Now",
    reverse: true,
  },

  {
    id: "home",
    title: "Home Loan",
    slug: "home",
    img: home,
    desc: "Turn your dream home into reality with affordable home loans, competitive interest rates, and hassle-free processing.",
    points: [
      "Interest Rate: Starting from 8.5% per annum",
      "Loan Tenure: Up to 300 months",
      "Eligibility: Minimum 2 Years of Work/Business Experience",
      "Available for Salaried Employees",
      "Available for Self-Employed Professionals & Business Owners",
      "High loan amount eligibility",
      "Quick approval with minimal documentation",
    ],
    btn: "Apply Now",
  },
];


const Services = () => {

  const location = useLocation();

  // Popup is ONLY for Request a Callback
  const [popupOpen, setPopupOpen] = useState(false);


  const openPopup = () => {
    setPopupOpen(true);
  };


  const closePopup = () => {
    setPopupOpen(false);
  };


  // Hash scrolling
  useEffect(() => {

    if (location.hash) {

      const element = document.querySelector(location.hash);

      if (element) {

        element.scrollIntoView({
          behavior: "smooth",
        });

      }

    }

  }, [location]);


  return (

    <section className="services-bg py-5">

      <div className="container">

        {/* ================= PAGE HEADING ================= */}

        <h2 className="text-center mb-5">
          Our Loan & Financial Services
        </h2>


        {/* ================= SERVICES ================= */}

        {services.map((service, index) => (

          <div key={index}>

            <div
              id={service.id}
              className="row align-items-center mt-4"
            >

              {/* ================= TEXT ================= */}

              <div
                className={`col-md-6 ${
                  service.reverse ? "order-md-2" : ""
                }`}
              >

                <h3>
                  {service.title}
                </h3>

                <p className="text-muted">
                  {service.desc}
                </p>

                <ul>

                  {service.points.map((point, i) => (

                    <li key={i}>
                      {point}
                    </li>

                  ))}

                </ul>


                {/* ================= APPLY NOW ================= */}

                <Link
                  to={`/loans/${service.slug}`}
                  className="premium-btn text-decoration-none"
                >

                  <FaMoneyBillWave className="btn-icon" />

                  {service.btn}

                  <FaArrowRight className="arrow-icon" />

                </Link>

              </div>


              {/* ================= IMAGE ================= */}

              <div
                className={`col-md-6 ${
                  service.reverse ? "order-md-1" : ""
                }`}
              >

                <img
                  src={service.img}
                  alt={service.title}
                  className="img-fluid rounded shadow-sm"
                />

              </div>

            </div>

            <hr />

          </div>

        ))}


        {/* ================= REQUEST CALLBACK ================= */}

        <div className="text-center mt-5">

          <button
            className="premium-btn big-btn"
            onClick={openPopup}
          >

            <FaMoneyBillWave className="btn-icon" />

            Request a Callback

            <FaArrowRight className="arrow-icon" />

          </button>

        </div>

      </div>


      {/* ================= CONTACT POPUP ================= */}

      {popupOpen && (

        <ContactPopup
          closePopup={closePopup}
          show={popupOpen}
        />

      )}

    </section>

  );
};


export default Services;