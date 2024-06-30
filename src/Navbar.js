import React from 'react'
import Logo from '../src/logo.webp'

export default function Navbar() {
  return (
    <nav className="navbar">
    <img src={Logo} alt="logo_img" className="logo" />
    <div className="right-navbar">
      <div>Home</div>
      <div>About</div>
      <div>Our Product</div>
      <div>Contact us</div>
    </div>
  </nav>
  )
}
