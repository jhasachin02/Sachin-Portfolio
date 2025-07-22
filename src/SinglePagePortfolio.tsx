import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';
import { 
  FaReact, 
  FaJs, 
  FaPython, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaGithub,
  FaFigma,
  FaPhp,
  FaLinkedin,
  FaTwitter,
  FaEye,
  FaDownload,
  FaUser,
  FaCameraRetro,
  FaMobileAlt,
  FaCode,
  FaPencilRuler,
  FaBriefcase,
  FaHome,
  FaUserTie,
  FaLaptopCode,
  FaProjectDiagram,
  FaHandshake
} from 'react-icons/fa';
import { 
  HiOutlineMail,
  HiHome,
  HiUser,
  HiCode,
  HiCollection,
  HiBriefcase,
  HiMail
} from 'react-icons/hi';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql, 
  SiExpress, 
  SiVercel, 
  SiNetlify,
  SiCplusplus
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import './styles/singlePage.css';

const SinglePagePortfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  // Remove isBottomNavOpen state and expand/collapse logic
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: false });
  
  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Update active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      // Update scroll state for navbar
      setIsScrolled(window.scrollY > 50);

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="single-page-portfolio">
      {/* Navigation */}
      {/* Desktop Navigation (unchanged) */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} desktop-navbar`}>
        <div className="nav-container">
          <motion.div
            className="nav-logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => scrollToSection('home')}
          >
            <span className="logo-text">Sachin</span>
          </motion.div>
          <div className="nav-menu desktop">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>
      </nav>
      {/* Mobile/Tablet Bottom Navigation - professional icons */}
      <nav className="bottom-navbar mobile-only">
        <div className="bottom-nav-bar">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              className={`bottom-nav-icon${activeSection === item.id ? ' active' : ''}`}
              onClick={() => scrollToSection(item.id)}
              tabIndex={0}
              title={item.label}
            >
              <div className="nav-icon-wrapper">
                {item.id === 'home' && <HiHome className="nav-icon" />}
                {item.id === 'about' && <HiUser className="nav-icon" />}
                {item.id === 'skills' && <HiCode className="nav-icon" />}
                {item.id === 'projects' && <HiCollection className="nav-icon" />}
                {item.id === 'experience' && <HiBriefcase className="nav-icon" />}
                {item.id === 'contact' && <HiMail className="nav-icon" />}
                <span className="nav-label">{item.label}</span>
                <div className="nav-indicator"></div>
              </div>
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section" ref={heroRef}>
        <div className="container">
          <div className="hero-main-content">
            {/* Centered Content */}
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                className="hero-greeting"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="greeting-text">Hello, I'm</span>
              </motion.div>

              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <span className="hero-name">Sachin Jha</span>
                <motion.div
                  className="title-underline"
                  initial={{ width: 0 }}
                  animate={heroInView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 1.2, delay: 1.2 }}
                />
              </motion.h1>
              
              <motion.div
                className="hero-subtitle-container"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.span 
                  className="hero-subtitle-static"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Software Developer
                </motion.span>
              </motion.div>
              
              <motion.div
                className="hero-cta-section"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <motion.button
                  className="btn btn-primary-glow"
                  onClick={() => scrollToSection('projects')}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(79, 172, 254, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="btn-text">View Work</span>
                  <motion.div
                    className="btn-icon"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaEye />
                  </motion.div>
                </motion.button>
                
                <motion.button
                  className="btn btn-secondary-glass"
                  onClick={() => scrollToSection('contact')}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(79, 172, 254, 0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="btn-text">Contact</span>
                  <div className="btn-icon"><HiOutlineMail /></div>
                </motion.button>

                <motion.button
                  className="btn btn-secondary-glass"
                  onClick={() => setIsResumeModalOpen(true)}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(34, 197, 94, 0.1)",
                    borderColor: "rgba(34, 197, 94, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="btn-text">Resume</span>
                  <div className="btn-icon"><FaEye /></div>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Resume Modal */}
      {isResumeModalOpen && <ResumeModal onClose={() => setIsResumeModalOpen(false)} />}
    </div>
  );
};

// About Section Component
const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

  // Add service data for 'What I'm doing'
  const services = [
    {
      icon: <FaPencilRuler />,
      title: 'Web design',
      description: 'The most modern and high-quality design made at a professional level.'
    },
    {
      icon: <FaCode />,
      title: 'Web development',
      description: 'High-quality development of sites at the professional level.'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile apps',
      description: 'Professional development of applications for iOS and Android.'
    },
    {
      icon: <FaCameraRetro />,
      title: 'Photography',
      description: 'I make high-quality photos of any category at a professional level.'
    },
    {
      icon: <FaBriefcase />,
      title: 'Hackathons mentoring and judging',
      description: 'Mentoring teams and judging innovative projects in hackathons and tech competitions.'
    },
    {
      icon: <FaUser />,
      title: 'Building AI agents',
      description: 'Creating intelligent AI agents and automation solutions using cutting-edge technologies.'
    }
  ];

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="container">
        <div className="about-main-content">
          <motion.div
            className="about-unified-box"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="about-header">
              <div className="about-title-section">
                <motion.h2 
                  className="about-title-main"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  About Me
                </motion.h2>
                <motion.p 
                  className="about-subtitle"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Passionate developer building innovative solutions
                </motion.p>
              </div>
            </div>
            {/* Profile Image and Description */}
            <motion.div 
              className="about-intro"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div 
                className="profile-image-container"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="profile-image-placeholder">
                  <img 
                    src="./my-avatar.png" 
                    alt="Sachin Jha - Profile Picture" 
                    className="profile-image"
                    onError={(e) => {
                      // Fallback to user icon if image fails to load
                      const target = e.currentTarget;
                      target.classList.add('hidden');
                      const fallback = target.nextElementSibling;
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                  <div className="profile-fallback hidden">
                    <FaUser size={60} />
                  </div>
                </div>
                
                {/* Social Links Section */}
                <motion.div 
                  className="profile-social-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <span className="profile-social-text">Let's connect</span>
                  <div className="profile-social-links">
                    <motion.a
                      href="https://github.com/jhasachin02"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="profile-social-link github"
                      title="GitHub"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/sachin-jha-/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="profile-social-link linkedin"
                      title="LinkedIn"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaLinkedin />
                    </motion.a>
                    <motion.a
                      href="https://twitter.com/your-twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="profile-social-link twitter"
                      title="Twitter"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaTwitter />
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="about-description"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Hi, I'm <strong>Sachin Jha</strong>, an aspiring <strong>Software Developer</strong> with hands-on experience in 
                  <span className="tech-highlight"> full-stack development</span>, <span className="tech-highlight">RESTful APIs</span>, and 
                  <span className="tech-highlight">scalable system design</span>. I've worked with 
                  <span className="tech-highlight">Java, Spring Boot, React.js, Node.js, MongoDB</span>, and 
                  <span className="tech-highlight">Kotlin for Android</span>, developing real-world applications.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  I've interned at organizations like <span className="company-highlight">Adobe</span>, 
                  <span className="company-highlight">Nimbus Adcom</span>, <span className="company-highlight">Kratos Gaming Network</span>, and 
                  <span className="company-highlight">Ellipsol Systems</span>, contributing to live projects involving 
                  <span className="tech-highlight">Web3, IoT, and blockchain integration</span>. My recent project 
                  <strong>NutriScan</strong> (Android-based smart nutrition tracker) reflects my interest in 
                  <span className="tech-highlight">health-tech and AI-powered automation</span>.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  As the <strong>Ex-Chairperson of IEEE JSSATEN</strong>, I've led multiple tech events, workshops, and 
                  community initiatives. I enjoy <strong>solving problems</strong>, <strong>mentoring peers</strong>, and exploring 
                  emerging domains like <span className="tech-highlight">LLMs, RAG pipelines, and Generative AI</span>.
                </motion.p>
                <motion.blockquote 
                  className="about-quote"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  whileHover={{ scale: 1.02 }}
                >
                  "Let's connect if you're building something innovative, organizing tech events, or looking for passionate tech collaborators."
                </motion.blockquote>
              </motion.div>
            </motion.div>

            {/* What I'm doing subsection */}
            <motion.div
              className="about-services"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <motion.h3 
                className="about-services-title about-services-title-animated"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                What I'm doing
              </motion.h3>
              <div className="about-services-grid">
                {services.map((service, idx) => (
                  <motion.div
                    className="about-service-card"
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                    whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(79,172,254,0.15)' }}
                  >
                    <div className="about-service-icon">{service.icon}</div>
                    <div className="about-service-content">
                      <h4 className="about-service-title">{service.title}</h4>
                      <p className="about-service-desc">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Skills Section Component
const SkillsSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      class: 'frontend',
      skills: [
        { name: 'React.js', icon: <FaReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> }
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚡',
      class: 'backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'PHP', icon: <FaPhp /> }
      ]
    },
    {
      title: 'Database & Cloud',
      icon: '🗄️',
      class: 'database',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> }
      ]
    },
    {
      title: 'Programming Languages',
      icon: '💻',
      class: 'languages',
      skills: [
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'C++', icon: <SiCplusplus /> }
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: '🛠️',
      class: 'tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'VS Code', icon: <VscCode /> },
        { name: 'Vercel', icon: <SiVercel /> },
        { name: 'Netlify', icon: <SiNetlify /> }
      ]
    },
    {
      title: 'Design & UI/UX',
      icon: '🎯',
      class: 'cloud',
      skills: [
        { name: 'Figma', icon: <FaFigma /> },
        { name: 'Adobe XD', icon: <FaFigma /> }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="container">
        <div className="skills-main-content">
          <motion.div
            className="skills-unified-box"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="skills-header">
              <div className="skills-title-section">
                <motion.h2 
                  className="skills-title-main"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Skills & Expertise
                </motion.h2>
                <motion.p 
                  className="skills-subtitle"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Technologies and tools I use to bring ideas to life
                </motion.p>
              </div>
            </div>

            <div className="skills-professional-grid">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  className={`skill-category-professional ${category.class}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  <div className="skill-category-header">
                    <div className="skill-category-icon">
                      {category.icon}
                    </div>
                    <h3 className="skill-category-title">{category.title}</h3>
                  </div>
                  
                  <div className="skill-items-container">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="skill-item-professional"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          duration: 0.4, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <div className="skill-tech-icon">
                          {skill.icon}
                        </div>
                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Projects Section Component (Updated)
const ProjectsSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  const featuredProjects = [
    {
      title: 'NutriScan – Smart Nutrition Assistant',
      description: 'Built a scalable Android app using Kotlin with real-time API integration to scan barcodes, access menus, and analyze recipe-based nutrition. Designed intuitive UI/UX with AR food insights, custom profiles, and fitness sync.',
      tech: [
        { name: 'Kotlin', icon: <FaJs /> },
        { name: 'Firebase', icon: <FaNodeJs /> },
        { name: 'REST APIs', icon: <FaReact /> },
        { name: 'Android', icon: <FaGithub /> }
      ],
      image: '🍎',
      liveLink: '#',
      codeLink: '#',
      status: 'Live',
      category: 'Mobile App'
    },
    {
      title: 'AI Image Caption Generator',
      description: 'Developed a deep learning system using PyTorch with CNN-LSTM + attention architecture to generate meaningful captions for images. Built full ML pipeline with custom data loaders, training loops, and deployed via Gradio web app.',
      tech: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'PyTorch', icon: <FaPython /> },
        { name: 'TensorBoard', icon: <FaPython /> },
        { name: 'Gradio', icon: <FaReact /> }
      ],
      image: '🤖',
      liveLink: '#',
      codeLink: '#',
      status: 'Featured',
      category: 'AI/ML'
    }
  ];

  const otherProjects = [
    {
      title: 'Churn Prediction Model',
      description: 'Built predictive models using Linear Regression, K-Neighbors, and Random Forest to forecast customer churn in banking. Optimized performance with ensemble methods using demographic and transactional data.',
      tech: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'Scikit-learn', icon: <FaPython /> },
        { name: 'Random Forest', icon: <FaPython /> },
        { name: 'Machine Learning', icon: <FaPython /> }
      ],
      liveLink: '#',
      codeLink: '#',
      category: 'Data Science'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website built with React, TypeScript, and Framer Motion animations. Features professional design with glassmorphism effects and smooth interactions.',
      tech: [
        { name: 'React', icon: <FaReact /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'Framer Motion', icon: <FaReact /> },
        { name: 'Vite', icon: <FaJs /> }
      ],
      liveLink: '#',
      codeLink: '#',
      category: 'Web Development'
    }
  ];

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="container">
        <div className="projects-main-content">
          <motion.div
            className="projects-unified-box"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="projects-header">
              <div className="projects-title-section">
                <motion.h2 
                  className="projects-title-main"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Featured Projects
                </motion.h2>
                <motion.p 
                  className="projects-subtitle"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Showcasing my best work and technical expertise
                </motion.p>
              </div>
            </div>

            {/* Featured Projects */}
            <div className="featured-projects-grid">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="project-card-professional featured"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="project-image-professional">
                    <span className="project-emoji-large">{project.image}</span>
                    <div className="project-status-badge">
                      <span className="status-dot"></span>
                      {project.status}
                    </div>
                    <div className="project-category-badge">
                      {project.category}
                    </div>
                  </div>
                  
                  <div className="project-content-professional">
                    <div className="project-header-professional">
                      <h3 className="project-title-professional">{project.title}</h3>
                      <div className="project-actions">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link-btn" title="View Live Project">
                          <FaEye />
                        </a>
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link-btn" title="View Source Code">
                          <FaGithub />
                        </a>
                      </div>
                    </div>
                    
                    <p className="project-description-professional">{project.description}</p>
                    
                    <div className="project-tech-professional">
                      {project.tech.map((tech) => (
                        <span key={tech.name} className="tech-tag-professional">
                          <span className="tech-icon-professional">{tech.icon}</span>
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Other Projects */}
            <div className="other-projects-section">
              <h3 className="other-projects-title">Other Notable Projects</h3>
              
              <div className="other-projects-grid">
                {otherProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    className="project-card-professional mini"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -3 }}
                  >
                    <div className="mini-project-header">
                      <div className="mini-project-info">
                        <h4 className="mini-project-title">{project.title}</h4>
                        <span className="mini-project-category">{project.category}</span>
                      </div>
                      <div className="mini-project-actions">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="mini-project-link" title="View Live Project">
                          <FaEye />
                        </a>
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="mini-project-link" title="View Source Code">
                          <FaGithub />
                        </a>
                      </div>
                    </div>
                    
                    <p className="mini-project-description">{project.description}</p>
                    
                    <div className="mini-project-tech">
                      {project.tech.map((tech) => (
                        <span key={tech.name} className="mini-tech-tag">
                          <span className="mini-tech-icon">{tech.icon}</span>
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Experience Section Component
const ExperienceSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });
  const [expandedLeadership, setExpandedLeadership] = useState<number | null>(null);
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

  const toggleLeadershipExpansion = (index: number) => {
    setExpandedLeadership(expandedLeadership === index ? null : index);
  };

  const toggleExperienceExpansion = (index: number) => {
    setExpandedExperience(expandedExperience === index ? null : index);
  };

  // Simplified for debugging
  const experiences = [
    {
      title: "Software Developer Internship",
      company: "Kratos Gaming Network",
      period: "July 2024 - August 2024",
      location: "Bangalore, Karnataka",
      description: "Enhanced website accessibility and navigation, leading to a 25% increase in user retention by developing and optimizing responsive front-end components using React and modern UI/UX practices.",
      achievements: [
        "Enhanced website accessibility and navigation, leading to a 25% increase in user retention by developing and optimizing responsive front-end components using React and modern UI/UX practices.",
        "Maintained and scaled backend infrastructure using Node.js and AWS, ensuring 99.9% uptime and smooth operations during a 3x user traffic spike.",
        "Led integration of blockchain, Web3, and NFT functionalities, collaborating with design and product teams to launch features that boosted user engagement by 35% within the gaming community."
      ],
      technologies: ["React.js", "Node.js", "AWS", "Blockchain", "Web3", "NFT", "UI/UX"]
    },
    {
      title: "Software Developer Internship", 
      company: "Nimbus Adcom Private Limited",
      period: "January 2024 - June 2024",
      location: "Noida, Uttar Pradesh",
      description: "Developed and optimized scalable, user-centric web applications for 10+ clients across various industries, resulting in average client satisfaction scores of 95%.",
      achievements: [
        "Developed and optimized scalable, user-centric web applications for 10+ clients across various industries, resulting in average client satisfaction scores of 95%.",
        "Built robust full-stack solutions using React, Node.js, and MongoDB, reducing development time by 30% through reusable component architecture.",
        "Refined development workflows and toolsets, adopting Agile methodologies and CI/CD practices to ensure on-time delivery of 100% of assigned projects over a 6-month period."
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Full-Stack", "Agile", "CI/CD"]
    },
    {
      title: "Research and Development Intern",
      company: "Ellipsol Systems Private Limited",
      period: "July 2023 - August 2023",
      location: "Gurugram, Haryana",
      description: "Designed and implemented an Arduino-based IoT system for a smart water bottle, enabling accurate real-time tracking of user water intake through sensor integration.",
      achievements: [
        "Designed and implemented an Arduino-based IoT system for a smart water bottle, enabling accurate real-time tracking of user water intake through sensor integration.",
        "Collaborated with cross-functional teams (hardware, firmware, and UX) and conducted end-to-end testing, ensuring a highly reliable and user-friendly final product.",
        "Achieved a 90%+ accuracy rate in hydration tracking, contributing to increased user engagement and health-conscious behavior adoption during pilot testing."
      ],
      technologies: ["Arduino", "IoT", "Sensor Integration", "Hardware", "Firmware", "UX Testing"]
    }
  ];

  const leadershipPositions = [
    {
      title: "Mentor – STEM Education Program",
      company: "iExplore Foundation (Innovators for Tomorrow)",
      period: "July 2025 – Present",
      location: "Remote",
      description: "Mentoring school students across India in STEM innovation, guiding them in developing prototypes and applying creative problem-solving and supporting students in exploring real-world tech applications and building confidence in future-ready skills.",
      achievements: [
        "Mentoring school students across India in STEM innovation, guiding them in developing prototypes and applying creative problem-solving",
        "Supporting students in exploring real-world tech applications and building confidence in future-ready skills"
      ],
      technologies: ["STEM Education", "Mentoring", "Innovation", "Problem-solving", "Prototype Development"]
    },
    {
      title: "Chairperson",
      company: "IEEE JSSATEN Student Branch",
      period: "May 2024 – June 2025",
      location: "Noida, Uttar Pradesh",
      description: "Led student branch activities, organized technical events, and fostered a culture of learning and collaboration within the tech community.",
      achievements: [
        "Led student branch activities and organized technical events",
        "Fostered a culture of learning and collaboration within the tech community"
      ],
      technologies: ["Leadership", "Event Management", "Community Building", "Technical Events", "IEEE"]
    },
    {
      title: "Core Lead",
      company: "StarkSeek",
      period: "July 2024 – Present",
      location: "Noida, Uttar Pradesh",
      description: "Driving community engagement, leading technical projects, and mentoring aspiring developers as part of a fast-growing tech platform.",
      achievements: [
        "Driving community engagement and leading technical projects",
        "Mentoring aspiring developers as part of a fast-growing tech platform"
      ],
      technologies: ["Community Management", "Technical Leadership", "Mentoring", "Project Management", "Platform Development"]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="experience-main-content">
          <div className="experience-unified-box">
            <div className="experience-header">
              <div className="experience-title-section">
                <h2 className="experience-title-main">
                  Professional Experience
                </h2>
                <p className="experience-subtitle">
                  Building impactful solutions across diverse domains
                </p>
                <p className="experience-subtitle mobile-only">👆 Tap on any experience to expand details</p>
              </div>
            </div>

            {/* Professional Experience Timeline */}
            <div className="timeline-professional">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item-professional">
                  <div className="timeline-marker-professional"></div>
                  <div 
                    className={`timeline-content-professional ${expandedExperience === index ? 'expanded' : ''}`}
                    onClick={() => toggleExperienceExpansion(index)}
                  >
                    <div className="timeline-header-professional">
                      <div className="job-info">
                        <h3 className="job-title-professional">{exp.title}</h3>
                        <h4 className="company-name-professional">{exp.company}</h4>
                        {exp.location && <p className="job-location-professional">{exp.location}</p>}
                      </div>
                      <div className="job-header-right">
                        <span className="job-period-professional">{exp.period}</span>
                        <span className="expand-indicator-experience">
                          {expandedExperience === index ? '−' : '+'}
                        </span>
                      </div>
                    </div>
                    
                    {/* Always show description on desktop, conditionally on mobile */}
                    <p className={`job-description-professional ${expandedExperience === index ? 'show-mobile' : ''}`}>
                      {exp.description}
                    </p>
                    
                    {/* Expandable content */}
                    <div className={`experience-expandable-content ${expandedExperience === index ? 'expanded' : ''}`}>
                      {exp.achievements && (
                        <div className="job-achievements-professional">
                          <ul className="achievements-list-professional">
                            {exp.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="achievement-bullet-professional">
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="experience-tech-stack">
                        {exp.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="experience-tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Leadership Positions Section */}
            <div className="leadership-section">
              <h3 className="leadership-title">Leadership Positions</h3>
              <p className="leadership-subtitle mobile-only">👆 Tap on any position to expand details</p>
              
              <div className="timeline-leadership">
                {leadershipPositions.map((position, index) => (
                  <div key={index} className="timeline-item-leadership">
                    <div className="timeline-marker-leadership"></div>
                    <div 
                      className={`timeline-content-leadership ${expandedLeadership === index ? 'expanded' : ''}`}
                      onClick={() => toggleLeadershipExpansion(index)}
                    >
                      <div className="timeline-header-leadership">
                        <div className="position-info">
                          <h3 className="position-title">{position.title}</h3>
                          <h4 className="organization-name">{position.company}</h4>
                          {position.location && <p className="position-location">{position.location}</p>}
                        </div>
                        <div className="position-header-right">
                          <span className="position-period">{position.period}</span>
                          <span className="expand-indicator">
                            {expandedLeadership === index ? '−' : '+'}
                          </span>
                        </div>
                      </div>
                      
                      {/* Always show description on desktop, conditionally on mobile */}
                      <p className={`position-description ${expandedLeadership === index ? 'show-mobile' : ''}`}>
                        {position.description}
                      </p>
                      
                      {/* Expandable content */}
                      <div className={`position-expandable-content ${expandedLeadership === index ? 'expanded' : ''}`}>
                        {position.achievements && (
                          <div className="position-achievements">
                            <ul className="achievements-list-leadership">
                              {position.achievements.map((achievement, achievementIndex) => (
                                <li key={achievementIndex} className="achievement-bullet-leadership">
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        <div className="leadership-tech-stack">
                          {position.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="leadership-tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Resume Modal Component
interface ResumeModalProps {
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = './Sachin Resume.pdf';
    link.download = 'Sachin_Jha_Resume.pdf';
    link.click();
  };

  const handleViewInNewTab = () => {
    window.open('./Sachin Resume.pdf', '_blank', 'noopener,noreferrer');
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Check if device is mobile
  const isMobile = window.innerWidth <= 768;

  // On mobile, show fallback with view and download options
  const showFallback = isMobile || hasError;

  return (
    <motion.div
      className="resume-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        className="resume-modal-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.button
          className="resume-close-btn"
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Close Resume"
        >
          ×
        </motion.button>

        {/* Show fallback on mobile devices */}
        {showFallback ? (
          <div className="resume-fallback">
            <div className="fallback-content">
              <div className="resume-icon">📄</div>
              <h3>Sachin Jha - Resume</h3>
              <p>Choose how you'd like to view the resume:</p>
              <div className="fallback-buttons">
                <motion.button
                  className="btn-fallback-view"
                  onClick={handleViewInNewTab}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEye />
                  <span>View PDF</span>
                </motion.button>
                <motion.button
                  className="btn-fallback-download"
                  onClick={handleDownload}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload />
                  <span>Download PDF</span>
                </motion.button>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Loading indicator */}
            {isLoading && (
              <div className="resume-loading">
                <div className="loading-spinner"></div>
                <p>Loading Resume...</p>
              </div>
            )}

            <iframe
              src="./Sachin Resume.pdf#toolbar=1&navpanes=0&scrollbar=1&page=1&zoom=FitH"
              className={`resume-preview-iframe ${isLoading ? 'hidden' : ''}`}
              title="Sachin Jha Resume Preview"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
            />
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

// Contact Section Component
const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    // Form data would be sent to backend/email service in production
    alert('Thank you for reaching out! I\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="container">
        <div className="contact-main-content">
          <motion.div
            className="contact-unified-box"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="contact-header">
              <motion.h2
                className="contact-title-main"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                Let's Connect & Collaborate
              </motion.h2>
              <motion.p
                className="contact-subtitle"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Open to exciting opportunities, innovative projects, and meaningful partnerships
              </motion.p>
            </div>

            <div className="contact-content-grid">
              <motion.div
                className="contact-info-professional"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="contact-intro">
                  <h3 className="contact-intro-title">Ready to Build Something Amazing?</h3>
                  <p className="contact-intro-text">
                    I'm passionate about creating innovative solutions and contributing to impactful projects. 
                    Whether you're looking for a dedicated developer, seeking collaboration on cutting-edge 
                    technologies, or exploring new opportunities, I'd love to connect.
                  </p>
                </div>

                <div className="contact-details-professional">
                  <motion.div
                    className="contact-item-professional"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="contact-icon-professional">
                      <HiOutlineMail />
                    </div>
                    <div className="contact-info-text">
                      <h4>Email</h4>
                      <p>jhasachin1307@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="contact-item-professional"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="contact-icon-professional phone">
                      📱
                    </div>
                    <div className="contact-info-text">
                      <h4>Phone</h4>
                      <p>+91 9650411734</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="contact-item-professional"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="contact-icon-professional">
                      <FaLinkedin />
                    </div>
                    <div className="contact-info-text">
                      <h4>LinkedIn</h4>
                      <p>linkedin.com/in/sachin-jha-</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="contact-item-professional"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="contact-icon-professional">
                      <FaGithub />
                    </div>
                    <div className="contact-info-text">
                      <h4>GitHub</h4>
                      <p>github.com/jhasachin02</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="contact-item-professional"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="contact-icon-professional location">
                      📍
                    </div>
                    <div className="contact-info-text">
                      <h4>Location</h4>
                      <p>Delhi NCR, India</p>
                    </div>
                  </motion.div>
                </div>

                <div className="availability-status">
                  <div className="availability-indicator">
                    <div className="status-dot available"></div>
                    <span className="status-text">Available for new opportunities</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="contact-form-professional"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <form onSubmit={handleSubmit} className="professional-form">
                  <div className="form-header">
                    <h3>Send Me a Message</h3>
                    <p>Let's discuss how we can work together</p>
                  </div>

                  <div className="form-row">
                    <motion.div
                      className="form-group-professional"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    >
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </motion.div>

                    <motion.div
                      className="form-group-professional"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 }}
                    >
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    className="form-group-professional"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="job-opportunity">Job Opportunity</option>
                      <option value="collaboration">Project Collaboration</option>
                      <option value="freelance">Freelance Work</option>
                      <option value="consultation">Technical Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </motion.div>

                  <motion.div
                    className="form-group-professional"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  >
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, opportunity, or how we can collaborate..."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="btn btn-primary-professional"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.9 }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 15px 35px rgba(79, 172, 254, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Send Message</span>
                    <div className="btn-arrow">→</div>
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SinglePagePortfolio;
