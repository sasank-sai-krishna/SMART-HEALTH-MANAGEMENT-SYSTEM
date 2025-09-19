import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export default function StaffLogin() {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Staff Login:", { employeeId, password });
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Staff Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Employee ID</label>
            <input
              type="text"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
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

          {/* ✅ Back to ManagementOptions */}
          <button
            type="button"
            className="back-btn"
            onClick={() => navigate("/management-options")}
          >
            ⬅ Back
          </button>
        </form>
      </div>
    </div>
  );
}
