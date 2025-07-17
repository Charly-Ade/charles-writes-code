import { useState, useEffect } from "react"
import { ThemeToggle } from "./theme-toggle"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-smooth ${
      isScrolled 
        ? 'glass shadow-elegant' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-display font-bold text-xl text-gradient">
            Charles Nwobodo
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="transition-smooth hover:text-primary"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="transition-smooth hover:text-primary"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="transition-smooth hover:text-primary"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('writing')}
              className="transition-smooth hover:text-primary"
            >
              Writing
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="transition-smooth hover:text-primary"
            >
              Contact
            </button>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}