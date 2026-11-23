import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bankLogo from "../Assets/img/Hall_mark.png"; // Your bank logo
import { Link } from "react-router-dom";  

// pournimapanchal1@gmail.com            pournima12

// poonamgambhire00@gmail.com              poonam12


const RegistrationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:8080/api/register",
      formData
    );

    alert(response.data);

    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
    });

    navigate("/login");
  } catch (error) {
    alert(error.response?.data || "Registration failed");
  }
};

  return (
    <div
      className="registration-page d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #25D366, #007bff)",
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{ maxWidth: "450px", width: "100%", borderRadius: "15px" }}
      >
        {/* Bank Logo & Name */}
        <div className="text-center mb-4">
          <img
            src={bankLogo}
            alt="Hallmark Commerce Logo"
            style={{ width: "120px", marginBottom: "10px" }}
          />
          <h3 className="text-success">Hallmark Commerce Pvt. Ltd</h3>
          <p className="text-muted">Create your account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="form-control"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email ID</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              className="form-control"
              placeholder="Enter mobile number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100 fw-bold">
            Sign Up
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-muted mb-1">Already have an account?</p>
          <Link to="/login" className="text-success fw-bold">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;