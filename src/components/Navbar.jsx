import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaAngleDown, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/img/logo.jpg';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setOpenDropdown(null);
  };

  const handleDropdownClick = (name) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

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
          <Link to="/Login" state={{ initialPanel: 'login' }} className="link-auth nosubrayado">LOGIN</Link>
          <span className="palito">|</span>
          <Link to="/Login" state={{ initialPanel: 'register' }} className="link-auth nosubrayado">REGISTER</Link>
        </div>
      </div>

      {/* Main nav */}
      <nav className="main-nav">
        <div className="nav-left">
          <img src={logo} alt="Collection Garage" className="logo" />
        </div>

        {/* Hamburguesa para móviles */}
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#" className="nosubrayado">HOME</a></li>
          
          <li className={`dropdown ${openDropdown === 'categories' ? 'open' : ''}`}>
            <a 
              href="#" 
              className="nosubrayado" 
              onClick={(e) => {
                e.preventDefault();
                handleDropdownClick('categories');
              }}
            >
              CATEGORIES <FaAngleDown />
            </a>
            <ul className="dropdown-menu">
              <li><a href="#" className="nosubrayado">CLASSIC</a></li>
              <li><a href="#" className="nosubrayado">SPORTS</a></li>
              <li><a href="#" className="nosubrayado">LUXURY</a></li>
            </ul>
          </li>
          
          <li className={`dropdown ${openDropdown === 'dealers' ? 'open' : ''}`}>
            <a 
              href="#" 
              className="nosubrayado"
              onClick={(e) => {
                e.preventDefault();
                handleDropdownClick('dealers');
              }}
            >
              DEALERS <FaAngleDown />
            </a>
            <ul className="dropdown-menu">
              <li><a href="#" className="nosubrayado">DEALER A</a></li>
              <li><a href="#" className="nosubrayado">DEALER B</a></li>
            </ul>
          </li>
          
          <li><a href="#" className="nosubrayado">CONTACT</a></li>
          <li><a href="#" className="btn-post nosubrayado">POST NEW CAR</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;