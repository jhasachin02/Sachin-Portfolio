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
  HiMail,
  HiPhone,
  HiLocationMarker
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
  // Fix: On mobile, wait for menu to close before scrolling
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200); // Wait for menu animation/close
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
                  className="btn btn-primary-glow"
                  onClick={() => setIsResumeModalOpen(true)}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(34, 197, 94, 0.2)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="btn-text">Resume</span>
                  <div className="btn-icon"><FaDownload /></div>
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
      title: 'JSON-Schema-Builder',
      description: 'A visual tool for building, editing, and validating JSON schemas. Features drag-and-drop UI, real-time schema preview, and export functionality for rapid API development.',
      tech: [
        { name: 'React', icon: <FaReact /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'Vercel', icon: <SiVercel /> }
      ],
      liveLink: 'https://json-schema-builder-phi.vercel.app/',
      codeLink: 'https://github.com/jhasachin02/JSON-Schema-Builder',
      category: 'Web Tool'
    },
    {
      title: 'Churn Prediction Model',
      description: 'Built predictive models using Linear Regression, K-Neighbors, and Random Forest to forecast customer churn in banking. Optimized performance with ensemble methods using demographic and transactional data.',
      tech: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'Scikit-learn', icon: <FaPython /> },
        { name: 'Random Forest', icon: <FaPython /> },
        { name: 'Machine Learning', icon: <FaPython /> }
      ],
      liveLink: 'https://github.com/jhasachin02/Churn-Prediction.git',
      codeLink: 'https://github.com/jhasachin02/Churn-Prediction.git',
      category: 'AI/ML'
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
      liveLink: 'https://sachinjha.me',
      codeLink: 'https://github.com/jhasachin02/portfolio-.git',
      category: 'Web Development'
    },
    {
      title: 'E-commerce-Fast-API',
      description: 'A scalable e-commerce backend built using Python, FastAPI, and MongoDB. Features RESTful endpoints for product management, user authentication, and order processing.',
      tech: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'FastAPI', icon: <FaPython /> },
        { name: 'MongoDB', icon: <SiMongodb /> }
      ],
      liveLink: 'https://e-commerce-fast-api-76pa.onrender.com/',
      codeLink: 'https://github.com/jhasachin02/E-commerce-Fast-API',
      category: 'Backend/API'
    },
    {
      title: 'Invoice Generator',
      description: 'A simple and efficient web app to generate invoices instantly. Features customizable fields, PDF export, and a clean, user-friendly interface for freelancers and small businesses.',
      tech: [
        { name: 'React', icon: <FaReact /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'Netlify', icon: <SiNetlify /> }
      ],
      liveLink: 'https://invoice-generator02.netlify.app/',
      codeLink: 'https://github.com/jhasachin02/invoice-generator',
      category: 'Web Tool'
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
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                <button
                  style={{ marginRight: '1rem', fontSize: '2rem', background: 'none', border: 'none', cursor: 'pointer' }}
                  onClick={() => {
                    const container = document.getElementById('other-projects-scroll');
                    if (container) container.scrollLeft -= 300;
                  }}
                  aria-label="Scroll Left"
                >
                  &#8592;
                </button>
                <div
                  id="other-projects-scroll"
                  style={{ overflowX: 'auto', display: 'flex', flexDirection: 'row', gap: '1.5rem', width: '100%' }}
                >
                  {otherProjects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      className="project-card-professional mini"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      whileHover={{ y: -3 }}
                      style={{ minWidth: '350px', maxWidth: '400px' }}
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
                <button
                  style={{ marginLeft: '1rem', fontSize: '2rem', background: 'none', border: 'none', cursor: 'pointer' }}
                  onClick={() => {
                    const container = document.getElementById('other-projects-scroll');
                    if (container) container.scrollLeft += 300;
                  }}
                  aria-label="Scroll Right"
                >
                  &#8594;
                </button>
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
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });
  const [eventGalleryRef, eventGalleryInView] = useInView({ threshold: 0.1, triggerOnce: false });
  const [expandedLeadership, setExpandedLeadership] = useState<number | null>(null);
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);
  const [expandedAchievements, setExpandedAchievements] = useState<number | null>(null);
  const [expandedCertifications, setExpandedCertifications] = useState<number | null>(null);
  const [expandedEventGallery, setExpandedEventGallery] = useState<number | null>(null);
  const [expandedEventItem, setExpandedEventItem] = useState<string | null>(null);

  const toggleLeadershipExpansion = (index: number) => {
    setExpandedLeadership(expandedLeadership === index ? null : index);
  };

  const toggleExperienceExpansion = (index: number) => {
    setExpandedExperience(expandedExperience === index ? null : index);
  };

  const toggleAchievementsExpansion = (index: number) => {
    setExpandedAchievements(expandedAchievements === index ? null : index);
  };

  const toggleCertificationsExpansion = (index: number) => {
    setExpandedCertifications(expandedCertifications === index ? null : index);
  };

  const toggleEventGalleryExpansion = (index: number) => {
    setExpandedEventGallery(expandedEventGallery === index ? null : index);
  };

  const toggleEventItemExpansion = (eventKey: string) => {
    setExpandedEventItem(expandedEventItem === eventKey ? null : eventKey);
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

  // Achievements Data
  const achievements = [
    {
      title: "Hackathon Mentors & Judges",
      category: "Technical Leadership",
      items: [
        {
          title: "Tech-X Hackathon Mentor",
          organization: "DBU University",
          year: "September 2024",
          description: "◦ Guided 15+ teams through technical challenges and innovation processes\n◦ Provided expertise in full-stack development and system architecture"
        },
        {
          title: "Startup-X Mentor",
          organization: "Ashoka University",
          year: "September 2024",
          description: "◦ Mentored aspiring entrepreneurs in technical product development\n◦ Advised on technology stack selection and MVP development strategies"
        },
        {
          title: "HackArena Mentor",
          organization: "IIIT Delhi",
          year: "February 2025",
          description: "◦ Specialized mentorship in competitive programming and algorithm optimization\n◦ Guided participants through complex data structure implementations"
        },
        {
          title: "Infronix Hackathon Mentor",
          organization: "IIIT Delhi",
          year: "February 2025",
          description: "◦ Invited as technical mentor for Infronix, IIIT Delhi's premier hackathon event\n◦ Guided 20+ teams in innovative tech solutions and product development\n◦ Provided expertise in full-stack development, system architecture, and tech entrepreneurship\n◦ Conducted mentoring sessions on modern web technologies and industry best practices"
        },
        {
          title: "CodeForge Hackathon Mentor",
          organization: "Microsoft Office Noida",
          year: "April 2025",
          description: "Provided technical guidance at Microsoft-sponsored innovation event\n◦ Mentored teams in cloud computing and Azure service integration"
        },
        {
          title: "Electrothon 7.0 Judge",
          organization: "NIT Hamirpur",
          year: " March 2025",
          description: "Evaluated 50+ innovative technical projects and solutions\n◦ Assessed projects based on technical complexity, innovation, and impact"
        },
        {
          title: "AM Hacks Judge",
          organization: "IGDTUW",
          year: "April 2025",
          description: "Specialized judge for women in tech hackathon initiatives\n◦ Evaluated projects focusing on social impact and diversity in technology"
        },
        {
          title: "GIH Judge",
          organization: "Galgotia College of Engineering",
          year: "April 2025",
          description: "◦Technical judge for college-level hackathon and innovation competition\n◦ Evaluated student projects across multiple engineering domains"
        }
      ]
    },
    {
      title: "Competition Winners & Rankings",
      category: "Technical Achievements",
      items: [
        {
          title: "Hacknovate 5.0 Winner",
          organization: "ABES IT",
          year: "2024",
          description: "First place winner in competitive college-level hackathon\n◦ Developed innovative solution addressing real-world problem"
        },
        {
          title: "Flipkart Grid 5.0 Finalist",
          organization: "Flipkart",
          year: "2024",
          description: "Selected as finalist in national-level e-commerce technology challenge\n◦ Advanced through multiple rounds of technical assessments"
        },
        {
          title: "IEEEXtreme 17.0 Achiever",
          organization: "IEEE",
          year: "2024",
          description: "Achieved Global Rank: 4029 out of 50,000+ participants worldwide\n◦ Secured National Rank: 2311 among Indian participants"
        }
      ]
    },
    {
      title: "Professional Excellence Awards",
      category: "Work Recognition",
      items: [
        {
          title: "Best Intern Performance",
          organization: "Kratos Gaming Network",
          year: "2024",
          description: "Recognized for exceptional contribution to Web3 integration projects\n◦ Achieved 35% increase in user engagement through innovative features"
        },
        {
          title: "Outstanding Project Delivery",
          organization: "Nimbus Adcom Private Limited",
          year: "2024",
          description: "Achieved 100% on-time project delivery rate across 6-month internship\n◦ Maintained 95% average client satisfaction score across 10+ projects"
        }
      ]
    },
    {
      title: "Leadership & Community Impact",
      category: "Community Recognition", 
      items: [
        {
          title: "IEEE Student Branch Excellence",
          organization: "IEEE JSSATEN",
          year: "May 2024 - June 2025",
          description: "Led successful technical events and workshops, increasing student participation by 60%\n◦ Fostered a culture of learning and collaboration within the tech community"
        },
        {
          title: "STEM Mentorship Impact",
          organization: "iExplore Foundation",
          year: "July 2025",
          description: "Successfully mentored 50+ students in STEM innovation and prototype development\n◦ Guided students through hands-on project-based learning experiences"
        }
      ]
    }
  ];

  // Certifications Data
  const certifications = [
    {
      title: "Cloud Computing & Development",
      category: "Technical Skills",
      items: [
        {
          title: "Google Cloud Fundamentals",
          issuer: "Google",
          year: "2024",
          skills: ["Google Cloud Platform", "Cloud Computing", "Cloud Services"],
          certificateUrl: "https://drive.google.com/file/d/1u9oKy6tfnSBRPqkiytKB0NG4wwQz-45w/view"
        },
        {
          title: "Programming with C++ Language",
          issuer: "Udemy",
          year: "2024",
          skills: ["C++", "Programming", "Object-Oriented Programming", "Data Structures"],
          certificateUrl: "https://www.udemy.com/certificate/UC-8abe5b96-7f66-4b7d-957c-6966477ceb15/"
        }
      ]
    },
    {
      title: "AI & Machine Learning",
      category: "Emerging Technologies",
      items: [
        {
          title: "Career Essentials in Generative AI",
          issuer: "Microsoft & LinkedIn",
          year: "2024",
          skills: ["Generative AI", "Artificial Intelligence", "Machine Learning", "AI Tools"],
          certificateUrl: "https://www.linkedin.com/learning/certificates/d0d1bc4f5a2f1238e578ebb3352f28ab7face8f3746665712052b3e5a42b51e1"
        }
      ]
    }
  ];

  // Event Gallery Data
  const eventGallery = [
    {
      title: "Technical Workshops / Hackathons",
      category: "Educational Events",
      events: [
        // Removed 'Startup-X Ashoka University' event as requested
        {
          title: "Startup x Ashoka University",
          image: "/Gallery/Startup Ashoka Ashoka University/1728501639997.jpg",
          category: "Startup Hackathon",
          date: "September 2024",
          description: "Mentored teams and delivered sessions at Startup Ashoka, Ashoka University.",
          gallery: [
            "/Gallery/Startup Ashoka Ashoka University/1728501639997.jpg",
            "/Gallery/Startup Ashoka Ashoka University/1728501642913.jpg",
            "/Gallery/Startup Ashoka Ashoka University/1728501643045.jpg",
            "/Gallery/Startup Ashoka Ashoka University/1728501643107.jpg",
            "/Gallery/Startup Ashoka Ashoka University/1728501643320.jpg",
            "/Gallery/Startup Ashoka Ashoka University/1728501643336.jpg",
            "/Gallery/Startup Ashoka Ashoka University/1728501643369.jpg",
            "/Gallery/Startup Ashoka Ashoka University/1728501643406.jpg"
          ]
        },
        {
          title: "Ton Bootcamp",
          image: "/Gallery/Ton Bootcamp/1719050102383.jpg",
          category: "Bootcamp",
          date: "May 2024",
          description: "Participated in Ton Bootcamp, hands-on blockchain and Web3 training.",
          gallery: [
            "/Gallery/Ton Bootcamp/1719050102383.jpg",
            "/Gallery/Ton Bootcamp/1719086273123.jpg",
            "/Gallery/Ton Bootcamp/1719086691304.jpg",
            "/Gallery/Ton Bootcamp/1719094383873.jpg",
            "/Gallery/Ton Bootcamp/1719094759341.jpg",
            "/Gallery/Ton Bootcamp/1719146688773.jpg"
          ]
        },
        {
          title: "Infronix IIIT Delhi (Mentor)",
          image: "/Gallery/Infronix IIIT Delhi/1739909306187.jpg",
          category: "Hackathon",
          date: "February 2025",
          description: "Mentored teams at IIIT Delhi's premier hackathon event",
          gallery: [
            "/Gallery/Infronix IIIT Delhi/1739909306187.jpg",
            "/Gallery/Infronix IIIT Delhi/1739909326018.jpg",
            "/Gallery/Infronix IIIT Delhi/1739909332105.jpg",
            "/Gallery/Infronix IIIT Delhi/IMG_1859.JPG",
            "/Gallery/Infronix IIIT Delhi/IMG_1860.JPG",
            "/Gallery/Infronix IIIT Delhi/IMG_1897.JPG"
          ]
        },
        {
          title: "AM Hacks IGDTUW",
          image: "/Gallery/Am Hacks IGDTUW/1.jpg",
          category: "Hackathon",
          date: "April 2025",
          description: "Women in tech hackathon judge",
          gallery: [
            "/Gallery/Am Hacks IGDTUW/1.jpg",
            "/Gallery/Am Hacks IGDTUW/2.jpg",
            "/Gallery/Am Hacks IGDTUW/3.jpg",
            "/Gallery/Am Hacks IGDTUW/1744518695193.jpg",
            "/Gallery/Am Hacks IGDTUW/1744518695476.jpg",
            "/Gallery/Am Hacks IGDTUW/1744518702229.jpg"
          ]
        },
        {
          title: "GIH Galgotia College",
          image: "/Gallery/GIH Galgotia College Of Engineering/1747571966759.jpg",
          category: "Competition",
          date: "April 2025",
          description: "College-level innovation competition judge",
          gallery: [
            "/Gallery/GIH Galgotia College Of Engineering/1747571966759.jpg",
            "/Gallery/GIH Galgotia College Of Engineering/1747571966931.jpg",
            "/Gallery/GIH Galgotia College Of Engineering/1747571966983.jpg",
            "/Gallery/GIH Galgotia College Of Engineering/1747571967776.jpg",
            "/Gallery/GIH Galgotia College Of Engineering/1747571967816.jpg",
            "/Gallery/GIH Galgotia College Of Engineering/1747571968837.jpg",
            "/Gallery/GIH Galgotia College Of Engineering/1747571974938.jpg",
            "/Gallery/GIH Galgotia College Of Engineering/1747571978156.jpg"
          ]
        },
        {
          title: "Electrothon 7.0 NIT Hamirpur",
          image: "/Gallery/NIT Hamirpur/1 img.jpg",
          category: "Hackathon",
          date: "March 2025",
          description: "Premier NIT hackathon evaluation",
          gallery: [
            "/Gallery/NIT Hamirpur/1 img.jpg",
            "/Gallery/NIT Hamirpur/1741882172720.jpg",
            "/Gallery/NIT Hamirpur/1741882186001.jpg",
            "/Gallery/NIT Hamirpur/1741882199424.jpg",
            "/Gallery/NIT Hamirpur/1741882251872.jpg",
            "/Gallery/NIT Hamirpur/1741882279218.jpg",
            "/Gallery/NIT Hamirpur/1741882279384.jpg",
            "/Gallery/NIT Hamirpur/1741882317481.jpg",
            "/Gallery/NIT Hamirpur/1741882355250.jpg"
          ]
        },
        {
          title: "E Summit IIIT Delhi",
          image: "/Gallery/E Summit IIIT Delhi/1742729290093.jpg",
          category: "Summit",
          date: "March 2025",
          description: "Entrepreneurship summit participation",
          gallery: [
            "/Gallery/E Summit IIIT Delhi/1742729290093.jpg",
            "/Gallery/E Summit IIIT Delhi/1742729292004.jpg",
            "/Gallery/E Summit IIIT Delhi/1742729301709.jpg",
            "/Gallery/E Summit IIIT Delhi/1742729311244.jpg",
            "/Gallery/E Summit IIIT Delhi/1742729312380.jpg",
            "/Gallery/E Summit IIIT Delhi/1742729319423.jpg",
            "/Gallery/E Summit IIIT Delhi/1742729329260.jpg",
            "/Gallery/E Summit IIIT Delhi/1742729331989.jpg",
            "/Gallery/E Summit IIIT Delhi/1742729332613.jpg",
            "/Gallery/E Summit IIIT Delhi/1742729364433.jpg"
          ]
        },
        {
          title: "Hack4Bihar Delhi Tour",
          image: "/Gallery/Hack4Bihar Delhi Hacking Tour/IMG_20250306_174151 - Parth.jpg",
          category: "Hackathon",
          date: "March 2025",
          description: "State-level hackathon tour across Bihar",
          gallery: [
            "/Gallery/Hack4Bihar Delhi Hacking Tour/IMG_20250306_174151 - Parth.jpg",
            "/Gallery/Hack4Bihar Delhi Hacking Tour/IMG-20250306-WA0208 - shahebsha anjum.jpg",
            "/Gallery/Hack4Bihar Delhi Hacking Tour/IMG-20250307-WA0426 - Ankur Sharma.jpg",
            "/Gallery/Hack4Bihar Delhi Hacking Tour/WhatsApp Image 2025-03-17 at 21.15.42_15dc909d - RISHI THAKUR.jpg"
          ]
        },
        {
          title: "CodeForge MS Office Gurgaon",
          image: "/Gallery/CodeForge MS Ofiice Gurgaon/1745089508191.jpg",
          category: "Hackathon",
          date: "April 2025",
          description: "Microsoft-sponsored innovation event mentoring",
          gallery: [
            "/Gallery/CodeForge MS Ofiice Gurgaon/1745089508191.jpg",
            "/Gallery/CodeForge MS Ofiice Gurgaon/1745089509720.jpg",
            "/Gallery/CodeForge MS Ofiice Gurgaon/1745089510979.jpg",
            "/Gallery/CodeForge MS Ofiice Gurgaon/1745089522059.jpg",
            "/Gallery/CodeForge MS Ofiice Gurgaon/1745089530853.jpg",
            "/Gallery/CodeForge MS Ofiice Gurgaon/1745089533819.jpg"
          ]
        },
        {
          title: "HackArena IIIT Delhi",
          image: "🚀",
          category: "Hackathon",
          date: "February 2025",
          description: "Competitive programming and algorithm optimization mentorship",
          gallery: []
        }
      ]
    },
    {
      title: "Community Events",
      category: "Speaker Sessions & Conferences",
      events: [
        {
          title: "Speaker Session at Kendriya Vidyalaya Janakpuri",
          image: "/Gallery/Community Event/Speaker Session at Kendriya Vidyalaya janakpuri/Kv logo/kv logo.jpg",
          category: "Speaker Session",
          date: "July 2025",
          description: "Delivered a speaker session at Kendriya Vidyalaya Janakpuri, inspiring students in technology and innovation.",
          gallery: [
            "/Gallery/Community Event/Speaker Session at Kendriya Vidyalaya janakpuri/WhatsApp Image 2025-07-17 at 12.16.42_18ccf7a4.jpg",
            "/Gallery/Community Event/Speaker Session at Kendriya Vidyalaya janakpuri/WhatsApp Image 2025-07-17 at 12.16.42_aa46c8d4.jpg",
            "/Gallery/Community Event/Speaker Session at Kendriya Vidyalaya janakpuri/WhatsApp Image 2025-07-17 at 12.16.43_6a6d18ed.jpg",
            "/Gallery/Community Event/Speaker Session at Kendriya Vidyalaya janakpuri/WhatsApp Image 2025-07-17 at 12.16.43_81c3ecad.jpg",
            "/Gallery/Community Event/Speaker Session at Kendriya Vidyalaya janakpuri/WhatsApp Image 2025-07-17 at 12.16.45_068622ee.jpg",
            "/Gallery/Community Event/Speaker Session at Kendriya Vidyalaya janakpuri/WhatsApp Image 2025-07-17 at 12.16.46_7da34887.jpg"
          ]
        },
        {
          title: "India Digital Summit (IDS) 2025 at Aerocity, Delhi",
          image: "/Gallery/India Digital Summit (IDS) 2025 at Aerocity, Delhi/1737182035897.jpg",
          category: "Conference",
          date: "2025",
          description: "Attended India Digital Summit (IDS) 2025 at Aerocity, Delhi. Engaged with industry leaders and participated in digital innovation sessions.",
          gallery: [
            "/Gallery/India Digital Summit (IDS) 2025 at Aerocity, Delhi/1737182035897.jpg",
            "/Gallery/India Digital Summit (IDS) 2025 at Aerocity, Delhi/1737182036027.jpg",
            "/Gallery/India Digital Summit (IDS) 2025 at Aerocity, Delhi/1737182036098.jpg",
            "/Gallery/India Digital Summit (IDS) 2025 at Aerocity, Delhi/1737182036358.jpg",
            "/Gallery/India Digital Summit (IDS) 2025 at Aerocity, Delhi/1737182037341.jpg",
            "/Gallery/India Digital Summit (IDS) 2025 at Aerocity, Delhi/1737182037501.jpg",
            "/Gallery/India Digital Summit (IDS) 2025 at Aerocity, Delhi/1737182037640.jpg",
            "/Gallery/India Digital Summit (IDS) 2025 at Aerocity, Delhi/1737182037681.jpg",
            "/Gallery/India Digital Summit (IDS) 2025 at Aerocity, Delhi/1737182038394.jpg"
          ]
        }
      ]
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
                {/* Removed subtitle lines as requested */}
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

            {/* Achievements Section */}
            <div className="achievements-section">
              <h3 className="achievements-title">Key Achievements</h3>
              <div className="achievements-grid">
                {achievements.map((achievementGroup, groupIdx) => (
                  <div key={groupIdx} className="achievement-group">
                    <div className="achievement-group-header clickable" style={{cursor:'pointer'}} onClick={() => toggleAchievementsExpansion(groupIdx)}>
                      <div className="achievement-group-info">
                        <h4 className="achievement-group-title">{achievementGroup.title}</h4>
                        <span className="achievement-group-category">{achievementGroup.category}</span>
                      </div>
                      <span className="expand-indicator-achievements" style={{fontSize: '1.5rem', fontWeight: 'bold', marginLeft: '1rem'}}>
                        {expandedAchievements === groupIdx ? '-' : '+'}
                      </span>
                    </div>
                    <div className={`achievement-group-content${expandedAchievements === groupIdx ? ' expanded' : ''}`} style={{ display: expandedAchievements === groupIdx ? 'block' : 'none' }}>
                      {achievementGroup.title === 'Hackathon Mentors & Judges' ? (
                        <div className="mini-scrollable-content">
                          {achievementGroup.items.map((achievement, index) => (
                            <div key={index} className="achievement-content-leadership">
                              <div className="timeline-header-leadership">
                                <div className="position-info">
                                  <h3 className="position-title">{achievement.title}</h3>
                                  <h4 className="organization-name">{achievement.organization}</h4>
                                </div>
                                <div className="position-header-right">
                                  <span className="position-period">{achievement.year}</span>
                                </div>
                              </div>
                              <div className="position-expandable-content expanded">
                                <div className="achievement-bullets">
                                  {achievement.description.split('\n').map((point, pointIndex) => (
                                    <div key={pointIndex} className="achievement-bullet-leadership">
                                      {point}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        achievementGroup.items.map((achievement, index) => (
                          <div key={index} className="achievement-content-leadership">
                            <div className="timeline-header-leadership">
                              <div className="position-info">
                                <h3 className="position-title">{achievement.title}</h3>
                                <h4 className="organization-name">{achievement.organization}</h4>
                              </div>
                              <div className="position-header-right">
                                <span className="position-period">{achievement.year}</span>
                              </div>
                            </div>
                            <div className="position-expandable-content expanded">
                              <div className="achievement-bullets">
                                {achievement.description.split('\n').map((point, pointIndex) => (
                                  <div key={pointIndex} className="achievement-bullet-leadership">
                                    {point}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div className="certifications-section">
              <h3 className="certifications-title">Certifications</h3>
              <div className="certifications-grid">
                {certifications.map((certCategory, categoryIndex) => (
                  <div key={categoryIndex} className="certification-group">
                    <div className="certification-group-header clickable" style={{cursor:'pointer'}} onClick={() => toggleCertificationsExpansion(categoryIndex)}>
                      <div className="certification-group-info">
                        <h4 className="certification-group-title">{certCategory.title}</h4>
                        <span className="certification-group-category">{certCategory.category}</span>
                      </div>
                      <span className="expand-indicator-certifications" style={{fontSize: '1.5rem', fontWeight: 'bold', marginLeft: '1rem'}}>
                        {expandedCertifications === categoryIndex ? '-' : '+'}
                      </span>
                    </div>
                    <div className={`certification-group-content${expandedCertifications === categoryIndex ? ' expanded' : ''}`} style={{ display: expandedCertifications === categoryIndex ? 'block' : 'none' }}>
                      <div className="certification-items">
                        {certCategory.items.map((cert, index) => (
                          <div key={index} className="certification-content-leadership">
                            <div className="timeline-header-leadership">
                              <div className="position-info">
                                <h3 className="position-title">{cert.title}</h3>
                                <h4 className="organization-name">{cert.issuer}</h4>
                              </div>
                              <div className="position-header-right">
                                <span className="position-period">{cert.year}</span>
                              </div>
                            </div>
                            <div className="position-expandable-content expanded">
                              <div className="certification-details">
                                <div className="cert-skills-tags">
                                  {cert.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="cert-skill-tag">
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                                <div className="cert-links-section">
                                  <a 
                                    href={cert.certificateUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="cert-link-button view-cert-btn"
                                  >
                                    View Certificate
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Event Gallery Section */}
            <div className="event-gallery-section" ref={eventGalleryRef}>
              <h3 className="event-gallery-title">Event Gallery</h3>
              
              {/* Gallery Subsections in Boxes */}
              <div className="event-gallery-subsections">
                {eventGallery.map((subsection, subsectionIndex) => (
                  <motion.div
                    key={subsectionIndex}
                    className="event-gallery-box"
                    initial={{ opacity: 0, y: 30 }}
                    animate={eventGalleryInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: subsectionIndex * 0.2 }}
                  >
                    <div 
                      className="event-gallery-box-header clickable" 
                      onClick={() => toggleEventGalleryExpansion(subsectionIndex)}
                    >
                      <div className="event-gallery-box-info">
                        <h4 className="event-subsection-title">{subsection.title}</h4>
                        <span className="event-subsection-category">{subsection.category}</span>
                      </div>
                      <span className="expand-indicator-event-gallery">
                        {expandedEventGallery === subsectionIndex ? '−' : '+'}
                      </span>
                    </div>
                    
                    <div className={`event-gallery-content${expandedEventGallery === subsectionIndex ? ' expanded' : ''}`}>
                      {/* Event-wise Gallery Grid - Vertical Layout */}
                      <div className="event-wise-gallery-vertical">
                        {subsection.events.map((event, eventIndex) => {
                          const eventKey = `${subsectionIndex}-${eventIndex}`;
                          const hasGallery = event.gallery && event.gallery.length > 0;
                          
                          return (
                            <motion.div
                              key={eventKey}
                              className="event-item-card"
                              initial={{ opacity: 0, y: 20 }}
                              animate={eventGalleryInView ? { opacity: 1, y: 0 } : {}}
                              transition={{ duration: 0.5, delay: (subsectionIndex * 0.3) + (eventIndex * 0.1) }}
                              whileHover={{ 
                                scale: 1.02,
                                transition: { duration: 0.2 }
                              }}
                            >
                              {/* Event Header */}
                              <div className="event-item-header">
                                <div className="event-thumbnail">
                                  {event.image?.startsWith('/') ? (
                                    <img src={event.image} alt={event.title} className="event-thumbnail-image" />
                                  ) : (
                                    <span className="event-emoji-thumbnail">{event.image}</span>
                                  )}
                                </div>
                                <div className="event-meta">
                                  <h5 className="event-item-title">{event.title}</h5>
                                  <div className="event-badges">
                                    <span className="event-category-badge">{event.category}</span>
                                    {event.date && <span className="event-date-badge">{event.date}</span>}
                                  </div>
                                  {event.description && (
                                    <p className="event-description">{event.description}</p>
                                  )}
                                </div>
                              </div>
                              
                              {/* Gallery Section */}
                              {hasGallery && (
                                <div className="event-gallery-section-individual">
                                  <div 
                                    className="gallery-expand-button"
                                    onClick={() => toggleEventItemExpansion(eventKey)}
                                  >
                                    <span className="gallery-count">{event.gallery.length} Photos</span>
                                    <span className="gallery-expand-icon">
                                      {expandedEventItem === eventKey ? '▼' : '▶'}
                                    </span>
                                  </div>
                                  
                                  <div className={`event-photo-gallery ${expandedEventItem === eventKey ? 'expanded' : ''}`}>
                                    <div className="photo-grid">
                                      {event.gallery.map((photo, photoIndex) => (
                                        <motion.div
                                          key={photoIndex}
                                          className="photo-frame"
                                          initial={{ opacity: 0, scale: 0.8 }}
                                          animate={expandedEventItem === eventKey ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                          transition={{ 
                                            duration: 0.4, 
                                            delay: photoIndex * 0.1,
                                            ease: "easeOut"
                                          }}
                                          whileHover={{ 
                                            scale: 1.05,
                                            zIndex: 10,
                                            transition: { duration: 0.2 }
                                          }}
                                        >
                                          <div className="photo-container">
                                            <img 
                                              src={photo} 
                                              alt={`${event.title} - Photo ${photoIndex + 1}`}
                                              className="gallery-photo"
                                              loading="lazy"
                                            />
                                            <div className="photo-overlay">
                                              <div className="photo-info">
                                                <span className="photo-number">{photoIndex + 1}</span>
                                              </div>
                                            </div>
                                          </div>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              )}
                              
                              {/* No Gallery Message */}
                              {!hasGallery && (
                                <div className="no-gallery-message">
                                  <span className="no-gallery-text">More photos coming soon...</span>
                                </div>
                              )}
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

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
              <div className="contact-title-section">
                <motion.h2 
                  className="contact-title-main"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Get in Touch
                </motion.h2>
                <motion.p 
                  className="contact-subtitle"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Let's create something amazing together.
                </motion.p>
              </div>
            </div>

            <div className="contact-content-wrapper">
              {/* Contact Information */}
              <motion.div 
                className="contact-info-section"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="contact-info-title">Let's Connect</h3>
                <p className="contact-info-description">
                  Ready to collaborate on exciting projects or discuss innovative ideas? 
                  I'm always open to new opportunities and interesting conversations.
                </p>
                
                <div className="contact-info-grid">
                  <motion.div 
                    className="contact-info-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="contact-icon-wrapper">
                      <HiLocationMarker className="contact-icon" />
                    </div>
                    <div className="contact-info-content">
                      <h4>Location</h4>
                      <p>Noida, Uttar Pradesh, India</p>
                      <span className="contact-info-extra">Available for remote work</span>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="contact-info-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="contact-icon-wrapper">
                      <HiMail className="contact-icon" />
                    </div>
                    <div className="contact-info-content">
                      <h4>Email</h4>
                      <a href="mailto:jhasachin1307@gmail.com" className="contact-link">
                        jhasachin1307@gmail.com
                      </a>
                      <span className="contact-info-extra">Quick response guaranteed</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="contact-info-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.95 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="contact-icon-wrapper">
                      <HiPhone className="contact-icon" />
                    </div>
                    <div className="contact-info-content">
                      <h4>Contact</h4>
                      <a href="tel:+919650411734" className="contact-link">
                        +91 9650411734
                      </a>
                      <span className="contact-info-extra">Available on WhatsApp</span>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="contact-info-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="contact-icon-wrapper">
                      <FaLinkedin className="contact-icon" />
                    </div>
                    <div className="contact-info-content">
                      <h4>LinkedIn</h4>
                      <a href="https://linkedin.com/in/sachin-jha-" target="_blank" rel="noopener noreferrer" className="contact-link">
                        linkedin.com/in/sachin-jha-
                      </a>
                      <span className="contact-info-extra">Professional network</span>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="contact-info-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="contact-icon-wrapper">
                      <FaGithub className="contact-icon" />
                    </div>
                    <div className="contact-info-content">
                      <h4>GitHub</h4>
                      <a href="https://github.com/jhasachin02" target="_blank" rel="noopener noreferrer" className="contact-link">
                        github.com/jhasachin02
                      </a>
                      <span className="contact-info-extra">Code repositories</span>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="contact-info-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="contact-icon-wrapper">
                      <FaTwitter className="contact-icon" />
                    </div>
                    <div className="contact-info-content">
                      <h4>Twitter</h4>
                      <a href="https://twitter.com/sachin_jha02" target="_blank" rel="noopener noreferrer" className="contact-link">
                        @sachin_jha02
                      </a>
                      <span className="contact-info-extra">Tech discussions</span>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="contact-info-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="contact-icon-wrapper">
                      <FaDownload className="contact-icon" />
                    </div>
                    <div className="contact-info-content">
                      <h4>Resume</h4>
                      <a href="./Sachin Resume.pdf" download="Sachin_Jha_Resume.pdf" className="contact-link">
                        Download CV
                      </a>
                      <span className="contact-info-extra">Updated recently</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div 
                className="contact-form-section"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <form className="contact-form">
                  <h3 className="contact-form-title">Send a Message</h3>
                  <p className="contact-form-description">
                    Have a project in mind? Let's discuss how we can work together.
                  </p>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input type="text" id="name" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Your Email</label>
                      <input type="email" id="email" name="email" placeholder="yourname@example.com" required />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="Let's work together" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={6} 
                      placeholder="Tell me about your project or idea..."
                      required
                    ></textarea>
                  </div>
                  
                  <motion.button 
                    type="submit" 
                    className="btn btn-primary-glow contact-submit-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <HiMail className="btn-icon" />
                    Send Message
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

// Resume Modal Component
const ResumeModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="modal-overlay" style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.5)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      {/* Responsive modal styles for mobile */}
      <style>{`
        @media (max-width: 600px) {
          .resume-modal-content {
            padding: 1rem !important;
            max-width: 98vw !important;
            width: 98vw !important;
            font-size: 1rem !important;
          }
          .resume-preview-container {
            height: 38vh !important;
            min-height: 180px !important;
            max-height: 320px !important;
            overflow: auto !important;
          }
          .resume-modal-content h2 {
            font-size: 1.2rem !important;
          }
          .resume-modal-content p {
            font-size: 1rem !important;
          }
          .btn {
            font-size: 1rem !important;
            padding: 0.7rem 1.2rem !important;
          }
          .resume-preview-container iframe {
            min-height: 180px !important;
            height: 100% !important;
            width: 100% !important;
            display: block !important;
          }
        }
      `}</style>
      <div className="modal-content resume-modal-content" style={{
        background: 'rgba(37, 99, 235, 0.7)', // theme blue with transparency
        borderRadius: '12px',
        padding: '2rem',
        maxWidth: '600px',
        width: '90vw',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
        position: 'relative',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        {/* Close Icon in top-right corner */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'transparent',
            border: 'none',
            fontSize: '2.2rem',
            color: '#e11d48', // vibrant red
            cursor: 'pointer',
            zIndex: 10,
            transition: 'color 0.2s',
            filter: 'drop-shadow(0 2px 6px rgba(225,29,72,0.3))'
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#be123c')}
          onMouseLeave={e => (e.currentTarget.style.color = '#e11d48')}
        >
          <span style={{fontWeight: 'bold', textShadow: '0 2px 8px rgba(225,29,72,0.3)'}}>×</span>
        </button>
        <h2 style={{ textAlign: 'center', width: '100%', marginBottom: '0.5rem' }}>Resume Preview</h2>
        <p style={{ textAlign: 'center', width: '100%', marginBottom: '1rem' }}>View or download my resume below.</p>
        <div className="resume-preview-container" style={{height: '60vh', width: '100%', marginBottom: '1rem'}}>
          <iframe
            src="./Sachin Resume.pdf"
            title="Resume Preview"
            width="100%"
            height="100%"
            style={{ border: '1px solid #ccc', borderRadius: '8px' }}
            onError={(e) => {
              const iframe = e.target as HTMLIFrameElement;
              iframe.style.display = 'none';
              const fallback = document.getElementById('resume-fallback');
              if (fallback) fallback.style.display = 'block';
            }}
          />
          <div id="resume-fallback" style={{display: 'none', color: 'red', textAlign: 'center', marginTop: '2rem', width: '100%'}}>
            <span style={{ display: 'block', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.5rem' }}>PDF preview failed to load.</span>
            <span className="mobile-pdf-fallback" style={{display: 'block', marginTop: '1rem', color: '#333', fontSize: '1rem'}}>
              {window.innerWidth <= 600 ? (
                <>
                  PDF preview is not supported on some mobile browsers.<br />
                  <strong>Please use the button below to download and view the resume.</strong>
                </>
              ) : null}
            </span>
            <a href="./Sachin Resume.pdf" download="Sachin Resume.pdf" style={{color: '#2563eb', textDecoration: 'underline', fontWeight: 'bold', fontSize: '1.1rem', display: 'inline-block', marginTop: '1rem'}}>Download Resume</a>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem' }}>
          <a
            href="./Sachin Resume.pdf"
            download="Sachin Resume.pdf"
            className="btn btn-primary-glow"
            style={{
              fontSize: '0.95rem',
              padding: '0.5rem 1.2rem',
              minWidth: '120px',
              textAlign: 'center',
              margin: 0,
              borderRadius: '8px'
            }}
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default SinglePagePortfolio;