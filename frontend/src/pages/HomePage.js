import React from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage-container bg-white">
      {/* Hero Section */}
      <div className="hero-section text-center text-white d-flex align-items-center justify-content-center">
        <div>
          <h1>Empowering Our Heroes and Their Families</h1>
          <p>Explore government welfare schemes for Army personnel and families</p>
          <button className="btn btn-primary mt-3" onClick={() => navigate("/schemes")}>
            Explore Schemes
          </button>
        </div>
      </div>

      {/* Search Section */}
      <div className="container my-5">
        <h4 className="mb-3 text-center">Search Welfare Schemes</h4>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Search by scheme, benefit, or keyword..."
        />
      </div>

      {/* Categories Section */}
      <div className="container my-5">
        <h4 className="text-center mb-4">Popular Categories</h4>
        <div className="row text-center">
          {[
            { title: "Medical", icon: "🩺" },
            { title: "Education", icon: "🎓" },
            { title: "Home Allowance", icon: "🏠" },
            { title: "Pension", icon: "💰" },
            { title: "Scholarships", icon: "📚" },
          ].map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card category-card h-100">
                <div className="card-body">
                  <div className="icon">{item.icon}</div>
                  <h5 className="card-title mt-2">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <div className="container my-5">
        <h4 className="text-center mb-4">Featured Welfare Schemes</h4>
        <div className="row">
          {[1, 2, 3].map((id) => (
            <div className="col-md-4 mb-4" key={id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Scheme Title {id}</h5>
                  <p className="card-text">
                    Short description about this welfare scheme. Click to read more.
                  </p>
                  <button className="btn btn-outline-primary btn-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
