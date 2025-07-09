import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram } from 'react-icons/fa';
import logo from '../assets/img/logo.jpg'; 
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      {/* Top bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <a href="https://www.facebook.com/?locale=es_LA" className="social-icon"><FaFacebookF /></a>
          <a href="https://x.com/?lang=es" className="social-icon"><FaTwitter /></a>
          <a href="https://workspace.google.com/intl/es-419_mx/gmail/" className="social-icon"><FaGoogle /></a>
          <a href="https://www.instagram.com/" className="social-icon"><FaInstagram /></a>
        </div>
        <div className="top-bar-center">
          <span>Give us a call: +66666666</span>
        </div>
        <div className='top-bar-right'>
          <a href="" className="link-auth">LOGIN</a>
          <span className='palito'>|</span>
          <a href="" className="link-auth">REGISTER</a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="main-nav">
        <div className="nav-left">
           <img src="/src/assets/img/logo.jpg" alt="Collection Garage" className="logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li className="dropdown">
            <a href="#">Categories</a>
            <ul className="dropdown-menu">
              <li><a href="#">Classic</a></li>
              <li><a href="#">Sports</a></li>
              <li><a href="#">Luxury</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">Dealers</a>
            <ul className="dropdown-menu">
              <li><a href="#">Dealer A</a></li>
              <li><a href="#">Dealer B</a></li>
            </ul>
          </li>
          <li><a href="#">Contact</a></li>
          <a href="#" className="btn-post">Post New Car</a> 
        </ul>
        <div className="nav-right">
          
          
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
