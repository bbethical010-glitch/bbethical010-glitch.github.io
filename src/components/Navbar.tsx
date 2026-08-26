import { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import logoImg from '../assets/logo.png'

interface NavbarProps {
  isHidden?: boolean
  isStuck?: boolean
}

export function Navbar({ isHidden = false, isStuck = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isGlitch, setIsGlitch] = useState(false)

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  // Initialize glitch state from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('theme-glitch')
    if (saved === 'true') {
      setIsGlitch(true)
      document.documentElement.classList.add('theme-glitch')
    }
  }, [])

  const toggleGlitch = () => {
    const nextState = !isGlitch
    setIsGlitch(nextState)
    if (nextState) {
      document.documentElement.classList.add('theme-glitch')
      localStorage.setItem('theme-glitch', 'true')
    } else {
      document.documentElement.classList.remove('theme-glitch')
      localStorage.setItem('theme-glitch', 'false')
    }
  }

  const handleScroll = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 bg-[#131313]/95 backdrop-blur-md border-b-2 border-purple/60 ${
          isHidden && !isOpen ? '-translate-y-full' : 'translate-y-0'
        } ${isStuck ? 'shadow-[0_4px_20px_rgba(0,0,0,0.8)]' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Brand Logo & Title */}
            <div 
              className="flex items-center gap-2 sm:gap-3 cursor-pointer group select-none" 
              data-cursor
              onClick={() => {
                setIsOpen(false)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-surface border-2 border-purple p-1 flex items-center justify-center group-hover:rotate-6 transition-transform shadow-[2px_2px_0px_#f4c300]">
                <img src={logoImg} alt="Meme Capsule Icon" className="w-full h-full object-contain" width="128" height="128" />
              </div>
              <span className="font-anton text-xl sm:text-2xl md:text-3xl text-purple uppercase tracking-wider">
                Meme Capsule
              </span>
              <span className="font-anton text-[10px] sm:text-xs text-gold bg-surface px-1.5 py-0.5 border border-gold">
                v1.0
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <button 
                onClick={() => handleScroll('hero')} 
                className="nav-link-anim font-oswald text-text uppercase font-semibold hover:text-gold transition-colors" 
                data-cursor
              >
                <span>Home</span><span className="alt">Home</span>
              </button>
              <button 
                onClick={() => handleScroll('features')} 
                className="nav-link-anim font-oswald text-text uppercase font-semibold hover:text-gold transition-colors" 
                data-cursor
              >
                <span>Features</span><span className="alt">Features</span>
              </button>
              <button 
                onClick={() => handleScroll('faq')} 
                className="nav-link-anim font-oswald text-text uppercase font-semibold hover:text-gold transition-colors" 
                data-cursor
              >
                <span>FAQ</span><span className="alt">FAQ</span>
              </button>
              <button 
                onClick={() => handleScroll('contact')} 
                className="nav-link-anim font-oswald text-text uppercase font-semibold hover:text-gold transition-colors" 
                data-cursor
              >
                <span>Contact</span><span className="alt">Contact</span>
              </button>

              {/* Glitch Toggle (Desktop) */}
              <button 
                onClick={toggleGlitch}
                className={`flex items-center gap-2 font-oswald uppercase font-bold text-xs lg:text-sm px-3 py-1.5 border-2 transition-colors ${
                  isGlitch 
                    ? 'border-pink text-pink bg-pink/10 shadow-[2px_2px_0px_#dd0061]' 
                    : 'border-purple/50 text-purple hover:border-gold hover:text-gold hover:bg-surface'
                }`}
                data-cursor
                title="Toggle Cyberpunk Glitch Mode"
              >
                <Zap size={16} className={isGlitch ? 'animate-pulse' : ''} />
                <span>{isGlitch ? 'Acid ON' : 'Acid OFF'}</span>
              </button>

              <a 
                href="https://play.google.com/store/apps/details?id=com.meme.capsule" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="neo-button-primary px-6 py-2 inline-block ml-2" 
                data-cursor
              >
                Get App
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center gap-3">
              {/* Glitch Toggle (Mobile) */}
              <button 
                onClick={toggleGlitch}
                className={`p-1.5 sm:p-2 border-2 transition-colors ${
                  isGlitch 
                    ? 'border-pink text-pink bg-pink/10 shadow-[2px_2px_0px_#dd0061]' 
                    : 'border-purple/50 text-purple bg-surface'
                }`}
                aria-label="Toggle Glitch Mode"
                data-cursor
              >
                <Zap size={20} className={isGlitch ? 'animate-pulse' : ''} />
              </button>

              {/* Mobile Hamburger Toggle Button */}
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-gold p-1.5 sm:p-2 border border-purple/40 bg-surface focus:outline-none" 
                aria-label="Toggle Menu"
                data-cursor
              >
                {isOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown Drawer */}
        {isOpen && (
          <div className="md:hidden bg-[#131313] border-t-2 border-b-4 border-purple shadow-2xl animate-fadeIn">
            <div className="flex flex-col p-4 space-y-2">
              <button 
                onClick={() => handleScroll('hero')} 
                className="font-oswald text-text text-left uppercase font-bold text-lg p-3 border-b border-purple/30 hover:bg-surface hover:text-gold transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => handleScroll('features')} 
                className="font-oswald text-text text-left uppercase font-bold text-lg p-3 border-b border-purple/30 hover:bg-surface hover:text-gold transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => handleScroll('faq')} 
                className="font-oswald text-text text-left uppercase font-bold text-lg p-3 border-b border-purple/30 hover:bg-surface hover:text-gold transition-colors"
              >
                FAQ
              </button>
              <button 
                onClick={() => handleScroll('contact')} 
                className="font-oswald text-text text-left uppercase font-bold text-lg p-3 border-b border-purple/30 hover:bg-surface hover:text-gold transition-colors"
              >
                Contact
              </button>
              <div className="pt-4 pb-2">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.meme.capsule" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="neo-button-primary w-full block text-center py-3 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Get App
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Backdrop overlay for mobile menu */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
