// src/components/SocialMedia.js
import React from 'react';
import styled from 'styled-components';
import {FaFacebook, FaTwitter, FaLinkedin, FaInstagram} from 'react-icons/fa'; // import more as needed

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  padding: 1em;
`;

const SocialIcon = styled.a`
  color: #007BFF;
  font-size: 1.5em;
  &:hover {
    color: #0056b3;
  }
`;

const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <SocialIcon href="https://www.facebook.com/your-facebook-page"><FaFacebook /></SocialIcon>
      <SocialIcon href="https://www.twitter.com/your-twitter-handle"><FaTwitter /></SocialIcon>
      <SocialIcon href="https://www.linkedin.com/in/your-linkedin-id"><FaLinkedin /></SocialIcon>
      <SocialIcon href="https://www.instagram.com/your-instagram-handle"><FaInstagram /></SocialIcon>
      {/* Add more social media links as needed */}
    </SocialMediaContainer>
  );
};

export default SocialMedia;
