import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    // For now, we'll just navigate to home after "login"
    navigate('/home');
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold">Army Personnel Login</h2>
          <p className="text-muted">Access welfare schemes and services</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Military Email</label>
            <input 
              type="email" 
              className="form-control" 
              placeholder="Enter your military email" 
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              placeholder="Enter password" 
              required
            />
          </div>
          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <div className="text-center">
            <a href="#" className="text-decoration-none">Forgot password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;