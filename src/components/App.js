import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Footer from './Footer';
import Contact from './Contact';
import Blog from './Blog';
import RequestQuote from './RequestQuote';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/requestquote" component={RequestQuote} />
          <Route component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
