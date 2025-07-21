import React from 'react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { name: 'About', label: 'About' },
    { name: 'Resume', label: 'Resume' },
    { name: 'Portfolio', label: 'Portfolio' },
    { name: 'Contact', label: 'Contact' }
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li key={item.name} className="navbar-item">
            <button
              className={`navbar-link ${activeSection === item.name ? 'active' : ''}`}
              onClick={() => setActiveSection(item.name)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
