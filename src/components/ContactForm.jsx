import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '', // Changed from subject to location
    message: ''
  });
  
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const [showForm, setShowForm] = useState(true); // New state to control form visibility

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.location || !formData.message) {
        throw new Error('Please fill all required fields');
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      console.log('Sending data to Firebase:', formData);

      // Add document to Firestore
      const docRef = await addDoc(collection(db, 'contacts'), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        location: formData.location, // Changed from subject to location
        message: formData.message,
        timestamp: new Date(),
        read: false
      });

      console.log('Document written with ID: ', docRef.id);

      setStatus({ 
        loading: false, 
        success: true, 
        error: null 
      });
      
      // Hide the form on successful submission
      setShowForm(false);
      
      // Reset form (optional, since form is hidden)
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        message: ''
      });

      // Optionally, reset everything after 10 seconds
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: null });
        setShowForm(true); // Show form again after timeout
      }, 10000);

    } catch (error) {
      console.error('Error sending message:', error);
      
      let errorMessage = 'Failed to send message. Please try again.';
      
      // More specific error messages
      if (error.message.includes('permission-denied')) {
        errorMessage = 'Firestore permission denied. Please check Firestore rules.';
      } else if (error.message.includes('network-request-failed')) {
        errorMessage = 'Network error. Please check your internet connection.';
      } else if (error.message.includes('Please fill')) {
        errorMessage = error.message;
      } else if (error.message.includes('valid email')) {
        errorMessage = error.message;
      }
      
      setStatus({
        loading: false,
        success: false,
        error: errorMessage
      });

      // Reset error after 10 seconds
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: null });
      }, 10000);
    }
  };

  // Function to show form again (if needed)
  const handleShowFormAgain = () => {
    setShowForm(true);
    setStatus({ loading: false, success: false, error: null });
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form">
        {status.success && (
          <div className="status-message success success-full">
            <i className="fas fa-check-circle"></i> 
            <div className="success-content">
              <h3>Thank You! 🎉</h3>
              <strong>Message sent successfully!</strong>
              <p>I'll get back to you as soon as possible. You should receive a confirmation email shortly.</p>
              <p className="success-details">
                <i className="fas fa-envelope"></i> A copy has been sent to: <strong>{formData.email}</strong>
              </p>
              <button 
                onClick={handleShowFormAgain}
                className="submit-btn"
                style={{marginTop: '20px'}}
              >
                <i className="fas fa-plus"></i> Send Another Message
              </button>
            </div>
          </div>
        )}
        
        {status.error && !status.success && (
          <div className="status-message error">
            <i className="fas fa-exclamation-circle"></i> 
            <div>
              <strong>Error!</strong>
              <p>{status.error}</p>
            </div>
          </div>
        )}

        {showForm && !status.success ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                required
                placeholder="Enter your full name"
                disabled={status.loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
                placeholder="Enter your email address"
                disabled={status.loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your phone number"
                disabled={status.loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="location" className="form-label">
                Location <span className="required">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="form-control"
                required
                placeholder="Enter your location"
                disabled={status.loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                rows="6"
                required
                placeholder="Please describe your project or inquiry in detail..."
                disabled={status.loading}
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={status.loading}
            >
              {status.loading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  &nbsp;Sending Message...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i>
                  &nbsp;Send Message
                </>
              )}
            </button>
            
            <p className="form-note">
              <span className="required">*</span> Required fields
            </p>
          </form>
        ) : null}
      </div>
    </div>
  );
};

export default ContactForm; 