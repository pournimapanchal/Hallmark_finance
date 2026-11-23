import React from "react";
import { Link } from "react-router-dom";

import plImg from "../Assets/img/PL.jpg";
import blImg from "../Assets/img/BL.jpg";
import elImg from "../Assets/img/EL.jpg";
import glImg from "../Assets/img/gold_loan.webp";
// import hlImg from "../Assets/img/HL.jpg";

import "./LoanCategories.css";


const loans = [
  {
    id: "01.",
    name: "Personal Loan",
    img: plImg,
    slug: "personal",
  },
  {
    id: "02.",
    name: "Business Loan",
    img: blImg,
    slug: "business",
  },
  {
    id: "03.",
    name: "Education Loan",
    img: elImg,
    slug: "education",
  },
  {
    id: "04.",
    name: "Gold Loan",
    img: glImg,
    slug: "gold",
  }
  // {
  //   id: "05.",
  //   name: "Health Loan",
  //   img: hlImg,
  //   slug: "health",
  // },
  // {
  //   id: "06.",
  //   name: "Commercial Loan",
  //   img: blImg,
  //   slug: "commercial-loan",
  // },
  // {
  //   id: "07.",
  //   name: "Loan Against Security",
  //   img: glImg,
  //   slug: "loan-against-security",
  // },
  // {
  //   id: "08.",
  //   name: "Vehicle Loan",
  //   img: blImg,
  //   slug: "vehicle-loan",
  // },
  // {
  //   id: "09.",
  //   name: "Credit Card",
  //   img: plImg,
  //   slug: "credit-card",
  // },
  // {
  //   id: "10.",
  //   name: "Insurance",
  //   img: hlImg,
  //   slug: "insurance",
  // },
  // {
  //   id: "11.",
  //   name: "Home Loan",
  //   img: hlImg,
  //   slug: "home-loan",
  // },
];


const LoanCategories = () => {
  return (
    <section className="loan-categories-section w-100">

      {/* ================= HEADING ================= */}

      <div className="text-center py-5 loan-heading">

        <h2>Discover All the Loans for You</h2>

        <p>
          Choose the right financial solution according to your
          needs and requirements.
        </p>

      </div>


      {/* ================= LOAN CARDS ================= */}

      <div className="container-fluid px-0">

        <div className="row g-0">

          {loans.map((loan, index) => (
  <div
    className="col-lg-3 col-md-6 col-12"
    key={index}
  >
    <Link
  to={`/services/${loan.slug}`}
      className="loan-box text-white d-flex align-items-end"
      style={{
        backgroundImage: `linear-gradient(
          to top,
          rgba(0, 0, 0, 0.75),
          rgba(0, 0, 0, 0.05)
        ), url(${loan.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
        padding: "25px",
        textDecoration: "none",
      }}
    >
      <div className="loan-content">
        <h4>
          <span>{loan.id}</span>{" "}
          {loan.name}
        </h4>

        <p className="find-more">
          FIND OUT MORE
          <span className="arrow"> →</span>
        </p>
      </div>
    </Link>
  </div>
))}

        </div>

      </div>

    </section>
  );
};


export default LoanCategories;