import React, { useState } from 'react';
import { Eye, ChevronDown } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      title: 'Amazon Clone',
      category: 'Web development',
      image: 'https://via.placeholder.com/300x200?text=Amazon+Clone',
      link: 'https://amazon-frontend-clone01.netlify.app/'
    },
    {
      title: 'Edgy',
      category: 'Web development',
      image: 'https://via.placeholder.com/300x200?text=Edgy+Media',
      link: 'https://edgy-media.vercel.app/'
    },
    {
      title: 'Adventure Website',
      category: 'Web design',
      image: 'https://via.placeholder.com/300x200?text=Adventure+Website',
      link: 'https://simple-tourism-organization.netlify.app/'
    },
    {
      title: 'Churn Prediction',
      category: 'Web development',
      image: 'https://via.placeholder.com/300x200?text=Churn+Prediction',
      link: 'https://github.com/jhasachin02/Churn-Prediction'
    },
    {
      title: 'Tic Tac Toe',
      category: 'Applications',
      image: 'https://via.placeholder.com/300x200?text=Tic+Tac+Toe',
      link: 'https://jhasachin02.github.io/TicTacToe/'
    },
    {
      title: 'Library Management System',
      category: 'Web design',
      image: 'https://via.placeholder.com/300x200?text=Library+Management',
      link: 'https://github.com/jhasachin02/library-management-system'
    },
    {
      title: 'Spotify',
      category: 'Web development',
      image: 'https://via.placeholder.com/300x200?text=Spotify+Clone',
      link: 'https://open.spotify.com/'
    },
    {
      title: 'Calculator',
      category: 'Applications',
      image: 'https://via.placeholder.com/300x200?text=Calculator',
      link: 'https://jhasachin02.github.io/calculator/'
    },
    {
      title: 'Bank Management System',
      category: 'Web development',
      image: 'https://via.placeholder.com/300x200?text=Bank+Management',
      link: 'https://github.com/jhasachin02/BankManagingSystem'
    }
  ];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const filters = ['All', 'Web design', 'Applications', 'Web development'];

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
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

        <div className="filter-select-box">
          <button className="filter-select" onClick={() => {}}>
            <div className="select-value">{selectedFilter}</div>
            <div className="select-icon">
              <ChevronDown size={16} />
            </div>
          </button>
        </div>

        <ul className="project-list">
          {filteredProjects.map((project, index) => (
            <li key={index} className="project-item active">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <Eye size={16} />
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
