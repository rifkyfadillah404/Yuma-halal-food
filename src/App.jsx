import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import About from './components/About'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = isMobile ? 80 : 0
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header isMobile={isMobile} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <Stats />
      <About />
      <Services />
      <Clients />
      <Contact />
      <Footer />
      
      {isMobile && <BottomNav activeSection={activeSection} scrollToSection={scrollToSection} />}
      {isMobile && <div className="h-20"></div>}
    </div>
  )
}

export default App
