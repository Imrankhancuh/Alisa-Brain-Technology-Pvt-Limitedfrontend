import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  // Try different path options - uncomment one at a time to test
  // const ImranPhoto = '/Imran_Photo.jpg'; // Option 1
  const ImranPhoto = `${process.env.PUBLIC_URL}/Imran_Photo.jpeg`; // Option 2 (Recommended)
  // const ImranPhoto = './Imran_Photo.jpg'; // Option 3
  
  // Debug: log the path to console
  console.log('Image path:', ImranPhoto);
  console.log('PUBLIC_URL:', process.env.PUBLIC_URL);
  
  const skills = [
    { name: 'React', level: 95, icon: 'fab fa-react' },
    { name: 'JavaScript/TypeScript', level: 92, icon: 'fab fa-js' },
    { name: 'HTML/CSS', level: 98, icon: 'fab fa-html5' },
    { name: 'Vue.js', level: 85, icon: 'fab fa-vuejs' },
    { name: 'Next.js', level: 90, icon: 'fab fa-react' },
    { name: 'Node.js', level: 88, icon: 'fab fa-node-js' },
    { name: 'Express.js', level: 85, icon: 'fas fa-server' },
    { name: 'Python', level: 80, icon: 'fab fa-python' }, 
    { name: 'Django', level: 75, icon: 'fab fa-python' }, 
    { name: 'PHP', level: 70, icon: 'fab fa-php' },
    { name: 'MongoDB', level: 82, icon: 'fas fa-database' },
    { name: 'PostgreSQL', level: 78, icon: 'fas fa-database' },
    { name: 'Machine Learning', level: 100, icon: 'fas fa-brain' },
    { name: 'Deep Learning', level: 85, icon: 'fas fa-network-wired' },
    { name: 'Computer Vision/NLP', level: 90, icon: 'fas fa-eye' },
    { name: 'TensorFlow/PyTorch', level: 80, icon: 'fas fa-robot' },
    { name: 'Render', level: 90, icon: 'fas fa-cloud' },
    { name: 'Firebase', level: 90, icon: 'fas fa-fire' },
    { name: 'Git/GitHub', level: 90, icon: 'fab fa-git-alt' },
    { name: 'Docker', level: 75, icon: 'fab fa-docker' },
    { name: 'AWS', level: 80, icon: 'fab fa-aws' },
    { name: 'CI/CD', level: 82, icon: 'fas fa-sync-alt' }
  ];

  const experience = [
    {
      year: '2023-2024',
      role: 'Web Development with Lab Instructor',
      company: 'IHFC (IIT Delhi).',
    },
    {
      year: '2022 - 2022',
      role: 'Anubrain Technology Pvt limited',
      company: 'Machine Learning & Data Science Engineer',
    },
    {
      year: '2021 - 2021',
      role: 'Machine Learning Trainee',
      company: 'Ministry of Electronics and Information Technology CERT-IN',
    },
    {
      year: '2020 - 2020',
      role: 'AI Engineer Internship',
      company: 'ResoluteAI Software',
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>About Me</h1>
              <p className="hero-subtitle">
                Passionate developer creating exceptional digital experiences
              </p>
              <p>
                With over 2.5 years of experience in AI/ML/NLP, web development and Software development, I specialize in 
                creating modern, responsive, and user-friendly websites and applications 
                that deliver real business value.
              </p>
              <div className="hero-actions">
                {/* <Link to="/portfolio" className="btn btn-primary">
                  <i className="fas fa-eye"></i> View My Work
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  <i className="fas fa-envelope"></i> Contact Me
                </Link> */}
              </div> 
            </div>
            <div className="hero-image">
              <div className="image-container">
                {/* Use img tag for better reliability */}
                <div className="profile-image">
                  <img 
                    src={ImranPhoto} 
                    alt="Imran" 
                    className="profile-photo-img"
                    onError={(e) => {
                      console.error('Image failed to load:', ImranPhoto);
                      e.target.style.display = 'none';
                      // Show fallback if image fails
                      const parent = e.target.parentElement;
                      parent.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #666; font-size: 1.2rem;">Image not found. Please check console.</div>';
                      parent.style.backgroundColor = '#f0f0f0';
                    }}
                  />
                </div>
                <div className="image-badge">
                  <span>2.5+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="section-header">
            <h2>My Story</h2>
            <p>How I became passionate about creating digital experiences</p>
          </div>
          <div className="story-content">
            <div className="story-text">
              <p>
                My journey in AI/ML/NLP, web development and Software Development began in 2020 when I created my first website. 
                Since then, I've been fascinated by the power of code to transform ideas 
                into functional, beautiful digital experiences.
              </p>
              <p>
                Over the years, I've worked with various technologies and frameworks, 
                always focusing on creating solutions that not only look great but also 
                perform exceptionally well and provide excellent user experiences.
              </p>
              <p>
                Today, I continue to learn and adapt to new technologies while maintaining 
                a strong foundation in core web development principles. I believe in writing 
                clean, maintainable code and creating designs that are both beautiful and functional.
              </p>
            </div>
            <div className="story-highlights">
              <div className="highlight-card">
                <div className="highlight-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3>Mission</h3>
                <p>
                  To create digital solutions that solve real problems and provide 
                  exceptional user experiences.
                </p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">
                  <i className="fas fa-eye"></i>
                </div>
                <h3>Vision</h3>
                <p>
                  To be at the forefront of web technology, consistently delivering 
                  innovative and reliable solutions.
                </p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h3>Values</h3>
                <p>
                  Quality, innovation, collaboration, and continuous learning drive 
                  everything I do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <div className="section-header">
            <h2>My Skills</h2>
            <p>Technologies and tools I work with</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <div className="skill-icon">
                    <i className={skill.icon}></i>
                  </div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                </div>
                <div className="skill-progress">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <div className="container">
          <div className="section-header">
            <h2>Experience</h2>
            <p>My professional journey in web development</p>
          </div>
          <div className="experience-timeline">
            {experience.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{exp.year}</div>
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <div className="container">
          <div className="section-header">
            <h2>Education & Certifications</h2>
            <p>My academic background and professional certifications</p>
          </div>
          <div className="education-grid">
            <div className="education-card">
              <div className="education-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Masters in Computer Science</h3>
              <p className="education-institution">Central University of Haryana (India)</p>
              <p className="education-year">2017 - 2020</p>
              <p>Graduated with honors, specializing in AI/ML/NLP and web technologies and software engineering.</p>
            </div>
            <div className="education-card">
              <div className="education-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h3>Web Development with Lab Instructor</h3>
              <p className="education-institution">IHFC (IIT Delhi)</p>
              <p className="education-year">2023-2024</p>
              <p>Advanced web development with HTML, CSS, React, Python, AI/ML/NLP, Computer Vision, Redux, and modern JavaScript.</p>
            </div>
            <div className="education-card">
              <div className="education-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h3>UI/UX Design</h3>
              <p className="education-institution">Coursera Specialization</p>
              <p className="education-year">2021</p>
              <p>User-centered design principles, wireframing, and prototyping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Work Together</h2>
            <p>
              Interested in collaborating on a project? I'd love to hear about 
              what you're working on and how I can help bring your ideas to life.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              <i className="fas fa-rocket"></i> Start a Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;