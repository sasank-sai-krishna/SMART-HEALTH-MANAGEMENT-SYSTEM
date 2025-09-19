// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import PatientLogin from "./pages/PatientLogin";
import DoctorLogin from "./pages/DoctorLogin";
import StaffLogin from "./pages/StaffLogin";
import ReceptionistLogin from "./pages/ReceptionistLogin";
import ManagementOptions from "./pages/ManagementOptions";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/patient-login" element={<PatientLogin />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/staff-login" element={<StaffLogin />} />
        <Route path="/receptionist-login" element={<ReceptionistLogin />} />
        <Route path="/management-options" element={<ManagementOptions />} />
      </Routes>
    </Router>
  );
}
