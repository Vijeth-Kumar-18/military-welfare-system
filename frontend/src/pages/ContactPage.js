import React, { useState } from 'react';

const ContactPage = () => {
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleCheckboxChange = () => {
    setAgreeToTerms(!agreeToTerms);
  };

  return (
    <div className="contact-page" style={{
      backgroundColor: "#f8f9fa",
      minHeight: "100vh",
      padding: "3rem 0"
    }}>
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3" style={{ color: '#fc8019' }}>
            <i className="fas fa-headset me-3"></i>
            FOUJI BANDHAN 24/7 SUPPORT
          </h1>
          <p className="lead fw-bold" style={{ color: 'black' }}>
            Dedicated 24/7 support for our brave personnel and their families
          </p>
        </div>

        <div className="row g-4">
          {/* Contact Information Card */}
          <div className="col-lg-5">
            <div className="card h-100 border-0 shadow-sm" style={{
              backgroundColor: "white",
              borderRadius: "15px"
            }}>
              <div className="card-body p-4 p-lg-5">
                <h3 className="h4 fw-bold mb-4" style={{ 
                  color: "#fc8019",
                  borderBottom: "2px solidrgb(25, 44, 252)", 
                  paddingBottom: "0.5rem" 
                }}>
                  <i className="fas fa-info-circle me-2"></i>
                  Contact Information
                </h3>

                <div className="mb-4">
                  <h4 className="h6 text-uppercase fw-bold text-muted mb-2">Email Support</h4>
                  <p className="fw-bold" style={{ color: "#282c3f" }}>
                    <i className="fas fa-envelope me-2" style={{ color: "#fc8019" }}></i>
                    support@foujibandhan.in
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="h6 text-uppercase fw-bold text-muted mb-2">24/7 Helpline</h4>
                  <p className="fw-bold" style={{ color: "#282c3f" }}>
                    <i className="fas fa-phone-alt me-2" style={{ color: "#fc8019" }}></i>
                    1800-ARMY-HELP (1800-2769-4357)
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="h6 text-uppercase fw-bold text-muted mb-2">Headquarters</h4>
                  <address className="fw-bold" style={{ 
                    fontStyle: "normal",
                    color: "#282c3f"
                  }}>
                    <i className="fas fa-map-marker-alt me-2" style={{ color: "#fc8019" }}></i>
                    Army Welfare Center,<br />
                    Block C, Ministry of Defence,<br />
                    South Block, New Delhi - 110011
                  </address>
                </div>

                <div className="mt-4 pt-3 border-top border-secondary">
                  <h4 className="h6 text-uppercase fw-bold text-muted mb-3">Find Us On</h4>
                  <div className="d-flex gap-3">
                    <a href="#" className="btn btn-sm rounded-circle p-2" style={{ 
                      backgroundColor: "#3b5998",
                      color: "white"
                    }}>
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="btn btn-sm rounded-circle p-2" style={{ 
                      backgroundColor: "#1DA1F2",
                      color: "white"
                    }}>
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="btn btn-sm rounded-circle p-2" style={{ 
                      backgroundColor: "#E1306C",
                      color: "white"
                    }}>
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="btn btn-sm rounded-circle p-2" style={{ 
                      backgroundColor: "#0077B5",
                      color: "white"
                    }}>
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="col-lg-7">
            <div className="card h-100 border-0 shadow-sm" style={{
              backgroundColor: "white",
              borderRadius: "15px"
            }}>
              <div className="card-body p-4 p-lg-5">
                <h3 className="h4 fw-bold mb-4" style={{ 
                  color: "#fc8019",
                  borderBottom: "2px solidrgb(50, 9, 210)", 
                  paddingBottom: "0.5rem" 
                }}>
                  <i className="fas fa-paper-plane me-2"></i>
                  Get in Touch
                </h3>

                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label fw-bold" style={{ color: "#282c3f" }}>Full Name</label>
                    <div className="input-group">
                      <span className="input-group-text" style={{ 
                        backgroundColor: "#f8f9fa",
                        borderColor: "#e9e9eb"
                      }}>
                        <i className="fas fa-user" style={{ color: "#fc8019" }}></i>
                      </span>
                      <input 
                        type="text" 
                        className="form-control fw-bold" 
                        style={{ 
                          backgroundColor: "#f8f9fa",
                          borderColor: "#e9e9eb",
                          color: "#282c3f"
                        }}
                        id="name" 
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="form-label fw-bold" style={{ color: "#282c3f" }}>Email Address</label>
                    <div className="input-group">
                      <span className="input-group-text" style={{ 
                        backgroundColor: "#f8f9fa",
                        borderColor: "#e9e9eb"
                      }}>
                        <i className="fas fa-envelope" style={{ color: "#fc8019" }}></i>
                      </span>
                      <input 
                        type="email" 
                        className="form-control fw-bold" 
                        style={{ 
                          backgroundColor: "#f8f9fa",
                          borderColor: "#e9e9eb",
                          color: "#282c3f"
                        }}
                        id="email" 
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="subject" className="form-label fw-bold" style={{ color: "#282c3f" }}>Subject</label>
                    <div className="input-group">
                      <span className="input-group-text" style={{ 
                        backgroundColor: "#f8f9fa",
                        borderColor: "#e9e9eb"
                      }}>
                        <i className="fas fa-tag" style={{ color: "#fc8019" }}></i>
                      </span>
                      <select 
                        className="form-select fw-bold" 
                        style={{ 
                          backgroundColor: "#f8f9fa",
                          borderColor: "#e9e9eb",
                          color: "#282c3f"
                        }} 
                        id="subject"
                      >
                        <option value="">Select a subject</option>
                        
                        <option value="medical">Medical Support</option>
                        <option value="financial">Financial Assistance</option>
                        <option value="housing">Housing Queries</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-bold" style={{ color: "#282c3f" }}>Your Message</label>
                    <textarea 
                      className="form-control fw-bold" 
                      style={{ 
                        backgroundColor: "#f8f9fa",
                        borderColor: "#e9e9eb",
                        color: "#282c3f"
                      }}
                      id="message" 
                      rows="5" 
                      placeholder="Enter your message"
                    ></textarea>
                  </div>

                  <div className="mb-4 form-check">
                    <input 
                      type="checkbox" 
                      className="form-check-input" 
                      id="termsCheck" 
                      checked={agreeToTerms}
                      onChange={handleCheckboxChange}
                      style={{ 
                        borderColor: "#fc8019",
                        cursor: "pointer"
                      }}
                    />
                    <label 
                      className="form-check-label fw-bold text-muted" 
                      htmlFor="termsCheck"
                      style={{ cursor: "pointer" }}
                    >
                      By contacting us you agree to our <a href="#" className="text-decoration-none" style={{ color: "#fc8019" }}>Terms and Conditions</a> and <a href="#" className="text-decoration-none" style={{ color: "#fc8019" }}>Privacy Policy</a>
                    </label>
                  </div>

                  <div className="d-grid">
                    <button 
                      type="submit" 
                      className="btn btn-lg fw-bold" 
                      disabled={!agreeToTerms}
                      style={{
                        backgroundColor: agreeToTerms ? "#fc8019" : "#cccccc",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        padding: "12px",
                        cursor: agreeToTerms ? "pointer" : "not-allowed"
                      }}
                    >
                      SEND MESSAGE <i className="fas fa-arrow-right ms-2"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-5 pt-4 text-center">
          <p className="fw-bold small" style={{ color: "#686b78" }}>
            © Fouji Bandhan, 2025. All Rights Reserved | 
            <a href="#" className="text-decoration-none ms-2" style={{ color: "#fc8019" }}>Privacy Policy</a> | 
            <a href="#" className="text-decoration-none ms-2" style={{ color: "#fc8019" }}>Terms of Service</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ContactPage;