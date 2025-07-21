import { useState } from 'react'

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [selectOpen, setSelectOpen] = useState(false)

  const filters = ['All', 'Web design', 'Applications', 'Web development']

  const projects = [
    {
      title: 'Amazon Clone',
      category: 'Web development',
      image: '/assets/images/amazon.jpg',
      link: 'https://amazon-frontend-clone01.netlify.app/'
    },
    {
      title: 'Edgy',
      category: 'Web development',
      image: '/assets/images/edgy.png',
      link: 'https://edgy-media.vercel.app/'
    },
    {
      title: 'Adventure Website',
      category: 'Web design',
      image: '/assets/images/adventure.png',
      link: 'https://simple-tourism-organization.netlify.app/'
    },
    {
      title: 'Churn Prediction',
      category: 'Web development',
      image: '/assets/images/churn.jpeg',
      link: 'https://github.com/jhasachin02/Churn-Prediction'
    },
    {
      title: 'Tic Tac Toe',
      category: 'Applications',
      image: '/assets/images/tic-tac.png',
      link: 'https://jhasachin02.github.io/TicTacToe/'
    },
    {
      title: 'Library Management System',
      category: 'Web design',
      image: '/assets/images/lms.png',
      link: 'https://github.com/jhasachin02/library-management-system'
    },
    {
      title: 'Spotify',
      category: 'Web development',
      image: '/assets/images/project2.png',
      link: 'https://open.spotify.com/'
    },
    {
      title: 'Calculator',
      category: 'Applications',
      image: '/assets/images/calculator.png',
      link: 'https://jhasachin02.github.io/calculator/'
    },
    {
      title: 'Bank Management System',
      category: 'Web development',
      image: '/assets/images/project1.png',
      link: 'https://github.com/jhasachin02/BankManagingSystem'
    }
  ]

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter)

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter)
    setSelectOpen(false)
  }

  return (
    <article className="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {/* Desktop Filter Buttons */}
        <ul className="filter-list">
          {filters.map((filter) => (
            <li key={filter} className="filter-item">
              <button 
                className={selectedFilter === filter ? 'active' : ''}
                onClick={() => handleFilterChange(filter)}
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Filter Select */}
        <div className="filter-select-box">
          <button 
            className={`filter-select ${selectOpen ? 'active' : ''}`}
            onClick={() => setSelectOpen(!selectOpen)}
          >
            <div className="select-value">{selectedFilter}</div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          {selectOpen && (
            <ul className="select-list">
              {filters.map((filter) => (
                <li key={filter} className="select-item">
                  <button onClick={() => handleFilterChange(filter)}>
                    {filter}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Project List */}
        <ul className="project-list">
          {filteredProjects.map((project, index) => (
            <li key={index} className="project-item active">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    loading="lazy" 
                  />
                </figure>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default Portfolio
