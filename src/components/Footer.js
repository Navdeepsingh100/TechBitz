import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-link-group">
          <h3>Company</h3>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-link-group">
          <h3>Resources</h3>
          <Link to="/blog">Blog</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        {/* add more link groups as needed */}
      </div>
      <div className="footer-bottom">
        <p>© 2023 Techbitz.io</p>
        <Link to="/privacy">Privacy Policy</Link>
      </div>
    </footer>
  );
}

export default Footer;
