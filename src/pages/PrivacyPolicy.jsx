import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'data-collection', title: 'Data Collection' },
    { id: 'data-usage', title: 'Data Usage' },
    { id: 'data-protection', title: 'Data Protection' },
    { id: 'your-rights', title: 'Your Rights' },
    { id: 'cookies', title: 'Cookies' },
    { id: 'third-party', title: 'Third-Party Services' },
    { id: 'policy-changes', title: 'Policy Changes' },
    { id: 'contact', title: 'Contact Us' }
  ];

  const lastUpdated = 'January 1, 2024';

  return (
    <div className="privacy-policy-page">
      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Privacy Policy</h1>
            <p className="hero-subtitle">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <div className="policy-meta">
              <div className="meta-item">
                <i className="fas fa-calendar-alt"></i>
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className="meta-item">
                <i className="fas fa-shield-alt"></i>
                <span>GDPR & CCPA Compliant</span>
              </div>
              <div className="meta-item">
                <i className="fas fa-file-alt"></i>
                <span>Version 2.1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="privacy-content">
        <div className="container">
          <div className="content-wrapper">
            {/* Table of Contents */}
            <div className="table-of-contents">
              <div className="toc-header">
                <h3><i className="fas fa-list"></i> Table of Contents</h3>
                <button className="toc-toggle">
                  <i className="fas fa-bars"></i>
                </button>
              </div>
              <nav className="toc-nav">
                {sections.map(section => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`toc-link ${activeSection === section.id ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSection(section.id);
                      document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <i className="fas fa-chevron-right"></i>
                    {section.title}
                  </a>
                ))}
              </nav>
              <div className="toc-footer">
                <Link to="/contact" className="toc-contact">
                  <i className="fas fa-question-circle"></i> Questions?
                </Link>
              </div>
            </div>

            {/* Policy Content */}
            <div className="policy-sections">
              {/* Introduction */}
              <section id="introduction" className="policy-section">
                <div className="section-header">
                  <h2>1. Introduction</h2>
                  <div className="section-badge">
                    <i className="fas fa-info-circle"></i> Overview
                  </div>
                </div>
                <div className="section-content">
                  <p>
                    This Privacy Policy describes how <strong>Portfolio.dev</strong> ("we", "our", or "us") collects, uses, 
                    and shares your personal information when you use our website, services, and applications.
                  </p>
                  <p>
                    We are committed to protecting your privacy and ensuring that your personal information is 
                    handled in a safe and responsible manner. This policy outlines our practices regarding data 
                    collection, usage, and protection.
                  </p>
                  <div className="notice-box info">
                    <i className="fas fa-info-circle"></i>
                    <div>
                      <strong>Key Point:</strong> We only collect information necessary to provide our services 
                      and improve your experience.
                    </div>
                  </div>
                </div>
              </section>

              {/* Data Collection */}
              <section id="data-collection" className="policy-section">
                <div className="section-header">
                  <h2>2. Information We Collect</h2>
                  <div className="section-badge">
                    <i className="fas fa-database"></i> Collection
                  </div>
                </div>
                <div className="section-content">
                  <p>We collect several types of information from and about users of our website:</p>
                  
                  <div className="info-grid">
                    <div className="info-card">
                      <div className="info-icon">
                        <i className="fas fa-user"></i>
                      </div>
                      <div className="info-content">
                        <h3>Personal Information</h3>
                        <ul>
                          <li>Name and contact details</li>
                          <li>Email address</li>
                          <li>Phone number (if provided)</li>
                          <li>Company information</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="info-card">
                      <div className="info-icon">
                        <i className="fas fa-laptop"></i>
                      </div>
                      <div className="info-content">
                        <h3>Technical Information</h3>
                        <ul>
                          <li>IP address and location data</li>
                          <li>Browser type and version</li>
                          <li>Device information</li>
                          <li>Usage data and analytics</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="info-card">
                      <div className="info-icon">
                        <i className="fas fa-comments"></i>
                      </div>
                      <div className="info-content">
                        <h3>Communication Data</h3>
                        <ul>
                          <li>Contact form submissions</li>
                          <li>Email correspondence</li>
                          <li>Support requests</li>
                          <li>Feedback and reviews</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="notice-box warning">
                    <i className="fas fa-exclamation-triangle"></i>
                    <div>
                      <strong>Important:</strong> We never collect sensitive personal data such as financial 
                      information, social security numbers, or passwords through our website forms.
                    </div>
                  </div>
                </div>
              </section>

              {/* Data Usage */}
              <section id="data-usage" className="policy-section">
                <div className="section-header">
                  <h2>3. How We Use Your Information</h2>
                  <div className="section-badge">
                    <i className="fas fa-cogs"></i> Processing
                  </div>
                </div>
                <div className="section-content">
                  <p>We use the information we collect for the following purposes:</p>
                  
                  <div className="usage-list">
                    <div className="usage-item">
                      <div className="usage-icon">
                        <i className="fas fa-bullhorn"></i>
                      </div>
                      <div className="usage-content">
                        <h3>Service Provision</h3>
                        <p>To provide, maintain, and improve our services and respond to your inquiries.</p>
                      </div>
                    </div>
                    
                    <div className="usage-item">
                      <div className="usage-icon">
                        <i className="fas fa-chart-line"></i>
                      </div>
                      <div className="usage-content">
                        <h3>Analytics & Improvement</h3>
                        <p>To analyze website usage and improve user experience and service quality.</p>
                      </div>
                    </div>
                    
                    <div className="usage-item">
                      <div className="usage-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="usage-content">
                        <h3>Communication</h3>
                        <p>To send important updates, respond to inquiries, and provide customer support.</p>
                      </div>
                    </div>
                    
                    <div className="usage-item">
                      <div className="usage-icon">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <div className="usage-content">
                        <h3>Security</h3>
                        <p>To detect, prevent, and address technical issues and security vulnerabilities.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="legal-basis">
                    <h4><i className="fas fa-balance-scale"></i> Legal Basis for Processing</h4>
                    <p>
                      We process your personal information based on the following legal grounds:
                    </p>
                    <ul>
                      <li><strong>Consent:</strong> When you explicitly agree to our processing activities</li>
                      <li><strong>Contract:</strong> To fulfill our contractual obligations to you</li>
                      <li><strong>Legitimate Interest:</strong> For our legitimate business interests</li>
                      <li><strong>Legal Obligation:</strong> To comply with legal requirements</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Data Protection */}
              <section id="data-protection" className="policy-section">
                <div className="section-header">
                  <h2>4. Data Protection & Security</h2>
                  <div className="section-badge">
                    <i className="fas fa-shield-alt"></i> Security
                  </div>
                </div>
                <div className="section-content">
                  <p>
                    We implement appropriate technical and organizational security measures to protect your 
                    personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  
                  <div className="security-features">
                    <h3><i className="fas fa-lock"></i> Security Measures</h3>
                    <div className="features-grid">
                      <div className="feature">
                        <i className="fas fa-key"></i>
                        <span>Encryption</span>
                      </div>
                      <div className="feature">
                        <i className="fas fa-firewall"></i>
                        <span>Firewalls</span>
                      </div>
                      <div className="feature">
                        <i className="fas fa-user-shield"></i>
                        <span>Access Controls</span>
                      </div>
                      <div className="feature">
                        <i className="fas fa-history"></i>
                        <span>Regular Backups</span>
                      </div>
                      <div className="feature">
                        <i className="fas fa-virus-slash"></i>
                        <span>Malware Protection</span>
                      </div>
                      <div className="feature">
                        <i className="fas fa-eye-slash"></i>
                        <span>Data Anonymization</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="notice-box success">
                    <i className="fas fa-check-circle"></i>
                    <div>
                      <strong>Security Commitment:</strong> We regularly review and update our security 
                      practices to ensure the highest level of protection for your data.
                    </div>
                  </div>
                  
                  <div className="data-retention">
                    <h4><i className="fas fa-clock"></i> Data Retention</h4>
                    <p>
                      We retain your personal information only for as long as necessary to fulfill the 
                      purposes outlined in this policy, unless a longer retention period is required by law.
                    </p>
                    <div className="retention-info">
                      <div className="retention-item">
                        <span className="duration">30 Days</span>
                        <span className="label">Website Analytics</span>
                      </div>
                      <div className="retention-item">
                        <span className="duration">2 Years</span>
                        <span className="label">Contact Information</span>
                      </div>
                      <div className="retention-item">
                        <span className="duration">7 Years</span>
                        <span className="label">Legal & Tax Records</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Your Rights */}
              <section id="your-rights" className="policy-section">
                <div className="section-header">
                  <h2>5. Your Rights & Choices</h2>
                  <div className="section-badge">
                    <i className="fas fa-user-check"></i> Rights
                  </div>
                </div>
                <div className="section-content">
                  <p>
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  
                  <div className="rights-grid">
                    <div className="right-card">
                      <div className="right-icon">
                        <i className="fas fa-eye"></i>
                      </div>
                      <h3>Right to Access</h3>
                      <p>Request a copy of your personal information we hold.</p>
                    </div>
                    
                    <div className="right-card">
                      <div className="right-icon">
                        <i className="fas fa-edit"></i>
                      </div>
                      <h3>Right to Correction</h3>
                      <p>Request correction of inaccurate or incomplete information.</p>
                    </div>
                    
                    <div className="right-card">
                      <div className="right-icon">
                        <i className="fas fa-trash-alt"></i>
                      </div>
                      <h3>Right to Deletion</h3>
                      <p>Request deletion of your personal information under certain circumstances.</p>
                    </div>
                    
                    <div className="right-card">
                      <div className="right-icon">
                        <i className="fas fa-ban"></i>
                      </div>
                      <h3>Right to Object</h3>
                      <p>Object to processing of your personal information.</p>
                    </div>
                    
                    <div className="right-card">
                      <div className="right-icon">
                        <i className="fas fa-file-export"></i>
                      </div>
                      <h3>Right to Portability</h3>
                      <p>Receive your data in a structured, commonly used format.</p>
                    </div>
                    
                    <div className="right-card">
                      <div className="right-icon">
                        <i className="fas fa-hand-paper"></i>
                      </div>
                      <h3>Right to Withdraw</h3>
                      <p>Withdraw consent at any time where processing is based on consent.</p>
                    </div>
                  </div>
                  
                  <div className="exercise-rights">
                    <h4><i className="fas fa-envelope-open-text"></i> How to Exercise Your Rights</h4>
                    <p>
                      To exercise any of these rights, please contact us using the information provided in 
                      the "Contact Us" section. We will respond to your request within 30 days.
                    </p>
                    <Link to="/contact" className="btn btn-primary">
                      <i className="fas fa-paper-plane"></i> Submit Data Request
                    </Link>
                  </div>
                </div>
              </section>

              {/* Cookies */}
              <section id="cookies" className="policy-section">
                <div className="section-header">
                  <h2>6. Cookies & Tracking Technologies</h2>
                  <div className="section-badge">
                    <i className="fas fa-cookie-bite"></i> Cookies
                  </div>
                </div>
                <div className="section-content">
                  <p>
                    We use cookies and similar tracking technologies to track activity on our website 
                    and hold certain information.
                  </p>
                  
                  <div className="cookie-types">
                    <h4><i className="fas fa-list-alt"></i> Types of Cookies We Use</h4>
                    
                    <div className="cookie-table">
                      <div className="cookie-row header">
                        <div className="cookie-type">Type</div>
                        <div className="cookie-purpose">Purpose</div>
                        <div className="cookie-duration">Duration</div>
                      </div>
                      
                      <div className="cookie-row">
                        <div className="cookie-type">
                          <strong>Essential Cookies</strong>
                        </div>
                        <div className="cookie-purpose">
                          Necessary for website functionality
                        </div>
                        <div className="cookie-duration">
                          Session
                        </div>
                      </div>
                      
                      <div className="cookie-row">
                        <div className="cookie-type">
                          <strong>Analytics Cookies</strong>
                        </div>
                        <div className="cookie-purpose">
                          Understand how visitors use our site
                        </div>
                        <div className="cookie-duration">
                          30 days
                        </div>
                      </div>
                      
                      <div className="cookie-row">
                        <div className="cookie-type">
                          <strong>Preference Cookies</strong>
                        </div>
                        <div className="cookie-purpose">
                          Remember your settings and preferences
                        </div>
                        <div className="cookie-duration">
                          1 year
                        </div>
                      </div>
                      
                      <div className="cookie-row">
                        <div className="cookie-type">
                          <strong>Marketing Cookies</strong>
                        </div>
                        <div className="cookie-purpose">
                          Track effectiveness of advertising
                        </div>
                        <div className="cookie-duration">
                          90 days
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="cookie-controls">
                    <h4><i className="fas fa-sliders-h"></i> Cookie Controls</h4>
                    <p>
                      You can control cookies through your browser settings. However, disabling essential 
                      cookies may affect the functionality of our website.
                    </p>
                    <div className="control-buttons">
                      <button className="btn btn-secondary">
                        <i className="fas fa-cookie"></i> Accept All Cookies
                      </button>
                      <button className="btn btn-outline">
                        <i className="fas fa-cog"></i> Customize Settings
                      </button>
                      <button className="btn btn-outline">
                        <i className="fas fa-ban"></i> Reject Non-Essential
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Third-Party Services */}
              <section id="third-party" className="policy-section">
                <div className="section-header">
                  <h2>7. Third-Party Services</h2>
                  <div className="section-badge">
                    <i className="fas fa-external-link-alt"></i> Third-Party
                  </div>
                </div>
                <div className="section-content">
                  <p>
                    We may use third-party services that collect, monitor, and analyze information to 
                    improve our services. These third parties have their own privacy policies.
                  </p>
                  
                  <div className="third-party-grid">
                    <div className="service-card">
                      <div className="service-logo">
                        <i className="fab fa-google"></i>
                      </div>
                      <div className="service-info">
                        <h4>Google Analytics</h4>
                        <p>Website analytics and traffic monitoring</p>
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="service-link">
                          View Privacy Policy <i className="fas fa-external-link-alt"></i>
                        </a>
                      </div>
                    </div>
                    
                    <div className="service-card">
                      <div className="service-logo">
                        <i className="fab fa-firefox"></i>
                      </div>
                      <div className="service-info">
                        <h4>Firebase</h4>
                        <p>Backend services and hosting</p>
                        <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="service-link">
                          View Privacy Policy <i className="fas fa-external-link-alt"></i>
                        </a>
                      </div>
                    </div>
                    
                    <div className="service-card">
                      <div className="service-logo">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="service-info">
                        <h4>Email Services</h4>
                        <p>Communication and newsletter delivery</p>
                        <a href="https://mailchimp.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="service-link">
                          View Privacy Policy <i className="fas fa-external-link-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="notice-box info">
                    <i className="fas fa-info-circle"></i>
                    <div>
                      <strong>Note:</strong> We only work with third-party services that comply with 
                      applicable privacy laws and have adequate data protection measures in place.
                    </div>
                  </div>
                </div>
              </section>

              {/* Policy Changes */}
              <section id="policy-changes" className="policy-section">
                <div className="section-header">
                  <h2>8. Changes to This Policy</h2>
                  <div className="section-badge">
                    <i className="fas fa-sync-alt"></i> Updates
                  </div>
                </div>
                <div className="section-content">
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes 
                    by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                  </p>
                  
                  <div className="change-log">
                    <h4><i className="fas fa-history"></i> Recent Updates</h4>
                    <div className="log-items">
                      <div className="log-item">
                        <div className="log-date">January 1, 2024</div>
                        <div className="log-change">Added CCPA compliance information</div>
                      </div>
                      <div className="log-item">
                        <div className="log-date">October 15, 2023</div>
                        <div className="log-change">Updated data retention periods</div>
                      </div>
                      <div className="log-item">
                        <div className="log-date">July 1, 2023</div>
                        <div className="log-change">Enhanced cookie policy details</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="update-notice">
                    <h4><i className="fas fa-bell"></i> Update Notifications</h4>
                    <p>
                      We encourage you to review this Privacy Policy periodically for any changes. 
                      Changes to this Privacy Policy are effective when they are posted on this page.
                    </p>
                    <div className="subscribe-updates">
                      <input type="email" placeholder="Enter your email" className="update-input" />
                      <button className="btn btn-primary">
                        <i className="fas fa-bell"></i> Subscribe to Updates
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact */}
              <section id="contact" className="policy-section">
                <div className="section-header">
                  <h2>9. Contact Us</h2>
                  <div className="section-badge">
                    <i className="fas fa-envelope"></i> Contact
                  </div>
                </div>
                <div className="section-content">
                  <p>
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  
                  <div className="contact-methods">
                    <div className="contact-method">
                      <div className="method-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="method-info">
                        <h4>Email</h4>
                        <a href="mailto:privacy@portfolio.dev">privacy@portfolio.dev</a>
                        <p>For privacy-related inquiries and data requests</p>
                      </div>
                    </div>
                    
                    <div className="contact-method">
                      <div className="method-icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="method-info">
                        <h4>Phone</h4>
                        <a href="tel:+15551234567">+1 (555) 123-4567</a>
                        <p>Available Monday-Friday, 9AM-6PM EST</p>
                      </div>
                    </div>
                    
                    <div className="contact-method">
                      <div className="method-icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="method-info">
                        <h4>Mailing Address</h4>
                        <address>
                          Portfolio.dev<br />
                          Attn: Privacy Officer<br />
                          123 Privacy Street<br />
                          San Francisco, CA 94107<br />
                          United States
                        </address>
                      </div>
                    </div>
                  </div>
                  
                  <div className="response-time">
                    <h4><i className="fas fa-clock"></i> Response Times</h4>
                    <div className="time-grid">
                      <div className="time-item">
                        <div className="time-label">Data Access Requests</div>
                        <div className="time-value">Within 30 days</div>
                      </div>
                      <div className="time-item">
                        <div className="time-label">General Inquiries</div>
                        <div className="time-value">Within 48 hours</div>
                      </div>
                      <div className="time-item">
                        <div className="time-label">Security Incidents</div>
                        <div className="time-value">Immediate response</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="policy-actions">
                    <Link to="/contact" className="btn btn-primary">
                      <i className="fas fa-paper-plane"></i> Contact Privacy Team
                    </Link>
                    <button className="btn btn-secondary">
                      <i className="fas fa-download"></i> Download PDF Version
                    </button>
                    <Link to="/terms" className="btn btn-outline">
                      <i className="fas fa-file-contract"></i> View Terms of Service
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links">
        <div className="container">
          <div className="links-grid">
            <Link to="/terms" className="link-card">
              <div className="link-icon">
                <i className="fas fa-file-contract"></i>
              </div>
              <div className="link-content">
                <h3>Terms of Service</h3>
                <p>Read our terms and conditions</p>
              </div>
              <div className="link-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </Link>
            
            <Link to="/faq" className="link-card">
              <div className="link-icon">
                <i className="fas fa-question-circle"></i>
              </div>
              <div className="link-content">
                <h3>Privacy FAQ</h3>
                <p>Common questions about privacy</p>
              </div>
              <div className="link-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </Link>
            
            <Link to="/contact" className="link-card">
              <div className="link-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="link-content">
                <h3>Contact Us</h3>
                <p>Get in touch with our team</p>
              </div>
              <div className="link-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </Link>
            
            <a href="#top" className="link-card" onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>
              <div className="link-icon">
                <i className="fas fa-arrow-up"></i>
              </div>
              <div className="link-content">
                <h3>Back to Top</h3>
                <p>Return to the beginning</p>
              </div>
              <div className="link-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;