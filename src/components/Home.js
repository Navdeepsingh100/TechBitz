import React from 'react';
import { Helmet } from 'react-helmet';
import { Button, Container, Typography, Box } from '@mui/material';
import Services from './Services';
import About from './About';
import Testimonials from './Testimonials';
import Contact from './Contact';
import SocialMedia from './SocialMedia';
import Blog from './Blog';
import SearchBar from './SearchBar';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Container style={{ backgroundColor: 'lightblue' }}>
          <Helmet>
            <title>Welcome to TechBitz - Your One-Stop Digital Solution</title>
            <meta
              name="description"
              content="Embrace the future of digital with TechBitz. We offer comprehensive solutions in Digital Marketing, Web Design & Development, SEO, and Advertisement."
            />
            <meta
              name="keywords"
              content="Digital Marketing, Web Design, Web Development, SEO, Advertisement, TechBitz, Brand Visibility, Digital Presence, Digital Strategies, Data-Driven Marketing, Audience Engagement, Conversion Optimization."
            />
          </Helmet>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to TechBitz
          </Typography>
          <Typography variant="body1" gutterBottom>
            The comprehensive hub for all your digital needs. In the ever-evolving digital landscape, a robust online presence is not merely an option but a necessity for success. With our expert team skilled in Digital Marketing, Web Design & Development, SEO, and Advertisement, we provide bespoke solutions designed to amplify your brand's digital footprint. At TechBitz, you are choosing proven strategies, individualized solutions, and a dedicated team passionate about driving your success.
          </Typography>
          <Services />
          <About />
          <Testimonials />
          <Box mt={2} mb={2}>
            <Typography variant="body1" gutterBottom>
              Ready to take your digital presence to the next level? We are here to guide you on this transformational journey.
            </Typography>
            <Button variant="contained" color="primary" id="request-quote-button" href="/requestquote">
              Request a Quote
            </Button>
          </Box>
          <SearchBar />
          <Blog />
          <Contact />
          <SocialMedia />
        </Container>
      </div>
    );
  }
}

export default Home;
