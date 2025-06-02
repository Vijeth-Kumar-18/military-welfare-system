<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SchemesPage from './pages/SchemesPage';
import FamilyGrievances from './pages/FamilyGrievances'; // ✅ Step 1: Import the new page
=======

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SchemesPage from "./pages/SchemesPage";
import EmergencyPage from "./pages/EmergencyPage";
import GrievancePage from "./pages/GrievancePage";
import HelpSupportPage from "./pages/HelpSupportPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
>>>>>>> 0155198965f9656cf82bc5d28f52bd7e89660317

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schemes" element={<SchemesPage />} />
<<<<<<< HEAD
        <Route path="/family/grievance" element={<FamilyGrievances />} /> {/* ✅ Step 2: Add the route */}
=======
        <Route path="/emergency" element={<EmergencyPage />} />
        <Route path="/grievance" element={<GrievancePage />} />
        <Route path="/help-support" element={<HelpSupportPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
>>>>>>> 0155198965f9656cf82bc5d28f52bd7e89660317
      </Routes>
    </Router>
  );
}

export default App;
