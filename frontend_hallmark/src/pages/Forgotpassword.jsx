import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bankLogo from "../Assets/img/Hall_mark.png";

const ForgotPassword = () => {

const navigate = useNavigate();

const [email,setEmail] = useState("");

const handleSubmit = async(e) =>{
e.preventDefault();

try{

await axios.post("http://localhost:8080/api/send-otp",{email});

alert("OTP Sent to your Email");

navigate("/verify-otp",{state:{email}});

}catch(error){
  console.error("send-otp error:", error);
  console.error("response:", error.response);
  alert(error.response?.data || "Request failed - check console");
}
};

return(

<div className="d-flex align-items-center justify-content-center"
style={{minHeight:"100vh",background:"linear-gradient(to right,#25D366,#007bff)"}}>

<div className="card shadow-lg p-4"
style={{maxWidth:"420px",width:"100%",borderRadius:"15px"}}>

<div className="text-center mb-4">

<img
src={bankLogo}
alt="logo"
style={{width:"120px"}}
/>

<h3 className="text-success">Hallmark Commerce Pvt. Ltd</h3>

<p className="text-muted">Forgot Password</p>

</div>

<form onSubmit={handleSubmit}>

<div className="mb-3">

<label>Email ID</label>

<input
type="email"
className="form-control"
placeholder="Enter your email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

</div>

<button className="btn btn-success w-100 fw-bold">
Send OTP
</button>

</form>

</div>

</div>

);

};

export default ForgotPassword;