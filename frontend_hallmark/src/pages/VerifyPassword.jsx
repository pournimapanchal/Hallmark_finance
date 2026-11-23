import React,{useState} from "react";
import axios from "axios";
import {useNavigate,useLocation} from "react-router-dom";
import bankLogo from "../Assets/img/Hall_mark.png";

const VerifyPassword = () => {

const navigate = useNavigate();
const location = useLocation();

const email = location.state?.email;

const [otp,setOtp] = useState("");

const handleSubmit = async(e)=>{
e.preventDefault();

try{

const verify = await axios.post(
"http://localhost:8080/api/verify-otp",
{email,otp}
);

if(verify.data === "OTP_VERIFIED"){

alert("OTP Verified Successfully");

navigate("/reset-password",{state:{email}});

}else
    {

alert("Invalid OTP");

}

}catch(error){
alert("Error occurred");
}

};

return(

<div className="d-flex align-items-center justify-content-center"
style={{minHeight:"100vh",background:"linear-gradient(to right,#25D366,#007bff)"}}>

<div className="card shadow-lg p-4"
style={{maxWidth:"420px",width:"100%",borderRadius:"15px"}}>

<div className="text-center mb-4">

<img src={bankLogo} alt="logo" style={{width:"120px"}}/>

<h3 className="text-success">Hallmark Commerce Pvt. Ltd</h3>

<p className="text-muted">OTP Verification</p>

</div>

<form onSubmit={handleSubmit}>

<div className="mb-3">

<label>Enter OTP</label>

<input
type="text"
className="form-control"
placeholder="Enter OTP"
value={otp}
onChange={(e)=>setOtp(e.target.value)}
required
/>

</div>

<button className="btn btn-success w-100 fw-bold">
Verify OTP
</button>

</form>

</div>

</div>

);

};

export default VerifyPassword;