import { Menu, X } from 'lucide-react'
import logoImg from '../assets/logo.png'

interface NavbarProps {
  isHidden?: boolean
  isStuck?: boolean
  isMenuOpen?: boolean
  onToggleMenu?: () => void
}

export function Navbar({ isHidden = false, isStuck = false, isMenuOpen = false, onToggleMenu = () => {} }: NavbarProps) {
  const handleScroll = (id: string) => {
    onToggleMenu()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-transitioning bg-[#131313]/90 backdrop-blur-md border-b-2 border-purple/40 ${isHidden ? 'nav-hidden' : ''} ${isStuck ? 'nav-stuck shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            data-cursor
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 bg-surface border-2 border-purple p-1 flex items-center justify-center group-hover:rotate-6 transition-transform">
              <img src={logoImg} alt="Meme Capsule Icon" className="w-full h-full object-contain" />
            </div>
            <span className="font-anton text-2xl sm:text-3xl text-purple uppercase tracking-wider">Meme Capsule</span>
            <span className="font-anton text-xs text-gold bg-surface px-2 py-0.5 border border-gold">v1.0</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="nav-link-anim font-oswald text-text uppercase font-semibold" data-cursor>
              <span>Home</span><span className="alt">Home</span>
            </button>
            <button onClick={() => handleScroll('features')} className="nav-link-anim font-oswald text-text uppercase font-semibold" data-cursor>
              <span>Features</span><span className="alt">Features</span>
            </button>
            <button onClick={() => handleScroll('faq')} className="nav-link-anim font-oswald text-text uppercase font-semibold" data-cursor>
              <span>FAQ</span><span className="alt">FAQ</span>
            </button>
            <button onClick={() => handleScroll('contact')} className="nav-link-anim font-oswald text-text uppercase font-semibold" data-cursor>
              <span>Contact</span><span className="alt">Contact</span>
            </button>
            <a href="https://play.google.com/store/apps/details?id=com.meme.capsule" target="_blank" rel="noopener noreferrer" className="neo-button-primary px-6 py-2 ml-4 inline-block" data-cursor>
              Get App
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={onToggleMenu} className="text-gold" data-cursor>
              {isMenuOpen ? <X size={32} strokeWidth={3} /> : <Menu size={32} strokeWidth={3} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden mobile-menu-panel bg-bg border-b-2 border-purple ${isMenuOpen ? 'open' : ''}`}>
        <div className="flex flex-col">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-oswald text-text text-left uppercase font-semibold p-4 border-b border-purple hover:bg-surface" data-cursor>Home</button>
          <button onClick={() => handleScroll('features')} className="font-oswald text-text text-left uppercase font-semibold p-4 border-b border-purple hover:bg-surface" data-cursor>Features</button>
          <button onClick={() => handleScroll('faq')} className="font-oswald text-text text-left uppercase font-semibold p-4 border-b border-purple hover:bg-surface" data-cursor>FAQ</button>
          <button onClick={() => handleScroll('contact')} className="font-oswald text-text text-left uppercase font-semibold p-4 border-b border-purple hover:bg-surface" data-cursor>Contact</button>
          <div className="p-4">
            <a href="https://play.google.com/store/apps/details?id=com.meme.capsule" target="_blank" rel="noopener noreferrer" className="neo-button-primary w-full block text-center py-3" data-cursor>
              Get App
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
