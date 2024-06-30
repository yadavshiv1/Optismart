import React from 'react'
import {SocialIcon} from 'react-social-icons'
import Logo from '../src/logo.webp'

export default function Footer() {
  return (
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
  )
}
