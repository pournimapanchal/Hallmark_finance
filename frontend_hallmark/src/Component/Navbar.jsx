import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import ContactPopup from "../Component/Contact_pop_up";
import "./Navbar.css";

import logo from "../Assets/img/Hall_mark.png";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("user"));

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // CLOSE MOBILE MENU
  const closeMenu = () => {
    setIsOpen(false);
  };

  // OPEN CONTACT POPUP
  const openPopup = () => {
    closeMenu();
    setShowPopup(true);
  };

  // CLOSE CONTACT POPUP
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="bg-dark text-light py-2 topbar">
        <div className="ticker d-flex gap-5">
          <span>
            📍 Rupa Solitaire Unit No.810, 8th Floor, C Wing, Sec - 1, MBP,
            Mahape, Navi Mumbai - 400710
          </span>

          <span>📞 Call us: +918097614040</span>

          <span>✉ info@hallmark-finance.com</span>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-2">
        <div className="container">

          {/* LOGO */}
          <Link
            className="navbar-brand logo-wrapper"
            to="/"
            onClick={closeMenu}
          >
            <img
              src={logo}
              alt="Hallmark Finance"
              className="navbar-logo"
            />

            
          </Link>
          

          {/* MOBILE TOGGLE BUTTON */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          

          {/* NAVIGATION LINKS */}
          <div
            className={`collapse navbar-collapse ${
              isOpen ? "show" : ""
            }`}
          >
            <ul className="navbar-nav ms-auto align-items-lg-center">

              {/* HOME */}
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/"
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>

              {/* ABOUT */}
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about"
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>

              {/* ================= SERVICES ================= */}
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link"
                  to="/services"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Services
                </NavLink>

                <ul className="dropdown-menu">

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/services#personal"
                      onClick={closeMenu}
                    >
                      Personal Loan
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/services#business"
                      onClick={closeMenu}
                    >
                      Business Loan
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/services#education"
                      onClick={closeMenu}
                    >
                      Education Loan
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/services#gold"
                      onClick={closeMenu}
                    >
                      Gold Loan
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/services#commercial"
                      onClick={closeMenu}
                    >
                      Commercial Loan
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/services#health"
                      onClick={closeMenu}
                    >
                      Health Loan
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/services#security"
                      onClick={closeMenu}
                    >
                      Loan against Security
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/services#used"
                      onClick={closeMenu}
                    >
                      Vehicle Loan
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/services#credit"
                      onClick={closeMenu}
                    >
                      Credit Card
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/services#insurance"
                      onClick={closeMenu}
                    >
                      Insurance
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/services#home"
                      onClick={closeMenu}
                    >
                      Home Loan
                    </Link>
                  </li>

                </ul>
              </li>

              {/* CONTACT */}
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact"
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </li>

              {/* FAQ */}
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/faq"
                  onClick={closeMenu}
                >
                  FAQs
                </NavLink>
              </li>

              {/* ================= AUTH SECTION ================= */}

              {!user ? (

                /* NOT LOGGED IN */
                <li className="nav-item ms-lg-3 d-flex gap-2">

                  {/* ENQUIRY BUTTON */}
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={openPopup}
                  >
                    Enquiry
                  </button>

                  {/* LOGIN BUTTON */}
                  <Link
                    className="btn btn-outline-success"
                    to="/login"
                    onClick={closeMenu}
                  >
                    Login
                  </Link>

                </li>

              ) : (

                /* LOGGED IN */
                <li className="nav-item dropdown ms-lg-3">

                  <a
                    className="nav-link dropdown-toggle fw-bold"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    onClick={(e) => e.preventDefault()}
                  >
                    👤 {user.fullName}
                  </a>

                  <ul className="dropdown-menu dropdown-menu-end shadow">

                    {/* PROFILE */}
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/profile"
                        onClick={closeMenu}
                      >
                        My Profile
                      </Link>
                    </li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>

                    {/* LOGOUT */}
                    <li>
                      <button
                        type="button"
                        className="dropdown-item text-danger"
                        onClick={() => {
                          sessionStorage.removeItem("user");
                          window.location.href = "/";
                        }}
                      >
                        Logout
                      </button>
                    </li>

                  </ul>
                </li>
              )}

            </ul>
          </div>
        </div>
      </nav>

      {/* ================= CONTACT POPUP ================= */}
      <ContactPopup
        show={showPopup}
        closePopup={closePopup}
      />
    </>
  );
};

export default Navbar;