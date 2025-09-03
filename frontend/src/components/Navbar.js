import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        {/* Brand */}
        <NavLink
          className="navbar-brand fw-bold"
          to="/"
          style={{ color: '#fc8019' }}
        >
          Military Welfare System
        </NavLink>

        {/* Toggler */}
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

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active text-warning fw-semibold" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/schemes"
                className={({ isActive }) =>
                  isActive ? "nav-link active text-warning fw-semibold" : "nav-link"
                }
              >
                Schemes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/emergency"
                className={({ isActive }) =>
                  isActive ? "nav-link active text-warning fw-semibold" : "nav-link"
                }
              >
                Emergency
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/grievance"
                className={({ isActive }) =>
                  isActive ? "nav-link active text-warning fw-semibold" : "nav-link"
                }
              >
                Grievance
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active text-warning fw-semibold" : "nav-link"
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active text-warning fw-semibold" : "nav-link"
                }
              >
                About Us
              </NavLink>
            </li>

            {/* Logout now inside the collapsible menu */}
            <li className="nav-item">
              <button
                className="btn btn-outline-light w-100 mt-2 mt-lg-0"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
