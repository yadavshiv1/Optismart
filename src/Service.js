import React from 'react';
import Logo from '../src/logo.webp'

const Services = () => {
  return (
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
      <div className="footer">
        <h2>Contact Us</h2>
        <div className="contact-info">
         <div> <p>Contact</p>
          <p>Shiv: 8898585681</p>
          <p>Suresh: 8879062168</p>
          <p>Rajan: 9819583248</p>
          </div>
          <div style={{paddingBlock:'30px'}}>
          <p>Email: info@smartworkent.com</p>
          <p>shivkg11@gmail.com</p>
          </div>
        </div>
        <p>Location: 45, Hi Life Mall, Near Santacruz Station (W), Mumbai- 400054</p>
      </div>
    </div>
  );
}

export default Services;
