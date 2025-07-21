interface NavbarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const navItems = ['About', 'Resume', 'Portfolio', 'Contact']

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li key={item} className="navbar-item">
            <button
              className={`navbar-link ${activeSection === item ? 'active' : ''}`}
              onClick={() => setActiveSection(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
