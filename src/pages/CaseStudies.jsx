import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CaseStudies.css';

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'design', name: 'UI/UX Design' },
    { id: 'saas', name: 'SaaS Solutions' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Modern E-commerce Platform Redesign',
      client: 'FashionHub Retail',
      industry: 'E-commerce',
      category: 'web',
      duration: '3 months',
      year: '2023',
      challenge: 'Improve user experience and increase conversion rates for a fashion e-commerce platform.',
      solution: 'Redesigned the entire user journey with modern UI, implemented AI-powered recommendations, and optimized checkout process.',
      results: [
        { metric: '45%', label: 'Increase in Conversion Rate' },
        { metric: '60%', label: 'Faster Page Load Time' },
        { metric: '30%', label: 'Reduced Cart Abandonment' }
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '/case-study/ecommerce-redesign'
    },
    {
      id: 2,
      title: 'Healthcare Mobile App Development',
      client: 'HealthTrack Inc.',
      industry: 'Healthcare',
      category: 'mobile',
      duration: '6 months',
      year: '2023',
      challenge: 'Create a user-friendly mobile app for tracking health metrics and connecting patients with doctors.',
      solution: 'Developed a cross-platform mobile app with real-time health tracking, appointment scheduling, and secure messaging.',
      results: [
        { metric: '50K+', label: 'Active Users' },
        { metric: '4.8', label: 'App Store Rating' },
        { metric: '95%', label: 'User Satisfaction' }
      ],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      technologies: ['React Native', 'Firebase', 'Redux', 'AWS'],
      link: '/case-study/healthcare-app'
    },
    {
      id: 3,
      title: 'Corporate Learning Management System',
      client: 'GlobalTech Solutions',
      industry: 'Education Technology',
      category: 'saas',
      duration: '8 months',
      year: '2023',
      challenge: 'Build a scalable LMS for corporate training with advanced analytics and reporting.',
      solution: 'Created a full-featured SaaS platform with course management, progress tracking, and detailed analytics dashboard.',
      results: [
        { metric: '10K+', label: 'Corporate Users' },
        { metric: '85%', label: 'Course Completion Rate' },
        { metric: '40%', label: 'Training Cost Reduction' }
      ],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
      link: '/case-study/lms-platform'
    },
    {
      id: 4,
      title: 'Restaurant Reservation System',
      client: 'FineDine Group',
      industry: 'Hospitality',
      category: 'web',
      duration: '4 months',
      year: '2022',
      challenge: 'Streamline reservation process and improve table management for a restaurant chain.',
      solution: 'Developed a comprehensive reservation system with real-time table availability, customer management, and analytics.',
      results: [
        { metric: '70%', label: 'Increase in Reservations' },
        { metric: '50%', label: 'Reduced No-Shows' },
        { metric: '35%', label: 'Staff Efficiency Improvement' }
      ],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      technologies: ['React', 'Express.js', 'MySQL', 'Socket.io'],
      link: '/case-study/restaurant-system'
    },
    {
      id: 5,
      title: 'FinTech Dashboard Redesign',
      client: 'WealthSecure Bank',
      industry: 'Finance',
      category: 'design',
      duration: '2 months',
      year: '2022',
      challenge: 'Redesign complex financial dashboard to improve usability and data visualization.',
      solution: 'Created intuitive data visualization, simplified navigation, and implemented responsive design principles.',
      results: [
        { metric: '65%', label: 'Improved User Engagement' },
        { metric: '55%', label: 'Reduced Support Tickets' },
        { metric: '4.9', label: 'User Satisfaction Score' }
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      technologies: ['Figma', 'Adobe XD', 'Chart.js', 'D3.js'],
      link: '/case-study/fintech-redesign'
    },
    {
      id: 6,
      title: 'Travel Booking Platform',
      client: 'TravelEasy',
      industry: 'Travel & Tourism',
      category: 'web',
      duration: '5 months',
      year: '2022',
      challenge: 'Build a comprehensive travel booking platform with multiple service integrations.',
      solution: 'Developed a full-stack platform with flight, hotel, and car rental bookings, plus user reviews and recommendations.',
      results: [
        { metric: '200K+', label: 'Monthly Bookings' },
        { metric: '25%', label: 'Revenue Growth' },
        { metric: '90%', label: 'Repeat Customers' }
      ],
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      technologies: ['Next.js', 'NestJS', 'MongoDB', 'Redis'],
      link: '/case-study/travel-platform'
    }
  ];

  const filteredStudies = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  const featuredStudy = caseStudies[0];

  return (
    <div className="case-studies-page">
      {/* Hero Section */}
      <section className="case-studies-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Case Studies</h1>
            <p className="hero-subtitle">
              Detailed analysis of projects showcasing challenges, solutions, and measurable results
            </p>
            <p className="hero-description">
              Explore real-world examples of how I solve complex problems and deliver exceptional results for clients across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="stats-overview">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">18</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15</div>
              <div className="stat-label">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="featured-case-study">
        <div className="container">
          <div className="section-header">
            <h2>Featured Case Study</h2>
            <p>An in-depth look at a recent successful project</p>
          </div>
          
          <div className="featured-study-card">
            <div className="featured-image-container">
              <img src={featuredStudy.image} alt={featuredStudy.title} className="featured-image" />
              <div className="featured-badge">
                <span>Featured Project</span>
              </div>
            </div>
            
            <div className="featured-content">
              <div className="study-meta">
                <span className="study-client">{featuredStudy.client}</span>
                <span className="study-industry">{featuredStudy.industry}</span>
                <span className="study-duration">{featuredStudy.duration}</span>
                <span className="study-year">{featuredStudy.year}</span>
              </div>
              
              <h3 className="featured-title">{featuredStudy.title}</h3>
              
              <div className="challenge-solution">
                <div className="challenge">
                  <h4><i className="fas fa-exclamation-circle"></i> The Challenge</h4>
                  <p>{featuredStudy.challenge}</p>
                </div>
                <div className="solution">
                  <h4><i className="fas fa-lightbulb"></i> The Solution</h4>
                  <p>{featuredStudy.solution}</p>
                </div>
              </div>
              
              <div className="results-section">
                <h4><i className="fas fa-chart-line"></i> Key Results</h4>
                <div className="results-grid">
                  {featuredStudy.results.map((result, index) => (
                    <div key={index} className="result-item">
                      <div className="result-metric">{result.metric}</div>
                      <div className="result-label">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="technologies-section">
                <h4><i className="fas fa-code"></i> Technologies Used</h4>
                <div className="technologies-list">
                  {featuredStudy.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <Link to={featuredStudy.link} className="btn btn-primary btn-lg">
                <i className="fas fa-file-alt"></i> View Full Case Study
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="section-header">
            <h2>Explore Case Studies</h2>
            <p>Filter by project type or industry</p>
          </div>
          
          <div className="filter-buttons">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="case-studies-grid-section">
        <div className="container">
          {filteredStudies.length === 0 ? (
            <div className="no-results">
              <i className="fas fa-search"></i>
              <h3>No case studies found</h3>
              <p>Try selecting a different filter category</p>
            </div>
          ) : (
            <div className="case-studies-grid">
              {filteredStudies.map(study => (
                <article key={study.id} className="case-study-card">
                  <div className="card-image">
                    <img src={study.image} alt={study.title} />
                    <div className="card-category">{study.category}</div>
                  </div>
                  
                  <div className="card-content">
                    <div className="card-header">
                      <h3 className="card-title">{study.title}</h3>
                      <div className="card-meta">
                        <span className="client">{study.client}</span>
                        <span className="industry">{study.industry}</span>
                      </div>
                    </div>
                    
                    <div className="card-body">
                      <p className="card-challenge">{study.challenge}</p>
                      
                      <div className="card-results">
                        <h4>Key Results:</h4>
                        <ul>
                          {study.results.slice(0, 2).map((result, index) => (
                            <li key={index}>
                              <strong>{result.metric}</strong> {result.label}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="card-technologies">
                        <h4>Technologies:</h4>
                        <div className="tech-tags">
                          {study.technologies.slice(0, 3).map((tech, index) => (
                            <span key={index} className="tech-tag-sm">{tech}</span>
                          ))}
                          {study.technologies.length > 3 && (
                            <span className="tech-tag-sm">+{study.technologies.length - 3}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="card-footer">
                      <div className="project-info">
                        <span className="duration">
                          <i className="far fa-clock"></i> {study.duration}
                        </span>
                        <span className="year">
                          <i className="far fa-calendar"></i> {study.year}
                        </span>
                      </div>
                      <Link to={study.link} className="view-study-link">
                        View Details <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Process Overview */}
      <section className="process-overview">
        <div className="container">
          <div className="section-header">
            <h2>My Process</h2>
            <p>The methodology behind successful project delivery</p>
          </div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3><i className="fas fa-search"></i> Discovery & Analysis</h3>
                <p>Understanding client requirements, target audience, and project goals through research and analysis.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3><i className="fas fa-pencil-ruler"></i> Planning & Design</h3>
                <p>Creating wireframes, prototypes, and detailed project plans for development.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3><i className="fas fa-code"></i> Development</h3>
                <p>Building the solution with clean, maintainable code and modern technologies.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3><i className="fas fa-vial"></i> Testing & Quality Assurance</h3>
                <p>Rigorous testing to ensure functionality, performance, and user experience meet standards.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">05</div>
              <div className="step-content">
                <h3><i className="fas fa-rocket"></i> Deployment & Launch</h3>
                <p>Smooth deployment and launch with monitoring and support systems in place.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">06</div>
              <div className="step-content">
                <h3><i className="fas fa-chart-line"></i> Maintenance & Support</h3>
                <p>Ongoing support, updates, and performance optimization post-launch.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="case-studies-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Have a project in mind? Let's discuss how I can help bring your ideas to life with proven solutions and measurable results.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <i className="fas fa-comments"></i> Discuss Your Project
              </Link>
              <Link to="/portfolio" className="btn btn-secondary btn-lg">
                <i className="fas fa-eye"></i> View More Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;