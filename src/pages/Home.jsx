import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Counter = ({ end, duration = 2000, label, icon }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCounter();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  const startCounter = () => {
    let startTime = null;
    const endValue = parseFloat(end.replace(/[^0-9.]/g, ''));
    const suffix = end.replace(/[0-9.]/g, '');
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      const currentCount = easeOutQuart * endValue;
      
      setCount(Math.floor(currentCount));
      
      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };
    
    requestAnimationFrame(animate);
  };

  return (
    <div className="hero-stat" ref={counterRef}>
      <i className={icon}></i>
      <div>
        <div className="stat-number">
          {count}{end.includes('%') ? '%' : end.includes('+') ? '+' : ''}
        </div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  );
};

const StatCard = ({ end, duration = 2000, label, icon }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCounter();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  const startCounter = () => {
    let startTime = null;
    const endValue = parseFloat(end.replace(/[^0-9.]/g, ''));
    const suffix = end.replace(/[0-9.]/g, '');
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      const currentCount = easeOutQuart * endValue;
      
      setCount(Math.floor(currentCount));
      
      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };
    
    requestAnimationFrame(animate);
  };

  return (
    <div className="stat-card" ref={counterRef}>
      <div className="stat-icon">
        <i className={icon}></i>
      </div>
      <div className="stat-content">
        <div className="stat-number">
          {count}{end.includes('%') ? '%' : end.includes('+') ? '+' : ''}
        </div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  );
};

const Home = () => {
  const stats = [
    { number: '51', label: 'Projects Completed', suffix: '+' },
    { number: '40', label: 'Happy Clients', suffix: '+' },
    { number: '2.5', label: 'Years Experience', suffix: '+' },
    { number: '100', label: 'Client Satisfaction', suffix: '%' }
  ];

  const services = [
    {
      icon: 'fas fa-code',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies for optimal performance and scalability.',
      features: ['HTML', 'CSS', 'JavaScript','React/Next.js', 'Responsive Design', 'Performance Optimization'],
      link: '/services'
    }, 
    {
      icon: 'fas fa-robot', // Alternative AI icon
      title: 'AI & Machine Learning',
      description: 'Intelligent systems and algorithms for automation, prediction, and data analysis.',
      features: ['Machine Learning', 'Predictive Analytics', 'AI Integration', 'ML Models', 'AI Automation', 'Data Intelligence'],
      link: '/services'
    },
    {
    icon: 'fas fa-laptop-code', // Alternative software dev icon
    title: 'Software Development',
    description: 'Custom software solutions across platforms with scalable architecture.',
    features: ['Web Apps', 'Mobile Apps', 'API Development'],
    link: '/services'
    },
    {
    icon: 'fas fa-comments', // Alternative NLP icon
    title: 'Natural Language Processing',
    description: 'Advanced language technology for understanding, processing, and generating human language. Natural Language Processing services for text analysis, chatbots, and language understanding.',
    features: ['Chatbots', 'Sentiment Analysis', 'Text Classification', 'Conversational AI', 'Text Mining', 'Language Models'],
    link: '/services'
    },
    {
    icon: 'fas fa-camera-retro', // Alternative computer vision icon
    title: 'Computer Vision',
    description: 'Visual intelligence solutions for image/video analysis and pattern recognition.',
    features: ['Object Detection', 'Image Recognition', 'Video Analytics', 'Face Recognition', 'Image Analysis'],
    link: '/services'
    },
      {
    icon: 'fas fa-chart-line',
    title: 'Data Science',
    description: 'Data analysis, visualization, and predictive modeling for business intelligence.',
    features: ['Data Analysis', 'Predictive Modeling', 'Business Intelligence'],
    link: '/services'
  },
    {
    icon: 'fas fa-code',
    title: 'Frontend Development',
    description: 'Building responsive, interactive user interfaces with modern frameworks and best practices.',
    features: ['React.js/Vue.js', 'Responsive Design', 'Performance Optimization', 'Progressive Web Apps'],
    link: '/services'
  },
    {
    icon: 'fas fa-server',
    title: 'Backend Development',
    description: 'Robust server-side solutions, APIs, and database management for scalable applications.',
    features: ['Node.js/Python', 'API Development', 'Database Design', 'Cloud Integration'],
    link: '/services'
  },
    {
    icon: 'fas fa-mobile-alt',
    title: 'Mobile Apps Development',
    description: 'Native iOS & Android apps and cross-platform solutions.',
    features: ['iOS', 'Android', 'React Native/Flutter'],
    link: '/services'
    }
  ];

  const recentProjects = [
    {
    title: 'Vendor Events Day Tracker',
    category: 'Web Application Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Event management platform for vendors with scheduling, tracking, and analytics features.',
    link: '/portfolio'
    // technologies: ['React.js', 'Node.js', 'MongoDB', 'AWS'],
    // features: ['Vendor Dashboard', 'Event Scheduling', 'Real-time Updates', 'Analytics Reports'],
    // link: '/portfolio/vendor-events-tracker',
    // liveLink: 'https://vendortracker.example.com',
    // githubLink: 'https://github.com/yourusername/vendor-events-tracker'
    },
    {
    title: 'Transport Logistics',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1562887189-e5d078343de4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Modern logistics and transportation management platform with real-time tracking.',
    // technologies: ['React.js', 'Node.js', 'MongoDB', 'Google Maps API'],
    // features: ['Real-time Tracking', 'Shipment Management', 'Driver Portal', 'Customer Dashboard'],
    link: '/portfolio',
    },
    {
    title: 'IntelliDoc RAG System',
    category: 'AI & NLP',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Retrieval-Augmented Generation system for intelligent document processing and Q&A.',
    // technologies: ['Python', 'LangChain', 'OpenAI API', 'Pinecone', 'FastAPI'],
    features: ['Document Embedding', 'Semantic Search', 'Context-Aware Responses', 'Multi-format Support'],
    link: '/portfolio',
    }
  ];

  const testimonials = [
    {
      name: 'Sajid Ali',
      role: 'CEO, Alsifa Transport Logistic.',
      content: 'Working with this developer was a game-changer for our business. The website exceeded our expectations and has significantly improved our online presence.',
      rating: 5,
      // image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Product Manager, JNU',
      content: 'Exceptional work and attention to detail. The project was delivered on time and within budget. Highly recommend for any serious web development project.',
      rating: 5,
      // image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Kuldeep Singh',
      role: 'Marketing Director, Solutions1313',
      content: 'Professional, reliable, and incredibly talented. The mobile app they developed for us has received excellent feedback from our users.',
      rating: 5,
      // image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    }
  ];

  const technologies = [
  // Frontend Technologies
  { icon: 'fab fa-html5', name: 'HTML', color: '#E34F26' },
  { icon: 'fab fa-css3-alt', name: 'CSS', color: '#1572B6' },
  { icon: 'fab fa-js', name: 'JavaScript', color: '#F7DF1E' },
  { icon: 'fab fa-react', name: 'React', color: '#61DAFB' },
  { icon: 'fab fa-vuejs', name: 'Vue.js', color: '#4FC08D' },
  { icon: 'fab fa-angular', name: 'Angular', color: '#DD0031' },
  { icon: 'fab fa-sass', name: 'Sass', color: '#CC6699' },
  { icon: 'fab fa-bootstrap', name: 'Bootstrap', color: '#7952B3' },
    // Tailwind CSS (using a custom icon approach)
  { icon: 'fas fa-wind', name: 'Tailwind CSS', color: '#06B6D4' },
    // Backend Technologies
  { icon: 'fab fa-node-js', name: 'Node.js', color: '#339933' },
  { icon: 'fab fa-python', name: 'Python', color: '#3776AB' },
  { icon: 'fas fa-leaf', name: 'Django', color: '#092E20' },
  { icon: 'fab fa-php', name: 'PHP', color: '#777BB4' },
  { icon: 'fas fa-bolt', name: 'FastAPI', color: '#009688' },
  { icon: 'fas fa-server', name: 'Express.js', color: '#000000' },
    // Mobile Development
  { icon: 'fab fa-flutter', name: 'Flutter', color: '#02569B' },
  { icon: 'fab fa-react', name: 'React Native', color: '#61DAFB' },
  { icon: 'fab fa-android', name: 'Android', color: '#3DDC84' },
  { icon: 'fab fa-apple', name: 'iOS', color: '#000000' },
    // AI/ML Technologies
  { icon: 'fas fa-brain', name: 'Artificial Intelligence', color: '#FF6B6B' },
  { icon: 'fas fa-robot', name: 'Machine Learning', color: '#4ECDC4' },
  { icon: 'fas fa-layer-group', name: 'Deep Learning', color: '#45B7D1' },
  { icon: 'fas fa-language', name: 'Natural Language Processing', color: '#96CEB4' },
  { icon: 'fas fa-chart-line', name: 'Data Science', color: '#FFEAA7' },
  // Cloud & Deployment
  { icon: 'fab fa-aws', name: 'AWS', color: '#FF9900' },
  { icon: 'fab fa-google', name: 'Google Cloud', color: '#4285F4' },
  { icon: 'fab fa-microsoft', name: 'Azure', color: '#0078D4' },
  { icon: 'fas fa-server', name: 'Vercel', color: '#000000' },
  { icon: 'fas fa-cloud-upload-alt', name: 'Netlify', color: '#00C7B7' },
  { icon: 'fas fa-cube', name: 'Docker', color: '#2496ED' },
  { icon: 'fas fa-infinity', name: 'Kubernetes', color: '#326CE5' },
  { icon: 'fas fa-cloud', name: 'Render', color: '#46E3B7' },
  { icon: 'fab fa-git-alt', name: 'Git', color: '#F05032' },
  { icon: 'fab fa-github', name: 'GitHub', color: '#181717' },
  { icon: 'fas fa-code-branch', name: 'GitLab', color: '#FC6D26' },
    // Databases
  { icon: 'fas fa-database', name: 'MongoDB', color: '#47A248' },
  { icon: 'fas fa-database', name: 'PostgreSQL', color: '#4169E1' },
  { icon: 'fas fa-database', name: 'MySQL', color: '#4479A1' },
  { icon: 'fas fa-database', name: 'SQLite', color: '#003B57' },
  { icon: 'fas fa-fire', name: 'Firebase', color: '#FFCA28' },
  { icon: 'fas fa-cloud', name: 'Supabase', color: '#3ECF8E' },
  { icon: 'fas fa-database', name: 'SQL', color: '#336791' },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text"> 
              <h1 className="hero-title">Transforming Ideas Into <span className="highlight">Digital Reality</span></h1>
              <p className="hero-subtitle">
                I create beautiful, functional websites and applications that deliver 
                exceptional user experiences and drive business growth.
              </p>
              {/* <div className="hero-buttons">
                <Link to="/portfolio" className="btn btn-primary btn-lg">
                  <i className="fas fa-eye"></i> View My Work
                </Link>
                <Link to="/contact" className="btn btn-secondary btn-lg">
                  <i className="fas fa-envelope"></i> Get In Touch
                </Link>
              </div> */}
            </div>
            <div className="hero-image">
              <div className="image-container">
                <div className="main-image"></div>
                <div className="floating-elements">
                  <div className="floating-element element-1">
                    <i className="fas fa-code"></i>
                  </div>
                  <div className="floating-element element-2">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <div className="floating-element element-3">
                    <i className="fas fa-paint-brush"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="stats-banner">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <StatCard 
                key={index}
                end={stat.number + (stat.suffix || '')}
                label={stat.label}
                duration={2000 + (index * 200)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>My Services</h2>
            <p>
              I offer a comprehensive range of web development and design services 
              to help your business succeed online.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-features">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  <Link to={service.link} className="service-link">
                    Learn More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/services" className="btn btn-primary btn-lg">
              <i className="fas fa-list"></i> View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>Explore some of my recent work and success stories</p>
          </div>
          <div className="projects-grid">
            {recentProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <div 
                    className="image-bg" 
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                  <div className="project-category">{project.category}</div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link to={project.link} className="project-link">
                    View Project <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/portfolio" className="btn btn-secondary btn-lg">
              <i className="fas fa-briefcase"></i> View Full Project
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>My Process</h2>
            <p>A structured approach to ensure project success and client satisfaction</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Discovery & Planning</h3>
                <p>Understanding your goals, target audience, and project requirements.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Design & Prototyping</h3>
                <p>Creating wireframes, mockups, and interactive prototypes.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Development</h3>
                <p>Building the solution with clean, efficient code and modern technologies.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>Testing & Launch</h3>
                <p>Rigorous testing and smooth deployment to ensure quality.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <Link to="/process" className="btn btn-outline btn-lg">
              <i className="fas fa-cogs"></i> Learn About My Process
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>Client Testimonials</h2>
            <p>What my clients say about working with me</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="client-avatar">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="client-info">
                    <h4>{testimonial.name}</h4>
                    <p className="client-role">{testimonial.role}</p>
                  </div>
                  <div className="client-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
                <div className="testimonial-content">
                  <p>"{testimonial.content}"</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/testimonials" className="btn btn-secondary btn-lg">
              <i className="fas fa-comments"></i> Read More Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="technologies-section">
        <div className="container">
          <div className="section-header">
            <h2>Technologies I Use</h2>
            <p>Modern tools and frameworks for building exceptional digital experiences</p>
          </div>
          <div className="technologies-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-card">
                <div className="tech-icon" style={{ color: tech.color }}>
                  <i className={tech.icon}></i>
                </div>
                <div className="tech-name">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Ready to Start Your Project?</h2>
              <p>
                Let's work together to create something amazing. Contact me today 
                to discuss your project requirements.
              </p>
            </div>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <i className="fas fa-rocket"></i> Start Your Project
              </Link>
              <a href="tel:+15551234567" className="btn btn-secondary btn-lg">
                <i className="fas fa-phone"></i> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="blog-preview">
        <div className="container">
          <div className="section-header">
            <h2>Latest Insights</h2>
            <p>Read my latest articles on web development and design</p>
          </div>
          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-image">
                <div className="image-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)' }}></div>
                <div className="blog-category">Web Development</div>
              </div>
              <div className="blog-content">
                <h3>Building Modern Web Applications with React</h3>
                <p>Learn how to leverage the latest features of React to build faster and more efficient web applications.</p>
                <Link to="/blog" className="blog-link">
                  Read Article <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-image">
                <div className="image-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)' }}></div>
                <div className="blog-category">UI/UX Design</div>
              </div>
              <div className="blog-content">
                <h3>The Future of Responsive Design</h3>
                <p>Exploring emerging trends and best practices for creating truly responsive web experiences.</p>
                <Link to="/blog" className="blog-link">
                  Read Article <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-image">
                <div className="image-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)' }}></div>
                <div className="blog-category">Technology</div>
              </div>
              <div className="blog-content">
                <h3>Essential Firebase Features Every Developer Should Know</h3>
                <p>A comprehensive guide to the most powerful Firebase features for modern web development.</p>
                <Link to="/blog" className="blog-link">
                  Read Article <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <Link to="/blog" className="btn btn-outline btn-lg">
              <i className="fas fa-newspaper"></i> Read All Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;