import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import "./SignIn.scss";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  return (
    <div className="signin-container">
      <div style={{ width: "35%", paddingLeft: "5%" }}>
        <h2>Login</h2>
        <div style={{ fontSize: "12px" }}>
          Get access to your Orders, Wishlist and Recommendatons
        </div>
      </div>
      <div style={{ width: "60%" }}>
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

        <button className="signup-button" onClick={() => navigate("/homepage")}>
          Login
        </button>
      </div>
    </div>
  );
};

export default SignIn;
