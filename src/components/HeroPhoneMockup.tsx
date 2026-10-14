import { useState, useEffect, useRef, useCallback } from 'react'
import { Sparkles, ArrowRight, ShieldCheck, Play, Pause } from 'lucide-react'
import { CONFIG, trackInstallClick } from '../constants/config'

interface ScreenItem {
  id: string
  label: string
  chipLabel: string
  badge: string
  webp: string
  jpg: string
  alt: string
}

const SCREENS: ScreenItem[] = [
  {
    id: 'home',
    label: 'Home Drop',
    chipLabel: '01 • One Tap Drop',
    badge: 'READY TO DROP',
    webp: '/screenshots/page_02_home.webp',
    jpg: '/screenshots/page_02_home.jpg',
    alt: 'Meme Capsule Android App Home Screen — HIT ME drop button',
  },
  {
    id: 'loaded',
    label: 'Meme Loaded',
    chipLabel: '02 • Live Meme View',
    badge: 'UNFILTERED MEME',
    webp: '/screenshots/page_04_default.webp',
    jpg: '/screenshots/page_04_default.jpg',
    alt: 'Meme Capsule Loaded Meme Screen with Like and Vault CTA bar',
  },
  {
    id: 'liked',
    label: 'Instant Reaction',
    chipLabel: '03 • Haptic Reaction',
    badge: 'REACTION TOAST',
    webp: '/screenshots/page_05_liked.webp',
    jpg: '/screenshots/page_05_liked.jpg',
    alt: 'Meme Capsule Liked Screen showing reaction toast animation',
  },
  {
    id: 'vault',
    label: 'Offline Vault',
    chipLabel: '04 • Offline Vault',
    badge: 'PERMANENT ARCHIVE',
    webp: '/screenshots/page_09_vault_tab.webp',
    jpg: '/screenshots/page_09_vault_tab.jpg',
    alt: 'Meme Capsule Vault Tab with search and lifetime meme stats',
  },
  {
    id: 'moodboards',
    label: 'Mood Boards',
    chipLabel: '05 • Custom Boards',
    badge: 'CURATED ALBUMS',
    webp: '/screenshots/page_10_moodboards.webp',
    jpg: '/screenshots/page_10_moodboards.jpg',
    alt: 'Meme Capsule Mood Boards screen with custom pinned collections',
  },
]

export function HeroPhoneMockup() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const mockupRef = useRef<HTMLDivElement>(null)

  // Smooth lerp physics for mouse tilt (zero React state updates on mousemove)
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isHovering: false })
  const rafId = useRef<number | null>(null)

  // Auto-advance timer (cycles screens smoothly every 4.2 seconds)
  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % SCREENS.length)
    }, 4200)

    return () => clearInterval(timer)
  }, [isPaused])

  // 60FPS RAF tilt loop without triggering React re-renders
  const updateTilt = useCallback(() => {
    if (!mockupRef.current) return

    const state = mousePos.current
    if (state.isHovering) {
      // Lerp smoothing towards target
      state.x += (state.targetX - state.x) * 0.1
      state.y += (state.targetY - state.y) * 0.1
    } else {
      // Return smoothly to center
      state.x += (0 - state.x) * 0.08
      state.y += (0 - state.y) * 0.08
    }

    const rx = -state.y * 10 // Max 10 deg X tilt
    const ry = state.x * 12  // Max 12 deg Y tilt

    mockupRef.current.style.transform = `perspective(1200px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateZ(0)`

    // Continue loop if still moving or not yet centered
    if (state.isHovering || Math.abs(state.x) > 0.001 || Math.abs(state.y) > 0.001) {
      rafId.current = requestAnimationFrame(updateTilt)
    } else {
      rafId.current = null
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5 // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5 // -0.5 to 0.5

    mousePos.current.targetX = x * 2 // -1 to 1
    mousePos.current.targetY = y * 2 // -1 to 1
    mousePos.current.isHovering = true

    if (!rafId.current) {
      rafId.current = requestAnimationFrame(updateTilt)
    }
  }

  const handleMouseEnter = () => {
    mousePos.current.isHovering = true
    setIsPaused(true)
    if (!rafId.current) {
      rafId.current = requestAnimationFrame(updateTilt)
    }
  }

  const handleMouseLeave = () => {
    mousePos.current.isHovering = false
    setIsPaused(false)
    mousePos.current.targetX = 0
    mousePos.current.targetY = 0
    if (!rafId.current) {
      rafId.current = requestAnimationFrame(updateTilt)
    }
  }

  // Handle direct screen selection
  const selectScreen = (idx: number) => {
    setActiveIdx(idx)
    setIsPaused(true)
    // Resume auto-cycling after 8 seconds of idle
    setTimeout(() => {
      setIsPaused(false)
    }, 8000)
  }

  return (
    <div 
      ref={containerRef}
      className="relative flex flex-col items-center justify-center my-8 md:my-12 w-full select-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* ─── Violet Bleed Atmospheric Glow (Hims Style Spec) ─── */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none w-[340px] sm:w-[460px] md:w-[580px] h-[340px] sm:h-[460px] md:h-[580px] rounded-full animate-glow-pulse"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(155, 48, 255, 0.45) 0%, rgba(155, 48, 255, 0.18) 45%, rgba(244, 195, 0, 0.05) 65%, transparent 75%)',
          filter: 'blur(45px)',
          willChange: 'transform, opacity',
        }}
        aria-hidden="true"
      />

      {/* ─── Top Floating Pill Status ─── */}
      <div 
        className="mb-6 flex items-center gap-2 px-3.5 py-1 bg-surface/90 border border-purple/60 rounded-full shadow-[2px_2px_0px_#9b30ff] text-xs font-oswald uppercase tracking-wider text-text backdrop-blur-md"
        data-rv="fade"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-gold font-bold">Android v3.4</span>
        <span className="text-muted">•</span>
        <span className="text-text">{SCREENS[activeIdx].badge}</span>
      </div>

      {/* ─── Phone Mockup Outer Frame (50-52px radius, 0 9px 46px shadow) ─── */}
      <div className="relative p-2 flex items-center justify-center animate-mockup-float">
        {/* Hardware side buttons */}
        <div className="hidden sm:block absolute -left-1.5 top-28 w-1 h-10 bg-[#272630] rounded-l-sm" />
        <div className="hidden sm:block absolute -left-1.5 top-42 w-1 h-10 bg-[#272630] rounded-l-sm" />
        <div className="hidden sm:block absolute -right-1.5 top-32 w-1 h-14 bg-[#272630] rounded-r-sm" />

        <div
          ref={mockupRef}
          className="relative w-[280px] sm:w-[320px] md:w-[340px] aspect-[9/19.5] rounded-[48px] sm:rounded-[52px] bg-[#1a1922] p-[9px] sm:p-[10px] ring-1 ring-white/15 transition-transform duration-100 ease-out preserve-3d"
          style={{
            boxShadow: '0 25px 70px -15px rgba(0, 0, 0, 0.9), 0 9px 46px 0px rgba(155, 48, 255, 0.32), inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
            willChange: 'transform',
          }}
        >
          {/* Inner Display Bezel */}
          <div className="w-full h-full rounded-[40px] sm:rounded-[42px] overflow-hidden bg-[#000000] relative border border-[#2a2935]/80 shadow-inner">
            
            {/* Top Dynamic Island Notch */}
            <div 
              className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#000000] rounded-full z-30 flex items-center justify-between px-2.5 border border-[#1f1e28] shadow-sm pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-2 h-2 rounded-full bg-[#0a0a0f] ring-1 ring-white/10 flex items-center justify-center">
                <div className="w-0.5 h-0.5 rounded-full bg-blue-400/40" />
              </div>
              <div className="w-8 h-1 bg-[#1a1922] rounded-full" />
            </div>

            {/* Specular Diagonal Glass Sheen (Hims Reflection Effect) */}
            <div 
              className="absolute inset-0 z-20 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.02) 36%, transparent 56%)',
              }}
              aria-hidden="true"
            />

            {/* Cross-fading Real App Screenshots */}
            <div className="relative w-full h-full">
              {SCREENS.map((screen, idx) => {
                const isActive = idx === activeIdx
                return (
                  <div
                    key={screen.id}
                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                      isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <picture>
                      <source srcSet={screen.webp} type="image/webp" />
                      <img
                        src={screen.jpg}
                        alt={screen.alt}
                        className="w-full h-full object-cover select-none pointer-events-none"
                        loading={idx === 0 ? 'eager' : 'lazy'}
                        width="1080"
                        height="2310"
                        decoding="async"
                      />
                    </picture>
                  </div>
                )
              })}
            </div>

            {/* In-Mockup Interactive CTA Overlay */}
            <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center px-4 pointer-events-auto">
              <a
                href={CONFIG.getPlayStoreUrl('mockup_overlay')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackInstallClick('mockup_overlay')}
                className="w-full py-2 px-3 bg-purple/95 hover:bg-purple text-text border border-gold font-oswald text-xs uppercase font-bold tracking-widest text-center shadow-[2px_2px_0px_#f4c300] transition-transform active:translate-x-0.5 active:translate-y-0.5 backdrop-blur-sm flex items-center justify-center gap-1.5"
                data-cursor
              >
                <span>Install Free on Play Store</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Interactive Screen Switcher Chips Below Mockup ─── */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-xl px-4 z-10">
        {SCREENS.map((screen, idx) => {
          const isActive = idx === activeIdx
          return (
            <button
              key={screen.id}
              onClick={() => selectScreen(idx)}
              className={`px-3 py-1.5 text-xs font-oswald uppercase tracking-wider transition-all duration-200 border-2 rounded-none flex items-center gap-1.5 ${
                isActive
                  ? 'bg-purple border-gold text-gold font-bold shadow-[2px_2px_0px_#f4c300] -translate-y-0.5'
                  : 'bg-surface/80 border-purple/40 text-muted hover:text-text hover:border-purple hover:bg-surface'
              }`}
              data-cursor
              aria-label={`View ${screen.label} preview`}
            >
              <span>{screen.chipLabel}</span>
            </button>
          )
        })}

        {/* Play / Pause Rotation Button */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="p-1.5 text-muted hover:text-gold border border-purple/30 bg-surface/60 transition-colors ml-1"
          title={isPaused ? 'Resume auto-cycle' : 'Pause auto-cycle'}
          data-cursor
          aria-label={isPaused ? 'Resume auto-cycle' : 'Pause auto-cycle'}
        >
          {isPaused ? <Play size={13} /> : <Pause size={13} />}
        </button>
      </div>

      {/* Micro-label */}
      <p className="font-oswald text-[11px] text-muted uppercase tracking-widest mt-3 text-center">
        Authentic captures from Meme Capsule on Google Play &bull; Hover to inspect screen
      </p>
    </div>
  )
}

export default HeroPhoneMockup
