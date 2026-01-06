import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (categoryId, itemId) => {
    setOpenItems(prev => ({
      ...prev,
      [categoryId]: prev[categoryId] === itemId ? null : itemId
    }));
  };

  const faqCategories = [
    {
      id: 'general',
      name: 'General Questions',
      icon: 'fas fa-question-circle',
      questions: [
        {
          id: 'gen-1',
          question: 'What services do you offer?',
          answer: 'I offer a comprehensive range of web development services including custom web application development, responsive website design, mobile app development, UI/UX design, e-commerce solutions, website maintenance, and technical consulting.'
        },
        {
          id: 'gen-2',
          question: 'How long does a typical project take?',
          answer: 'Project timelines vary based on complexity and scope. A simple website typically takes 2-4 weeks, while complex web applications can take 2-6 months. I provide detailed timelines during the initial consultation after understanding your specific requirements.'
        },
        {
          id: 'gen-3',
          question: 'Do you work with international clients?',
          answer: 'Yes, I work with clients worldwide. I\'m experienced in remote collaboration across different time zones and have successfully delivered projects for clients in India, Dubai, Saudi Arbia, Kuwait, North America, Europe, Asia, and Australia.'
        },
        {
          id: 'gen-4',
          question: 'What is your communication process?',
          answer: 'I maintain regular communication through email, scheduled video calls, and project management tools like Slack or Trello. You\'ll receive weekly progress updates and can reach me during business hours for urgent matters.'
        }
      ]
    },
    {
      id: 'technical',
      name: 'Technical Questions',
      icon: 'fas fa-code',
      questions: [
        {
          id: 'tech-1',
          question: 'What technologies do you work with?',
          answer: 'My primary stack includes React, Next.js, Node.js, TypeScript, and modern CSS frameworks. I also work with MongoDB, PostgreSQL, Firebase, AWS, and various APIs. I stay updated with the latest technologies to provide modern, efficient solutions.'
        },
        {
          id: 'tech-2',
          question: 'Do you work with existing codebases?',
          answer: 'Yes, I frequently work with and improve existing codebases. I can analyze your current code, suggest improvements, fix bugs, add new features, or completely refactor the codebase for better performance and maintainability.'
        },
        {
          id: 'tech-3',
          question: 'Do you provide website maintenance?',
          answer: 'Yes, I offer ongoing maintenance packages that include regular updates, security patches, performance monitoring, bug fixes, and content updates. Maintenance plans are customized based on your specific needs.'
        },
        {
          id: 'tech-4',
          question: 'How do you handle website security?',
          answer: 'I implement security best practices including HTTPS/SSL encryption, secure authentication, input validation, regular security updates, and vulnerability scanning. For e-commerce sites, I ensure PCI compliance and secure payment processing.'
        }
      ]
    },
    {
      id: 'process',
      name: 'Process & Workflow',
      icon: 'fas fa-cogs',
      questions: [
        {
          id: 'proc-1',
          question: 'What is your typical project workflow?',
          answer: 'My workflow includes: 1) Discovery & Planning, 2) Design & Prototyping, 3) Development, 4) Testing & Quality Assurance, 5) Deployment, and 6) Post-launch Support. Each phase includes client reviews and approvals.'
        },
        {
          id: 'proc-2',
          question: 'How do you handle revisions and changes?',
          answer: 'I include a specific number of revisions in my proposals based on project scope. Additional revisions are available at agreed-upon rates. Major scope changes may require adjusting timelines and budgets, which I discuss transparently.'
        },
        {
          id: 'proc-3',
          question: 'Do you provide project timelines and milestones?',
          answer: 'Yes, I provide detailed project timelines with specific milestones and deliverables. You\'ll receive regular progress updates and have access to project management tools to track the project status in real-time.'
        },
        {
          id: 'proc-4',
          question: 'What happens after the project is completed?',
          answer: 'After project completion, I provide documentation, training if needed, and ongoing support options. I also offer maintenance packages to ensure your website remains secure, updated, and performing optimally.'
        }
      ]
    },
    {
      id: 'pricing',
      name: 'Pricing & Payments',
      icon: 'fas fa-dollar-sign',
      questions: [
        {
          id: 'price-1',
          question: 'What are your pricing models?',
          answer: 'I offer flexible pricing models: Fixed Price for well-defined projects, Hourly Rate for ongoing work or consultation, and Retainer agreements for regular maintenance and support. I provide detailed quotes after understanding project requirements.'
        },
        {
          id: 'price-2',
          question: 'What is included in your quotes?',
          answer: 'My quotes include detailed breakdowns of all services, timeline estimates, deliverables, revision limits, support terms, and payment schedules. I ensure there are no hidden costs and all expectations are clearly defined.'
        },
        {
          id: 'price-3',
          question: 'What are your payment terms?',
          answer: 'Typically, I require a 30-50% deposit to begin work, with milestone payments throughout the project, and final payment upon completion. For smaller projects, I may offer different payment structures. All terms are clearly outlined in the agreement.'
        },
        {
          id: 'price-4',
          question: 'Do you offer refunds?',
          answer: 'I strive for complete client satisfaction. If you\'re not satisfied with the work, we\'ll discuss solutions to meet your expectations. Refunds are considered on a case-by-case basis based on the work completed and reasons for dissatisfaction.'
        }
      ]
    },
    {
      id: 'support',
      name: 'Support & Maintenance',
      icon: 'fas fa-headset',
      questions: [
        {
          id: 'sup-1',
          question: 'What support do you provide after launch?',
          answer: 'I provide 30 days of free support after launch to fix any issues. After that, I offer various support packages ranging from basic email support to comprehensive maintenance plans including updates, backups, and performance monitoring.'
        },
        {
          id: 'sup-2',
          question: 'Do you offer training?',
          answer: 'Yes, I provide training on how to use and maintain your website or application. This can include content management system training, basic maintenance tasks, and best practices for keeping your site updated and secure.'
        },
        {
          id: 'sup-3',
          question: 'How do you handle website updates?',
          answer: 'For maintenance clients, I handle all updates including security patches, plugin updates, content updates, and feature additions based on your package. I perform updates during low-traffic periods and test thoroughly before making them live.'
        },
        {
          id: 'sup-4',
          question: 'What is your response time for support requests?',
          answer: 'Response times vary by support level: Priority support gets response within 1-2 hours, Standard support within 4-8 hours, and Basic support within 24 hours on business days. Emergency support is available for critical issues.'
        }
      ]
    }
  ];

  const popularQuestions = [
    {
      id: 'pop-1',
      question: 'How much does a website cost?',
      answer: 'Website costs vary based on complexity, features, and design requirements. Simple websites start around $1500, while complex web applications can range from $5000 to $10,000 to $50,000+. I provide customized quotes after understanding your specific needs.',
      category: 'pricing'
    },
    {
      id: 'pop-2',
      question: 'Can you redesign my existing website?',
      answer: 'Yes, I frequently redesign existing websites to improve functionality, user experience, and modernize the design. I analyze your current site, identify areas for improvement, and create a strategy for a successful redesign.',
      category: 'technical'
    },
    {
      id: 'pop-3',
      question: 'Do you provide hosting services?',
      answer: 'While I don\'t provide hosting directly, I help you choose the right hosting solution and set it up for optimal performance. I have partnerships with reliable hosting providers and can manage the hosting setup for you.',
      category: 'technical'
    },
    {
      id: 'pop-4',
      question: 'How do we start working together?',
      answer: 'Start by contacting me through the contact form or scheduling a consultation. We\'ll discuss your project, I\'ll provide a detailed proposal, and once approved, we\'ll begin with discovery and planning phases.',
      category: 'process'
    }
  ];

  const activeCategoryData = faqCategories.find(cat => cat.id === activeCategory);

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Frequently Asked Questions</h1>
            <p className="hero-subtitle">
              Find answers to common questions about my services, process, and pricing
            </p>
            <div className="search-container">
              <input 
                type="text" 
                placeholder="Search for answers..." 
                className="search-input"
              />
              <button className="search-btn">
                <i className="fas fa-search"></i> 
              </button>
            </div>
            <p className="hero-note">
              Can't find what you're looking for? <Link to="/contact">Contact me directly</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      <section className="popular-questions">
        <div className="container">
          <div className="section-header">
            <h2>Most Popular Questions</h2>
            <p>Quick answers to the questions I get asked most frequently</p>
          </div>
          
          <div className="popular-grid">
            {popularQuestions.map(item => (
              <div key={item.id} className="popular-card">
                <div className="card-header">
                  <div className="card-category">{faqCategories.find(cat => cat.id === item.category)?.name}</div>
                  <h3 className="card-question">{item.question}</h3>
                </div>
                <div className="card-body">
                  <p className="card-answer">{item.answer}</p>
                </div>
                <div className="card-footer">
                  <button 
                    className="read-more-btn"
                    onClick={() => {
                      setActiveCategory(item.category);
                      window.scrollTo({ top: 600, behavior: 'smooth' });
                    }}
                  >
                    <i className="fas fa-arrow-right"></i> More in {faqCategories.find(cat => cat.id === item.category)?.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="faq-categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Browse by Category</h2>
            <p>Select a category to explore questions on specific topics</p>
          </div>
          
          <div className="categories-grid">
            {faqCategories.map(category => (
              <button
                key={category.id}
                className={`category-card ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <div className="category-icon">
                  <i className={category.icon}></i>
                </div>
                <h3 className="category-name">{category.name}</h3>
                <p className="category-count">{category.questions.length} questions</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faq-content-section">
        <div className="container">
          <div className="content-header">
            <div className="header-left">
              <div className="active-category-icon">
                <i className={activeCategoryData?.icon}></i>
              </div>
              <div>
                <h2>{activeCategoryData?.name}</h2>
                <p>Browse questions and answers in this category</p>
              </div>
            </div>
            <div className="header-right">
              <Link to="/contact" className="btn btn-primary">
                <i className="fas fa-question-circle"></i> Ask a New Question
              </Link>
            </div>
          </div>
          
          <div className="faq-accordion">
            {activeCategoryData?.questions.map(item => (
              <div 
                key={item.id} 
                className={`accordion-item ${openItems[activeCategory] === item.id ? 'active' : ''}`}
              >
                <button 
                  className="accordion-header"
                  onClick={() => toggleItem(activeCategory, item.id)}
                >
                  <div className="question-content">
                    <span className="question-number">Q</span>
                    <h3 className="question-text">{item.question}</h3>
                  </div>
                  <div className="accordion-icon">
                    <i className={`fas fa-chevron-${openItems[activeCategory] === item.id ? 'up' : 'down'}`}></i>
                  </div>
                </button>
                
                <div className="accordion-content">
                  <div className="answer-content">
                    <span className="answer-label">A</span>
                    <div className="answer-text">
                      <p>{item.answer}</p>
                      {item.id === 'gen-1' && (
                        <div className="answer-extra">
                          <h4>My Core Services:</h4>
                          <div className="services-list">
                            <div className="service-item">
                              <i className="fas fa-code"></i>
                              <div>
                                <h5>Custom Web Development</h5>
                                <p>Tailored solutions built from scratch</p>
                              </div>
                            </div>
                            <div className="service-item">
                              <i className="fas fa-mobile-alt"></i>
                              <div>
                                <h5>Responsive Design</h5>
                                <p>Mobile-friendly websites that work on all devices</p>
                              </div>
                            </div>
                            <div className="service-item">
                              <i className="fas fa-shopping-cart"></i>
                              <div>
                                <h5>E-commerce Solutions</h5>
                                <p>Online stores with secure payment processing</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="faq-contact-cta">
        <div className="container">
          <div className="cta-content">
            <div className="cta-icon">
              <i className="fas fa-comments"></i>
            </div>
            <div className="cta-text">
              <h2>Still Have Questions?</h2>
              <p>
                If you couldn't find the answer you're looking for, don't hesitate to reach out. 
                I'm here to help with any questions about my services, process, or how we can work together.
              </p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <i className="fas fa-envelope"></i> Contact Me
              </Link>
              <a href="tel:+15551234567" className="btn btn-secondary btn-lg">
                <i className="fas fa-phone"></i> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="related-links">
        <div className="container">
          <div className="section-header">
            <h2>Related Information</h2>
            <p>Explore more detailed information on these topics</p>
          </div>
          
          <div className="links-grid">
            <Link to="/services" className="related-card">
              <div className="related-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <div className="related-content">
                <h3>Services</h3>
                <p>Detailed information about all the services I offer</p>
              </div>
              <div className="related-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </Link>
            
            <Link to="/process" className="related-card">
              <div className="related-icon">
                <i className="fas fa-project-diagram"></i>
              </div>
              <div className="related-content">
                <h3>Process</h3>
                <p>Learn about my detailed project workflow and methodology</p>
              </div>
              <div className="related-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </Link>
            
            <Link to="/testimonials" className="related-card">
              <div className="related-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="related-content">
                <h3>Testimonials</h3>
                <p>See what my clients say about working with me</p>
              </div>
              <div className="related-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </Link>
            
            <Link to="/portfolio" className="related-card">
              <div className="related-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <div className="related-content">
                <h3>Project</h3> 
                <p>Browse my previous projects and case studies</p>
              </div>
              <div className="related-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;