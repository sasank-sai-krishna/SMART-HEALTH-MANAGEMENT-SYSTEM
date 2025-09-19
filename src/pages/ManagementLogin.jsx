// src/pages/ManagementPage.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

export default function ManagementPage() {
  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Management</h2>
        <div className="management-options">
          <Link to="/doctor-login">
            <button className="login-btn">Doctor</button>
          </Link>
          <Link to="/staff-login">
            <button className="login-btn">Staff</button>
          </Link>
          <Link to="/receptionist-login">
            <button className="login-btn">Receptionist</button>
          </Link>
          <Link to="/">
            <button className="back-btn">⬅ Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
