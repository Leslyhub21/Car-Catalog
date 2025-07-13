import React, { useState } from 'react';
import './Footer.css';
import logo from '../assets/log.png'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <div className="Log">
      <div className="logo-container">
        <img src={logo} alt="Logo" className='logo'/>
      </div>
      <div className="options">
        <button className="option-btn">ABOUT US</button>
        <button className="option-btn">CATEGORIES</button>
        <button className="option-btn">PREORDERS</button>
        <button className="option-btn">CONTACT US</button>
        <button className="option-btn">RECEIVE OUR NEWSLETTER</button>
        </div>
        <br />
        <br />
        <div className='texto-p'>
            <p>Lorem ipsum dolor sit amet consectetur sed do eiusmod temporincidunt 
            <br />Quis voluptatum expedita</p>
            <br />
        <div className='line'></div>
        <div className='icons'>
          <a href="https://facebook.com">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://twitter.com">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://youtube.com">
            <i className="bi bi-youtube"></i>
          </a>
          <a href="https://instagram.com">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
        </div>
    </div>  
)}

export default Footer;