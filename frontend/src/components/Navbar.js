import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '10px', background: '#003366', color: '#fff' }}>
    <Link to="/" style={{ color: '#fff', marginRight: '15px' }}>Home</Link>
    <Link to="/schemes" style={{ color: '#fff' }}>Welfare Schemes</Link>
  </nav>
);

export default Navbar;
