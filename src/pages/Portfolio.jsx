// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Portfolio.css';

// const Portfolio = () => {
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [selectedProject, setSelectedProject] = useState(null);

//   const filters = [
//     { id: 'all', name: 'All Projects' },
//     // { id: 'web', name: 'Web Development' },
//     // { id: 'mobile', name: 'Mobile Apps' },
//     // { id: 'design', name: 'UI/UX Design' },
//     // { id: 'ecommerce', name: 'E-commerce' },
//     // { id: 'saas', name: 'SaaS Solutions' }
//   ];

//   const projects = [
//     {
//       id: 1,
//       title: 'Vendor Events Day Tracker',
//       category: 'Web Application Development',
//       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
//       description: 'Event management platform for vendors with scheduling, tracking, and analytics features.',
//       // link: '/portfolio'
//       // title: 'E-commerce Fashion Platform',
//       // category: 'ecommerce',
//       // client: 'FashionHub Retail',
//       // year: '2023',
//       // duration: '3 months',
//       // description: 'A modern e-commerce platform with AI-powered recommendations and advanced filtering.',
//       // fullDescription: 'Developed a complete e-commerce solution with product management, user authentication, payment integration, and AI-powered recommendation engine. The platform features advanced search filters, real-time inventory management, and a seamless checkout experience.',
//       // technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
//       // features: [
//       //   'AI-powered product recommendations',
//       //   'Advanced search and filtering',
//       //   'Secure payment processing',
//       //   'Real-time inventory management',
//       //   'Responsive mobile design'
//       // ],
//       // results: [
//       //   { metric: '45%', label: 'Increase in Conversion' },
//       //   { metric: '60%', label: 'Faster Page Load' },
//       //   { metric: '30%', label: 'Reduced Cart Abandonment' }
//       // ],
//       // image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       // link: '/case-study/ecommerce-fashion'
//     },
//     {
//       id: 2,
//       title: 'Transport Logistics',
//       category: 'Web Development',
//       image: 'https://images.unsplash.com/photo-1562887189-e5d078343de4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
//       description: 'Modern logistics and transportation management platform with real-time tracking.',
//     // technologies: ['React.js', 'Node.js', 'MongoDB', 'Google Maps API'],
//     // features: ['Real-time Tracking', 'Shipment Management', 'Driver Portal', 'Customer Dashboard'],
//     // link: '/portfolio',
//       // title: 'Health & Fitness Mobile App',
//       // category: 'mobile',
//       // client: 'FitTrack Inc.',
//       // year: '2023',
//       // duration: '6 months',
//       // description: 'Cross-platform fitness tracking application with social features and health analytics.',
//       // fullDescription: 'Built a comprehensive fitness tracking app that monitors workouts, nutrition, and health metrics. The app includes social features, progress tracking, workout plans, and integration with wearable devices.',
//       // technologies: ['React Native', 'Firebase', 'Redux', 'Apple Health', 'Google Fit'],
//       // features: [
//       //   'Workout tracking and planning',
//       //   'Nutrition and calorie tracking',
//       //   'Social features and challenges',
//       //   'Wearable device integration',
//       //   'Progress analytics dashboard'
//       // ],
//       // results: [
//       //   { metric: '50K+', label: 'Active Users' },
//       //   { metric: '4.8', label: 'App Store Rating' },
//       //   { metric: '95%', label: 'User Satisfaction' }
//       // ],
//       // image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       // link: '/case-study/fitness-app'
//     },
//     {
//       id: 3,
//       title: 'IntelliDoc RAG System',
//       category: 'AI & NLP',
//       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
//       description: 'Retrieval-Augmented Generation system for intelligent document processing and Q&A.',
//     // technologies: ['Python', 'LangChain', 'OpenAI API', 'Pinecone', 'FastAPI'],
//     // features: ['Document Embedding', 'Semantic Search', 'Context-Aware Responses', 'Multi-format Support'],
//     // link: '/portfolio',
//       // title: 'Corporate Analytics Dashboard',
//       // category: 'saas',
//       // client: 'DataCorp Solutions',
//       // year: '2023',
//       // duration: '4 months',
//       // description: 'Enterprise analytics dashboard for real-time business intelligence and reporting.',
//       // fullDescription: 'Created a comprehensive analytics dashboard that aggregates data from multiple sources, providing real-time insights, predictive analytics, and customizable reporting for enterprise clients.',
//       // technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL', 'Docker'],
//       // features: [
//       //   'Real-time data visualization',
//       //   'Customizable dashboards',
//       //   'Predictive analytics',
//       //   'Automated reporting',
//       //   'Team collaboration tools'
//       // ],
//       // results: [
//       //   { metric: '85%', label: 'Data Processing Speed' },
//       //   { metric: '70%', label: 'Report Generation Time' },
//       //   { metric: '90%', label: 'Client Adoption Rate' }
//       // ],
//       // image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       // link: '/case-study/analytics-dashboard'
//     }
//     // {
//     //   id: 4,
//     //   title: 'Travel Booking Platform',
//     //   category: 'web',
//     //   client: 'TravelEasy',
//     //   year: '2022',
//     //   duration: '5 months',
//     //   description: 'Comprehensive travel booking platform with flight, hotel, and car rental services.',
//     //   fullDescription: 'Developed a full-featured travel booking platform integrating multiple APIs for flight, hotel, and car rental bookings. The platform includes user reviews, price comparison, and itinerary management.',
//     //   technologies: ['Next.js', 'NestJS', 'MongoDB', 'Redis', 'Multiple APIs'],
//     //   features: [
//     //     'Multi-service booking (flights, hotels, cars)',
//     //     'Price comparison engine',
//     //     'User reviews and ratings',
//     //     'Itinerary management',
//     //     'Mobile-responsive design'
//     //   ],
//     //   results: [
//     //     { metric: '200K+', label: 'Monthly Bookings' },
//     //     { metric: '25%', label: 'Revenue Growth' },
//     //     { metric: '90%', label: 'Repeat Customers' }
//     //   ],
//     //   image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     //   link: '/case-study/travel-platform'
//     // },
//     // {
//     //   id: 5,
//     //   title: 'Educational Learning Platform',
//     //   category: 'web',
//     //   client: 'LearnHub Academy',
//     //   year: '2022',
//     //   duration: '6 months',
//     //   description: 'Interactive learning platform with courses, quizzes, and progress tracking.',
//     //   fullDescription: 'Built an educational platform offering interactive courses, quizzes, assignments, and progress tracking. Features include video lessons, peer interaction, and certification upon completion.',
//     //   technologies: ['React', 'Express.js', 'MySQL', 'Socket.io', 'AWS S3'],
//     //   features: [
//     //     'Interactive video courses',
//     //     'Progress tracking and analytics',
//     //     'Peer-to-peer learning',
//     //     'Quiz and assessment system',
//     //     'Certificate generation'
//     //   ],
//     //   results: [
//     //     { metric: '10K+', label: 'Active Learners' },
//     //     { metric: '85%', label: 'Course Completion' },
//     //     { metric: '4.7', label: 'Average Rating' }
//     //   ],
//     //   image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     //   link: '/case-study/learning-platform'
//     // },
//     // {
//     //   id: 6,
//     //   title: 'Restaurant Management System',
//     //   category: 'web',
//     //   client: 'FineDine Group',
//     //   year: '2022',
//     //   duration: '4 months',
//     //   description: 'Complete restaurant management system with POS, inventory, and analytics.',
//     //   fullDescription: 'Developed a comprehensive restaurant management system including point-of-sale, inventory management, staff scheduling, customer relationship management, and business analytics.',
//     //   technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Stripe'],
//     //   features: [
//     //     'Point of Sale system',
//     //     'Inventory management',
//     //     'Staff scheduling',
//     //     'Customer analytics',
//     //     'Online ordering integration'
//     //   ],
//     //   results: [
//     //     { metric: '40%', label: 'Operational Efficiency' },
//     //     { metric: '25%', label: 'Cost Reduction' },
//     //     { metric: '95%', label: 'System Reliability' }
//     //   ],
//     //   image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     //   link: '/case-study/restaurant-system'
//     // },
//     // {
//     //   id: 7,
//     //   title: 'FinTech Mobile Banking',
//     //   category: 'mobile',
//     //   client: 'WealthSecure Bank',
//     //   year: '2021',
//     //   duration: '8 months',
//     //   description: 'Secure mobile banking application with advanced financial management features.',
//     //   fullDescription: 'Created a secure mobile banking app with features including account management, fund transfers, bill payments, investment tracking, and financial planning tools.',
//     //   technologies: ['React Native', 'Spring Boot', 'PostgreSQL', 'Redis', 'AWS'],
//     //   features: [
//     //     'Secure biometric authentication',
//     //     'Real-time transaction processing',
//     //     'Investment tracking',
//     //     'Budget planning tools',
//     //     'Bill payment system'
//     //   ],
//     //   results: [
//     //     { metric: '100K+', label: 'App Downloads' },
//     //     { metric: '99.9%', label: 'System Uptime' },
//     //     { metric: '4.9', label: 'User Rating' }
//     //   ],
//     //   image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     //   link: '/case-study/mobile-banking'
//     // },
//     // {
//     //   id: 8,
//     //   title: 'Real Estate Platform',
//     //   category: 'web',
//     //   client: 'PropertyFind',
//     //   year: '2021',
//     //   duration: '5 months',
//     //   description: 'Advanced real estate platform with property search, virtual tours, and agent matching.',
//     //   fullDescription: 'Built a comprehensive real estate platform featuring property listings, virtual tours, mortgage calculators, agent matching algorithms, and secure document management.',
//     //   technologies: ['Next.js', 'Node.js', 'MongoDB', 'Three.js', 'AWS'],
//     //   features: [
//     //     'Advanced property search',
//     //     'Virtual 3D property tours',
//     //     'Mortgage calculator',
//     //     'Agent matching system',
//     //     'Document management'
//     //   ],
//     //   results: [
//     //     { metric: '15K+', label: 'Property Listings' },
//     //     { metric: '35%', label: 'Faster Search' },
//     //     { metric: '80%', label: 'User Engagement' }
//     //   ],
//     //   image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     //   link: '/case-study/real-estate'
//     // },
//     // {
//     //   id: 9,
//     //   title: 'UI/UX Design System',
//     //   category: 'design',
//     //   client: 'TechCorp Global',
//     //   year: '2021',
//     //   duration: '3 months',
//     //   description: 'Comprehensive design system for maintaining consistency across multiple products.',
//     //   fullDescription: 'Designed and implemented a complete design system including component library, design tokens, documentation, and implementation guidelines for cross-platform consistency.',
//     //   technologies: ['Figma', 'Storybook', 'React', 'Styled Components', 'Design Tokens'],
//     //   features: [
//     //     'Component library',
//     //     'Design tokens system',
//     //     'Accessibility guidelines',
//     //     'Documentation portal',
//     //     'Implementation examples'
//     //   ],
//     //   results: [
//     //     { metric: '50%', label: 'Development Speed' },
//     //     { metric: '100%', label: 'Design Consistency' },
//     //     { metric: '40%', label: 'Reduced Bugs' }
//     //   ],
//     //   image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     //   link: '/case-study/design-system'
//     // }
//   ];

//   const filteredProjects = activeFilter === 'all' 
//     ? projects 
//     : projects.filter(project => project.category === activeFilter);

//   const openProjectModal = (project) => {
//     setSelectedProject(project);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeProjectModal = () => {
//     setSelectedProject(null);
//     document.body.style.overflow = 'auto';
//   };

//   const portfolioStats = [
//     { number: projects.length, label: 'Projects Completed', icon: 'fas fa-project-diagram' },
//     { number: '9', label: 'Different Industries', icon: 'fas fa-industry' },
//     { number: '15+', label: 'Technologies Used', icon: 'fas fa-code' },
//     { number: '100%', label: 'Client Satisfaction', icon: 'fas fa-star' }
//   ];

//   return (
//     <div className="portfolio-page">
//       {/* Hero Section */}
//       <section className="portfolio-hero">
//         <div className="container">
//           <div className="hero-content">
//             <h1>My Project</h1>
//             <p className="hero-subtitle">
//               A collection of my recent projects, showcasing innovative solutions across various industries
//             </p>
//             <div className="hero-stats">
//               {portfolioStats.map((stat, index) => (
//                 <div key={index} className="hero-stat">
//                   <i className={stat.icon}></i>
//                   <div>
//                     <div className="stat-number">{stat.number}</div>
//                     <div className="stat-label">{stat.label}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Filter Section */}
//       <section className="filter-section">
//         <div className="container">
//           <div className="section-header">
//             <h2>Browse Projects</h2>
//             <p>Filter projects by category or technology</p>
//           </div>
          
//           <div className="filter-buttons">
//             {filters.map(filter => (
//               <button
//                 key={filter.id}
//                 className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
//                 onClick={() => setActiveFilter(filter.id)}
//               >
//                 {filter.name}
//               </button>
//             ))}
//           </div>
          
//           <div className="filter-info">
//             <span className="project-count">
//               Showing {filteredProjects.length} of {projects.length} projects
//             </span>
//             <span className="filter-status">
//               Filter: <strong>{filters.find(f => f.id === activeFilter)?.name}</strong>
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* Projects Grid */}
//       <section className="projects-grid-section">
//         <div className="container">
//           {filteredProjects.length === 0 ? (
//             <div className="no-projects">
//               <i className="fas fa-search"></i>
//               <h3>No projects found</h3>
//               <p>Try selecting a different filter category</p>
//             </div>
//           ) : (
//             <div className="portfolio-grid">
//               {filteredProjects.map(project => (
//                 <div key={project.id} className="portfolio-card">
//                   <div className="card-image">
//                     <img src={project.image} alt={project.title} />
//                     <div className="card-category">{project.category}</div>
//                     <div className="card-overlay">
//                       <button 
//                         className="view-details-btn"
//                         onClick={() => openProjectModal(project)}
//                       >
//                         <i className="fas fa-expand"></i> Quick View
//                       </button>
//                     </div>
//                   </div>
                  
//                   <div className="card-content">
//                     <div className="card-header">
//                       <h3 className="card-title">{project.title}</h3>
//                       <div className="card-meta">
//                         <span className="client">{project.client}</span>
//                         <span className="year">{project.year}</span>
//                         <span className="duration">{project.duration}</span>
//                       </div>
//                     </div>
                    
//                     <p className="card-description">{project.description}</p>
                    
//                     <div className="card-technologies">
//                       <div className="tech-tags">
//                         {project.technologies.slice(0, 3).map((tech, idx) => (
//                           <span key={idx} className="tech-tag">{tech}</span>
//                         ))}
//                         {project.technologies.length > 3 && (
//                           <span className="tech-tag">+{project.technologies.length - 3}</span>
//                         )}
//                       </div>
//                     </div>
                    
//                     <div className="card-results">
//                       {project.results.slice(0, 1).map((result, idx) => (
//                         <div key={idx} className="result-item">
//                           <span className="result-metric">{result.metric}</span>
//                           <span className="result-label">{result.label}</span>
//                         </div>
//                       ))}
//                     </div>
                    
//                     <div className="card-footer">
//                       <button 
//                         className="view-project-btn"
//                         onClick={() => openProjectModal(project)}
//                       >
//                         View Details
//                       </button>
//                       <Link to={project.link} className="case-study-link">
//                         Case Study <i className="fas fa-arrow-right"></i>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Project Modal */}
//       {selectedProject && (
//         <div className="project-modal">
//           <div className="modal-overlay" onClick={closeProjectModal}></div>
//           <div className="modal-content">
//             <button className="modal-close" onClick={closeProjectModal}>
//               <i className="fas fa-times"></i>
//             </button>
            
//             <div className="modal-header">
//               <div className="modal-image">
//                 <img src={selectedProject.image} alt={selectedProject.title} />
//               </div>
//               <div className="modal-title-section">
//                 <div className="modal-category">{selectedProject.category}</div>
//                 <h2>{selectedProject.title}</h2>
//                 <div className="modal-meta">
//                   <span className="modal-client">
//                     <i className="fas fa-building"></i> {selectedProject.client}
//                   </span>
//                   <span className="modal-year">
//                     <i className="far fa-calendar"></i> {selectedProject.year}
//                   </span>
//                   <span className="modal-duration">
//                     <i className="far fa-clock"></i> {selectedProject.duration}
//                   </span>
//                 </div>
//               </div>
//             </div>
            
//             <div className="modal-body">
//               <div className="modal-description">
//                 <h3>Project Overview</h3>
//                 <p>{selectedProject.fullDescription}</p>
//               </div>
              
//               <div className="modal-details">
//                 <div className="detail-section">
//                   <h3><i className="fas fa-code"></i> Technologies Used</h3>
//                   <div className="technologies-list">
//                     {selectedProject.technologies.map((tech, idx) => (
//                       <span key={idx} className="technology-tag">{tech}</span>
//                     ))}
//                   </div>
//                 </div>
                
//                 <div className="detail-section">
//                   <h3><i className="fas fa-star"></i> Key Features</h3>
//                   <ul className="features-list">
//                     {selectedProject.features.map((feature, idx) => (
//                       <li key={idx}>
//                         <i className="fas fa-check-circle"></i> {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
                
//                 <div className="detail-section">
//                   <h3><i className="fas fa-chart-line"></i> Results Achieved</h3>
//                   <div className="results-grid">
//                     {selectedProject.results.map((result, idx) => (
//                       <div key={idx} className="result-card">
//                         <div className="result-metric">{result.metric}</div>
//                         <div className="result-label">{result.label}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="modal-footer">
//               <Link to={selectedProject.link} className="btn btn-primary">
//                 <i className="fas fa-file-alt"></i> View Full Case Study
//               </Link>
//               <button className="btn btn-secondary" onClick={closeProjectModal}>
//                 <i className="fas fa-times"></i> Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* CTA Section */}
//       <section className="portfolio-cta">
//         <div className="container">
//           <div className="cta-content">
//             <div className="cta-text">
//               <h2>Like What You See?</h2>
//               <p>
//                 Interested in working together on your next project? Let's discuss how I can help 
//                 bring your ideas to life with the same level of quality and attention to detail.
//               </p>
//             </div>
//             <div className="cta-buttons">
//               <Link to="/contact" className="btn btn-primary btn-lg">
//                 <i className="fas fa-rocket"></i> Start a Project
//               </Link>
//               <Link to="/case-studies" className="btn btn-secondary btn-lg">
//                 <i className="fas fa-file-alt"></i> View Case Studies
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Technologies Showcase */}
//       <section className="technologies-showcase">
//         <div className="container">
//           <div className="section-header">
//             <h2>Technologies I Work With</h2>
//             <p>Expertise across a wide range of modern technologies and frameworks</p>
//           </div>
          
//           <div className="tech-categories">
//             <div className="tech-category">
//               <h3><i className="fas fa-desktop"></i> Frontend</h3>
//               <div className="tech-list">
//                 <span className="tech-item">React</span>
//                 <span className="tech-item">Vue.js</span>
//                 <span className="tech-item">Next.js</span>
//                 <span className="tech-item">TypeScript</span>
//                 <span className="tech-item">Tailwind CSS</span>
//               </div>
//             </div>
            
//             <div className="tech-category">
//               <h3><i className="fas fa-server"></i> Backend</h3>
//               <div className="tech-list">
//                 <span className="tech-item">Node.js</span>
//                 <span className="tech-item">Express</span>
//                 <span className="tech-item">Python</span>
//                 <span className="tech-item">MongoDB</span>
//                 <span className="tech-item">PostgreSQL</span>
//               </div>
//             </div>
            
//             <div className="tech-category">
//               <h3><i className="fas fa-mobile-alt"></i> Mobile</h3>
//               <div className="tech-list">
//                 <span className="tech-item">React Native</span>
//                 <span className="tech-item">Flutter</span>
//                 <span className="tech-item">iOS (Swift)</span>
//                 <span className="tech-item">Android (Kotlin)</span>
//               </div>
//             </div>
            
//             <div className="tech-category">
//               <h3><i className="fas fa-cloud"></i> Cloud & DevOps</h3>
//               <div className="tech-list">
//                 <span className="tech-item">AWS</span>
//                 <span className="tech-item">Docker</span>
//                 <span className="tech-item">Firebase</span>
//                 <span className="tech-item">CI/CD</span>
//                 <span className="tech-item">Kubernetes</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Process Preview */}
//       <section className="process-preview">
//         <div className="container">
//           <div className="section-header">
//             <h2>My Development Process</h2>
//             <p>See how I approach projects from concept to completion</p>
//           </div>
          
//           <div className="process-steps">
//             <div className="process-step">
//               <div className="step-icon">
//                 <i className="fas fa-lightbulb"></i>
//               </div>
//               <div className="step-content">
//                 <h3>Concept & Planning</h3>
//                 <p>Understanding requirements and creating detailed project plans</p>
//               </div>
//             </div>
            
//             <div className="process-step">
//               <div className="step-icon">
//                 <i className="fas fa-pencil-ruler"></i>
//               </div>
//               <div className="step-content">
//                 <h3>Design & Prototyping</h3>
//                 <p>Creating wireframes, mockups, and interactive prototypes</p>
//               </div>
//             </div>
            
//             <div className="process-step">
//               <div className="step-icon">
//                 <i className="fas fa-code"></i>
//               </div>
//               <div className="step-content">
//                 <h3>Development</h3>
//                 <p>Building the solution with clean, maintainable code</p>
//               </div>
//             </div>
            
//             <div className="process-step">
//               <div className="step-icon">
//                 <i className="fas fa-rocket"></i>
//               </div>
//               <div className="step-content">
//                 <h3>Launch & Support</h3>
//                 <p>Deployment, testing, and ongoing maintenance</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="text-center mt-5">
//             <Link to="/process" className="btn btn-outline btn-lg">
//               <i className="fas fa-cogs"></i> Learn More About My Process
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Portfolio;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', name: 'All Projects' },
    // { id: 'web', name: 'Web Development' },
    // { id: 'mobile', name: 'Mobile Apps' },
    // { id: 'design', name: 'UI/UX Design' },
    // { id: 'ecommerce', name: 'E-commerce' },
    // { id: 'saas', name: 'SaaS Solutions' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Vendor Events Day Tracker',
      category: 'Web Application Development',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Event management platform for vendors with scheduling, tracking, and analytics features.',
      client: 'Client 1',
      year: '2024',
      duration: '5 months',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      features: ['Event scheduling', 'Vendor tracking', 'Analytics dashboard', 'Real-time updates'],
      results: [
        { metric: '45%', label: 'Increase in Efficiency' },
        { metric: '60%', label: 'Time Saved' },
        { metric: '30%', label: 'Cost Reduction' }
      ],
      fullDescription: 'Event management platform for vendors with scheduling, tracking, and analytics features. Developed a complete solution for managing vendor events with real-time tracking and reporting.',
      link: '/portfolio'
    },
    {
      id: 2,
      title: 'Transport Logistics',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1562887189-e5d078343de4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Modern logistics and transportation management platform with real-time tracking.',
      client: 'Client 2',
      year: '2025',
      duration: '7 months',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Google Maps API'],
      features: ['Real-time Tracking', 'Shipment Management', 'Driver Portal', 'Customer Dashboard'],
      results: [
        { metric: '40%', label: 'Delivery Efficiency' },
        { metric: '50%', label: 'Route Optimization' },
        { metric: '35%', label: 'Cost Reduction' }
      ],
      fullDescription: 'Modern logistics and transportation management platform with real-time tracking. Complete solution for managing transportation logistics with advanced tracking features.',
      link: '/portfolio'
    },
    {
      id: 3,
      title: 'IntelliDoc RAG System',
      category: 'AI & NLP',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Retrieval-Augmented Generation system for intelligent document processing and Q&A.',
      client: 'Client 3',
      year: '2025',
      duration: '6 months',
      technologies: ['Python', 'LangChain', 'OpenAI API', 'Pinecone', 'FastAPI'],
      features: ['Document Embedding', 'Semantic Search', 'Context-Aware Responses', 'Multi-format Support'],
      results: [
        { metric: '80%', label: 'Accuracy Improvement' },
        { metric: '70%', label: 'Processing Speed' },
        { metric: '90%', label: 'User Satisfaction' }
      ],
      fullDescription: 'Retrieval-Augmented Generation system for intelligent document processing and Q&A. Advanced AI system for document analysis and intelligent question answering.',
      link: '/portfolio'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const portfolioStats = [
    // { number: projects.length, label: 'Projects Completed', icon: 'fas fa-project-diagram' },
    // { number: '9', label: 'Different Industries', icon: 'fas fa-industry' },
    // { number: '15+', label: 'Technologies Used', icon: 'fas fa-code' },
    // { number: '100%', label: 'Client Satisfaction', icon: 'fas fa-star' }
  ];

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <div className="hero-content">
            <h1>My Project</h1>
            <p className="hero-subtitle">
              A collection of my recent projects, showcasing innovative solutions across various industries
            </p>
            <div className="hero-stats">
              {portfolioStats.map((stat, index) => (
                <div key={index} className="hero-stat">
                  <i className={stat.icon}></i>
                  <div>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="section-header">
            <h2>Browse Projects</h2>
            <p>Filter projects by category or technology</p>
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
          
          <div className="filter-info">
            <span className="project-count">
              Showing {filteredProjects.length} of {projects.length} projects
            </span>
            <span className="filter-status">
              Filter: <strong>{filters.find(f => f.id === activeFilter)?.name}</strong>
            </span>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="container">
          {filteredProjects.length === 0 ? (
            <div className="no-projects">
              <i className="fas fa-search"></i>
              <h3>No projects found</h3>
              <p>Try selecting a different filter category</p>
            </div>
          ) : (
            <div className="portfolio-grid">
              {filteredProjects.map(project => (
                <div key={project.id} className="portfolio-card">
                  <div className="card-image">
                    <img src={project.image} alt={project.title} />
                    <div className="card-category">{project.category}</div>
                    <div className="card-overlay">
                      <button 
                        className="view-details-btn"
                        onClick={() => openProjectModal(project)}
                      >
                        <i className="fas fa-expand"></i> Quick View
                      </button>
                    </div>
                  </div>
                  
                  <div className="card-content">
                    <div className="card-header">
                      <h3 className="card-title">{project.title}</h3>
                      <div className="card-meta">
                        <span className="client">{project.client}</span>
                        <span className="year">{project.year}</span>
                        <span className="duration">{project.duration}</span>
                      </div>
                    </div>
                    
                    <p className="card-description">{project.description}</p>
                    
                    <div className="card-technologies">
                      <div className="tech-tags">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="tech-tag">+{project.technologies.length - 3}</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="card-results">
                      {project.results.slice(0, 1).map((result, idx) => (
                        <div key={idx} className="result-item">
                          <span className="result-metric">{result.metric}</span>
                          <span className="result-label">{result.label}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="card-footer">
                      <button 
                        className="view-project-btn"
                        onClick={() => openProjectModal(project)}
                      >
                        View Details
                      </button>
                      <Link to={project.link} className="case-study-link">
                        Case Study <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal">
          <div className="modal-overlay" onClick={closeProjectModal}></div>
          <div className="modal-content">
            <button className="modal-close" onClick={closeProjectModal}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="modal-header">
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className="modal-title-section">
                <div className="modal-category">{selectedProject.category}</div>
                <h2>{selectedProject.title}</h2>
                <div className="modal-meta">
                  <span className="modal-client">
                    <i className="fas fa-building"></i> {selectedProject.client}
                  </span>
                  <span className="modal-year">
                    <i className="far fa-calendar"></i> {selectedProject.year}
                  </span>
                  <span className="modal-duration">
                    <i className="far fa-clock"></i> {selectedProject.duration}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="modal-body">
              <div className="modal-description">
                <h3>Project Overview</h3>
                <p>{selectedProject.fullDescription}</p>
              </div>
              
              <div className="modal-details">
                <div className="detail-section">
                  <h3><i className="fas fa-code"></i> Technologies Used</h3>
                  <div className="technologies-list">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="technology-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="detail-section">
                  <h3><i className="fas fa-star"></i> Key Features</h3>
                  <ul className="features-list">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check-circle"></i> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="detail-section">
                  <h3><i className="fas fa-chart-line"></i> Results Achieved</h3>
                  <div className="results-grid">
                    {selectedProject.results.map((result, idx) => (
                      <div key={idx} className="result-card">
                        <div className="result-metric">{result.metric}</div>
                        <div className="result-label">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="modal-footer">
              <Link to={selectedProject.link} className="btn btn-primary">
                <i className="fas fa-file-alt"></i> View Full Case Study
              </Link>
              <button className="btn btn-secondary" onClick={closeProjectModal}>
                <i className="fas fa-times"></i> Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="portfolio-cta">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Like What You See?</h2>
              <p>
                Interested in working together on your next project? Let's discuss how I can help 
                bring your ideas to life with the same level of quality and attention to detail.
              </p>
            </div>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <i className="fas fa-rocket"></i> Start a Project
              </Link>
              {/* <Link to="/case-studies" className="btn btn-secondary btn-lg"> */}
                {/* <i className="fas fa-file-alt"></i> View Case Studies */}
              {/* </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Showcase */}
      <section className="technologies-showcase">
        <div className="container">
          <div className="section-header">
            <h2>Technologies I Work With</h2>
            <p>Expertise across a wide range of modern technologies and frameworks</p>
          </div>
          
          <div className="tech-categories">
            <div className="tech-category">
              <h3><i className="fas fa-desktop"></i> Frontend</h3>
              <div className="tech-list">
                <span className="tech-item">HTML</span>
                <span className="tech-item">CSS</span>
                <span className="tech-item">React</span>
                <span className="tech-item">Vue.js</span>
                <span className="tech-item">Next.js</span>
                <span className="tech-item">TypeScript</span>
                <span className="tech-item">Tailwind CSS</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h3><i className="fas fa-server"></i> Backend</h3>
              <div className="tech-list">
                <span className="tech-item">Node.js</span>
                <span className="tech-item">Django</span>
                <span className="tech-item">Express</span>
                <span className="tech-item">Python</span>
                <span className="tech-item">Php</span>
                {/* <span className="tech-item">PostgreSQL</span> */}
              </div>
            </div>
            <div className="tech-category">
              <h3><i className="fas fa-brain"></i> AI & Machine Learning</h3>
              <div className="tech-list">
                <span className="tech-item">Data Science</span>
                <span className="tech-item">Machine Learning</span>
                <span className="tech-item">Deep Learning</span>
                <span className="tech-item">Natural Language Processing</span>
                <span className="tech-item">Computer Vision</span>
                <span className="tech-item">LLMs</span>
                </div>
              </div>
            
            <div className="tech-category">
              <h3><i className="fas fa-mobile-alt"></i> Mobile</h3>
              <div className="tech-list">
                <span className="tech-item">React Native</span>
                <span className="tech-item">Flutter</span>
                <span className="tech-item">iOS (Swift)</span>
                <span className="tech-item">Android (Kotlin)</span>
              </div>
            </div>
            <div className="tech-category">
              <h3><i className="fas fa-database"></i> Databases</h3>
              <div className="tech-list">
                <span className="tech-item">MongoDB</span>
                <span className="tech-item">PostgreSQL</span>
                <span className="tech-item">MySQL</span>
                <span className="tech-item">Redis</span>
                <span className="tech-item">SQLite</span>
                <span className="tech-item">Firebase</span>
              </div>
            </div>
            <div className="tech-category">
              <h3><i className="fas fa-cloud"></i> Cloud & DevOps</h3>
              <div className="tech-list">
                <span className="tech-item">Render</span>
                <span className="tech-item">AWS</span>
                <span className="tech-item">Docker</span>
                <span className="tech-item">Firebase</span>
                <span className="tech-item">CI/CD</span>
                <span className="tech-item">Kubernetes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="process-preview">
        <div className="container">
          <div className="section-header">
            <h2>My Development Process</h2>
            <p>See how I approach projects from concept to completion</p>
          </div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div className="step-content">
                <h3>Concept & Planning</h3>
                <p>Understanding requirements and creating detailed project plans</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-icon">
                <i className="fas fa-pencil-ruler"></i>
              </div>
              <div className="step-content">
                <h3>Design & Prototyping</h3>
                <p>Creating wireframes, mockups, and interactive prototypes</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-icon">
                <i className="fas fa-code"></i>
              </div>
              <div className="step-content">
                <h3>Development</h3>
                <p>Building the solution with clean, maintainable code</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <div className="step-content">
                <h3>Launch & Support</h3>
                <p>Deployment, testing, and ongoing maintenance</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <Link to="/process" className="btn btn-outline btn-lg">
              <i className="fas fa-cogs"></i> Learn More About My Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;