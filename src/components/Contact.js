import React from 'react';
import '../styles/Contact.css';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <div className="contact" style={{ backgroundColor: 'lightblue' }}>
      <Helmet>
        <title>Contact Us | Techbitz.io - Crafting Digital Success</title>
        <meta name="description" content="Contact Techbitz.io for all your digital needs. We are here to help you succeed online." />
      </Helmet>

      <div className="contact-form">
        <h1>Get in Touch</h1>
        {/* Add a contact form here */}
      </div>
      <div className="other-contact-methods">
        <h1>Other Ways to Reach Us</h1>
        {/* Add other contact methods like phone or email */}
      </div>
    </div>
  );
}

export default Contact;