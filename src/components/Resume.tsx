const Resume = () => {
  const education = [
    {
      title: 'JSS Academy of Technical Education Noida',
      period: '2021 — 2025',
      description: "I'm Pursuing Bachelor of Technology at JSS Academy of Technical Education Noida."
    },
    {
      title: 'Kendriya Vidyalaya',
      period: '2019 — 2021',
      description: 'I completed my class 12th from Kendriya Vidyalaya Kamla Nehru Nagar Ghaziabad Uttar Pradesh. I got 94.5% in my boards in class 12th.'
    },
    {
      title: 'Kendriya Vidyalaya',
      period: '2009 — 2019',
      description: 'I completed my class 10th from Kendriya Vidyalaya Kamla Nehru Nagar Ghaziabad Uttar Pradesh. I got 91.1% in my boards in class 10th.'
    }
  ]

  const experience = [
    {
      title: 'Chair Person',
      period: 'MAY 2024 — Present',
      description: 'As a Chairperson at IEEE JSSATEN, my leadership extends to steering a dynamic team towards innovation in technology, fostering an environment where cutting-edge ideas blossom.'
    },
    {
      title: 'Core Lead',
      period: 'MAY 2024 — Present',
      description: 'As the Core Lead at StarkSeek, I play a pivotal role in shaping our initiatives, driving innovation, and fostering collaboration between academia and industry to create opportunities for tech enthusiasts.'
    },
    {
      title: 'App Developer',
      period: 'JAN 2024 — MAY 2024',
      description: "Developed and implemented innovative applications as an App Developer at IEEE Yesist'24, enhancing user experience and optimizing performance for a global audience in a highly collaborative and dynamic environment."
    },
    {
      title: 'SDE Intern',
      period: 'Dec 2023 — June 2024',
      description: 'As an SDE Intern at Nimbus Adcom Pvt Ltd. I had the opportunity to work on innovative projects, applying modern design principles and cutting-edge technologies to boost user engagement and client satisfaction. I managed full-stack development, contributing to both the front-end and back-end, ensuring seamless project delivery and impactful results.'
    }
  ]

  const skills = [
    { name: 'Web design, App Development, Graphic design', percentage: 90 },
    { name: 'DSA', percentage: 70 },
    { name: 'C++', percentage: 90 },
    { name: 'Java', percentage: 50 }
  ]

  return (
    <article className="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Education Section */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
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

      {/* Experience Section */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
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

      {/* Skills Section */}
      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          {skills.map((skill, index) => (
            <li key={index} className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.percentage}>{skill.percentage}%</data>
              </div>

              <div className="skill-progress-bg">
                <div 
                  className="skill-progress-fill" 
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Download Resume Section */}
      <section className="Download Resume">
        <div className="Download Resume">
          <li>
            <a 
              href="https://drive.google.com/file/d/1TP_guYeSsV9pSaLflqkcriPObBXTizmE/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </li>
        </div>
      </section>
    </article>
  )
}

export default Resume
