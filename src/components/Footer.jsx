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
                <button className="footer-link-btn">ABOUT US</button>
                <button className="footer-link-btn">CATEGORIES</button>
                <button className="footer-link-btn">PREORDERS</button>
                <button className="footer-link-btn">CONTACT US</button>
                <button className="footer-link-btn">RECEIVE OUR NEWSLETTER</button>
            </div>

            <div className="footer-text-block">
                <br />
                <br />
                <p>Lorem ipsum dolor sit amet consectetur sed do eiusmod tempor incididunt, <br />Quis voluptatum expedita.</p>
                <div className="footer-divider"></div>
                <div className="footer-social-icons">
                    <a href="https://facebook.com"><i className="bi bi-facebook"></i></a>
                    <a href="https://twitter.com"><i className="bi bi-twitter"></i></a>
                    <a href="https://youtube.com"><i className="bi bi-youtube"></i></a>
                    <a href="https://instagram.com"><i className="bi bi-instagram"></i></a>
                </div>
            </div>
            <br />

            <div className="footer-bar">
                <div className="footer-bar-left">
                    <p>©Copy right 2025 | Privacy | Policy</p>
                </div>
                <div className="footer-bar-right">
                    <p>Designed by <span className='footer-highlight'>Web Domus Italia - Web Agency</span></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
