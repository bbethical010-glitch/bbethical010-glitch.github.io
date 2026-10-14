import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { CONFIG, trackInstallClick } from '../constants/config'

interface NavbarProps {
  isHidden?: boolean
  isStuck?: boolean
}

export function Navbar({ isHidden = false, isStuck = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

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

  // Clear any legacy glitch/acid theme from client storage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('theme-glitch')
      document.documentElement.classList.remove('theme-glitch')
    }
  }, [])

  const handleScroll = (id: string) => {
    setIsOpen(false)
    if (location.pathname === '/') {
      if (id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    } else {
      navigate('/', { state: { scrollTo: id } })
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
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-3 cursor-pointer group select-none"
              data-cursor
              onClick={(e) => {
                e.preventDefault()
                handleScroll('hero')
              }}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-surface border-2 border-purple p-1 flex items-center justify-center group-hover:rotate-6 transition-transform shadow-[2px_2px_0px_#f4c300]">
                <picture>
                  <source srcSet="/logo.webp" type="image/webp" />
                  <img src="/logo.webp" alt="Meme Capsule Icon" className="w-full h-full object-contain" width="128" height="128" />
                </picture>
              </div>
              <span className="font-anton text-xl sm:text-2xl md:text-3xl text-purple uppercase tracking-wider">
                Meme Capsule
              </span>
              <span className="font-anton text-[10px] sm:text-xs text-gold bg-surface px-1.5 py-0.5 border border-gold">
                v1.0
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a
                href="/"
                onClick={(e) => { e.preventDefault(); handleScroll('hero') }}
                className="nav-link-anim font-oswald text-text uppercase font-semibold hover:text-gold transition-colors"
                data-cursor
              >
                <span>Home</span><span className="alt">Home</span>
              </a>
              <a
                href="/#features"
                onClick={(e) => { e.preventDefault(); handleScroll('features') }}
                className="nav-link-anim font-oswald text-text uppercase font-semibold hover:text-gold transition-colors"
                data-cursor
              >
                <span>Features</span><span className="alt">Features</span>
              </a>
              <Link
                to="/how-it-works"
                onClick={() => setIsOpen(false)}
                className="nav-link-anim font-oswald text-text uppercase font-semibold hover:text-gold transition-colors"
                data-cursor
              >
                <span>How It Works</span><span className="alt">How It Works</span>
              </Link>
              <Link
                to="/faq"
                onClick={() => setIsOpen(false)}
                className="nav-link-anim font-oswald text-text uppercase font-semibold hover:text-gold transition-colors"
                data-cursor
              >
                <span>FAQ</span><span className="alt">FAQ</span>
              </Link>
              <a
                href="/#contact"
                onClick={(e) => { e.preventDefault(); handleScroll('contact') }}
                className="nav-link-anim font-oswald text-text uppercase font-semibold hover:text-gold transition-colors"
                data-cursor
              >
                <span>Contact</span><span className="alt">Contact</span>
              </a>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="nav-link-anim font-oswald text-text uppercase font-semibold hover:text-gold transition-colors"
                data-cursor
              >
                <span>About</span><span className="alt">About</span>
              </Link>
              <Link
                to="/editorial"
                onClick={() => setIsOpen(false)}
                className="nav-link-anim font-oswald text-text uppercase font-semibold hover:text-gold transition-colors"
                data-cursor
              >
                <span>Editorial</span><span className="alt">Editorial</span>
              </Link>

              <a
                href={CONFIG.getPlayStoreUrl('navbar_desktop')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackInstallClick('navbar_desktop')}
                className="neo-button-primary px-6 py-2 inline-block ml-2"
                data-cursor
              >
                Get App
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center">
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
              <a
                href="/"
                onClick={(e) => { e.preventDefault(); handleScroll('hero') }}
                className="font-oswald text-text text-left uppercase font-bold text-lg p-3 border-b border-purple/30 hover:bg-surface hover:text-gold transition-colors"
              >
                Home
              </a>
              <a
                href="/#features"
                onClick={(e) => { e.preventDefault(); handleScroll('features') }}
                className="font-oswald text-text text-left uppercase font-bold text-lg p-3 border-b border-purple/30 hover:bg-surface hover:text-gold transition-colors"
              >
                Features
              </a>
              <Link
                to="/how-it-works"
                onClick={() => setIsOpen(false)}
                className="font-oswald text-text text-left uppercase font-bold text-lg p-3 border-b border-purple/30 hover:bg-surface hover:text-gold transition-colors"
              >
                How It Works
              </Link>
              <Link
                to="/faq"
                onClick={() => setIsOpen(false)}
                className="font-oswald text-text text-left uppercase font-bold text-lg p-3 border-b border-purple/30 hover:bg-surface hover:text-gold transition-colors"
              >
                FAQ
              </Link>
              <a
                href="/#contact"
                onClick={(e) => { e.preventDefault(); handleScroll('contact') }}
                className="font-oswald text-text text-left uppercase font-bold text-lg p-3 border-b border-purple/30 hover:bg-surface hover:text-gold transition-colors"
              >
                Contact
              </a>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="font-oswald text-text text-left uppercase font-bold text-lg p-3 border-b border-purple/30 hover:bg-surface hover:text-gold transition-colors"
              >
                About
              </Link>
              <Link
                to="/editorial"
                onClick={() => setIsOpen(false)}
                className="font-oswald text-text text-left uppercase font-bold text-lg p-3 border-b border-purple/30 hover:bg-surface hover:text-gold transition-colors"
              >
                Editorial
              </Link>
              <div className="pt-4 pb-2">
                <a
                  href={CONFIG.getPlayStoreUrl('navbar_mobile')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-button-primary w-full block text-center py-3 text-lg"
                  onClick={() => {
                    trackInstallClick('navbar_mobile')
                    setIsOpen(false)
                  }}
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
