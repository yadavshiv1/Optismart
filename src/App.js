import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AboutUs from './AboutUs';
import ContactModel from './ContactModel';
import MainPage from './MainPage';
import OurProduct from './OurProduct';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/our-product" element={<OurProduct />} />
          <Route path="/contact-us" element={<ContactModel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
