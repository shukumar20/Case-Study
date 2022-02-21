import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import "./SignUpPage.scss";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  let navigate = useNavigate();

  return (
    <div className="signin-container">
      <div style={{ width: "35%", paddingLeft: "5%" }}>
        <h2>Signup</h2>
        <div style={{ fontSize: "12px" }}>
          we do not share your personal details with anyone
        </div>
      </div>
      <div style={{ width: "60%" }}>
        <div className="padding-input-box">
          <span className="p-float-label">
            <InputText
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName">First Name</label>
          </span>
        </div>
        <div className="padding-input-box">
          <span className="p-float-label">
            <InputText
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName">Last Name</label>
          </span>
        </div>
        <div className="padding-input-box">
          <span className="p-float-label">
            <InputText
              type="email"
              id="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </span>
        </div>
        <div className="padding-input-box">
          <span className="p-float-label">
            <InputText
              type="password"
              id="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="Password">Password</label>
          </span>
        </div>
        <div className="padding-input-box">
          <span className="p-float-label">
            <InputText
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
          </span>
        </div>
        <button className="signup-button" onClick={() => navigate("/homepage")}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
