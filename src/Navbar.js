import React, { useState } from 'react';
import Logo from '../src/logo.webp';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <img src={Logo} alt="logo_img" className="logo" />
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="menu-icon"></div>
        <div className="menu-icon"></div>
        <div className="menu-icon"></div>
      </div>
      <div className={`right-navbar ${isOpen ? 'active' : ''}`}>
        <div><Link to="/" className='nav-link' >Home</Link></div>
        <div><Link to="/about" className='nav-link' onClick={toggleMenu}>About</Link></div>
        <div><Link to="/our-product" className='nav-link' onClick={toggleMenu}>Our Product</Link></div>
        <div><Link to="/contact-us" className='nav-link' onClick={toggleMenu}>Contact</Link></div>
      </div>
    </nav>
  );
}
