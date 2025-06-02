import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page" style={{
      backgroundColor: "#f8f9fa",
      minHeight: "100vh"
    }}>
      {/* Medium-thin Navbar - Consistent with Contact Page */}
      <nav className="navbar navbar-expand-lg" style={{
        backgroundColor: "white",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        height: "60px",
        padding: "0.5rem 1rem"
      }}>
        
      </nav>

      {/* Hero Section */}
      <div className="py-5" style={{
        background: "linear-gradient(rgba(19, 42, 169, 0.7), rgba(44, 31, 190, 0.7)), url('https://images.unsplash.com/photo-1580130732478-4d03694a7d1e')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white"
      }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">
                <i className="fas fa-medal me-3" style={{ color: "blue" }}></i>
                Ministry of Defence Initiative
              </h1>
              <p className="lead fw-bold">
                Serving Those Who Serve the Nation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-4">
        {/* Ministry of Defence Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <div className="pe-lg-5">
              <h2 className="fw-bold mb-4" style={{ color: "#fc8019" }}>
                <i className="fas fa-landmark me-2"></i>
                About Ministry of Defence
              </h2>
              <p className="fw-bold" style={{ color: "#282c3f" }}>
                The Ministry of Defence (MoD) is charged with coordinating and supervising all agencies and functions of the government relating directly to national security and the Indian Armed Forces.
              </p>
              <p className="fw-bold" style={{ color: "#282c3f" }}>
                The MoD's mission is to ensure national security through military preparedness, defense policy formulation, and welfare of serving and retired defense personnel.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card border-0 shadow-lg overflow-hidden" style={{ borderRadius: "15px" }}>
              <img 
                src="https://images.pexels.com/photos/163443/war-desert-guns-gunshow-163443.jpeg?auto=compress&cs=tinysrgb&w=600" 
                className="img-fluid" 
                alt="Indian Armed Forces" 
                style={{ height: "350px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Fouji Bandhan Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 order-lg-2">
            <div className="ps-lg-5">
              <h2 className="fw-bold mb-4" style={{ color: "#fc8019" }}>
                <i className="fas fa-hands-helping me-2"></i>
                Fouji Bandhan Initiative
              </h2>
              <p className="fw-bold" style={{ color: "#282c3f" }}>
                Fouji Bandhan is the flagship welfare program under the Ministry of Defence, dedicated to supporting active duty personnel, veterans, and their families.
              </p>
              <p className="fw-bold" style={{ color: "#282c3f" }}>
                Our mission is to ensure comprehensive care through financial assistance, healthcare support, housing solutions, and educational benefits for military families.
              </p>
              <ul className="fw-bold" style={{ color: "#282c3f" }}>
                <li className="mb-2">24/7 Helpline for immediate assistance</li>
                <li className="mb-2">Dedicated welfare officers in every command</li>
                <li className="mb-2">Transparent grievance redressal system</li>
                <li>Special programs for martyrs' families</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="card border-0 shadow-lg overflow-hidden" style={{ borderRadius: "15px" }}>
              <img 
                src="https://images.pexels.com/photos/20258/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" 
                className="img-fluid" 
                alt="Military Welfare" 
                style={{ height: "350px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="fw-bold mb-5" style={{ color: "#fc8019" }}>
              <i className="fas fa-star me-2"></i>
              Our Core Values
            </h2>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm py-4" style={{ borderRadius: "15px" }}>
              <div className="card-body">
                <div className="mb-3" style={{ fontSize: "2.5rem", color: "#fc8019" }}>
                  <i className="fas fa-hand-holding-heart"></i>
                </div>
                <h4 className="fw-bold mb-3" style={{ color: "#282c3f" }}>Compassion</h4>
                <p className="fw-bold" style={{ color: "#686b78" }}>
                  Treating every soldier and family with empathy and understanding
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm py-4" style={{ borderRadius: "15px" }}>
              <div className="card-body">
                <div className="mb-3" style={{ fontSize: "2.5rem", color: "#fc8019" }}>
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4 className="fw-bold mb-3" style={{ color: "#282c3f" }}>Integrity</h4>
                <p className="fw-bold" style={{ color: "#686b78" }}>
                  Maintaining highest ethical standards in all our operations
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm py-4" style={{ borderRadius: "15px" }}>
              <div className="card-body">
                <div className="mb-3" style={{ fontSize: "2.5rem", color: "#fc8019" }}>
                  <i className="fas fa-users"></i>
                </div>
                <h4 className="fw-bold mb-3" style={{ color: "#282c3f" }}>Commitment</h4>
                <p className="fw-bold" style={{ color: "#686b78" }}>
                  Unwavering dedication to our armed forces community
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 text-center" style={{ backgroundColor: "white", borderTop: "1px solid #e9e9eb" }}>
        <p className="fw-bold small mb-0" style={{ color: "#686b78" }}>
          © Fouji Bandhan, 2025. All Rights Reserved | 
          <a href="#" className="text-decoration-none ms-2" style={{ color: "#fc8019" }}>Privacy Policy</a> | 
          <a href="#" className="text-decoration-none ms-2" style={{ color: "#fc8019" }}>Terms of Service</a>
        </p>
      </footer>
    </div>
  );
};

export default AboutPage;