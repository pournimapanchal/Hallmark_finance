import React, { useEffect,useState } from "react";
import axios from "axios";
import bankLogo from "../Assets/img/Hall_mark.png"; // your logo image
import { Link } from "react-router-dom"; 


const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  // Clear input fields whenever Login page is loaded/refreshed
  useEffect(() => {
    setLoginData({
      email: "",
      password: "",
    });
  }, []);

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/login",
        loginData
      );

    
      if (response.status === 200) {

    // Save logged-in user
    sessionStorage.setItem(
        "user",
        JSON.stringify(response.data)
    );

    // alert("Login Successful");

    window.location.href = "/";
}
      else 
        
        
        {
        alert("Invalid Email or Password");
      }
    } catch (err) {
      console.error(err);
      alert("Server Error. Please try again later.");
    }

    setLoginData({
      email: "",
      password: ""
    });
  };

  return (
    <div className="login-page d-flex align-items-center justify-content-center" style={{ minHeight: "100vh", background: "linear-gradient(to right, #25D366, #007bff)" }}>
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%", borderRadius: "15px" }}>
        
        {/* Bank Logo & Name */}
        <div className="text-center mb-4">
          <img src={bankLogo} alt="Hallmark Commerce Logo" style={{ width: "120px", marginBottom: "10px" }} />
          <h3 className="text-success">Hallmark Commerce Pvt. Ltd</h3>
          <p className="text-muted">Secure Login Portal</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email ID</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={loginData.email}
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
              placeholder="Enter Password"
              value={loginData.password}
              onChange={handleChange}
              autoComplete="new-password"
              required
            />
          </div>

          <button className="btn btn-success w-100 fw-bold" type="submit">
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-muted mb-1">Don't have an account?</p>
          <Link to="/register" className="text-success fw-bold">Register Here</Link>
        </div>

        <div className="text-center mt-3">
  <Link  to="/forgotpassword" className="text-decoration-none text-danger">
    Forgot Password?
  </Link >
</div>

      </div>
    </div>
  );
};

export default Login;