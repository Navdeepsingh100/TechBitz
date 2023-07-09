// About.js
import React from 'react';
import '../styles/About.css';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div className="about" style={{ backgroundColor: 'lightblue' }}>
      <Helmet>
        <title>About Us | Techbitz.io - Crafting Digital Success</title>
        <meta name="description" content="Learn more about Techbitz.io, a leading digital services provider. Meet our team and discover our story." />
      </Helmet>

      <div className="our-story">
        <h1>Our Story</h1>
        <p>At Techbitz.io, we have been providing comprehensive digital solutions since 2010. Discover how we grew to become an industry leader.</p>
      </div>
      <div className="meet-team">
        <h1>Meet the Team</h1>
        {/* Add team member profiles here */}
      </div>
    </div>
  );
}

export default About;