import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export default function PatientLogin() {
  const [patientId, setPatientId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Patient Login:", { patientId, password });
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Patient Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Patient ID</label>
            <input
              type="text"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          {/* ✅ Back to LandingPage */}
          <button
            type="button"
            className="back-btn"
            onClick={() => navigate("/")}
          >
            ⬅ Back
          </button>
        </form>
      </div>
    </div>
  );
}
