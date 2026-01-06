import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import './Contact.css';

const Contact = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setNewsletterStatus({ loading: true, success: false, error: null });

    try {
      await addDoc(collection(db, 'newsletter'), {
        email: newsletterEmail,
        timestamp: new Date(),
        subscribed: true
      });

      setNewsletterStatus({ loading: false, success: true, error: null });
      setNewsletterEmail('');

      // Reset success message after 5 seconds
      setTimeout(() => {
        setNewsletterStatus({ loading: false, success: false, error: null });
      }, 5000);
    } catch (error) {
      setNewsletterStatus({
        loading: false,
        success: false,
        error: 'Failed to subscribe. Please try again.'
      });
    }
  };

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      details: ['IIT Delhi Metro station Gate No. 3', 'IIT Delhi', 'India'],
      // link: 'https://maps.google.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      details: ['(+91) 7388646036'],
      // link: 'tel:+15551234567'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      details: ['mohdimrankhan131313@gmail.com', 'alisbrain@gmail.com'],
      // link: 'mailto:hello@portfolio.dev'
    },
    {
      icon: 'fas fa-clock',
      title: 'Working Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM', 'Sunday: Closed'],
      link: null
    }
  ];

  const socialLinks = [
    { icon: 'fab fa-linkedin-in', label: 'LinkedIn'},
    // { icon: 'fab fa-linkedin-in', label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: 'fab fa-github', label: 'GitHub'},
    { icon: 'fab fa-twitter', label: 'Twitter'},
    { icon: 'fab fa-dribbble', label: 'Dribbble'},
    { icon: 'fab fa-behance', label: 'Behance'},
    { icon: 'fab fa-codepen', label: 'CodePen'}
  ];

  const faqs = [
    {
      question: 'What is your typical response time?',
      answer: 'I typically respond within 24 hours on weekdays. For urgent matters, please call the phone number provided.'
    },
    {
      question: 'Do you offer free consultations?',
      answer: 'Yes, I offer a free 15-minute consultation to discuss your project requirements and determine if we\'re a good fit.'
    },
    {
      question: 'What information should I provide when contacting you?',
      answer: 'Please provide details about your project, timeline, budget, and any specific requirements. The more information you provide, the better I can assist you.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes, I work with clients worldwide. I\'m experienced in remote collaboration across different time zones.'
    }
  ];

  // Function to handle quick email click
  const handleQuickEmail = (e) => {
    e.preventDefault();
    
    // Create a more detailed email template
    const subject = 'Project Inquiry - From Portfolio Website';
    const body = `Hello Imran,

I came across your portfolio website and I'm interested in discussing a potential project with you.

Here are some details about what I'm looking for:
- Project type: 
- Timeline: 
- Budget: 
- Specific requirements: 

Please let me know when would be a good time to connect for a brief discussion.

Best regards,
[Your Name]`;

    // Encode the subject and body for URL
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    
    // Create mailto link with your email
    const mailtoLink = `mailto:mohdimrankhan131313@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
    
    // Open in new tab (works in most modern browsers)
    const newWindow = window.open(mailtoLink, '_blank');
    
    // Fallback for browsers that block popups
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // If popup blocked, open in same window
      window.location.href = mailtoLink;
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Get In Touch</h1>
            <p className="hero-subtitle">
              Let's discuss your project and how I can help bring your ideas to life
            </p>
            <p className="hero-description">
              Whether you have a project in mind, need technical consultation, or just want to say hello, 
              I'd love to hear from you. Fill out the form below or use any of the contact methods provided.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-card">
                <div className="info-icon">
                  <i className={info.icon}></i>
                </div>
                <div className="info-content">
                  <h3>{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                  {info.link && (
                    <a href={info.link} className="info-link" target="_blank" rel="noopener noreferrer">
                      Get Directions <i className="fas fa-arrow-right"></i>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="main-contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="section-header">
                <h2>Send Me a Message</h2>
                <p>Fill out the form below and I'll get back to you as soon as possible</p>
              </div>
              <ContactForm />
            </div>

            {/* Additional Info */}
            <div className="contact-sidebar">
              {/* Social Links */}
              <div className="social-card">
                <h3><i className="fas fa-share-alt"></i> Connect With Me</h3>
                <p>Follow me on social media for updates, insights, and behind-the-scenes looks at my work.</p>
                <div className="social-links-grid">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="social-link-item"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <i className={social.icon}></i>
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="faq-card">
                <h3><i className="fas fa-question-circle"></i> Frequently Asked Questions</h3>
                <div className="faq-list">
                  {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                      <h4>{faq.question}</h4>
                      <p>{faq.answer}</p>
                    </div>
                  ))}
                </div>
                <a href="/faq" className="view-all-faq">
                  View All FAQs <i className="fas fa-arrow-right"></i>
                </a>
              </div>

              {/* Newsletter
              <div className="newsletter-card">
                <h3><i className="fas fa-newspaper"></i> Stay Updated</h3>
                <p>Subscribe to my newsletter for the latest insights, tips, and project updates.</p>
                
                {newsletterStatus.success && (
                  <div className="newsletter-success">
                    <i className="fas fa-check-circle"></i> Successfully subscribed!
                  </div>
                )}
                
                {newsletterStatus.error && (
                  <div className="newsletter-error">
                    <i className="fas fa-exclamation-circle"></i> {newsletterStatus.error}
                  </div>
                )}

                <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="newsletter-input"
                      required
                    />
                    <button type="submit" className="newsletter-btn" disabled={newsletterStatus.loading}>
                      {newsletterStatus.loading ? (
                        <i className="fas fa-spinner fa-spin"></i>
                      ) : (
                        <i className="fas fa-paper-plane"></i>
                      )}
                    </button>
                  </div>
                  <p className="privacy-note">
                    By subscribing, you agree to our <a href="/privacy-policy">Privacy Policy</a>. 
                    No spam, unsubscribe anytime.
                  </p>
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="section-header">
            <h2>Find Me Here</h2>
            <p>Based in Delhi, but working with clients worldwide</p>
          </div>
          <div className="map-container">
            {/* Placeholder for Google Maps or other map service */}
            <div className="map-placeholder">
              <div className="map-content">
                <i className="fas fa-map-marked-alt"></i>
                <h3>IIT Delhi (India)</h3>
                <p>Available for local meetings and remote collaboration worldwide</p>
                <a 
                  href="https://www.google.com/maps/place/IIT/@28.5472658,77.193545,19.04z/data=!4m6!3m5!1s0x390d1df5fab48a8f:0xdfa79cd26c7a09c!8m2!3d28.547199!4d77.193817!16s%2Fg%2F11bxdtq9b2?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" 
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-directions"></i> Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="availability-section">
        <div className="container">
          <div className="availability-content">
            <div className="availability-text">
              <h2>Current Availability</h2>
              <p>
                I'm currently accepting new projects for <strong></strong>. 
                Let's schedule a call to discuss your requirements.
              </p>
              <div className="availability-status">
                <div className="status-indicator available"></div>
                <span>Available for new projects</span>
              </div>
            </div>
            <div className="availability-actions">
              <a href="https://calendly.com/app/intro/availability" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-calendar-alt"></i> Schedule a Call
              </a>
              {/* <button 
                onClick={handleQuickEmail} 
                className="btn btn-secondary btn-lg"
              >
                <i className="fas fa-envelope"></i> Send Quick Email
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Don't hesitate to reach out me fill the above form. Whether you need a simple website or a complex web application, 
              I'm here to help you succeed.
            </p>
            {/* <div className="cta-buttons">
              <a href="tel:+917388646036" className="btn btn-primary btn-lg">
                <i className="fas fa-phone"></i> Call Now
              </a> */}
              {/* <button 
                onClick={handleQuickEmail} 
                className="btn btn-secondary btn-lg"
              >
                <i className="fas fa-envelope"></i> Email Me
              </button> */}
            {/* </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;