import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function ContactModel() {
  return (
    <div>
    <Navbar />
    <div className='contact-model-container'>
        <div className='contact-model'>
      <h2>Contact Us</h2>
    </div>
    <div className='contact-model-info'>
        <div> <p>Contact</p>
          <p>Shiv: 8898585681</p>
          <p>Suresh: 8879062168</p>
          <p>Rajan: 9819583248</p></div>
        <div style={{paddingBlock:'30px'}}> <p>Email: info@smartworkent.com</p>
          <p>shivkg11@gmail.com</p></div>
    </div>
    <p style={{textAlign: "center",color:"#000"}}>Location: 45, Hi Life Mall, Near Santacruz Station (W), Mumbai- 400054</p>
    </div>
    <Footer />
    </div>
  )
}
