import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#131313] border-b-4 border-purple">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <span className="font-anton text-3xl text-purple uppercase tracking-wider">Meme Capsule</span>
            <span className="font-anton text-sm text-gold bg-surface px-2 py-0.5 border border-gold">v1.0</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-oswald text-text hover:text-gold uppercase font-semibold transition-colors">Home</button>
            <button onClick={() => handleScroll('features')} className="font-oswald text-text hover:text-gold uppercase font-semibold transition-colors">Features</button>
            <button onClick={() => handleScroll('faq')} className="font-oswald text-text hover:text-gold uppercase font-semibold transition-colors">FAQ</button>
            <button onClick={() => handleScroll('contact')} className="font-oswald text-text hover:text-gold uppercase font-semibold transition-colors">Contact</button>
            <a href="https://play.google.com/store/apps/details?id=com.meme.capsule" target="_blank" rel="noopener noreferrer" className="neo-button-primary px-6 py-2 ml-4 inline-block">
              Get App
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gold">
              {isOpen ? <X size={32} strokeWidth={3} /> : <Menu size={32} strokeWidth={3} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-bg border-b-2 border-purple">
          <div className="flex flex-col">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-oswald text-text text-left uppercase font-semibold p-4 border-b border-purple hover:bg-surface">Home</button>
            <button onClick={() => handleScroll('features')} className="font-oswald text-text text-left uppercase font-semibold p-4 border-b border-purple hover:bg-surface">Features</button>
            <button onClick={() => handleScroll('faq')} className="font-oswald text-text text-left uppercase font-semibold p-4 border-b border-purple hover:bg-surface">FAQ</button>
            <button onClick={() => handleScroll('contact')} className="font-oswald text-text text-left uppercase font-semibold p-4 border-b border-purple hover:bg-surface">Contact</button>
            <div className="p-4">
              <a href="https://play.google.com/store/apps/details?id=com.meme.capsule" target="_blank" rel="noopener noreferrer" className="neo-button-primary w-full block text-center py-3">
                Get App
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
