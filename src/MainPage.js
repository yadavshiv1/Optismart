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
          <h2>Already using ByajBook ?</h2>
          <button>Web-app login</button>
        </div>
        <div className="sec1-child">
          <img src={Section1} alt="section-1" className="section1_img" />
        </div>
      </div>
      <div className="section-2">
        <div className="sec2-child">
          <h1>About us</h1>
          <p>
            Our goal is to Bridge the Credit Gap for Rural India/Bharat through
            Lenders. We provide solutions to improve credit & finance, making it
            simplest and fastest for Rural India. Our First Product - An Android
            App was launched in July, 2021; helping business and individuals to
            digitally maintain the lending or borrowings. So far ByajBook has
            been downloaded over 350k times. As People are adopting digital
            solutions, we try to help individuals and merchants in managing
            their lending and borrowings.
          </p>
        </div>
        <div className="sec2-child">
          <img src={AboutUs} alt="section-2" className="section2_img" />
        </div>
      </div>
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
      <div className="container">
  <div className="column" style={{ flexBasis: '15%' }}>
    jkj
  </div>
  <div className="column" style={{ flexBasis: '35%' }}>
    <h1></h1>
    <div>
        <img></img>
        <h3>fdf</h3>
    </div>
    <div>
        <img></img>
        <h3>fd</h3>
    </div>
    <div>
        <img></img>
        <h3>fd</h3>
    </div>
    <button>sdf</button>
  </div>
  <img src={GoldMobile} alt="gold_mobile" />
  <div className="column" style={{ flexBasis: '15%' }}>Fourth Div</div>
</div>
      <div className="section-5">
        <div>Features</div>
        <div className="section-5-child">
            <div>
            <img src={Cash} alt="cash" className="cash_img" />
                <h2>Available on Desktop</h2>
            </div>
            <div>
            <img src={Cash} alt="cash" className="cash_img" />
                <h2>Available on Desktop</h2>
            </div>
            <div>
            <img src={Cash} alt="cash" className="cash_img" />
                <h2>Available on Desktop</h2>
            </div>
            <div>
            <img src={Cash} alt="cash" className="cash_img" />
                <h2>Available on Desktop</h2>
            </div>
            <div>
            <img src={Cash} alt="cash" className="cash_img" />
                <h2>Available on Desktop</h2>
            </div>
            <div>
            <img src={Cash} alt="cash" className="cash_img" />
                <h2>Available on Desktop</h2>
            </div>
        </div>
      </div>
      <div className="section-1">
        <div className="sec1-child">
          <h1>Simplifying Credit & Finance for Lenders in Bharat</h1>
          <h2>
            We provide solutions to improve credit & finance, making it simplest
            and fastest for Bharat.
          </h2>
          <h2>Already using ByajBook ?</h2>
          <button>Web-app login</button>
        </div>
        <div className="sec1-child">
          <img src={Section1} alt="section-1" className="section1_img" />
        </div>
      </div>
      <div className="section-1">
        <div className="sec1-child">
          <h1>Simplifying Credit & Finance for Lenders in Bharat</h1>
          <h2>
            We provide solutions to improve credit & finance, making it simplest
            and fastest for Bharat.
          </h2>
          <h2>Already using ByajBook ?</h2>
          <button>Web-app login</button>
        </div>
        <div className="sec1-child">
          <img src={Section1} alt="section-1" className="section1_img" />
        </div>
      </div>
      <div className="section-8"></div>
    <div class="contact-container">
        <div class="contact-info">
            <h1>Contact us</h1>
            <p>Reach out to us anytime.</p>
            <img src={Contact} alt="Contact Us" />
        </div>
        <div class="contact-form">
            <form>
                <div class="form-group">
                    <input type="text" placeholder="Name" required />
                    <span class="required">*</span>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Mobile number" pattern="[0-9]{10}" required />
                    <span class="required">*</span>
                </div>
                <div class="form-group">
                    <input type="email" placeholder="E-mail" required />
                </div>
                <div class="form-group">
                    <textarea placeholder="Message" rows="4" required></textarea>
                    <span class="required">*</span>
                </div>
                <button type="submit" disabled>Submit</button>
            </form>
        </div>
    </div>

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
                <a href="https://www.instagram.com/byajbook" target="_blank">
                    <img src="/assets/insta.png" alt="Instagram" height="30px" />
                </a>
                <a href="https://www.facebook.com/byajbook" target="_blank">
                    <img src="/assets/facebook.png" alt="Facebook" height="26px" />
                </a>
                <a href="https://www.linkedin.com/company/byajbook/?originalSubdomain=in" target="_blank">
                    <img src="/assets/linkedin.png" alt="LinkedIn" height="30px" />
                </a>
                <a href="https://twitter.com/byajbook" target="_blank">
                    <img src="/assets/twitter.png" alt="Twitter" height="30px" />
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
