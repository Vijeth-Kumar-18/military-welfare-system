import React from 'react';

const SendMessagePage = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="card shadow-lg p-4">
        <div className="text-center">
          <i className="bi bi-envelope-check-fill text-success" style={{ fontSize: '3rem' }}></i>
          <h2 className="mt-3">Message Sent Successfully!</h2>
          <p className="lead mt-2">
            Thank you for reaching out to us. Our team will get back to you as soon as possible.
          </p>
          <a href="/" className="btn btn-outline-primary mt-4">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default SendMessagePage;
