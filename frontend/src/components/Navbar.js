import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <NavLink className="navbar-brand" to="/" style={{ color: '#fc8019', fontWeight: 'bold' }}>
        Military Welfare System
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/schemes" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Schemes</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/emergency" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Emergency</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/grievance" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Grievance</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Contact Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>About Us</NavLink>
          </li>
        </ul>
        <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
