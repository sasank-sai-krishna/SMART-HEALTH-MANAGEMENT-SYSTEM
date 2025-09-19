import React from "react";
import { Link } from "react-router-dom";
import "../styles/ManagementOptions.css";   // ✅ fixed import
import "../styles/Login.css";

export default function ManagementOptions() {
  return (
    <div className="management-container">
      <h2 className="management-title">Management Options</h2>

      <div className="button-container">
        {/* Doctor */}
        <Link to="/doctor-login">
          <div className="circle-btn">
            <img src="/images/doctorbg.jpg" alt="doctor" />
          </div>
          <span className="names">Doctor</span>
        </Link>

        {/* Staff */}
        <Link to="/staff-login">
          <div className="circle-btn">
            <img src="/images/staff.jpg" alt="staff" />
          </div>
          <span className="names">Staff</span>
        </Link>

        {/* Receptionist */}
        <Link to="/receptionist-login">
          <div className="circle-btn">
            <img src="/images/reception.jpg" alt="receptionist" />
          </div>
          <span className="names">Receptionist</span>
        </Link>
      </div>

      {/* Back Button */}
      <div className="back-container">
        <Link to="/">
          <button className="back-btn">⬅ Back</button>
        </Link>
      </div>
    </div>
  );
}
