import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SchemesPage from './pages/SchemesPage';
import FamilyGrievances from './pages/FamilyGrievances'; // ✅ Step 1: Import the new page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schemes" element={<SchemesPage />} />
        <Route path="/family/grievance" element={<FamilyGrievances />} /> {/* ✅ Step 2: Add the route */}
      </Routes>
    </Router>
  );
}

export default App;
