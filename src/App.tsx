import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('About')

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'About':
        return <About />
      case 'Resume':
        return <Resume />
      case 'Portfolio':
        return <Portfolio />
      case 'Contact':
        return <Contact />
      default:
        return <About />
    }
  }

  return (
    <main className="dark-theme">
      <Sidebar />
      
      <div className="main-content">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        {renderActiveSection()}
      </div>
    </main>
  )
}

export default App
