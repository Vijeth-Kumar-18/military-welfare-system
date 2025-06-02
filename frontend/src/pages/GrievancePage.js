import React, { useState } from 'react';

const GrievancePage = () => {
  const [formData, setFormData] = useState({
    subject: '',
    description: '',
    contact: '',
    category: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Grievance submitted:', formData);

    // Simulate success
    setMessage('Grievance submitted successfully!');
    setFormData({ subject: '', description: '', contact: '', category: '' });

    setTimeout(() => setMessage(''), 5000);
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-warning text-white text-center">
              <h4 className="mb-0">Submit a Family Grievance</h4>
            </div>
            <div className="card-body">
              {message && (
                <div className="alert alert-success text-center">{message}</div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter the grievance subject"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Category</label>
                  <select
                    name="category"
                    className="form-select"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select Category --</option>
                    <option value="Medical">Medical</option>
                    <option value="Financial">Financial</option>
                    <option value="Housing">Housing</option>
                    <option value="Education">Education</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Contact Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Enter your contact number"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    rows="5"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe the grievance in detail"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-warning w-100 text-white fw-bold"
                >
                  Submit Grievance
                </button>
              </form>
            </div>
            <div className="card-footer text-muted text-center">
              Our support team will reach out to you shortly. Thank you for your patience.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrievancePage;
