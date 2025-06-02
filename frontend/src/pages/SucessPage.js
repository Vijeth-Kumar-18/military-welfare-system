import React from 'react';

const SuccessPage = () => {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#f8f9fa",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "2rem"
    }}>
      <div style={{
        backgroundColor: "white",
        padding: "3rem",
        borderRadius: "12px",
        boxShadow: "0 0 15px rgba(0,0,0,0.1)",
        maxWidth: "600px",
        width: "100%"
      }}>
        <h1 className="fw-bold mb-4" style={{ color: "#28a745" }}>
          <i className="fas fa-check-circle me-2"></i>
          Message Sent Successfully!
        </h1>
        <p className="lead fw-bold mb-4" style={{ color: "#343a40" }}>
          Thank you for reaching out to us. <br />
          Our support team will get back to you as soon as possible.
        </p>
        <a href="/contact" className="btn btn-lg fw-bold" style={{
          backgroundColor: "#fc8019",
          color: "white",
          borderRadius: "8px",
          padding: "10px 20px",
          textDecoration: "none"
        }}>
          Back to Contact Page
        </a>
      </div>
    </div>
  );
};

export default SuccessPage;
