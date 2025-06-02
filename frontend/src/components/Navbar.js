import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img src={logo} alt="Logo" height="40" className="me-2" />
        <span>Military Welfare System</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/schemes">Schemes</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/emergency">Emergency</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/grievance">Grievance</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/help">Help & Support</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li> {/* 👈 Add this line */}
          <li className="nav-item"><Link className="nav-link" to="/login">Logout</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
