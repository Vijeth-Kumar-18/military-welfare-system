import React, { useEffect, useState } from 'react';
import API from '../api/api';

const SchemesPage = () => {
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const res = await API.get('/schemes'); // Endpoint not working yet, will be in backend
        setSchemes(res.data);
      } catch (error) {
        console.error('Error fetching schemes:', error.message);
      }
    };

    fetchSchemes();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Available Welfare Schemes</h2>
      <ul>
        {schemes.length > 0 ? (
          schemes.map(scheme => (
            <li key={scheme._id}>
              <strong>{scheme.name}</strong>: {scheme.description}
            </li>
          ))
        ) : (
          <p>No schemes found or backend not connected yet.</p>
        )}
      </ul>
    </div>
  );
};

export default SchemesPage;
