import { Link } from 'react-router-dom'
import { CONFIG } from '../constants/config'

export function Footer() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }

  return (
    <footer className="bg-surface border-t-4 border-purple py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="flex flex-col items-start">
            <span className="font-anton text-3xl text-purple uppercase tracking-wider mb-2">Meme Capsule</span>
            <span className="font-oswald text-muted text-sm mb-6">{CONFIG.tagline}</span>
            <a href={CONFIG.playStoreUrl} target="_blank" rel="noopener noreferrer" className="neo-button-primary px-6 py-2 text-sm">
              Get App
            </a>
          </div>

          <div className="flex flex-col">
            <span className="font-anton text-xl text-text mb-4 uppercase">Links</span>
            <div className="flex flex-col gap-2 font-oswald text-sm">
              <Link to="/" onClick={() => handleScroll('hero')} className="text-muted hover:text-gold uppercase w-fit">Home</Link>
              <button onClick={() => handleScroll('features')} className="text-muted hover:text-gold uppercase w-fit text-left">Features</button>
              <button onClick={() => handleScroll('faq')} className="text-muted hover:text-gold uppercase w-fit text-left">FAQ</button>
              <button onClick={() => handleScroll('contact')} className="text-muted hover:text-gold uppercase w-fit text-left">Contact</button>
              <Link to="/privacy" className="text-muted hover:text-gold uppercase w-fit mt-2 font-bold">Privacy Policy</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-oswald text-muted text-xs uppercase tracking-widest mb-4">Built With</span>
            <ul className="flex flex-col gap-2 font-oswald text-sm text-text">
              <li>React 18</li>
              <li>Vite & TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Cloudflare Workers</li>
              <li>GitHub Pages</li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-surfaceHigh pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="font-oswald text-muted text-xs">
            © {new Date().getFullYear()} Meme Capsule
          </div>
          <div className="font-oswald text-purple text-xs font-bold uppercase tracking-wide">
            Made with chaos
          </div>
        </div>
      </div>
    </footer>
  )
}
