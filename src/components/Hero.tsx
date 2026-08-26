import { Sparkles, ChevronDown } from 'lucide-react'
import { CONFIG } from '../constants/config'
import logoImg from '../assets/logo.png'

export function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#131313]"
      style={{
        backgroundImage: `linear-gradient(rgba(155, 48, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(155, 48, 255, 0.08) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}
    >
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-90 origin-center font-anton text-[8vh] text-surfaceHigh opacity-50 whitespace-nowrap pointer-events-none select-none">
        MEME CAPSULE
      </div>

      <div className="flex flex-col items-center z-10 px-4 text-center max-w-4xl mx-auto">
        {/* Play Store Tag */}
        <div 
          className="border border-gold text-gold text-xs uppercase tracking-widest py-1.5 px-4 rounded-full mb-6 font-oswald font-bold flex items-center gap-2 bg-surface/90 shadow-sm" 
          data-rv="fade"
        >
          <Sparkles size={14} className="text-gold animate-pulse" />
          Now on Google Play
        </div>
        
        {/* App Logo */}
        <div className="mb-6 flex items-center justify-center" data-rv="up">
          <div 
            className="relative w-28 h-28 md:w-36 md:h-36 bg-surface border-4 border-purple p-2 flex items-center justify-center transform hover:rotate-3 hover:scale-105 transition-all duration-300 group cursor-pointer" 
            style={{ boxShadow: '8px 8px 0px #f4c300' }}
            data-cursor
            onClick={() => window.open(CONFIG.playStoreUrl, '_blank')}
          >
            <img 
              src={logoImg} 
              alt="Meme Capsule Official Logo" 
              className="w-full h-full object-contain filter drop-shadow-md select-none pointer-events-none" 
            />
            <div className="absolute -bottom-3 -right-3 bg-gold text-bg font-anton text-xs px-2.5 py-0.5 border-2 border-purple shadow-sm">
              OFFICIAL
            </div>
          </div>
        </div>
        
        {/* Main Logo / Title Headline */}
        <h1 
          className="word-reveal font-anton text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase flex flex-col items-center leading-none tracking-tight select-none my-2"
          data-rv="fade"
        >
          <span className="text-text word-mask">
            <span className="word" style={{ '--word-delay': '0ms' } as any}>MEME</span>
          </span>
          <span 
            className="text-purple word-mask" 
            style={{ 
              textShadow: '4px 4px 0px #f4c300, -1px -1px 0px #f4c300, 1px -1px 0px #f4c300, -1px 1px 0px #f4c300, 1px 1px 0px #f4c300' 
            }}
          >
            <span className="word" style={{ '--word-delay': '120ms' } as any}>CAPSULE</span>
          </span>
        </h1>
        
        <h2 className="font-oswald text-gold text-xl md:text-2xl tracking-wide mt-6 font-semibold uppercase" data-rv="up" style={{ transitionDelay: '200ms' }}>
          One Tap. One Meme. Pure Chaos.
        </h2>
        
        <p className="font-oswald text-muted text-base md:text-lg max-w-[600px] mt-4" data-rv="up" style={{ transitionDelay: '300ms' }}>
          {CONFIG.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8" data-rv="up" style={{ transitionDelay: '400ms' }}>
          <a href={CONFIG.playStoreUrl} target="_blank" rel="noopener noreferrer" className="neo-button-primary px-8 py-4 text-lg" data-cursor>
            Get it on Google Play
          </a>
          <button onClick={() => handleScroll('see-it-in-action')} className="neo-button-secondary px-8 py-4 text-lg" data-cursor>
            See it in Action
          </button>
        </div>
      </div>
      
      {/* Subtle Scroll Down Arrow */}
      <div 
        className="absolute bottom-6 text-gold/80 hover:text-gold cursor-pointer transition-colors animate-bounce" 
        onClick={() => handleScroll('see-it-in-action')}
        data-cursor
      >
        <ChevronDown size={36} strokeWidth={2.5} />
      </div>
    </section>
  )
}
