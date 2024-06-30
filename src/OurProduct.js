import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Cash from '../src/cash.png'
import Arrow from '../src/arrow.png'
import Graph from '../src/graph.png'
import Services from "./Service";
import Calculator from '../src/Calculator.png'
import desktop from '../src/desktop.png'
import lock_app from '../src/lock_app.png'
// import Coffline_mode from '../src/Coffline_mode.png'
import reminders from '../src/reminders.png'
import reportss from '../src/reportss.png'


export default function OurProduct() {
  return (
    <>
        <Navbar />
    <div className="services-container">
      <div className="footer">
        <h2>OPTISMART SERVICES</h2>
      </div>
      <div className="services">
        <div className="service-category">
          <h2>Tax Filling</h2>
          <ul>
            <li>Income Tax Return</li>
            <li>Assistance in Claiming Old IT Refund</li>
            <li>GST Registration</li>
            <li>GST Return Filling</li>
            <li>GSTR 2A/2B Reconciliation</li>
            <li>TDS Return Filling</li>
          </ul>
        </div>
        <div className="service-category">
          <h2>Accounting</h2>
          <ul>
            <li>Outsourcing Accounting</li>
            <li>Assistance in Preparation of Financial Statements</li>
            <li>Udyam Registration</li>
            <li>Gumasta Registration</li>
          </ul>
        </div>
        <div className="service-category">
          <h2>Loan Services</h2>
          <ul>
            <li>Business & MSME loan</li>
            <li>Government Grant</li>
            <li>IT Manpower Outsource</li>
            <li>Personal Loans</li>
            <li>All type of loan across Pan India</li>
          </ul>
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
     <Footer />
    </div>
    </>
  )
}
