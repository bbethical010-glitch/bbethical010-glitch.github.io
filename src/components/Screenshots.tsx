import { useState, useRef, MouseEvent, useEffect } from 'react'
import { X, ZoomIn, ChevronRight, ChevronLeft } from 'lucide-react'

const SCREENSHOTS = [
  { id: 1, title: 'Home Screen', url: 'https://via.placeholder.com/720x1560/1c1b1b/9b30ff?text=HOME+SCREEN' },
  { id: 2, title: 'Loading Screen', url: 'https://via.placeholder.com/720x1560/1c1b1b/f4c300?text=LOADING' },
  { id: 3, title: 'Meme Loaded', url: 'https://via.placeholder.com/720x1560/1c1b1b/dd0061?text=MEME+LOADED' },
  { id: 4, title: 'Meme Vault', url: 'https://via.placeholder.com/720x1560/1c1b1b/9b30ff?text=MEME+VAULT' },
  { id: 5, title: 'Share Sheet', url: 'https://via.placeholder.com/720x1560/1c1b1b/f4c300?text=SHARE+SHEET' },
  { id: 6, title: 'Settings', url: 'https://via.placeholder.com/720x1560/1c1b1b/dd0061?text=SETTINGS' }
]

function PhoneMockup({ item, onClick, delay }: { item: any, onClick: (item: any) => void, delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    // Calculate rotation between -12 and 12 degrees for realistic tilt
    const rotateX = ((y - centerY) / centerY) * -12
    const rotateY = ((x - centerX) / centerX) * 12
    
    setTransform(`perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTransform('perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <div 
      className="flex-none cursor-pointer p-4 group"
      style={{ scrollSnapAlign: 'center', transitionDelay: `${delay}ms` }}
      data-rv="up"
      onClick={() => onClick(item)}
    >
      {/* 3D Container */}
      <div 
        className="relative perspective-1200"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        {/* Realistic Android Phone Frame */}
        <div 
          ref={ref}
          className="relative w-[240px] md:w-[280px] aspect-[9/19.5] rounded-[2.5rem] border-[10px] border-[#18181b] bg-[#09090b] transition-all duration-200 ease-out preserve-3d"
          style={{ 
            transform, 
            boxShadow: isHovered 
              ? '25px 25px 0px -10px #f4c300, 0 0 0 2px rgba(155,48,255,0.8)' // Neo-brutalist harsh shadow on hover
              : '10px 10px 30px -10px rgba(0,0,0,0.8)' 
          }}
        >
          {/* Top Camera Punch-hole */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#09090b] rounded-full z-20 border border-[#27272a] shadow-inner flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-[#18181b] rounded-full"></div>
          </div>
          
          {/* Phone Screen */}
          <div className="w-full h-full bg-[#1c1b1b] relative rounded-[1.75rem] overflow-hidden">
            <img 
              src={item.url} 
              alt={item.title} 
              className="w-full h-full object-cover select-none pointer-events-none"
              loading="lazy"
            />
            
            {/* Hover Action Overlay */}
            <div 
              className={`absolute inset-0 bg-purple/30 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="bg-gold text-bg p-4 rounded-none border-2 border-purple shadow-[4px_4px_0px_#dd0061] transform transition-transform duration-300 translate-z-10 group-hover:scale-110">
                <ZoomIn size={28} strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Hardware Buttons */}
          {/* Power Button */}
          <div className="absolute -right-[13px] top-[120px] w-[3px] h-[45px] bg-[#18181b] rounded-r-md border-r border-t border-b border-[#27272a]"></div>
          {/* Volume Buttons */}
          <div className="absolute -left-[13px] top-[100px] w-[3px] h-[80px] bg-[#18181b] rounded-l-md border-l border-t border-b border-[#27272a]"></div>
        </div>
      </div>
      
      {/* Title Below Phone */}
      <div className="mt-8 text-center transition-transform duration-300 group-hover:translate-y-2">
        <span className="font-anton font-bold text-xl text-text uppercase tracking-widest group-hover:text-gold transition-colors">{item.title}</span>
      </div>
    </div>
  )
}

export function Screenshots() {
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Prevent scrolling on body when lightbox is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedItem])

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' })
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') setSelectedItem(null)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <section className="py-24 px-0 border-t border-purple/20 bg-bg overflow-hidden relative">
        <div className="px-4 max-w-7xl mx-auto mb-16 text-center">
          <div className="sec-marker justify-center" data-rv="fade">
            <span className="rule max-w-[100px]"></span>
            <b>03</b> — WHAT IT LOOKS LIKE
            <span className="rule max-w-[100px]"></span>
          </div>
          <h2 className="font-anton text-5xl md:text-6xl text-text uppercase mt-4" data-rv="up">Explore the App</h2>
        </div>
        
        {/* Carousel Container */}
        <div className="relative max-w-[1400px] mx-auto">
          {/* Scroll Controls (Desktop) */}
          <button 
            onClick={scrollLeft}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-surface border-2 border-purple p-3 text-gold hover:text-white hover:bg-purple transition-colors shadow-[4px_4px_0px_#dd0061]"
            aria-label="Scroll left"
            data-cursor
          >
            <ChevronLeft size={32} />
          </button>
          
          <button 
            onClick={scrollRight}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-surface border-2 border-purple p-3 text-gold hover:text-white hover:bg-purple transition-colors shadow-[4px_4px_0px_#dd0061]"
            aria-label="Scroll right"
            data-cursor
          >
            <ChevronRight size={32} />
          </button>

          <div 
            ref={carouselRef}
            className="flex overflow-x-auto gap-8 px-8 md:px-24 pb-16 pt-8 scrollbar-hide" 
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {SCREENSHOTS.map((item, idx) => (
              <PhoneMockup 
                key={item.id} 
                item={item} 
                onClick={setSelectedItem} 
                delay={idx * 100} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedItem(null)}
          style={{ animation: 'fadeIn 0.3s ease-out' }}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 sm:top-10 sm:right-10 text-gold hover:text-white bg-surface border-2 border-purple p-2 shadow-[4px_4px_0px_#dd0061] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none z-10"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedItem(null)
            }}
            data-cursor
          >
            <X size={32} strokeWidth={3} />
          </button>

          {/* Large Image Container */}
          <div 
            className="relative h-full max-h-[90vh] aspect-[9/19.5] rounded-[2rem] border-[6px] border-purple overflow-hidden shadow-[0_0_80px_rgba(155,48,255,0.4)]"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
          >
            <img 
              src={selectedItem.url} 
              alt={selectedItem.title} 
              className="w-full h-full object-cover"
            />
            {/* Title Bar at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#131313]/90 backdrop-blur-md p-6 border-t-[3px] border-purple text-center">
              <span className="font-anton text-3xl text-gold uppercase tracking-widest">{selectedItem.title}</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
