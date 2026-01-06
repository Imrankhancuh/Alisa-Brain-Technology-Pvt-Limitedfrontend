import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('web-development');

  const serviceTabs = [
    { id: 'web-development', label: 'Web Development', icon: '🌐' },
    { id: 'mobile-apps', label: 'Mobile Apps', icon: '📱' },
    { id: 'ui-ux-design', label: 'UI/UX Design', icon: '🎨' },
    { id: 'backend-dev', label: 'Backend Development', icon: '⚙️' },
    { id: 'consulting', label: 'Consulting', icon: '💡' },
    { id: 'maintenance', label: 'Maintenance', icon: '🔧' },
    // 🔥 Cloud & Modern Stack
    { id: 'cloud-deployment', label: 'Cloud Deployment', icon: '☁️' },
    { id: 'api-integration', label: 'API Integration', icon: '🔌' },
    { id: 'devops', label: 'DevOps & CI/CD', icon: '🚀' },
    { id: 'performance-opt', label: 'Performance Optimization', icon: '⚡' },
    { id: 'cyber-security', label: 'Security & Protection', icon: '🔐' },
    // 🤖 AI / Data / Emerging Tech
    { id: 'artificial-intelligence', label: 'Artificial Intelligence', icon: '🤖' },
    { id: 'machine-learning', label: 'Machine Learning', icon: '🧠' },
    { id: 'data-science', label: 'Data Science', icon: '📊' },
    { id: 'deep-learning', label: 'Deep Learning', icon: '🧬' },
    { id: 'computer-vision', label: 'Computer Vision', icon: '👁️' },
    { id: 'nlp', label: 'Natural Language Processing', icon: '🗣️' },
    { id: 'predictive-analytics', label: 'Predictive Analytics', icon: '📈' },
    { id: 'big-data', label: 'Big Data Engineering', icon: '🗄️' },
    { id: 'automation-ai', label: 'AI Automation', icon: '⚡🤖' },
    // 🌐 Future & Industry 4.0
    { id: 'iot', label: 'IoT Solutions', icon: '🌍' },
    { id: 'blockchain', label: 'Blockchain Development', icon: '⛓️' },
    // 📈 Growth & Support
    { id: 'seo', label: 'SEO Optimization', icon: '📈' },
    { id: 'testing-qa', label: 'Testing & QA', icon: '🧪' },
    { id: 'support', label: '24/7 Technical Support', icon: '🛠️' }
  ];

  const services = {
    'web-development': {
      title: 'Web Development',
      description: 'Building responsive, high-performance websites and web applications using modern technologies.',
      features: [
        'Responsive & Mobile-First Design',
        'Progressive Web Apps (PWA)',
        'Single Page Applications (SPA)',
        'E-commerce Solutions',
        'CMS Development (WordPress, etc.)',
        'API Integration'
      ],
      technologies:  [
  // Frontend Technologies
  'HTML',
  'CSS',
  'React',
  'Next.js',
  'Vue.js',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'Bootstrap',
  'Redux',
  
  // Backend Technologies
  'Node.js',
  'Express.js',
  'Python',
  'Django',
  'FastAPI',
  'Flask',
  'PHP',  
  // Mobile Development
  'React Native',
  'Flutter',
  'iOS (Swift)',
  'Android (Kotlin/Java)',
  
  // AI & Machine Learning
  'Artificial Intelligence',
  'Machine Learning',
  'Deep Learning',
  'Natural Language Processing (NLP)',
  'Computer Vision',
  'Data Science',
  'LangChain',
  'LlamaIndex',
  'Hugging Face',
  
  // RAG & AI Tools
  'Retrieval-Augmented Generation (RAG)',
  'Vector Databases',
  
  // Databases
  'MongoDB',
  'PostgreSQL',
  'MySQL',
  'SQLite',
  'SQL',
  'NoSQL',
  'Firebase',
  
  // Cloud Platforms
  'AWS',
  'Google Cloud Platform (GCP)',
  'Microsoft Azure',
  'Firebase',
  'Vercel',
  'Netlify',
  'Render',
  'Heroku',
  
  // DevOps & Tools
  'Docker',
  'Kubernetes',
  'CI/CD',
  'Git',
  'GitHub',
  'GitLab',
  
  // API & Integration
  'REST API',
  'GraphQL',
  'WebSocket',
  'Socket.io',

],
      packages: [
        {
          name: 'Basic Website',
          price: '$1500+',
          features: ['5-7 Pages', 'Responsive Design', 'Basic SEO', 'Contact Form', '1 Month Support'],
          bestFor: 'Small businesses & startups'
        },
        {
          name: 'Web Application',
          price: '$5,000+',
          features: ['Custom Features', 'User Authentication', 'Database Integration', 'Admin Panel', '3 Months Support'],
          bestFor: 'Growing businesses & SaaS'
        },
        {
          name: 'Enterprise Solution',
          price: 'Custom',
          features: ['Scalable Architecture', 'Advanced Security', 'Performance Optimization', 'Dedicated Support', 'Custom SLA'],
          bestFor: 'Large enterprises'
        }
      ],
      process: [
        'Requirements Analysis',
        'Technical Planning',
        'Design & Prototyping',
        'Development',
        'Testing & QA',
        'Deployment',
        'Post-launch Support'
      ]
    },
    'mobile-apps': {
      title: 'Mobile App Development',
      description: 'Creating native and cross-platform mobile applications for iOS and Android.',
      features: [
        'Native iOS & Android Apps',
        'Cross-Platform Development',
        'App Store Optimization',
        'Push Notifications',
        'In-App Purchases',
        'Offline Capabilities'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
      packages: [
        {
          name: 'MVP App',
          price: '$8,000+',
          features: ['Core Features Only', 'Basic UI/UX', 'App Store Deployment', '3 Months Support'],
          bestFor: 'Startups & MVP validation'
        },
        {
          name: 'Full Featured App',
          price: '$15,000+',
          features: ['Advanced Features', 'Custom UI/UX', 'Backend Integration', 'Analytics', '6 Months Support'],
          bestFor: 'Established businesses'
        },
        {
          name: 'Enterprise App',
          price: 'Custom',
          features: ['Custom Architecture', 'High Security', 'Scalability', 'Dedicated Team', 'Ongoing Maintenance'],
          bestFor: 'Large organizations'
        }
      ],
      process: [
        'Market Research',
        'Wireframing',
        'UI/UX Design',
        'Development',
        'Testing',
        'Store Deployment',
        'Updates & Maintenance'
      ]
    },
    'ui-ux-design': {
      title: 'UI/UX Design',
      description: 'Creating intuitive, beautiful user interfaces and exceptional user experiences.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design Systems',
        'Interaction Design',
        'Usability Testing',
        'Design Systems'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'UserTesting', 'Hotjar'],
      packages: [
        {
          name: 'Website Design',
          price: '$2,000+',
          features: ['5-10 Screens', 'Wireframes', 'Visual Design', 'Style Guide', 'Responsive Designs'],
          bestFor: 'Website redesign or new site'
        },
        {
          name: 'App Design',
          price: '$4,000+',
          features: ['20+ Screens', 'Interactive Prototypes', 'Design System', 'User Flow Mapping', 'Usability Testing'],
          bestFor: 'Mobile/Web apps'
        },
        {
          name: 'Enterprise Design',
          price: 'Custom',
          features: ['Complete Design System', 'Brand Guidelines', 'Component Library', 'Ongoing Design Support'],
          bestFor: 'Large projects & teams'
        }
      ],
      process: [
        'User Research',
        'Competitor Analysis',
        'Information Architecture',
        'Wireframing',
        'Visual Design',
        'Prototyping',
        'Testing & Iteration'
      ]
    },
    'backend-dev': {
      title: 'Backend Development',
      description: 'Building robust, scalable server-side applications and APIs.',
      features: [
        'REST & GraphQL APIs',
        'Database Design & Optimization',
        'Server Architecture',
        'Authentication & Authorization',
        'Microservices',
        'Cloud Deployment'
      ],
      technologies: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'],
      packages: [
        {
          name: 'API Development',
          price: '$3,000+',
          features: ['REST/GraphQL API', 'Database Setup', 'Basic Authentication', 'API Documentation', '1 Month Support'],
          bestFor: 'Frontend needing backend'
        },
        {
          name: 'Full Backend',
          price: '$8,000+',
          features: ['Complete Backend System', 'User Management', 'Payment Integration', 'Admin Panel', '3 Months Support'],
          bestFor: 'Complete applications'
        },
        {
          name: 'Enterprise Backend',
          price: 'Custom',
          features: ['Microservices Architecture', 'High Availability', 'Advanced Security', 'Load Balancing', '24/7 Monitoring'],
          bestFor: 'High-traffic applications'
        }
      ],
      process: [
        'Requirements Analysis',
        'System Architecture',
        'Database Design',
        'Development',
        'Testing',
        'Deployment',
        'Monitoring & Scaling'
      ]
    },
    'consulting': {
      title: 'Technical Consulting',
      description: 'Expert guidance on technology strategy, architecture, and digital transformation.',
      features: [
        'Technology Stack Selection',
        'System Architecture Review',
        'Performance Optimization',
        'Security Audit',
        'Team Training',
        'Project Planning'
      ],
      technologies: ['Architecture', 'Strategy', 'Best Practices', 'Code Review', 'Performance', 'Security'],
      packages: [
        {
          name: 'Strategy Session',
          price: '$500/day',
          features: ['4-hour Session', 'Technical Review', 'Recommendations', 'Action Plan', 'Follow-up Email'],
          bestFor: 'Project planning & direction'
        },
        {
          name: 'Project Audit',
          price: '$1,500+',
          features: ['Code Review', 'Performance Audit', 'Security Assessment', 'Detailed Report', 'Implementation Plan'],
          bestFor: 'Existing projects needing improvement'
        },
        {
          name: 'Ongoing Consultation',
          price: 'Monthly',
          features: ['Regular Meetings', 'Technical Guidance', 'Code Reviews', 'Architecture Advice', 'Priority Support'],
          bestFor: 'Teams needing continuous guidance'
        }
      ],
      process: [
        'Initial Assessment',
        'Discovery Sessions',
        'Analysis & Research',
        'Recommendations',
        'Implementation Plan',
        'Follow-up Support'
      ]
    },
    'maintenance': {
      title: 'Maintenance & Support',
      description: 'Keeping your applications secure, updated, and performing optimally.',
      features: [
        'Regular Updates & Patches',
        'Bug Fixes',
        'Performance Monitoring',
        'Security Updates',
        'Backup Management',
        '24/7 Support'
      ],
      technologies: ['Monitoring', 'Updates', 'Security', 'Backup', 'Performance', 'Support'],
      packages: [
        {
          name: 'Basic Support',
          price: '$300/month',
          features: ['Bug Fixes', 'Security Updates', 'Email Support', 'Monthly Reports', '2 Hours Support'],
          bestFor: 'Small websites'
        },
        {
          name: 'Pro Support',
          price: '$800/month',
          features: ['Priority Support', 'Performance Optimization', 'Regular Updates', 'Backup Management', '10 Hours Support'],
          bestFor: 'Business applications'
        },
        {
          name: 'Enterprise Support',
          price: 'Custom',
          features: ['24/7 Support', 'Dedicated Engineer', 'SLA Guarantee', 'Emergency Response', 'Unlimited Support'],
          bestFor: 'Critical business applications'
        }
      ],
      process: [
        'Initial Setup',
        'Monitoring Setup',
        'Regular Maintenance',
        'Issue Tracking',
        'Performance Reporting',
        'Continuous Improvement'
      ]
    },
    // 🔥 Cloud & Modern Stack
    'cloud-deployment': {
      title: 'Cloud Deployment',
      description: 'Deploying, scaling, and managing applications on cloud platforms for optimal performance and reliability.',
      features: [
        'Multi-cloud Strategy',
        'Auto-scaling Setup',
        'Load Balancing',
        'CDN Integration',
        'Disaster Recovery',
        'Cost Optimization'
      ],
      technologies: ['AWS', 'Google Cloud', 'Azure', 'Vercel', 'Netlify', 'Docker', 'Kubernetes'],
      packages: [
        {
          name: 'Basic Deployment',
          price: '$1,000+',
          features: ['Cloud Setup', 'CI/CD Pipeline', 'Basic Monitoring', 'SSL Certificate', '1 Month Support'],
          bestFor: 'Startups & small projects'
        },
        {
          name: 'Advanced Cloud',
          price: '$3,000+',
          features: ['High Availability', 'Auto-scaling', 'Load Balancer', 'Advanced Security', '3 Months Support'],
          bestFor: 'Growing applications'
        },
        {
          name: 'Enterprise Cloud',
          price: 'Custom',
          features: ['Multi-region Deployment', 'Disaster Recovery', '24/7 Monitoring', 'SLA 99.9%', 'Dedicated Engineer'],
          bestFor: 'Enterprise applications'
        }
      ],
      process: [
        'Cloud Assessment',
        'Architecture Design',
        'Infrastructure Setup',
        'Deployment Pipeline',
        'Monitoring Setup',
        'Optimization',
        'Ongoing Management'
      ]
    },
    'api-integration': {
      title: 'API Integration',
      description: 'Connecting your applications with third-party services, payment gateways, and internal systems.',
      features: [
        'REST & GraphQL APIs',
        'Payment Gateway Integration',
        'Social Media Integration',
        'CRM Integration',
        'Webhook Implementation',
        'API Documentation'
      ],
      technologies: ['REST API', 'GraphQL', 'Webhooks', 'OAuth 2.0', 'Stripe', 'PayPal', 'Google APIs'],
      packages: [
        {
          name: 'Single Integration',
          price: '$800+',
          features: ['One Service Integration', 'API Documentation', 'Basic Testing', '1 Month Support'],
          bestFor: 'Adding specific functionality'
        },
        {
          name: 'Multiple Integrations',
          price: '$2,000+',
          features: ['Up to 5 Integrations', 'Custom API Development', 'Comprehensive Testing', '3 Months Support'],
          bestFor: 'Complex integration needs'
        },
        {
          name: 'Enterprise Integration',
          price: 'Custom',
          features: ['Unlimited Integrations', 'Microservices API', 'Advanced Security', 'Performance Monitoring', 'Dedicated Support'],
          bestFor: 'Large-scale integrations'
        }
      ],
      process: [
        'API Analysis',
        'Authentication Setup',
        'Integration Development',
        'Testing',
        'Documentation',
        'Deployment',
        'Monitoring'
      ]
    },
    'devops': {
      title: 'DevOps & CI/CD',
      description: 'Implementing automation, continuous integration, and deployment pipelines for faster, reliable releases.',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Automated Testing',
        'Monitoring & Logging',
        'Container Orchestration',
        'Security Scanning'
      ],
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'GitHub Actions', 'Terraform', 'Ansible'],
      packages: [
        {
          name: 'Basic Pipeline',
          price: '$1,500+',
          features: ['CI/CD Setup', 'Automated Testing', 'Basic Monitoring', 'Docker Configuration', '1 Month Support'],
          bestFor: 'Small teams & startups'
        },
        {
          name: 'Advanced DevOps',
          price: '$4,000+',
          features: ['Full DevOps Stack', 'Infrastructure as Code', 'Advanced Monitoring', 'Security Integration', '3 Months Support'],
          bestFor: 'Growing engineering teams'
        },
        {
          name: 'Enterprise DevOps',
          price: 'Custom',
          features: ['Multi-environment Setup', 'Disaster Recovery', '24/7 Monitoring', 'Team Training', 'Ongoing Optimization'],
          bestFor: 'Enterprise development teams'
        }
      ],
      process: [
        'Current State Analysis',
        'Tool Selection',
        'Pipeline Design',
        'Implementation',
        'Team Training',
        'Monitoring Setup',
        'Continuous Improvement'
      ]
    },
    'performance-opt': {
      title: 'Performance Optimization',
      description: 'Improving application speed, responsiveness, and overall user experience through optimization techniques.',
      features: [
        'Code Optimization',
        'Database Query Tuning',
        'Caching Strategies',
        'Image & Asset Optimization',
        'CDN Implementation',
        'Performance Monitoring'
      ],
      technologies: ['Lighthouse', 'WebPageTest', 'Redis', 'CDN', 'Webpack', 'Database Indexing', 'Caching'],
      packages: [
        {
          name: 'Performance Audit',
          price: '$500+',
          features: ['Comprehensive Analysis', 'Performance Report', 'Recommendations', 'Basic Fixes', '1 Month Support'],
          bestFor: 'Identifying bottlenecks'
        },
        {
          name: 'Optimization Package',
          price: '$1,800+',
          features: ['Full Optimization', 'Caching Setup', 'Database Tuning', 'CDN Integration', '3 Months Support'],
          bestFor: 'Improving existing applications'
        },
        {
          name: 'Enterprise Performance',
          price: 'Custom',
          features: ['Continuous Optimization', 'Real-time Monitoring', 'Quarterly Audits', 'Dedicated Engineer', 'SLA Guarantee'],
          bestFor: 'High-traffic applications'
        }
      ],
      process: [
        'Performance Analysis',
        'Bottleneck Identification',
        'Optimization Planning',
        'Implementation',
        'Testing & Validation',
        'Monitoring Setup',
        'Ongoing Optimization'
      ]
    },
    'cyber-security': {
      title: 'Security & Protection',
      description: 'Implementing robust security measures to protect your applications and data from threats.',
      features: [
        'Security Audits',
        'Vulnerability Assessment',
        'Penetration Testing',
        'Data Encryption',
        'Access Control',
        'Compliance Implementation'
      ],
      technologies: ['OWASP', 'SSL/TLS', 'JWT', 'OAuth', 'Firewalls', 'Security Headers', 'Encryption'],
      packages: [
        {
          name: 'Security Audit',
          price: '$800+',
          features: ['Vulnerability Scan', 'Security Report', 'Basic Recommendations', 'Follow-up Session'],
          bestFor: 'Initial security assessment'
        },
        {
          name: 'Security Implementation',
          price: '$2,500+',
          features: ['Security Hardening', 'Encryption Setup', 'Access Control', 'Monitoring Setup', '3 Months Support'],
          bestFor: 'Comprehensive security'
        },
        {
          name: 'Enterprise Security',
          price: 'Custom',
          features: ['Continuous Monitoring', 'Penetration Testing', 'Compliance Support', '24/7 Security', 'Incident Response'],
          bestFor: 'Enterprise applications'
        }
      ],
      process: [
        'Security Assessment',
        'Threat Analysis',
        'Security Planning',
        'Implementation',
        'Testing & Validation',
        'Monitoring Setup',
        'Ongoing Protection'
      ]
    },
    // 🤖 AI / Data / Emerging Tech
    'artificial-intelligence': {
      title: 'Artificial Intelligence',
      description: 'Building intelligent systems that can learn, reason, and solve complex business problems.',
      features: [
        'AI Strategy Consulting',
        'Machine Learning Models',
        'Natural Language Processing',
        'Predictive Analytics',
        'AI Integration',
        'Model Training & Deployment'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'Hugging Face', 'LangChain', 'Scikit-learn'],
      packages: [
        {
          name: 'AI Consultation',
          price: '$1,000+',
          features: ['AI Strategy Session', 'Use Case Analysis', 'Technology Recommendations', 'Implementation Plan'],
          bestFor: 'Exploring AI possibilities'
        },
        {
          name: 'AI Implementation',
          price: '$5,000+',
          features: ['Custom AI Solution', 'Model Development', 'Integration', 'Training', '3 Months Support'],
          bestFor: 'Specific AI applications'
        },
        {
          name: 'Enterprise AI',
          price: 'Custom',
          features: ['End-to-end AI Platform', 'Continuous Learning', 'Scalable Infrastructure', 'Dedicated Team', 'Ongoing Support'],
          bestFor: 'Large-scale AI projects'
        }
      ],
      process: [
        'Problem Definition',
        'Data Collection & Preparation',
        'Model Selection',
        'Training & Validation',
        'Integration',
        'Deployment',
        'Monitoring & Improvement'
      ]
    },
    'machine-learning': {
      title: 'Machine Learning',
      description: 'Developing algorithms that enable systems to learn from data and improve automatically.',
      features: [
        'Supervised & Unsupervised Learning',
        'Model Training & Evaluation',
        'Feature Engineering',
        'Hyperparameter Tuning',
        'Model Deployment',
        'Performance Monitoring'
      ],
      technologies: ['Python', 'Scikit-learn', 'XGBoost', 'LightGBM', 'MLflow', 'DVC', 'Jupyter'],
      packages: [
        {
          name: 'ML Proof of Concept',
          price: '$2,000+',
          features: ['Data Analysis', 'Basic Model Development', 'Performance Evaluation', 'Recommendations'],
          bestFor: 'Validating ML ideas'
        },
        {
          name: 'ML Solution',
          price: '$6,000+',
          features: ['Custom ML Model', 'Feature Engineering', 'Model Optimization', 'Deployment', '3 Months Support'],
          bestFor: 'Production ML applications'
        },
        {
          name: 'Enterprise ML',
          price: 'Custom',
          features: ['ML Pipeline Development', 'AutoML Integration', 'Model Governance', 'Scalable Infrastructure', 'Dedicated Support'],
          bestFor: 'Enterprise ML needs'
        }
      ],
      process: [
        'Data Collection',
        'Data Preprocessing',
        'Feature Engineering',
        'Model Selection',
        'Training & Validation',
        'Deployment',
        'Monitoring & Retraining'
      ]
    },
    'data-science': {
      title: 'Data Science',
      description: 'Extracting insights and knowledge from data to drive business decisions and strategy.',
      features: [
        'Data Analysis & Visualization',
        'Statistical Modeling',
        'Predictive Analytics',
        'Data Mining',
        'Dashboard Development',
        'Business Intelligence'
      ],
      technologies: ['Python', 'R', 'Pandas', 'NumPy', 'Matplotlib', 'Tableau', 'Power BI'],
      packages: [
        {
          name: 'Data Analysis',
          price: '$1,500+',
          features: ['Data Cleaning', 'Exploratory Analysis', 'Visualizations', 'Insights Report', '1 Month Support'],
          bestFor: 'Understanding your data'
        },
        {
          name: 'Data Science Project',
          price: '$4,000+',
          features: ['Complete Analysis', 'Predictive Models', 'Dashboard Development', 'Actionable Insights', '3 Months Support'],
          bestFor: 'Data-driven decisions'
        },
        {
          name: 'Enterprise Data Science',
          price: 'Custom',
          features: ['Advanced Analytics', 'Real-time Dashboards', 'Custom Algorithms', 'Team Training', 'Ongoing Support'],
          bestFor: 'Enterprise analytics needs'
        }
      ],
      process: [
        'Business Understanding',
        'Data Collection',
        'Data Preparation',
        'Exploratory Analysis',
        'Modeling',
        'Evaluation',
        'Deployment & Communication'
      ]
    },
    'deep-learning': {
      title: 'Deep Learning',
      description: 'Implementing neural networks for complex pattern recognition and advanced AI applications.',
      features: [
        'Neural Network Architecture',
        'Computer Vision Models',
        'Natural Language Models',
        'Reinforcement Learning',
        'Transfer Learning',
        'Model Optimization'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'Keras', 'OpenCV', 'NLP Libraries', 'GPU Acceleration'],
      packages: [
        {
          name: 'Deep Learning Consultation',
          price: '$1,200+',
          features: ['Feasibility Study', 'Architecture Design', 'Hardware Recommendations', 'Implementation Plan'],
          bestFor: 'Exploring deep learning applications'
        },
        {
          name: 'Deep Learning Model',
          price: '$7,000+',
          features: ['Custom Neural Network', 'Model Training', 'Performance Optimization', 'Deployment', '3 Months Support'],
          bestFor: 'Advanced AI applications'
        },
        {
          name: 'Enterprise Deep Learning',
          price: 'Custom',
          features: ['Complex Model Architectures', 'Distributed Training', 'Model Serving Infrastructure', 'Continuous Learning', 'Dedicated Support'],
          bestFor: 'Large-scale deep learning'
        }
      ],
      process: [
        'Problem Analysis',
        'Data Preparation',
        'Architecture Design',
        'Model Training',
        'Hyperparameter Tuning',
        'Validation',
        'Deployment & Monitoring'
      ]
    },
    'computer-vision': {
      title: 'Computer Vision',
      description: 'Enabling computers to interpret and understand visual information from the world.',
      features: [
        'Image Classification',
        'Object Detection',
        'Image Segmentation',
        'Facial Recognition',
        'OCR (Optical Character Recognition)',
        'Video Analysis'
      ],
      technologies: ['OpenCV', 'TensorFlow', 'PyTorch', 'YOLO', 'MediaPipe', 'Tesseract', 'CUDA'],
      packages: [
        {
          name: 'CV Proof of Concept',
          price: '$2,500+',
          features: ['Problem Analysis', 'Model Selection', 'Basic Implementation', 'Performance Testing'],
          bestFor: 'Testing computer vision ideas'
        },
        {
          name: 'CV Application',
          price: '$8,000+',
          features: ['Custom CV Solution', 'Model Training', 'Integration', 'Optimization', '3 Months Support'],
          bestFor: 'Production CV applications'
        },
        {
          name: 'Enterprise CV',
          price: 'Custom',
          features: ['Real-time Video Processing', 'Multiple Model Deployment', 'Scalable Infrastructure', 'Edge Computing', 'Dedicated Support'],
          bestFor: 'Enterprise computer vision'
        }
      ],
      process: [
        'Requirements Analysis',
        'Data Collection & Annotation',
        'Model Selection',
        'Training & Validation',
        'Integration',
        'Deployment',
        'Performance Monitoring'
      ]
    },
    'nlp': {
      title: 'Natural Language Processing',
      description: 'Enabling computers to understand, interpret, and generate human language.',
      features: [
        'Text Classification',
        'Sentiment Analysis',
        'Named Entity Recognition',
        'Text Generation',
        'Chatbot Development',
        'Language Translation'
      ],
      technologies: ['NLTK', 'spaCy', 'Transformers', 'BERT', 'GPT', 'Hugging Face', 'LangChain'],
      packages: [
        {
          name: 'NLP Analysis',
          price: '$1,800+',
          features: ['Text Processing', 'Basic NLP Tasks', 'Insights Report', 'Implementation Recommendations'],
          bestFor: 'Understanding text data'
        },
        {
          name: 'NLP Application',
          price: '$5,000+',
          features: ['Custom NLP Model', 'Chatbot Development', 'Text Analysis System', 'Integration', '3 Months Support'],
          bestFor: 'Production NLP applications'
        },
        {
          name: 'Enterprise NLP',
          price: 'Custom',
          features: ['Large-scale Text Processing', 'Custom Language Models', 'Multi-language Support', 'Real-time Processing', 'Dedicated Support'],
          bestFor: 'Enterprise NLP needs'
        }
      ],
      process: [
        'Text Data Collection',
        'Preprocessing',
        'Model Selection',
        'Training & Fine-tuning',
        'Evaluation',
        'Integration',
        'Deployment & Monitoring'
      ]
    },
    'predictive-analytics': {
      title: 'Predictive Analytics',
      description: 'Using historical data to predict future outcomes and trends.',
      features: [
        'Forecasting Models',
        'Risk Assessment',
        'Customer Behavior Prediction',
        'Demand Forecasting',
        'Churn Prediction',
        'Predictive Maintenance'
      ],
      technologies: ['Python', 'R', 'Prophet', 'ARIMA', 'Time Series Analysis', 'ML Algorithms', 'Dashboard Tools'],
      packages: [
        {
          name: 'Analytics Dashboard',
          price: '$2,000+',
          features: ['Data Integration', 'Basic Forecasting', 'Dashboard Development', 'Monthly Reports', '1 Month Support'],
          bestFor: 'Getting started with predictions'
        },
        {
          name: 'Predictive Solution',
          price: '$5,000+',
          features: ['Advanced Models', 'Multiple Predictions', 'Real-time Analytics', 'Alerts System', '3 Months Support'],
          bestFor: 'Business forecasting needs'
        },
        {
          name: 'Enterprise Predictive',
          price: 'Custom',
          features: ['Complex Model Ecosystem', 'Real-time Predictions', 'Integration with ERP/CRM', 'Team Training', 'Ongoing Optimization'],
          bestFor: 'Enterprise prediction systems'
        }
      ],
      process: [
        'Business Objective Definition',
        'Data Collection',
        'Exploratory Analysis',
        'Model Development',
        'Validation',
        'Deployment',
        'Monitoring & Updating'
      ]
    },
    'big-data': {
      title: 'Big Data Engineering',
      description: 'Building systems to process, store, and analyze massive volumes of data.',
      features: [
        'Data Pipeline Development',
        'Real-time Stream Processing',
        'Data Warehousing',
        'ETL/ELT Processes',
        'Distributed Computing',
        'Data Lake Architecture'
      ],
      technologies: ['Hadoop', 'Spark', 'Kafka', 'Airflow', 'Snowflake', 'BigQuery', 'DataBricks'],
      packages: [
        {
          name: 'Data Pipeline Setup',
          price: '$3,000+',
          features: ['Basic Pipeline Design', 'ETL Development', 'Data Storage Setup', 'Basic Monitoring', '1 Month Support'],
          bestFor: 'Initial data processing needs'
        },
        {
          name: 'Big Data Solution',
          price: '$8,000+',
          features: ['Scalable Architecture', 'Real-time Processing', 'Data Lake/Warehouse', 'Advanced Analytics', '3 Months Support'],
          bestFor: 'Growing data needs'
        },
        {
          name: 'Enterprise Big Data',
          price: 'Custom',
          features: ['Enterprise Data Platform', 'Multi-source Integration', 'Advanced Security', '24/7 Monitoring', 'Dedicated Team'],
          bestFor: 'Enterprise data processing'
        }
      ],
      process: [
        'Requirements Analysis',
        'Architecture Design',
        'Infrastructure Setup',
        'Pipeline Development',
        'Testing',
        'Deployment',
        'Monitoring & Scaling'
      ]
    },
    'automation-ai': {
      title: 'AI Automation',
      description: 'Automating business processes and workflows using artificial intelligence.',
      features: [
        'Process Automation',
        'Intelligent Document Processing',
        'Workflow Optimization',
        'RPA Integration',
        'Decision Automation',
        'Intelligent Monitoring'
      ],
      technologies: ['Python', 'RPA Tools', 'AI/ML Libraries', 'Workflow Engines', 'API Integration', 'Cloud Services'],
      packages: [
        {
          name: 'Automation Audit',
          price: '$1,000+',
          features: ['Process Analysis', 'Automation Opportunities', 'ROI Calculation', 'Implementation Plan'],
          bestFor: 'Identifying automation potential'
        },
        {
          name: 'AI Automation Solution',
          price: '$6,000+',
          features: ['Custom Automation', 'AI Integration', 'Workflow Development', 'Testing & Deployment', '3 Months Support'],
          bestFor: 'Business process automation'
        },
        {
          name: 'Enterprise AI Automation',
          price: 'Custom',
          features: ['End-to-end Automation', 'Multiple Processes', 'Intelligent Decision Making', 'Scalable Infrastructure', 'Ongoing Support'],
          bestFor: 'Enterprise automation needs'
        }
      ],
      process: [
        'Process Analysis',
        'Automation Design',
        'AI Integration',
        'Development',
        'Testing',
        'Deployment',
        'Monitoring & Optimization'
      ]
    },
    // 🌐 Future & Industry 4.0
    'iot': {
      title: 'IoT Solutions',
      description: 'Connecting devices, collecting data, and building intelligent Internet of Things ecosystems.',
      features: [
        'IoT Architecture Design',
        'Device Connectivity',
        'Real-time Data Processing',
        'Edge Computing',
        'Dashboard & Monitoring',
        'Predictive Maintenance'
      ],
      technologies: ['MQTT', 'Node-RED', 'AWS IoT', 'Arduino', 'Raspberry Pi', 'LoRaWAN', 'Cloud IoT'],
      packages: [
        {
          name: 'IoT Proof of Concept',
          price: '$2,500+',
          features: ['Concept Design', 'Prototype Development', 'Basic Data Collection', 'Proof of Value'],
          bestFor: 'Testing IoT ideas'
        },
        {
          name: 'IoT Solution',
          price: '$7,000+',
          features: ['Full Stack Development', 'Device Integration', 'Cloud Platform', 'Dashboard', '3 Months Support'],
          bestFor: 'Production IoT applications'
        },
        {
          name: 'Enterprise IoT',
          price: 'Custom',
          features: ['Scalable IoT Platform', 'Thousands of Devices', 'Advanced Analytics', 'Security Implementation', 'Dedicated Support'],
          bestFor: 'Enterprise IoT deployment'
        }
      ],
      process: [
        'Requirements Analysis',
        'Architecture Design',
        'Device Development',
        'Cloud Integration',
        'Data Processing',
        'Dashboard Development',
        'Deployment & Monitoring'
      ]
    },
    'blockchain': {
      title: 'Blockchain Development',
      description: 'Building decentralized applications and smart contracts on blockchain platforms.',
      features: [
        'Smart Contract Development',
        'DApp Development',
        'Token Creation',
        'Blockchain Integration',
        'Web3 Integration',
        'Decentralized Finance'
      ],
      technologies: ['Solidity', 'Ethereum', 'Polygon', 'Hardhat', 'Truffle', 'Web3.js', 'IPFS'],
      packages: [
        {
          name: 'Blockchain Consultation',
          price: '$1,500+',
          features: ['Use Case Analysis', 'Technology Selection', 'Architecture Design', 'Implementation Plan'],
          bestFor: 'Exploring blockchain potential'
        },
        {
          name: 'Blockchain Solution',
          price: '$8,000+',
          features: ['Smart Contract Development', 'DApp Development', 'Testing & Auditing', 'Deployment', '3 Months Support'],
          bestFor: 'Production blockchain applications'
        },
        {
          name: 'Enterprise Blockchain',
          price: 'Custom',
          features: ['Custom Blockchain', 'Enterprise Integration', 'Security Audits', 'Scalable Architecture', 'Dedicated Team'],
          bestFor: 'Enterprise blockchain needs'
        }
      ],
      process: [
        'Use Case Definition',
        'Platform Selection',
        'Smart Contract Development',
        'Testing & Auditing',
        'DApp Development',
        'Integration',
        'Deployment & Maintenance'
      ]
    },
    // 📈 Growth & Support
    'seo': {
      title: 'SEO Optimization',
      description: 'Improving website visibility and rankings in search engines to drive organic traffic.',
      features: [
        'Technical SEO Audit',
        'On-page Optimization',
        'Content Strategy',
        'Backlink Analysis',
        'Performance Optimization',
        'SEO Monitoring'
      ],
      technologies: ['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs', 'PageSpeed Insights', 'SEO Tools'],
      packages: [
        {
          name: 'SEO Audit',
          price: '$500+',
          features: ['Technical Analysis', 'Keyword Research', 'Competitor Analysis', 'Action Plan', '1 Month Support'],
          bestFor: 'Understanding SEO issues'
        },
        {
          name: 'SEO Optimization',
          price: '$1,200/month',
          features: ['Ongoing Optimization', 'Content Strategy', 'Link Building', 'Monthly Reports', 'Unlimited Support'],
          bestFor: 'Continuous SEO improvement'
        },
        {
          name: 'Enterprise SEO',
          price: 'Custom',
          features: ['Full SEO Strategy', 'International SEO', 'Advanced Analytics', 'Team Training', 'Dedicated Consultant'],
          bestFor: 'Enterprise websites'
        }
      ],
      process: [
        'Website Audit',
        'Keyword Research',
        'Competitor Analysis',
        'Implementation',
        'Content Development',
        'Link Building',
        'Monitoring & Reporting'
      ]
    },
    'testing-qa': {
      title: 'Testing & QA',
      description: 'Ensuring software quality through comprehensive testing and quality assurance processes.',
      features: [
        'Automated Testing',
        'Manual Testing',
        'Performance Testing',
        'Security Testing',
        'Test Automation Framework',
        'CI/CD Integration'
      ],
      technologies: ['Selenium', 'Cypress', 'Jest', 'Playwright', 'JMeter', 'Postman', 'Testing Libraries'],
      packages: [
        {
          name: 'Testing Package',
          price: '$800+',
          features: ['Test Plan Creation', 'Manual Testing', 'Bug Reporting', 'Basic Automation', '1 Month Support'],
          bestFor: 'Small projects & MVPs'
        },
        {
          name: 'Full QA Solution',
          price: '$2,500+',
          features: ['Comprehensive Testing', 'Test Automation', 'Performance Testing', 'Security Testing', '3 Months Support'],
          bestFor: 'Production applications'
        },
        {
          name: 'Enterprise QA',
          price: 'Custom',
          features: ['End-to-end Testing', 'Test Strategy', 'Team Training', 'Continuous Testing', 'Dedicated QA Engineer'],
          bestFor: 'Enterprise applications'
        }
      ],
      process: [
        'Requirements Analysis',
        'Test Planning',
        'Test Case Development',
        'Execution',
        'Defect Reporting',
        'Regression Testing',
        'Test Automation'
      ]
    },
    'support': {
      title: '24/7 Technical Support',
      description: 'Round-the-clock technical support and maintenance for critical business applications.',
      features: [
        '24/7 Monitoring',
        'Emergency Response',
        'Priority Bug Fixes',
        'Performance Optimization',
        'Security Updates',
        'Backup Management'
      ],
      technologies: ['Monitoring Tools', 'Ticketing System', 'Communication Tools', 'Backup Systems', 'Security Tools'],
      packages: [
        {
          name: 'Business Hours Support',
          price: '$500/month',
          features: ['9 AM - 5 PM Support', 'Email Support', 'Monthly Maintenance', 'Basic Monitoring', 'Standard Response'],
          bestFor: 'Business applications'
        },
        {
          name: '24/7 Support',
          price: '$1,500/month',
          features: ['Round-the-clock Support', 'Phone & Email', 'Priority Response', 'Advanced Monitoring', 'SLA 99.9%'],
          bestFor: 'Critical applications'
        },
        {
          name: 'Enterprise Support',
          price: 'Custom',
          features: ['Dedicated Engineer', 'Custom SLA', 'Proactive Monitoring', 'Monthly Reviews', 'Unlimited Support'],
          bestFor: 'Enterprise critical systems'
        }
      ],
      process: [
        'Support Setup',
        'Monitoring Implementation',
        'Ticketing System Setup',
        'Regular Maintenance',
        'Emergency Response',
        'Performance Reporting',
        'Continuous Improvement'
      ]
    }
  };

  const testimonials = [
    {
      name: 'Arun Kumar',
      company: 'TATA1mg.',
      service: 'Web Development',
      quote: 'The web application delivered exceeded our expectations. Clean code, great performance, and excellent support.',
      rating: 5
    },
    {
      name: 'Pardeep Kumar',
      company: 'Uniqe Tech',
      service: 'Mobile App Development',
      quote: 'Our app saw 300% growth in user engagement after the redesign. The attention to UX detail was phenomenal.',
      rating: 5
    },
    {
      name: 'Kuldeep Singh',
      company: 'Solutions1313',
      service: 'IT & consulting services',
      quote: 'The technical consulting helped us choose the right tech stack and saved us months of development time.',
      rating: 5
    }
  ];

  const activeService = services[activeTab] || services['web-development'];

  return (
    <div className="services-container">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1 className="services-title">My Services</h1>
          <p className="services-subtitle">
            Comprehensive digital solutions tailored to your business needs
          </p>
          <p className="services-description">
            From concept to launch and beyond, I provide end-to-end development services 
            using cutting-edge technologies and industry best practices.
          </p>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="service-tabs-section">
        <div className="container">
          <div className="tabs-header">
            <h2 className="section-title">Explore Services</h2>
            <p className="section-subtitle">Select a service to learn more about what I offer</p>
          </div>
          
          <div className="service-tabs">
            {serviceTabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Service Details */}
      <section className="service-details-section">
        <div className="container">
          <div className="service-header" data-aos="fade-up">
            <h2 className="service-detail-title">{activeService.title}</h2>
            <p className="service-detail-description">{activeService.description}</p>
          </div>

          <div className="service-details-grid">
            {/* Features */}
            <div className="service-card features-card" data-aos="fade-right">
              <div className="card-header">
                <h3 className="card-title">Key Features</h3>
                <div className="card-icon">⭐</div>
              </div>
              <ul className="features-list">
                {activeService.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="feature-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="service-card tech-card" data-aos="fade-up">
              <div className="card-header">
                <h3 className="card-title">Technologies</h3>
                <div className="card-icon">🛠️</div>
              </div>
              <div className="tech-tags">
                {activeService.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="service-card process-card" data-aos="fade-left">
              <div className="card-header">
                <h3 className="card-title">Development Process</h3>
                <div className="card-icon">📋</div>
              </div>
              <ol className="process-steps">
                {activeService.process.map((step, index) => (
                  <li key={index} className="process-step">
                    <span className="step-number">{index + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="packages-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Service Packages</h2>
            <p className="section-subtitle">Choose the package that fits your needs</p>
          </div>

          <div className="packages-grid">
            {activeService.packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`package-card ${index === 1 ? 'highlighted' : ''}`}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                {index === 1 && <div className="popular-badge">Most Popular</div>}
                <div className="package-header">
                  <h3 className="package-name">{pkg.name}</h3>
                  <div className="package-price">{pkg.price}</div>
                </div>
                <div className="package-best-for">
                  <strong>Best for:</strong> {pkg.bestFor}
                </div>
                <ul className="package-features">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="package-feature">
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="package-button">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Client Testimonials</h2>
            <p className="section-subtitle">What clients say about my services</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="testimonial-content">
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-company">{testimonial.company}</p>
                    <p className="author-service">Service: {testimonial.service}</p>
                  </div>
                  <div className="testimonial-rating">
                    {'★'.repeat(testimonial.rating)}
                    <span className="rating-count">({testimonial.rating}.0)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="services-faq">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Common questions about my services</p>
          </div>

          <div className="faq-grid">
            <div className="faq-item" data-aos="fade-up">
              <h3 className="faq-question">What's included in your development services?</h3>
              <p className="faq-answer">
                My services include planning, design, development, testing, deployment, and post-launch support. 
                Each project comes with regular updates, code reviews, and detailed documentation.
              </p>
            </div>

            <div className="faq-item" data-aos="fade-up" data-aos-delay="100">
              <h3 className="faq-question">Do you work with existing codebases?</h3>
              <p className="faq-answer">
                Yes, I can work with existing projects. I provide code reviews, refactoring services, 
                and feature additions to improve and extend your current applications.
              </p>
            </div>

            <div className="faq-item" data-aos="fade-up" data-aos-delay="200">
              <h3 className="faq-question">How do you handle project communication?</h3>
              <p className="faq-answer">
                I provide regular updates via your preferred communication channel (Slack, email, meetings). 
                Weekly progress reports and demo sessions ensure you're always informed about project status.
              </p>
            </div>

            <div className="faq-item" data-aos="fade-up" data-aos-delay="300">
              <h3 className="faq-question">What are your payment terms?</h3>
              <p className="faq-answer">
                For fixed-price projects, I typically require 30% upfront, 40% at milestone, and 30% on delivery. 
                For ongoing work, I offer monthly billing. All terms are flexible and discussed upfront.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Project?</h2>
            <p className="cta-description black-highlighted">
              Let's discuss how I can help bring your ideas to life with the right solution.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                Get Free Consultation
              </a>
              <a href="/portfolio" className="btn btn-secondary">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;