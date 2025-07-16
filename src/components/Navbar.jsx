import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaAngleDown } from 'react-icons/fa';
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
          <span>GIVE US A CALL: +66666666</span>
        </div>
        <div className="top-bar-right">
          <a href="#" className="link-auth nosubrayado">LOGIN</a>
          <span className="palito">|</span>
          <a href="#" className="link-auth nosubrayado">REGISTER</a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="main-nav">
        <div className="nav-left">
          <img src={logo} alt="Collection Garage" className="logo" />
        </div>
        <ul className="nav-links">
          <a href="#" className="nosubrayado">HOME</a>
          <li className="dropdown">
            <a href="#" className="nosubrayado">CATEGORIES <FaAngleDown /></a>
            <ul className="dropdown-menu">
              <li><a href="#" className="nosubrayado">CLASSIC</a></li>
              <li><a href="#" className="nosubrayado">SPORTS</a></li>
              <li><a href="#" className="nosubrayado">LUXURY</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="nosubrayado">DEALERS <FaAngleDown /></a>
            <ul className="dropdown-menu">
              <li><a href="#" className="nosubrayado">DEALER A</a></li>
              <li><a href="#" className="nosubrayado">DEALER B</a></li>
            </ul>
          </li>
          <li><a href="#" className="nosubrayado">CONTACT</a></li>
          <a href="#" className="btn-post nosubrayado">POST NEW CAR</a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;