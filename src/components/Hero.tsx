import { ChevronDown } from 'lucide-react'
import { CONFIG } from '../constants/config'

export function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#131313]"
      style={{
        backgroundImage: `linear-gradient(rgba(155, 48, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(155, 48, 255, 0.08) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}
    >
      <div className="flex flex-col items-center z-10 px-4 text-center">
        <div className="border border-gold text-gold text-xs uppercase tracking-widest py-1 px-3 rounded-full mb-8 font-oswald font-bold">
          Now on Google Play
        </div>
        
        <h1 className="font-anton text-6xl md:text-8xl lg:text-9xl uppercase flex flex-col items-center leading-none">
          <span className="text-text">MEME</span>
          <span className="text-purple" style={{ textShadow: '3px 3px 0px #f4c300, -1px -1px 0px #f4c300, 1px -1px 0px #f4c300, -1px 1px 0px #f4c300, 1px 1px 0px #f4c300' }}>
            CAPSULE
          </span>
        </h1>
        
        <h2 className="font-oswald text-gold text-xl md:text-2xl tracking-wide mt-6 font-semibold uppercase">
          One Tap. One Meme. Pure Chaos.
        </h2>
        
        <p className="font-oswald text-muted text-base md:text-lg max-w-[600px] mt-4">
          {CONFIG.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a href={CONFIG.playStoreUrl} target="_blank" rel="noopener noreferrer" className="neo-button-primary px-8 py-4 text-lg">
            Get it on Google Play
          </a>
          <button onClick={() => handleScroll('see-it-in-action')} className="neo-button-secondary px-8 py-4 text-lg">
            See it in Action
          </button>
        </div>
        
        <div className="font-oswald text-muted text-sm mt-6 font-medium">
          Entertainment &middot; Memes &middot; Android
        </div>
      </div>
      
      <div className="absolute bottom-8 animate-bounce text-gold cursor-pointer" onClick={() => handleScroll('see-it-in-action')}>
        <ChevronDown size={48} strokeWidth={3} />
      </div>
    </section>
  )
}
