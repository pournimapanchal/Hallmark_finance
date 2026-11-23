import { Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Reset_password from "./pages/Reset_password";
import ForgotPassword from "./pages/Forgotpassword";
import VerifyPassword from "./pages/VerifyPassword";
import Profile from "./pages/Profile";

import LoanDetails from "./pages/LoanDetails";

import "./App.css";


function App() {

  return (

    <div className="app-wrapper">

      {/* ================= NAVBAR ================= */}

      <Navbar />


      {/* ================= MAIN CONTENT ================= */}

      <div className="main-content">

        <Routes>

          {/* ================= HOME ================= */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* ================= ABOUT ================= */}

          <Route
            path="/about"
            element={<About />}
          />


          {/* ================= SERVICES ================= */}

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/services/:loanSlug"
            element={<Services />}
          />


          {/* ================= CONTACT ================= */}

          <Route
            path="/contact"
            element={<Contact />}
          />


          {/* ================= FAQ ================= */}

          <Route
            path="/faq"
            element={<FAQ />}
          />


          {/* ================= AUTHENTICATION ================= */}

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Registration />}
          />

          <Route
            path="/forgotpassword"
            element={<ForgotPassword />}
          />

          <Route
            path="/verify-otp"
            element={<VerifyPassword />}
          />

          <Route
            path="/reset-password"
            element={<Reset_password />}
          />


          {/* ================= PROFILE ================= */}

          <Route
            path="/profile"
            element={<Profile />}
          />


          {/* ================= LOAN DETAILS ================= */}

          <Route
            path="/loans/:loanId"
            element={<LoanDetails />}
          />

        </Routes>

      </div>


      {/* ================= FOOTER ================= */}

      <Footer />

    </div>

  );

}


export default App;