import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import Logo from '../src/logo.webp'
import Founder from '../src/founder.jpeg'

export default function AboutUs() {
    const teamMembers = [
        { name: 'Fouder & CEO', image: Founder },
        // { name: 'Member 2', image: 'path/to/image2.png' },
        // { name: 'Member 3', image: 'path/to/image3.png' },
      ];
    
  return (
  <>
  <Navbar />
     <div>
     <section className="who-we-are">
    <h2>Who We Are?</h2>
    <p>
      Our goal is to Bridge the Credit Gap for Bharat through Lenders. We provide solutions to improve credit & finance, making it simplest and fastest for Bharat. Money lenders extend loans from their business revenue and wealth or savings, they also rely on loans from other informal lenders for lending capital. Our aim is to simplify their lending business and help them extend credit to more people who don't have access to formal credit, managing their lendings and borrowings.
    </p>
    <div className="app-image">
      <img src={Logo} alt="App Screenshot" />
    </div>
  </section>
  <section className="meet-our-team">
      <h2>Meet Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
          </div>
        ))}
      </div>
    </section>
   </div>
   <Footer />
  </>
  )
}
