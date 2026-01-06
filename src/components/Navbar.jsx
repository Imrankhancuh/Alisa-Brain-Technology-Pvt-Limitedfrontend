import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); 

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Project' },
    // { path: '/case-studies', label: 'Case Studies' },
    { path: '/experience', label: 'Experience' },
    { path: '/process', label: 'Process' },
    { path: '/about', label: 'About' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/blog', label: 'Blog' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo">
          <span className="logo-text">
            <span className="logo-line logo-line-1">
              <span className="logo-part">Alisa</span>
              <span className="logo-part">Brain</span>
            </span>
            <span className="logo-line logo-line-2">
              <span className="logo-part">Technology</span>
            </span>
            <span className="logo-line logo-line-3">
              <span className="logo-part">Pvt</span>
              <span className="logo-part">Limited</span>
            </span>
          </span>
        </Link>

        <button 
          className="mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              <span className="link-text">{link.label}</span>
              <span className="link-hover"></span>
            </Link>
          ))}
          <Link to="/contact" className="contact-btn">
            <span>Get in Touch</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;