import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';
import logo from '../assets/logo.jpeg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" width="40" height="40" className="d-inline-block align-text-top me-2" />
          <span>Military Welfare System</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/schemes">Schemes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/emergency">Emergency</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/grievance">Grievance</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">Help & Support</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-danger" to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
