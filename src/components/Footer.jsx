import React from 'react';
import './Footer.css';
import logo from '../assets/log.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-logo-container">
                <img src={logo} alt="Logo" className="footer-logo" />
            </div>

            <div className="footer-links">
                <a href="/about" className="footer-link-btn">ABOUT US</a>
                <a href="/categories" className="footer-link-btn">CATEGORIES</a>
                <a href="/preorders" className="footer-link-btn">PREORDERS</a>
                <a href="/contact" className="footer-link-btn">CONTACT US</a>
                <a href="/newsletter+" className="footer-link-btn">RECEIVE OUR NEWSLETTER</a>
            </div>

            <div className="footer-text-block"> 
                <br />
                <br />
                <p>Lorem ipsum dolor sit amet consectetur sed do eiusmod tempor incididunt, <br />Quis voluptatum expedita.</p>
                <div className="footer-divider"></div>
                <div className="footer-social-icons">
                    <a href="https://www.facebook.com/share/1Kt5MSup32/"><i className="bi bi-facebook"></i></a>
                    <a href="https://twitter.com"><i className="bi bi-twitter"></i></a>
                    <a href="https://youtube.com"><i className="bi bi-youtube"></i></a>
                    <a href="https://www.instagram.com/luis_ruben.12?igsh=YWZ0bTF0dTJka2Zw"><i className="bi bi-instagram"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
