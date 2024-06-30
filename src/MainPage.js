import React from "react";
// import Logo from "../src/logo.png";
import Logo from '../src/logo.webp'
import Section1 from "../src/section-1.png";
import AboutUs from '../src/about_us.png'
import Cash from '../src/cash.png'
import Arrow from '../src/arrow.png'
import Graph from '../src/graph.png'
import Services from "./Service";
import Calculator from '../src/Calculator.png'
import desktop from '../src/desktop.png'
// import landingImg from '../src/landing-img.png'
import lock_app from '../src/lock_app.png'
// import Coffline_mode from '../src/Coffline_mode.png'
import reminders from '../src/reminders.png'
import reportss from '../src/reportss.png'
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function MainPage() {
  return (
    <>
      <Navbar />
      <div className="section-1">
        <div className="sec1-child">
          <h1>Simplifying Credit & Finance for Lenders in Bharat</h1>
          <h2>
            We provide solutions to improve credit & finance, making it simplest
            and fastest for Bharat.
          </h2>
        </div>
        <div className="sec1-child">
          <img src={Logo} alt="section-1" className="section1_img" />
        </div>
      </div>
      <div className="section-2">
        <div className="sec2-child">
          <h1>About us</h1>
          <p>
            Our goal is to Bridge the Credit Gap for Rural India/Bharat through
            Lenders. We provide solutions to improve credit & finance, making it
            simplest and fastest for Rural India.helping business and individuals to
            digitally maintain the lending or borrowings.As People are adopting digital
            solutions, we try to help individuals and merchants in managing
            their lending and borrowings.
          </p>
        </div>
        <div className="sec2-child">
          <img src={AboutUs} alt="section-2" className="section2_img" />
        </div>
      </div>
     <div>
     <div className="section-3">
        <div className="sec-3-child">
            <div className="sec-3-child-1">
            <img src={Cash} alt="cash" className="cash_img" />
                <h2>20 million+</h2>
                <p>Money lenders in India lend to small and medium businesses and individual households.</p>
            </div>
            <div className="sec-3-child-1">
            <img src={Arrow} alt="arrow " className="cash_img" />
                <h2>$300B</h2>
                <p>Credit gap for SMEs in India. Our aim is to bridge this gap by providing lending capital to Lenders.</p>
            </div>
        </div>
        <div className="graph_img" >
        <img src={Graph} alt="graph" />
        </div>
      </div>
      <section class="features-section">
    <h2>Features</h2>
    <div class="features-container">
      <div class="feature-item">
        <img src={Calculator} alt="Available on Desktop" />
        <p>Available on Desktop</p>
      </div>
      <div class="feature-item">
        <img src={desktop} alt="Security lock" />
        <p>Security lock</p>
      </div>
      <div class="feature-item">
        <img src={lock_app} alt="Automated Reminders" />
        <p>Automated Reminders</p>
      </div>
      <div class="feature-item">
        <img src={desktop} alt="Generate Reports" />
        <p>Generate Reports</p>
      </div>
      <div class="feature-item">
        <img src={reminders} alt="Offline Mode" />
        <p>Offline Mode</p>
      </div>
      <div class="feature-item">
        <img src={reportss} alt="Calculations simplified" />
        <p>Calculations simplified</p>
      </div>
    </div>
  </section>
     <Services />
     </div>
      <div className="section-8"></div>
      <Footer />
    </>
  );
}
