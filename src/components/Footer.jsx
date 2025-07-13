import React from 'react';
import './Footer.css';
import logo from '../assets/log.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="Log">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>

            <div className="options">
                <button className="option-btn">ABOUT US</button>
                <button className="option-btn">CATEGORIES</button>
                <button className="option-btn">PREORDERS</button>
                <button className="option-btn">CONTACT US</button>
                <button className="option-btn">RECEIVE OUR NEWSLETTER</button>
            </div>

            <div className="texto-p">
                <br />
                <br />
                <p>Lorem ipsum dolor sit amet consectetur sed do eiusmod tempor incididunt, <br />Quis voluptatum expedita.</p>
                <div className="line"></div>
                <div className="icons">
                    <a href="https://facebook.com"><i className="bi bi-facebook"></i></a>
                    <a href="https://twitter.com"><i className="bi bi-twitter"></i></a>
                    <a href="https://youtube.com"><i className="bi bi-youtube"></i></a>
                    <a href="https://instagram.com"><i className="bi bi-instagram"></i></a>
                </div>
            </div>
            <br />
            { }
            <div className="top-bar">
                <div className="top-bar-left">
                    <p>©Copy right 2025|Privacy|Policy </p>
                </div>
                <div className="top-bar-right">
                    <p>Designed by <span className='color1'>Web Domus italia-Web Agency</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
