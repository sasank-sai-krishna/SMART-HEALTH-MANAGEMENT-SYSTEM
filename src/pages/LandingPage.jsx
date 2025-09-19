import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";

export default function LandingPage() {
  const [showTitle, setShowTitle] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowTitle(true), 1000);
    setTimeout(() => setShowButtons(true), 2000);
  }, []);

  return (
    <div className="landing-container">
      {/* Title */}
      {showTitle && (
        <motion.h1
          className="landing-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Smart Health Management System
        </motion.h1>
      )}

      {/* Main Buttons */}
      {showButtons && (
        <motion.div
          className="button-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Patient */}
          <Link to="/patient-login" style={{ textDecoration: "none" }}>
            <div className="circle-btn">
              <img src="images/patient1.jpg" alt="patient" />
            </div>
            <span id="names">Patient</span>
          </Link>

          {/* Management (goes to new page) */}
          <Link to="/management-options" style={{ textDecoration: "none" }}>
            <div className="circle-btn">
              <img src="images/managment.png" alt="management" />
            </div>
            <span id="names">Management</span>
          </Link>
        </motion.div>
      )}
    </div>
  );
}
