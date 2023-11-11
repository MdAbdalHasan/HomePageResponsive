import { Routes } from "react-router-dom";
import "./App.css";

import React from 'react';
import { Route } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from './Components/Navbar';
import About from './Pages.js/About';
import ContactForm from './Pages.js/ContactForm';
import Home from './Pages.js/Home';
import Services from './Pages.js/Service';
const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactForm" element={<ContactForm />} />
      </Routes>
      <Footer />
    </div>

  );
};

export default App;