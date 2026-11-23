import React, { useEffect,useState  } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactPopup from "../Component/Contact_pop_up";

const FAQ = () => {

  const [showPopup, setShowPopup] = useState(false);  //for adding pop up
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  const faqs = [
    {
      category: "Personal Loan",
      questions: [
        {
          q: "What is a Personal Loan?",
          a: "A personal loan is an unsecured loan that can be used for expenses such as medical emergencies, travel, weddings, education, or other personal financial needs.",
        },
        {
          q: "How is personal loan eligibility calculated?",
          a: "Eligibility generally depends on your income, age, employment status, existing EMIs, repayment capacity, and credit profile.",
        },
      ],
    },

    {
      category: "Business Loan",
      questions: [
        {
          q: "Who can apply for a Business Loan?",
          a: "Business owners, entrepreneurs, proprietors, partnership firms, and eligible companies may apply depending on the lender's requirements.",
        },
        {
          q: "Can I use a business loan for business expansion?",
          a: "Yes. Business loans are commonly used for expansion, purchasing equipment, working capital, inventory, or improving business operations.",
        },
      ],
    },

    {
      category: "Education Loan",
      questions: [
        {
          q: "What expenses can an Education Loan cover?",
          a: "Depending on the lender and loan terms, education loans may cover tuition fees, hostel charges, books, equipment, and other eligible academic expenses.",
        },
        {
          q: "Can students apply without earning income?",
          a: "Yes. In many cases, a parent or guardian may become a co-applicant based on the lender's eligibility criteria.",
        },
      ],
    },

    {
      category: "Gold Loan",
      questions: [
        {
          q: "What is a Gold Loan?",
          a: "A gold loan is a secured loan where eligible gold jewellery is pledged as security against the loan amount.",
        },
        {
          q: "Will I get my gold back after repayment?",
          a: "Yes. Once the loan amount and applicable charges are fully repaid, the pledged gold is released according to the lender's process.",
        },
      ],
    },

    {
      category: "Commercial Loan",
      questions: [
        {
          q: "What is a Commercial Loan?",
          a: "A commercial loan is designed to support commercial activities such as purchasing commercial property, office space, machinery, or business infrastructure.",
        },
        {
          q: "Who can apply for a commercial loan?",
          a: "Eligible businesses, companies, and commercial property applicants can apply subject to financial and lending requirements.",
        },
      ],
    },

    {
      category: "Health Loan",
      questions: [
        {
          q: "What is a Health Loan used for?",
          a: "A health loan helps finance eligible medical expenses such as hospitalization, surgeries, treatments, or other healthcare-related costs.",
        },
        {
          q: "Can health loans be used during emergencies?",
          a: "Yes. Subject to approval and lender terms, health loans may help individuals manage urgent medical financial requirements.",
        },
      ],
    },

    {
      category: "Home Loan",
      questions: [
        {
          q: "Can I apply for a Home Loan to buy a house?",
          a: "Yes. Home loans are commonly available for purchasing, constructing, renovating, or extending residential properties depending on loan eligibility.",
        },
        {
          q: "What factors affect home loan eligibility?",
          a: "Income, employment stability, credit profile, property value, existing liabilities, and repayment capacity are important factors.",
        },
      ],
    },

    {
      category: "Credit Card",
      questions: [
        {
          q: "What is a Credit Card?",
          a: "A credit card allows eligible users to make purchases using a credit limit approved by the issuing bank or financial institution.",
        },
        {
          q: "Does paying credit card bills on time matter?",
          a: "Yes. Timely repayment helps maintain a healthy credit history and may reduce additional interest or late payment charges.",
        },
      ],
    },

    {
      category: "Insurance",
      questions: [
        {
          q: "Why is insurance important?",
          a: "Insurance provides financial protection against specific risks according to the policy terms, helping reduce financial burden during unexpected events.",
        },
        {
          q: "What should I check before buying insurance?",
          a: "Always review coverage, exclusions, waiting periods, premium, claim conditions, and policy terms before choosing an insurance product.",
        },
      ],
    },

    {
      category: "Vehicle Loan",
      questions: [
        {
          q: "Can I get a Vehicle Loan for a new or used vehicle?",
          a: "Many lenders offer financing for both new and eligible used vehicles, subject to vehicle and borrower eligibility criteria.",
        },
        {
          q: "Does the vehicle remain under loan security?",
          a: "Generally, the financed vehicle is hypothecated to the lender until the loan is repaid according to the agreement.",
        },
      ],
    },

    {
      category: "Loan Against Security",
      questions: [
        {
          q: "What is Loan Against Security?",
          a: "It is a secured loan where eligible financial securities such as shares, mutual funds, bonds, or other approved investments may be pledged as collateral.",
        },
        {
          q: "Can I continue owning my investments?",
          a: "Ownership generally remains with you, while the securities stay pledged as collateral until the borrowing terms are satisfied.",
        },
      ],
    },
  ];

  let count = 1;

  return (
    <>
      <section
        style={{
          background: "#f0f6ff",
          padding: "70px 20px",
        }}
      >
        <div className="container">

          {/* HEADER */}

          <div
            className="text-center mb-5"
            data-aos="fade-down"
          >
            <div
              style={{
                display: "inline-block",
                background: "#bbdefb",
                color: "#1a743f",
                padding: "6px 18px",
                borderRadius: 30,
                fontSize: 13,
                fontWeight: 700,
                marginBottom: 15,
              }}
            >
              KNOWLEDGE CENTER
            </div>

            <h1
              style={{
                fontWeight: 800,
                color: "#020803",
                fontSize: "clamp(28px,5vw,48px)",
              }}
            >
              Your Financial Questions, Answered
            </h1>

            <p
              style={{
                maxWidth: 700,
                margin: "15px auto",
                color: "#5a7fa8",
                fontSize: 16,
                lineHeight: 1.7,
              }}
            >
              Everything you need to know about Personal Loan, Business Loan,
              Education Loan, Gold Loan, Home Loan, Credit Card, Insurance and
              all other financial services in one place.
            </p>
          </div>

          {/* FAQ */}

          <div className="row">
            <div className="col-lg-10 mx-auto">

              {faqs.map((section, sectionIndex) => (
                <div
                  key={section.category}
                  className="mb-5"
                  data-aos="fade-up"
                >
                  {/* CATEGORY */}

                  <h3
                    style={{
                      color: "#1a743f",
                      fontWeight: 700,
                      marginBottom: 20,
                      borderLeft: "5px solid #1565c0",
                      paddingLeft: 12,
                    }}
                  >
                    {section.category}
                  </h3>

                  <div
                    className="accordion"
                    id={`accordion${sectionIndex}`}
                  >
                    {section.questions.map((item) => {
                      const id = `faq${count}`;
                      const collapseId = `collapse${count}`;
                      count++;

                      return (
                        <div
                          key={id}
                          className="accordion-item shadow-sm mb-3 border-0"
                          data-aos="fade-up"
                        >
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed fw-semibold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#${collapseId}`}
                            >
                              <i className="bi bi-question-circle-fill me-2 text-primary"></i>
                              {item.q}
                            </button>
                          </h2>

                          <div
                            id={collapseId}
                            className="accordion-collapse collapse"
                            data-bs-parent={`#accordion${sectionIndex}`}
                          >
                            <div
                              className="accordion-body"
                              style={{
                                color: "#4b5f75",
                                lineHeight: 1.7,
                              }}
                            >
                              {item.a}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* FOOTER */}

          <div
              className="text-center mt-5"
              data-aos="zoom-in"
            >
              <button
                type="button"
                onClick={() => setShowPopup(true)}
                style={{
                  display: "inline-block",
                  background: "#1a743f",
                  color: "#fff",
                  padding: "12px 25px",
                  borderRadius: 30,
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  fontSize: "15px",
                  transition: "0.3s ease",
                }}
              >
                Still have questions? Contact Hallmark Finance today.
              </button>
            </div>

        </div>
      </section>
      {/* =================for adding CONTACT POPUP ================= */}
      <ContactPopup
        show={showPopup}
        closePopup={() => setShowPopup(false)}
      />
    </>
  );
};

export default FAQ;