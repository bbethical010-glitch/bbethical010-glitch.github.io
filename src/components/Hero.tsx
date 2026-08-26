import { Sparkles } from 'lucide-react'
import { CONFIG } from '../constants/config'

export function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden bg-[#131313]"
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
        
        {/* App Logo Emblem */}
        <div className="mb-6 flex items-center justify-center" data-rv="up">
          <div 
            className="relative w-24 h-24 md:w-28 md:h-28 bg-surface border-4 border-purple p-3 flex items-center justify-center transform hover:rotate-6 hover:scale-105 transition-all duration-300 group cursor-pointer" 
            style={{ boxShadow: '6px 6px 0px #f4c300' }}
            data-cursor
            onClick={() => window.open(CONFIG.playStoreUrl, '_blank')}
          >
            {/* Custom stylized Meme Capsule logo mark */}
            <svg viewBox="0 0 64 64" fill="none" className="w-full h-full drop-shadow-md">
              <g transform="rotate(-45 32 32)">
                {/* Capsule top half */}
                <path d="M18 32C18 24.268 24.268 18 32 18C39.732 18 46 24.268 46 32H18Z" fill="#9b30ff" stroke="#f4c300" strokeWidth="3.5" />
                {/* Capsule bottom half */}
                <path d="M18 32C18 39.732 24.268 46 32 46C39.732 46 46 39.732 46 32H18Z" fill="#dd0061" stroke="#f4c300" strokeWidth="3.5" />
                {/* Center Divider Belt */}
                <line x1="16" y1="32" x2="48" y2="32" stroke="#131313" strokeWidth="4.5" />
                {/* Sparkle/Gloss Accent */}
                <circle cx="28" cy="24" r="3" fill="#ffe399" />
                <circle cx="36" cy="40" r="2.5" fill="#ffe399" />
              </g>
            </svg>
            <div className="absolute -bottom-2.5 -right-2.5 bg-gold text-bg font-anton text-xs px-2 py-0.5 border-2 border-purple shadow-sm">
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
        
        <div className="font-oswald text-muted text-sm mt-6 font-medium" data-rv="fade" style={{ transitionDelay: '500ms' }}>
          Entertainment &middot; Memes &middot; Android
        </div>
      </div>
      
      <div className="absolute bottom-24 hidden md:flex items-center gap-3 text-muted text-xs tracking-[0.3em] uppercase">
        <span>Scroll to explore</span>
        <span className="w-8 h-[1px] bg-purple/30 overflow-hidden relative inline-block">
          <i className="absolute inset-0 bg-purple animate-scroll-cue" />
        </span>
      </div>

      <div className="absolute bottom-6 flex flex-wrap justify-center gap-2 md:gap-4 px-4 w-full" data-rv="fade" style={{ transitionDelay: '600ms' }}>
        <button onClick={() => handleScroll('see-it-in-action')} className="font-oswald text-xs font-bold uppercase tracking-wider text-text border border-purple/30 bg-surface px-4 py-2 hover:bg-surfaceHigh hover:border-gold transition-colors" data-cursor>01 Live Drop</button>
        <button onClick={() => handleScroll('features')} className="font-oswald text-xs font-bold uppercase tracking-wider text-text border border-purple/30 bg-surface px-4 py-2 hover:bg-surfaceHigh hover:border-gold transition-colors" data-cursor>02 Features</button>
        <button onClick={() => handleScroll('how-it-works')} className="font-oswald text-xs font-bold uppercase tracking-wider text-text border border-purple/30 bg-surface px-4 py-2 hover:bg-surfaceHigh hover:border-gold transition-colors" data-cursor>03 How It Works</button>
        <button onClick={() => handleScroll('comments')} className="font-oswald text-xs font-bold uppercase tracking-wider text-text border border-purple/30 bg-surface px-4 py-2 hover:bg-surfaceHigh hover:border-gold transition-colors" data-cursor>04 Community</button>
      </div>
    </section>
  )
}
