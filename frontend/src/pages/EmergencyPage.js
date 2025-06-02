import React, { useState } from 'react';

const EmergencyPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    emergencyType: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send data to backend
    console.log('Emergency submitted:', formData);
    setStatus('🚨 Emergency alert submitted successfully!');
    setFormData({ name: '', contact: '', emergencyType: '', message: '' });
  };

  const handleSOS = () => {
    alert("🚨 SOS Alert Sent to Network!");
    // TODO: Trigger backend or alert system
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4" style={{ color: 'black' }}>Emergency Response Center</h2>

      {status && (
        <div className="alert" style={{ backgroundColor: 'blue', color: 'white' }}>
          {status}
        </div>
      )}

      <button 
        className="btn mb-4" 
        onClick={handleSOS}
        style={{ backgroundColor: '#fc8019', color: 'white' }}
      >
         Send SOS Alert
      </button>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contact Number</label>
          <input
            type="text"
            name="contact"
            className="form-control"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Type of Emergency</label>
          <select
            name="emergencyType"
            className="form-select"
            value={formData.emergencyType}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Medical">Medical</option>
            <option value="Security">Security</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Additional Message</label>
          <textarea
            name="message"
            className="form-control"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="btn"
          style={{ backgroundColor: '#fc8019', color: 'white' }}
        >
          Submit Emergency Alert
        </button>
      </form>
    </div>
  );
};

export default EmergencyPage;