import React from 'react';
import '../styles/Blog.css';
import { Helmet } from 'react-helmet';

class Blog extends React.Component {
  render() {
    return (
      <div className="blog-container" style={{ backgroundColor: 'lightblue' }}>
        <Helmet>
          <title>Techbitz.io Blog | Tips and Insights for Online Success</title>
          <meta name="description" content="Explore the Techbitz.io Blog for latest industry updates, web development trends, digital marketing insights, and SEO strategies to enhance your business growth." />
        </Helmet>
        <div className="heading">
          <h2>Explore the Latest Digital Trends</h2>
        </div>
        <div className="content">
          <p>Stay ahead of the curve with our insightful blogs. Our experts at Techbitz.io share their knowledge and expertise on the latest industry trends, tips, and strategies in web design, digital marketing, testing services, SEO, and more. Dive in to enhance your understanding and grow your business.</p>
        </div>
      </div>
    );
  }
}

export default Blog;