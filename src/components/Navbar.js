import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo-link">
          <h1>TechBitz</h1>
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/about" className="navbar-link">About</Link>
        <Link to="/services" className="navbar-link">Services</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
