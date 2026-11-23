import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loanDetails from "../data/loanDetails";
import ContactPopup from "../Component/Contact_pop_up";
import "./LoanDetails.css";

const LoanDetails = () => {

  const { loanId } = useParams();

  const loan = loanDetails[loanId];

  const [showContact, setShowContact] = useState(false);


  /* ================= SCROLL TO TOP ================= */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [loanId]);


  if (!loan) {
    return (
      <div className="container text-center py-5">

        <h2>Loan Not Found</h2>

        <p>
          The loan you are looking for does not exist.
        </p>

      </div>
    );
  }


  return (
    <>

      {/* ================= HERO SECTION ================= */}

      <section className="loan-details-hero">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-7">

              <h1>
                {loan.title}
              </h1>

              <p>
                {loan.overview}
              </p>


              {/* ================= CONTACT US ================= */}

              <button
                className="btn loan-contact-btn"
                onClick={() => setShowContact(true)}
              >
                Contact Us
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* ================= LOAN OVERVIEW ================= */}

      <section className="loan-overview py-5">

        <div className="container">

          <div className="text-center mb-5">

            <h2>
              Loan Overview
            </h2>

            <p>
              Key information about {loan.title}
            </p>

          </div>


          <div className="row g-4">

            <div className="col-md-4">

              <div className="loan-info-card">

                <h5>
                  Interest Rate
                </h5>

                <p>
                  {loan.interestRate}
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="loan-info-card">

                <h5>
                  Loan Amount
                </h5>

                <p>
                  {loan.loanAmount}
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="loan-info-card">

                <h5>
                  Loan Tenure
                </h5>

                <p>
                  {loan.tenure}
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="loan-features py-5">

        <div className="container">

          <h2 className="text-center mb-4">
            Key Features
          </h2>

          <div className="row justify-content-center">

            <div className="col-lg-8">

              <ul className="loan-list">

                {loan.features.map((feature, index) => (

                  <li key={index}>
                    {feature}
                  </li>

                ))}

              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ELIGIBILITY ================= */}

      <section className="loan-eligibility py-5">

        <div className="container">

          <h2 className="text-center mb-4">
            Eligibility Criteria
          </h2>

          <div className="row justify-content-center">

            <div className="col-lg-8">

              <ul className="loan-list">

                {loan.eligibility.map((item, index) => (

                  <li key={index}>
                    {item}
                  </li>

                ))}

              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* ================= DOCUMENTS ================= */}

      <section className="loan-documents py-5">

        <div className="container">

          <h2 className="text-center mb-4">
            Required Documents
          </h2>

          <div className="row justify-content-center">

            <div className="col-lg-8">

              <ul className="loan-list">

                {loan.documents.map((document, index) => (

                  <li key={index}>
                    {document}
                  </li>

                ))}

              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* ================= HOW TO APPLY ================= */}

      <section className="how-to-apply py-5">

        <div className="container">

          <h2 className="text-center mb-4">
            How to Apply
          </h2>

          <div className="row justify-content-center">

            <div className="col-lg-8">

              <ol className="apply-list">

                {loan.howToApply.map((step, index) => (

                  <li key={index}>
                    {step}
                  </li>

                ))}

              </ol>

            </div>

          </div>

        </div>

      </section>


    


      {/* ================= CONTACT POPUP ================= */}

      <ContactPopup
        show={showContact}
        closePopup={() => setShowContact(false)}
      />

    </>
  );
};

export default LoanDetails;