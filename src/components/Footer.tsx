import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CONFIG, trackInstallClick } from '../constants/config'

export function Footer() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleScroll = (id: string) => {
    if (location.pathname === '/') {
      if (id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        const element = document.getElementById(id)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
        else window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }

  return (
    <footer className="bg-surface border-t border-purple/20 py-12 px-4 relative" style={{ background: 'linear-gradient(transparent, rgba(19,19,19,0.95) 40%, rgba(28,27,27,1))' }}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col items-start" data-rv="up">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault()
                handleScroll('hero')
              }}
              className="font-anton text-3xl text-purple uppercase tracking-wider mb-2"
              data-cursor
            >
              Meme Capsule
            </Link>
            <span className="font-oswald text-muted text-sm mb-6">{CONFIG.tagline}</span>
            <a
              href={CONFIG.getPlayStoreUrl('footer')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackInstallClick('footer')}
              className="neo-button-primary px-6 py-2 text-sm"
              data-cursor
            >
              Get App
            </a>
          </div>
          <div className="flex flex-col" data-rv="up" style={{ transitionDelay: '100ms' }}>
            <span className="font-anton text-xl text-text mb-4 uppercase">Links</span>
            <div className="flex flex-col gap-2 font-oswald text-sm">
              <a href="/" onClick={(e) => { e.preventDefault(); handleScroll('hero') }} className="text-muted hover:text-gold uppercase w-fit" data-cursor>Home</a>
              <a href="/#features" onClick={(e) => { e.preventDefault(); handleScroll('features') }} className="text-muted hover:text-gold uppercase w-fit" data-cursor>Features</a>
              <Link to="/how-it-works" className="text-muted hover:text-gold uppercase w-fit" data-cursor>How It Works</Link>
              <Link to="/faq" className="text-muted hover:text-gold uppercase w-fit" data-cursor>FAQ</Link>
              <a href="/#contact" onClick={(e) => { e.preventDefault(); handleScroll('contact') }} className="text-muted hover:text-gold uppercase w-fit" data-cursor>Contact</a>
              <Link to="/about" className="text-muted hover:text-gold uppercase w-fit" data-cursor>About</Link>
              <Link to="/privacy" className="text-muted hover:text-gold uppercase w-fit mt-2 font-bold" data-cursor>Privacy Policy</Link>
            </div>
          </div>
          <div className="flex flex-col" data-rv="up" style={{ transitionDelay: '200ms' }}>
            <span className="font-anton text-xl text-text mb-4 uppercase">App Highlights</span>
            <ul className="flex flex-col gap-2 font-oswald text-sm text-muted">
              <li>⚡ 100% Free on Android</li>
              <li>🎲 Zero Algorithm · Pure Randomness</li>
              <li>💾 Save Directly to Phone Gallery</li>
              <li>🔒 Personal Meme Vault</li>
              <li>🚀 Instant Social Sharing</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-surfaceHigh pt-6 flex flex-col sm:flex-row justify-between items-center gap-4" data-rv="fade" style={{ transitionDelay: '300ms' }}>
          <div className="font-oswald text-muted text-xs">© {new Date().getFullYear()} Meme Capsule</div>
          <div className="font-oswald text-purple text-xs font-bold uppercase tracking-wide">Made with chaos</div>
        </div>
      </div>
    </footer>
  )
}
