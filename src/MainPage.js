import React from "react";
// import Logo from "../src/logo.png";
import Logo from '../src/logo.webp'
import Section1 from "../src/section-1.png";
import AboutUs from '../src/about_us.png'
import Cash from '../src/cash.png'
import Arrow from '../src/arrow.png'
import Graph from '../src/graph.png'
import GoldMobile from '../src/gold_mobile.png'
import Contact from '../src/contact.png'
import Services from "./Service";
import Calculator from '../src/Calculator.png'
import desktop from '../src/desktop.png'
// import landingImg from '../src/landing-img.png'
import lock_app from '../src/lock_app.png'
// import Coffline_mode from '../src/Coffline_mode.png'
import reminders from '../src/reminders.png'
import reportss from '../src/reportss.png'
import {SocialIcon} from 'react-social-icons'



export default function MainPage() {
  return (
    <>
      <nav className="navbar">
        <img src={Logo} alt="logo_img" className="logo" />
        <div className="right-navbar">
          <div>Home</div>
          <div>About</div>
          <div>Our Product</div>
          <div>Blog</div>
          <div>Investor Relations</div>
          <div>Contact us</div>
        </div>
        
      </nav>
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
      <footer class="footer-body">
    <div id="footer-body-layout">
        <div class="footer-body-left">
            <div class="logo mt-4">
            <img src={Logo} alt="logo_img" className="logo" />
            </div>
            <div class="mt-3 mb-3">
                <div class="hr"></div>
            </div>
            <span class="stay-connected-span mt-2">STAY CONNECTED</span>
            <div id="socialHandleIcons" class="w-100 mt-3">
                <a href="https://www.instagram.com" target="_blank">
                <SocialIcon network="instagram" />
                </a>
                <a href="https://www.facebook.com" target="_blank">
                <SocialIcon network="facebook" />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                <SocialIcon url="https://linkedin.com/in/couetilc"/>
                </a>
                <a href="https://twitter.com" target="_blank">
                <SocialIcon network="twitter" bgColor="#  " />
                </a>
            </div>
        </div>
        <div class="footer-body-right">
            <div class="d-flex justify-content-between legal-and-learn-more">
                <div class="footer-section">
                    <span class="section-title">LEARN MORE</span>
                    <a class="link-item mt-3" href="/">Home</a>
                    <a class="link-item mt-3" href="/about-us">About Us</a>
                    <a class="link-item mt-3" href="/our-products">Our Product</a>
                    <a class="link-item mt-3" href="/blog">Blog</a>
                    <a class="link-item mt-3" href="/">Investor Relations</a>
                    <a class="link-item mt-3" href="/">Contact Us</a>
                </div>
                <div class="footer-section">
                    <span class="section-title">LEGAL</span>
                    <a class="link-item mt-3" href="/privacy-policy">Privacy</a>
                    <a class="link-item mt-3" href="/terms-and-services">Terms and Conditions</a>
                </div>
            </div>
        </div>
    </div>
</footer>
    </>
  );
}
