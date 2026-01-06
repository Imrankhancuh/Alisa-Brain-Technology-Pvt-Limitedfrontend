import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Me</h3>
          <p>
            A passionate developer dedicated to creating exceptional digital experiences 
            that drive results and exceed expectations.
          </p>
          {/* <div className="social-links">
            <a href="https://linkedin.co\" className="social-link" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com" className="social-link" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com" className="social-link" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://dribbble.com" className="social-link" aria-label="Dribbble">
              <i className="fab fa-dribbble"></i>
            </a>
          </div> */} 
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/"><i className="fas fa-chevron-right"></i> Home</Link></li>
            <li><Link to="/services"><i className="fas fa-chevron-right"></i> Services</Link></li>
            <li><Link to="/portfolio"><i className="fas fa-chevron-right"></i> Project</Link></li>
            <li><Link to="/about"><i className="fas fa-chevron-right"></i> About</Link></li>
            <li><Link to="/contact"><i className="fas fa-chevron-right"></i> Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul className="footer-links">
            <li><Link to="/services"><i className="fas fa-chevron-right"></i> Web Development</Link></li>
            <li><Link to="/services"><i className="fas fa-chevron-right"></i> Mobile Apps</Link></li>
            <li><Link to="/services"><i className="fas fa-chevron-right"></i> UI/UX Design</Link></li>
            <li><Link to="/services"><i className="fas fa-chevron-right"></i> Consulting</Link></li>
            <li><Link to="/services"><i className="fas fa-chevron-right"></i> Maintenance</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>IIT Delhi Metro station Gate No. 3, Delhi (India)</span>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <span>(+91) 7388646036</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>mohdimrankhan131313@gmail.com</span>
            </li>
            <li>
              <i className="fas fa-clock"></i>
              <span>Mon - Fri: 9:00 - 18:00</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        {/* <div className="footer-bottom-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/contact">Contact</Link>
        </div> */}
        <p>&copy; {currentYear} All rights reserved. | Made with ❤️ by <strong>Imran Khan</strong></p>
      </div>
    </footer>
  );
};

export default Footer;