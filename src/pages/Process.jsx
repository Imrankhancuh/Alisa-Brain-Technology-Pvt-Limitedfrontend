import React from 'react';
import './Process.css';

const Process = () => {
  const processSteps = [
    {
      id: 1,
      title: "Discovery & Consultation",
      description: "Initial meeting to understand your project requirements, goals, and target audience.",
      icon: "🔍",
      details: [
        "Project requirements gathering",
        "Target audience analysis",
        "Competitor research",
        "Goal setting & KPI definition"
      ]
    },
    {
      id: 2,
      title: "Planning & Strategy",
      description: "Creating a detailed project plan, timeline, and technical architecture.",
      icon: "📋",
      details: [
        "Project roadmap creation",
        "Technical architecture design",
        "Resource planning",
        "Timeline estimation"
      ]
    },
    {
      id: 3,
      title: "Design & Prototyping",
      description: "Wireframing, UI/UX design, and creating interactive prototypes.",
      icon: "🎨",
      details: [
        "Wireframe creation",
        "UI/UX design",
        "Interactive prototypes",
        "Design system setup"
      ]
    },
    {
      id: 4,
      title: "Development",
      description: "Building the application with clean, scalable code and best practices.",
      icon: "💻",
      details: [
        "Frontend development",
        "Backend integration",
        "Database setup",
        "API development"
      ]
    },
    {
      id: 5,
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing to ensure functionality, performance, and security.",
      icon: "🧪",
      details: [
        "Unit testing",
        "Integration testing",
        "Performance testing",
        "Security testing"
      ]
    },
    {
      id: 6,
      title: "Deployment & Launch",
      description: "Deploying to production environment and ensuring smooth launch.",
      icon: "🚀",
      details: [
        "Production deployment",
        "Environment configuration",
        "Performance optimization",
        "Launch checklist"
      ]
    },
    {
      id: 7,
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and maintenance post-launch.",
      icon: "🛠️",
      details: [
        "Regular updates",
        "Bug fixes",
        "Performance monitoring",
        "Feature enhancements"
      ]
    }
  ];

  const faqs = [
    {
      question: "How long does each phase typically take?",
      answer: "The duration varies based on project complexity. Discovery phase usually takes 1-2 weeks, design 2-3 weeks, development 4-8 weeks, and testing 1-2 weeks."
    },
    {
      question: "Do you work with agile methodologies?",
      answer: "Yes, I primarily use Agile methodology with 2-week sprints, regular standups, and continuous delivery for better flexibility and client collaboration."
    },
    {
      question: "Can I be involved in the process?",
      answer: "Absolutely! I encourage client involvement through regular check-ins, demo sessions, and feedback loops at every stage of the process."
    },
    {
      question: "What happens after project completion?",
      answer: "I provide 30 days of free post-launch support, followed by optional maintenance plans for ongoing updates and enhancements."
    }
  ];

  return (
    <div className="process-container">
      {/* Hero Section */}
      <section className="process-hero">
        <div className="process-hero-content">
          <h1 className="process-title">My Development Process</h1>
          <p className="process-subtitle black-highlighted">
            A structured, transparent approach to delivering high-quality web solutions
          </p>
          <p className="process-description black-highlighted">
              Every successful project starts with a clear process. Here's how I transform ideas into fully-functional,
                scalable applications while maintaining open communication and exceeding expectations.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="process-steps-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Step-by-Step Process</h2>
            <p className="section-subtitle">From concept to launch and beyond</p>
          </div>
          
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div 
                key={step.id} 
                className={`process-step ${index % 2 === 0 ? 'left' : 'right'}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="step-number">{step.id}</div>
                <div className="step-card">
                  <div className="step-header">
                    <span className="step-icon">{step.icon}</span>
                    <h3 className="step-title">{step.title}</h3>
                  </div>
                  <p className="step-description">{step.description}</p>
                  <ul className="step-details">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="step-detail-item">
                        <span className="detail-icon">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            
            {/* Timeline line */}
            <div className="timeline-line"></div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="methodology-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">My Methodology</h2>
            <p className="section-subtitle">Principles that guide my work</p>
          </div>
          
          <div className="methodology-grid">
            <div className="methodology-card" data-aos="zoom-in">
              <div className="methodology-icon">👥</div>
              <h3 className="methodology-title">Client Collaboration</h3>
              <p className="methodology-description">
                You're involved at every stage. Regular updates, feedback sessions, and transparent communication ensure we're always aligned.
              </p>
            </div>
            
            <div className="methodology-card" data-aos="zoom-in" data-aos-delay="100">
              <div className="methodology-icon">🔄</div>
              <h3 className="methodology-title">Agile Approach</h3>
              <p className="methodology-description">
                Flexible, iterative development with regular deliverables. Adapt to changes quickly while maintaining project momentum.
              </p>
            </div>
            
            <div className="methodology-card" data-aos="zoom-in" data-aos-delay="200">
              <div className="methodology-icon">🎯</div>
              <h3 className="methodology-title">Quality First</h3>
              <p className="methodology-description">
                Emphasis on clean code, best practices, and thorough testing to ensure scalable, maintainable solutions.
              </p>
            </div>
            
            <div className="methodology-card" data-aos="zoom-in" data-aos-delay="300">
              <div className="methodology-icon">📊</div>
              <h3 className="methodology-title">Data-Driven</h3>
              <p className="methodology-description">
                Decisions based on analytics and user research to create solutions that deliver real business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Common questions about my process</p>
          </div>
          
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="faq-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="process-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Project?</h2>
            <p className="cta-description">
              Let's discuss how we can work together following this proven process.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                Start a Conversation
              </a>
              {/* <a href="/portfolio" className="btn btn-secondary">
                View My Work
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;