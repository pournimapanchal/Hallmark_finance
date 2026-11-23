import React, { useState } from "react";
import axios from "axios";
import { useNavigate,useLocation } from "react-router-dom";
import bankLogo from "../Assets/img/Hall_mark.png";

const Reset_password = () => {

const navigate = useNavigate();
const location = useLocation();

const email = location.state?.email;

const [newPassword,setNewPassword] = useState("");
const [confirmPassword,setConfirmPassword] = useState("");

const handleSubmit = async(e)=>{
e.preventDefault();

if(newPassword !== confirmPassword){
alert("Passwords do not match");
return;
}

try{

await axios.post(
"http://localhost:8080/api/reset-password",
{
email:email,
password:newPassword
}
);

alert("Password Reset Successful");

navigate("/login");

}catch(error){
alert("Reset password failed");
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

<p className="text-muted">Reset Password</p>

</div>

<form onSubmit={handleSubmit}>

<div className="mb-3">

<label>New Password</label>

<input
type="password"
className="form-control"
placeholder="Enter new password"
value={newPassword}
onChange={(e)=>setNewPassword(e.target.value)}
required
/>

</div>

<div className="mb-3">

<label>Confirm Password</label>

<input
type="password"
className="form-control"
placeholder="Confirm password"
value={confirmPassword}
onChange={(e)=>setConfirmPassword(e.target.value)}
required
/>

</div>

<button className="btn btn-success w-100 fw-bold">
Reset Password
</button>

</form>

</div>

</div>

);

};

export default Reset_password;