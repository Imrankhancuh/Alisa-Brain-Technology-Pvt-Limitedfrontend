import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');

  const workExperience = [
    {
      id: 1,
      company: 'IHFC (IIT Delhi).',
      position: 'Web Development with Lab Instructor',
      location: 'Delhi, India',
      period: '2023 - 2024',
      duration: '1.3 years',
      achievements: [],
      technologies: ['HTML', 'CSS', 'React', 'Nodejs', 'Python', 'Machine Learning', 'TypeScript', 'Redux', 'Next.js', 'Firebase', 'Render', 'AWS'],
      logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 2,
      company: 'Anubrain Technology Pvt limited',
      position: 'Machine Learning & Data Science Engineer',
      location: 'Ghaziabad, India',
      period: '2022 - 2022',
      duration: '6 months',
      achievements: [],
      technologies: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'MongoDB', 'React', 'Docker'],
      logo: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 3,
      company: 'Ministry of Electronics and Information Technology CERT-IN',
      position: 'Machine Learning Trainee',
      location: 'Delhi, DL',
      period: '2021 - 2021',
      duration: '6 months',
      achievements: [],
      technologies: ['Machine Learning', 'Computer Vision', 'Deep Learning', 'EDA', 'Python', 'R'],
      logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 4,
      company: 'ResoluteAI Software',
      position: 'AI Engineer Internship',
      location: 'Remote',
      period: '2020 - 2020',
      duration: '3 months',
      achievements: [],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Machine Learning', 'Deep Learning', 'RAG', 'Tensorflow/Pytorch'],
      logo: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    }
  ];

  const education = [
    {
      id: 1,
      institution: 'Central University of Haryana',
      degree: 'Master of Computer Application (MCA)',
      field: 'Computer Science',
      period: '2017 - 2020',
      location: 'Haryana, Hr',
      grade: 'percentage: 61.5',
      highlights: [],
      logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 2,
      institution: 'MJP Rohilkhand University (U.P.)',
      degree: 'Bachelor of Science in Computer Science',
      field: 'Mathematics with Computer',
      period: '2014 - 2017',
      location: 'Bareilly, U.P.',
      grade: 'percentage: 60',
      highlights: [],
      logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    }
  ];

  const certifications = [
    {
      id: 1,
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2025',
      validity: 'Valid until 2025',
      // credentialId: 'AWS-12345',
      skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Networking']
    },
    {
      id: 2,
      name: 'Google Professional Cloud Developer',
      issuer: 'Google Cloud',
      date: '2024',
      validity: 'Valid until 2024', 
      // credentialId: 'GCP-67890',
      skills: ['Cloud Development', 'GCP Services', 'Kubernetes', 'Microservices']
    }
  ];

  const skills = [
    {
      category: 'Frontend Development',
      items: [
        { name: 'React', level: 95, years: 2.5 },
        { name: 'JavaScript/TypeScript', level: 92, years: 2.5 },
        { name: 'HTML/CSS', level: 98, years: 2.5 },
        { name: 'Vue.js', level: 85, years: 2.5 },
        { name: 'Next.js', level: 90, years: 2.5 }
      ]
    },
    {
      category: 'Backend Development',
      items: [
        { name: 'Node.js', level: 88, years: 1.3 },
        { name: 'Express.js', level: 85, years: 1.3 },
        { name: 'Python', level: 80, years: 1.3 },
        { name: 'Django', level: 75, years: 1.3 }, // Added Django
        { name: 'PHP', level: 70, years: 1.3 }, // Added PHP
        { name: 'MongoDB', level: 82, years: 1.3 },
        { name: 'PostgreSQL', level: 78, years: 1.3 }
      ]
    },
    {
      category: 'AI & Emerging Technologies',
      items: [
        { name: 'Machine Learning', level: 100, years: 0.6 },
        { name: 'Deep Learning', level: 85, years: 0.6 },
        { name: 'Computer Vision/NLP', level: 90, years: 0.6 },
        { name: 'TensorFlow/PyTorch', level: 80, years: 0.6 }
      ]
    },
    {
      category: 'Tools & Technologies',
      items: [
        { name: 'Render', level: 90, years: 1 },
        { name: 'Firebase', level: 90, years: 1 },
        { name: 'Git/GitHub', level: 90, years: 0.6 },
        { name: 'Docker', level: 75, years: 0.6 },
        { name: 'AWS', level: 80, years: 0.6 },
        { name: 'CI/CD', level: 82, years: 0.6 }
      ]
    }
  ];

  const stats = [
    { number: '2.5+', label: 'Years Experience', icon: 'fas fa-calendar-alt' },
    { number: '51+', label: 'Projects Completed', icon: 'fas fa-project-diagram' },
    { number: '40+', label: 'Happy Clients', icon: 'fas fa-smile' },
    { number: '20+', label: 'Technologies Mastered', icon: 'fas fa-code' }
  ];

  return (
    <div className="experience-page">
      {/* Hero Section */}
      <section className="experience-hero">
        <div className="container">
          <div className="hero-content">
            <h1>My Experience Journey</h1>
            <p className="hero-subtitle">
              2.5+ years of professional experience in AI/ML Engineer, web development, creating innovative solutions across various industries
            </p>
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="hero-stat">
                  <div className="stat-icon">
                    <i className={stat.icon}></i>
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Tabs */}
      <section className="experience-tabs-section">
        <div className="container">
          <div className="tabs-header">
            <h2>Professional Timeline</h2>
            <p>Explore my journey through work experience, education, and certifications</p>
          </div>
          
          <div className="tabs-navigation">
            <button 
              className={`tab-btn ${activeTab === 'work' ? 'active' : ''}`}
              onClick={() => setActiveTab('work')}
            >
              <i className="fas fa-briefcase"></i> Work Experience
            </button>
            <button 
              className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <i className="fas fa-graduation-cap"></i> Education
            </button>
            <button 
              className={`tab-btn ${activeTab === 'certifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('certifications')}
            >
              <i className="fas fa-certificate"></i> Certifications
            </button>
          </div>

          {/* Work Experience Tab */}
          {activeTab === 'work' && (
            <div className="tab-content work-experience">
              <div className="timeline">
                {workExperience.map((job, index) => (
                  <div key={job.id} className="timeline-item">
                    <div className="timeline-marker">
                      <div className="marker-dot"></div>
                      {index !== workExperience.length - 1 && <div className="marker-line"></div>}
                    </div>
                    <div className="timeline-content">
                      <div className="job-card">
                        <div className="job-header">
                          <div className="company-logo">
                            <img src={job.logo} alt={job.company} />
                          </div>
                          <div className="job-info">
                            <h3 className="job-position">{job.position}</h3>
                            <div className="company-info">
                              <span className="company-name">{job.company}</span>
                              <span className="job-location">
                                <i className="fas fa-map-marker-alt"></i> {job.location}
                              </span>
                              <span className="job-period">
                                <i className="far fa-calendar"></i> {job.period}
                              </span>
                              <span className="job-duration">
                                <i className="far fa-clock"></i> {job.duration}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="job-body">
                          {job.achievements && job.achievements.length > 0 && (
                            <div className="job-achievements">
                              <h4><i className="fas fa-trophy"></i> Key Achievements</h4>
                              <ul>
                                {job.achievements.map((achievement, idx) => (
                                  <li key={idx}>{achievement}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          <div className="job-technologies">
                            <h4><i className="fas fa-code"></i> Technologies Used</h4>
                            <div className="tech-tags">
                              {job.technologies.map((tech, idx) => (
                                <span key={idx} className="tech-tag">{tech}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="tab-content education">
              <div className="education-grid">
                {education.map((edu) => (
                  <div key={edu.id} className="education-card">
                    <div className="edu-header">
                      <div className="institution-logo">
                        <img src={edu.logo} alt={edu.institution} />
                      </div>
                      <div className="edu-info">
                        <h3 className="degree">{edu.degree}</h3>
                        <div className="institution-details">
                          <span className="institution-name">{edu.institution}</span>
                          <span className="field-of-study">{edu.field}</span>
                          <span className="edu-location">
                            <i className="fas fa-map-marker-alt"></i> {edu.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="edu-body">
                      <div className="edu-meta">
                        <span className="edu-period">
                          <i className="far fa-calendar"></i> {edu.period}
                        </span>
                        <span className="edu-grade">
                          <i className="fas fa-star"></i> {edu.grade}
                        </span>
                      </div>
                      
                      {edu.highlights && edu.highlights.length > 0 && (
                        <div className="edu-highlights">
                          <h4><i className="fas fa-award"></i> Highlights</h4>
                          <ul>
                            {edu.highlights.map((highlight, idx) => (
                              <li key={idx}>{highlight}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className="tab-content certifications">
              <div className="certifications-grid">
                {certifications.map((cert) => (
                  <div key={cert.id} className="certification-card">
                    <div className="cert-header">
                      <div className="cert-icon">
                        <i className="fas fa-certificate"></i>
                      </div>
                      <div className="cert-info">
                        <h3 className="cert-name">{cert.name}</h3>
                        <div className="cert-details">
                          <span className="cert-issuer">{cert.issuer}</span>
                          <span className="cert-date">
                            <i className="far fa-calendar"></i> Issued: {cert.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="cert-body">
                      <div className="cert-meta">
                        <span className="cert-validity">
                          <i className="fas fa-calendar-check"></i> {cert.validity}
                        </span>
                        {cert.credentialId && (
                          <span className="cert-id">
                            <i className="fas fa-id-card"></i> ID: {cert.credentialId}
                          </span>
                        )}
                      </div>
                      
                      <div className="cert-skills">
                        <h4><i className="fas fa-tools"></i> Skills Validated</h4>
                        <div className="skill-tags">
                          {cert.skills.map((skill, idx) => (
                            <span key={idx} className="skill-tag">{skill}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <div className="section-header">
            <h2>Technical Skills & Expertise</h2>
            <p>Proficiency levels across various technologies and frameworks</p>
          </div>
          
          <div className="skills-categories">
            {skills.map((category, index) => (
              <div key={index} className="skill-category">
                <h3 className="category-title">{category.category}</h3>
                <div className="skill-items">
                  {category.items.map((skill, idx) => (
                    <div key={idx} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-years">{skill.years} years</span>
                      </div>
                      <div className="skill-progress">
                        <div 
                          className="progress-bar" 
                          style={{ width: `${skill.level}%` }}
                        >
                          <span className="progress-label">{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="milestones-section">
        <div className="container">
          <div className="section-header">
            <h2>Career Milestones</h2>
            <p>Significant achievements and turning points in my career journey</p>
          </div>
          
          <div className="milestones-timeline">
            <div className="milestone">
              <div className="milestone-year">2023-2024</div>
              <div className="milestone-content">
                <h3>Web Development & Lab Instructor</h3>
                <p>Promoted to Web Development & Lab Instructor, leading a team of 5 developers and taking ownership of major projects.</p>
              </div>
            </div>
            
            <div className="milestone">
              <div className="milestone-year">2021-2023</div>
              <div className="milestone-content">
                <h3>First Enterprise Project</h3>
                <p>Led development of enterprise-level application serving 50K+ users, implementing scalable architecture.</p>
              </div>
            </div>
            
            <div className="milestone">
              <div className="milestone-year">2020</div>
              <div className="milestone-content">
                <h3>Master's Degree Completion</h3>
                <p>Graduated with Master's degree in Computer Science, specializing in modern web technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Resume
      <section className="resume-section">
        <div className="container">
          <div className="resume-content">
            <div className="resume-text">
              <h2>Download My Resume</h2>
              <p>Get a detailed overview of my experience, skills, and qualifications in PDF format.</p>
            </div>
            <div className="resume-actions">
              <a href="/resume.pdf" className="btn btn-primary btn-lg" download>
                <i className="fas fa-download"></i> Download Resume (PDF)
              </a>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                <i className="fas fa-envelope"></i> Request Detailed CV
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="experience-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Work Together?</h2>
            <p>
              With years of experience and a proven track record, I'm ready to bring valuable 
              expertise to your next project. Let's discuss how I can contribute to your success.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              <i className="fas fa-handshake"></i> Let's Collaborate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;