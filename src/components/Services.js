import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import WebDesignImg from '../assets/images/WebDesign.jpg';
import DmImg from '../assets/images/DM.jpg';
import SeoImg from '../assets/images/SEO.jpg';
import '../styles/Services.css';

const ServiceCard = styled.div`
  background: url(${props => props.bgImg}) no-repeat center/cover;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  transition: transform .2s;
  :hover {
    transform: scale(1.1);
  }
`;

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = setTimeout(() => {
      setServices([
        { id: 1, title: 'Web Design', description: 'Bespoke web design services for your business', img: WebDesignImg },
        { id: 2, title: 'Digital Marketing', description: 'Result-driven digital marketing services', img: DmImg },
        { id: 3, title: 'SEO', description: 'Advanced SEO solutions to improve your website ranking', img: SeoImg },
        // Add more services as needed
      ]);
    }, 2000);

    return () => clearTimeout(fetchServices);
  }, []);

  return (
    <div className="services-container" style={{ backgroundColor: 'lightblue' }}>
      <Helmet>
        <title>Our Services | Techbitz.io - Crafting Digital Success</title>
        <meta name="description" content="At Techbitz.io, we offer a wide array of digital services including web design, development, SEO, digital marketing, and testing services for business growth." />
      </Helmet>
      <div className="heading">
        <h2>Services Tailored to Your Business Needs</h2>
      </div>
      <div className="content">
        <p>At Techbitz.io, we provide an extensive suite of digital services designed to transform your online business. Our services include bespoke web design and development, result-driven digital marketing, meticulous testing services, and advanced SEO solutions. We work closely with our clients to understand their needs and deliver solutions that drive real results.</p>
      </div>
      <div className="services-list">
        {services.map(service => (
          <ServiceCard key={service.id} bgImg={service.img}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </ServiceCard>
        ))}
      </div>
    </div>
  );
}

export default Services;
