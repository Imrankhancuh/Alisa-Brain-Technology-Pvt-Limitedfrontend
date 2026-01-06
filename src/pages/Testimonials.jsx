import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [filter, setFilter] = useState('all');
  const [activeVideo, setActiveVideo] = useState(null);
  const statsRef = useRef(null);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);

  const testimonials = [
    {
      id: 1,
      name: 'Sajid Ali',
      role: 'CEO, Alsifa Transport Logistic.',
      company: 'Alsifa Transport Logistic.',
      project: 'Transport Logistic.',
      service: 'Web Development',
      quote: 'Working with this developer was an absolute pleasure. Our e-commerce platform exceeded expectations with seamless performance and beautiful design. The attention to detail and commitment to quality was exceptional.',
      rating: 5,
      date: 'January 2024',
      category: 'web-development',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      results: ['300% increase in conversions', '40% faster load times', '98% customer satisfaction']
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Product Manager, JNU',
      company: 'JNU',
      project: 'Vender Events Day Tracker',
      service: 'Mobile App Development',
      quote: 'The mobile app completely transformed our customer experience. The intuitive UI/UX design and flawless performance led to a 200% increase in mobile sales. Highly recommended for any serious development project.',
      rating: 5,
      date: 'December 2023',
      category: 'mobile-apps',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      results: ['200% mobile sales increase', '4.8 App Store rating', '500K+ downloads']
    },
    {
      id: 3,
      name: 'Kuldeep Singh',
      role: 'Marketing Director, Solutions1313',
      company: 'Solutions1313',
      project: 'IntelliDoC RaG Application System',
      service: 'AI Consulting & Custom Development',
      quote: 'The IntelliDoC RaG application system has revolutionized our document processing. The team\'s expertise in Retrieval-Augmented Generation and AI implementation resulted in a system that processes complex documents with 95% accuracy. The solution has reduced manual review time by 70% while maintaining exceptional data security standards.',
      rating: 5,
      date: 'November 2023',
      category: 'ai-consulting',
      image: 'https://unsplash.com/photos/a-man-wearing-a-necklace-with-a-cross-on-it-nSBl2cfwnmE',
      results: ['Zero downtime', 'HIPAA compliant', '99.9% uptime']
    }
  ];

  const videoTestimonials = [
    {
      id: 'v1',
      name: 'Sajid Ali',
      role: 'CEO, Alsifa Transport Logistic.',
      quote: 'Watch how our e-commerce platform transformed with expert development.',
      thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '2:30'
    },
    {
      id: 'v2',
      name: 'Rajesh Kumar',
      role: 'Product Manager, JNU',
      quote: 'Mobile app success story: From concept to 500K+ downloads.',
      thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '3:15'
    },
    {
      id: 'v3',
      name: 'Kuldeep Singh',
      role: 'Marketing Director, Solutions1313',
      quote: 'Professional, reliable, and incredibly talented. The mobile app they developed for us has received excellent feedback from our users.',
      thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '4:10'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '51+' },
    { label: 'Client Satisfaction', value: '100%' },
    { label: 'Repeat Clients', value: '100%' },
    { label: 'On-Time Delivery', value: '99.5%' }
  ];

  const categories = [
    { id: 'all', label: 'All Testimonials', count: testimonials.length },
  ];

  // Counter animation function
  const animateCounter = (index, targetValue, duration = 2000) => {
    const isPercentage = targetValue.includes('%');
    const isPlusSign = targetValue.includes('+');
    
    // Extract the numeric value
    const numericValue = parseFloat(targetValue.replace(/[^0-9.]/g, ''));
    const startValue = 0;
    const startTime = performance.now();
    
    const updateCounter = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      let currentNumber = startValue + (numericValue - startValue) * easeOutQuart;
      
      // Format the current number
      let formattedValue;
      if (isPercentage) {
        formattedValue = Math.round(currentNumber) + '%';
      } else if (isPlusSign) {
        formattedValue = Math.round(currentNumber) + '+';
      } else {
        formattedValue = Math.round(currentNumber);
      }
      
      setAnimatedStats(prev => {
        const newStats = [...prev];
        newStats[index] = formattedValue;
        return newStats;
      });
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        // Ensure final value is exact
        setAnimatedStats(prev => {
          const newStats = [...prev];
          newStats[index] = targetValue;
          return newStats;
        });
      }
    };
    
    requestAnimationFrame(updateCounter);
  };

  // Initialize counters when component mounts and stats are in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate each stat with a slight delay
            stats.forEach((stat, index) => {
              setTimeout(() => {
                animateCounter(index, stat.value, 1500 + (index * 300));
              }, 100);
            });
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '50px'
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    // Check if stats are already visible on load
    if (statsRef.current) {
      const rect = statsRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.8;
      if (isVisible) {
        stats.forEach((stat, index) => {
          setTimeout(() => {
            animateCounter(index, stat.value, 1500 + (index * 300));
          }, 100);
        });
      }
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const filteredTestimonials = filter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === filter);

  const openVideo = (videoId) => {
    setActiveVideo(videoId);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  const playVideo = (videoId) => {
    alert(`Playing video testimonial from ${videoTestimonials.find(v => v.id === videoId)?.name}`);
  };

  return (
    <div className="testimonials-container">
      {/* Hero Section */}
      <section className="testimonials-hero">
        <div className="testimonials-hero-content">
          <h1 className="testimonials-title">Client Testimonials</h1>
          <p className="testimonials-subtitle">
            Real stories from clients who have transformed their businesses with my services
          </p>
          <p className="testimonials-description">
            Don't just take my word for it. Hear from entrepreneurs, CEOs, and industry leaders 
            who have experienced exceptional results through our collaboration.
          </p>
        </div>
        <div className="hero-stats" ref={statsRef}>
          {stats.map((stat, index) => (
            <div key={index} className="stat-item" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="stat-value" data-target={stat.value}>
                {animatedStats[index] || (stat.value.includes('%') ? '0%' : stat.value.includes('+') ? '0+' : '0')}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Filter by Service</h2>
            <p className="section-subtitle">Browse testimonials from specific service categories</p>
          </div>
          
          <div className="filter-categories">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-button ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                <span className="filter-label">{category.label}</span>
                <span className="filter-count">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="video-testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Video Testimonials</h2>
            <p className="section-subtitle">Hear directly from clients about their experience</p>
          </div>
          
          <div className="video-grid">
            {videoTestimonials.map((video) => (
              <div 
                key={video.id} 
                className="video-card"
                data-aos="zoom-in"
                onClick={() => openVideo(video.id)}
              >
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.name} className="thumbnail-image" />
                  <div className="video-overlay">
                    <button 
                      className="play-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        playVideo(video.id);
                      }}
                    >
                      <span className="play-icon">▶</span>
                    </button>
                    <div className="video-duration">{video.duration}</div>
                  </div>
                </div>
                <div className="video-info">
                  <h3 className="video-name">{video.name}</h3>
                  <p className="video-role">{video.role}</p>
                  <p className="video-quote">"{video.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Testimonials Grid */}
      <section className="testimonials-grid-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Written Testimonials</h2>
            <p className="section-subtitle">Detailed feedback from project collaborations</p>
          </div>
          
          <div className="testimonials-grid">
            {filteredTestimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="testimonial-card"
                data-aos="fade-up"
                data-aos-delay={index % 3 * 100}
              >
                <div className="testimonial-header">
                  <div className="client-info">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="client-avatar"
                    />
                    <div className="client-details">
                      <h3 className="client-name">{testimonial.name}</h3>
                      <p className="client-role">{testimonial.role}</p>
                      <div className="client-company">
                        <span className="company-icon">🏢</span>
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-rating">
                    {'★'.repeat(testimonial.rating)}
                    <span className="rating-text">({testimonial.rating}.0)</span>
                  </div>
                </div>
                
                <div className="testimonial-content">
                  <div className="quote-icon">"</div>
                  <p className="testimonial-quote">{testimonial.quote}</p>
                </div>
                
                <div className="testimonial-meta">
                  <div className="meta-item">
                    <span className="meta-icon">📅</span>
                    <span className="meta-text">{testimonial.date}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">🔧</span>
                    <span className="meta-text">{testimonial.service}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">🎯</span>
                    <span className="meta-text">{testimonial.project}</span>
                  </div>
                </div>
                
                <div className="testimonial-results">
                  <h4 className="results-title">Key Results:</h4>
                  <div className="results-list">
                    {testimonial.results.map((result, idx) => (
                      <div key={idx} className="result-item">
                        <span className="result-icon">✓</span>
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="testimonial-category">
                  <span className={`category-badge ${testimonial.category}`}>
                    {testimonial.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="featured-testimonial-section">
        <div className="container">
          <div className="featured-testimonial">
            <div className="featured-content" data-aos="fade-right">
              <div className="featured-quote-icon">❝</div>
              <p className="featured-quote">
                "The most professional and dedicated developer I've worked with. Every project 
                exceeded expectations, delivered on time, and provided exceptional value. 
                The technical expertise combined with clear communication makes for a perfect 
                partnership."
              </p>
              <div className="featured-author">
                <h3 className="featured-name">Sajid Ali</h3>
                <p className="featured-company">CEO, Alsifa Transport Logistic.</p>
                <div className="featured-rating">
                  ★★★★★
                  <span className="featured-rating-text">5.0 Rating</span>
                </div>
              </div>
            </div>
            <div className="featured-image" data-aos="fade-left">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Client collaboration" 
                className="featured-img"
              />
              <div className="featured-overlay">
                <div className="overlay-content">
                  <span className="overlay-text">Long-term Client</span>
                  <span className="overlay-subtext">4+ Projects Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="trust-indicators-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Clients Trust Me</h2>
            <p className="section-subtitle">Consistent results that build lasting relationships</p>
          </div>
          
          <div className="indicators-grid">
            <div className="indicator-card" data-aos="flip-left">
              <div className="indicator-icon">🤝</div>
              <h3 className="indicator-title">Clear Communication</h3>
              <p className="indicator-description">
                Regular updates, transparent processes, and responsive communication 
                ensure we're always aligned on project goals.
              </p>
            </div>
            
            <div className="indicator-card" data-aos="flip-left" data-aos-delay="100">
              <div className="indicator-icon">🎯</div>
              <h3 className="indicator-title">Results-Driven</h3>
              <p className="indicator-description">
                Focus on delivering measurable business results, not just code. Every 
                project includes KPIs and performance tracking.
              </p>
            </div>
            
            <div className="indicator-card" data-aos="flip-left" data-aos-delay="200">
              <div className="indicator-icon">⚡</div>
              <h3 className="indicator-title">Technical Excellence</h3>
              <p className="indicator-description">
                Clean, scalable code with best practices. Modern tech stack and 
                performance optimization for superior results.
              </p>
            </div>
            
            <div className="indicator-card" data-aos="flip-left" data-aos-delay="300">
              <div className="indicator-icon">🔄</div>
              <h3 className="indicator-title">Long-term Support</h3>
              <p className="indicator-description">
                Ongoing maintenance, updates, and support ensure your project 
                continues to deliver value long after launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="testimonials-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Add Your Success Story?</h2>
            <p className="cta-description">
              Join the growing list of satisfied clients who have transformed their 
              ideas into successful digital products.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                Start Your Project
              </a>
            </div>
            <p className="cta-note">
              <span className="note-icon">📞</span>
              Schedule a free 15-minute consultation to discuss your project
            </p>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div className="video-modal" onClick={closeVideo}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeVideo}>×</button>
            <div className="modal-video">
              <div className="video-placeholder">
                <p>Video Player - {videoTestimonials.find(v => v.id === activeVideo)?.name}</p>
                <button 
                  className="play-video-button"
                  onClick={() => playVideo(activeVideo)}
                >
                  Play Video Testimonial
                </button>
              </div>
            </div>
            <div className="modal-info">
              <h3>{videoTestimonials.find(v => v.id === activeVideo)?.name}</h3>
              <p>{videoTestimonials.find(v => v.id === activeVideo)?.role}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;