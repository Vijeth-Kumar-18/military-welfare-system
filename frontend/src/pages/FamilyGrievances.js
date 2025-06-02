import React, { useState } from 'react';
import axios from 'axios';

const FamilyGrievancePage = () => {
  const [formData, setFormData] = useState({
    subject: '',
    description: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData,
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/grievances/family', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setMessage('Grievance submitted successfully!');
      setFormData({ subject: '', description: '' });
    } catch (err) {
      setMessage('Error submitting grievance');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 mt-10 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Submit a Grievance</h2>
      {message && <p className="mb-2 text-blue-600">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            rows={5}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FamilyGrievancePage;
