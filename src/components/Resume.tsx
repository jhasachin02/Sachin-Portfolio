import React from 'react';
import { BookOpen, Code2, Database, Palette, Globe, Smartphone } from 'lucide-react';

const Resume: React.FC = () => {
  const education = [
    {
      title: 'Bachelor of Technology in Computer Science',
      institution: 'Darbhanga College of Engineering',
      period: '2020 - 2024',
      description: 'Specialized in software development, data structures, algorithms, and modern web technologies.'
    },
    {
      title: 'Higher Secondary Education',
      institution: 'Kendriya Vidyalaya',
      period: '2018 - 2020',
      description: 'Focused on Mathematics, Physics, and Computer Science with distinction.'
    }
  ];

  const experience = [
    {
      title: 'Frontend Developer',
      company: 'Freelance',
      period: '2023 - Present',
      description: 'Developing responsive web applications using React, TypeScript, and modern CSS frameworks. Built multiple client projects with focus on performance and user experience.'
    },
    {
      title: 'Software Development Intern',
      company: 'Tech Startup',
      period: '2023 - 2023',
      description: 'Worked on full-stack development projects using React.js and Node.js. Contributed to the development of web applications and gained experience in agile methodologies.'
    }
  ];

  const skills = [
    { name: 'HTML/CSS', level: 90, icon: <Globe size={20} /> },
    { name: 'JavaScript', level: 85, icon: <Code2 size={20} /> },
    { name: 'React.js', level: 90, icon: <Code2 size={20} /> },
    { name: 'TypeScript', level: 80, icon: <Code2 size={20} /> },
    { name: 'Node.js', level: 75, icon: <Database size={20} /> },
    { name: 'Python', level: 80, icon: <Code2 size={20} /> },
    { name: 'UI/UX Design', level: 70, icon: <Palette size={20} /> },
    { name: 'Mobile Development', level: 65, icon: <Smartphone size={20} /> }
  ];

  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOpen size={24} />
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {education.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.period}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOpen size={24} />
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {experience.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.period}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          {skills.map((skill, index) => (
            <li key={index} className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.level}>{skill.level}%</data>
              </div>

              <div className="skill-progress-bg">
                <div 
                  className="skill-progress-fill" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Resume;
