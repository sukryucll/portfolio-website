import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../common/Header';
import Home from '../home/Home';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Blog from './Blog';
import Contact from './Contact';
import Footer from '../common/Footer';
import ScrollToTop from './ScrollToTop';

function Pages() {
  return (
    <div>
      <Router>
        <Header />
        <ScrollToTop/>
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default Pages;
