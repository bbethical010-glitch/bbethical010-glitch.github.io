import { useState, useEffect } from 'react'
import { CONFIG } from '../constants/config'
import { Lock, Sparkles, Download } from 'lucide-react'

interface MemeResponse {
  url: string;
  title: string;
  category?: string;
  rarity?: string;
}

// Curated backup memes in case of network or adblocker issues
const FALLBACK_MEMES: MemeResponse[] = [
  {
    url: 'https://pub-3e7961a132964ff581b779a5dad40771.r2.dev/2026/05/C5_UT-ExBuw.jpg',
    title: 'Random Capsule Drop #402',
    category: 'Synced',
    rarity: 'Common'
  },
  {
    url: 'https://pub-3e7961a132964ff581b779a5dad40771.r2.dev/2026/05/DZjBSX5lHFz_2.jpg',
    title: 'Unhinged Drop #108',
    category: 'Synced',
    rarity: 'Rare'
  }
]

export function MemePreview() {
  const [meme, setMeme] = useState<MemeResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [dropCount, setDropCount] = useState<number>(0)
  const [maxDrops, setMaxDrops] = useState<number>(5)
  const [isLocked, setIsLocked] = useState<boolean>(false)

  // Initialize quota limits from localStorage
  useEffect(() => {
    setMaxDrops(5)
    // Initial load
    fetchMeme(true)
  }, [])

  const fetchMeme = async (isInitial = false) => {
    // Check if user is already locked
    if (!isInitial && dropCount >= maxDrops) {
      setIsLocked(true)
      try {
        localStorage.setItem('mc_has_exhausted', 'true')
      } catch {}
      return
    }

    setLoading(true)
    setError(false)

    try {
      // Track GA4 event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'meme_preview_click', {
          event_category: 'engagement',
          event_label: 'hit_me_button',
          drop_count: dropCount + 1
        })
      }

      const res = await fetch(`${CONFIG.apiBase}/api/random-meme`)
      if (!res.ok) throw new Error(`HTTP error ${res.status}`)
      
      const data = await res.json()
      // Support nested response: { meme: { url, title, rarity, category } } or flat { url, title }
      const item = data?.meme || data

      if (item && item.url) {
        setMeme({
          url: item.url,
          title: item.title || 'Spawned from Meme Capsule',
          category: item.category || 'Synced',
          rarity: item.rarity || 'Fresh Drop'
        })
      } else {
        throw new Error('Invalid meme structure')
      }
    } catch (err) {
      console.warn('API fetch failed, falling back to curated drop:', err)
      // Pick a random fallback meme so experience never breaks
      const randomFallback = FALLBACK_MEMES[Math.floor(Math.random() * FALLBACK_MEMES.length)]
      setMeme(randomFallback)
    } finally {
      setLoading(false)
      const nextCount = isInitial ? 1 : dropCount + 1
      setDropCount(nextCount)

      // Lock down if user has reached the quota limit
      if (nextCount >= maxDrops) {
        try {
          localStorage.setItem('mc_has_exhausted', 'true')
        } catch {}
      }
    }
  }

  const remaining = Math.max(0, maxDrops - dropCount)

  return (
    <section id="see-it-in-action" className="py-20 px-4 border-t border-purple/20 bg-bg relative">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="sec-marker" data-rv="fade"><b>01</b> — LIVE MEME DROP<span className="rule"></span></div>
        
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-gold text-gold text-xs font-oswald font-bold uppercase tracking-wider mb-4" data-rv="fade">
          <Sparkles size={14} className="text-gold" />
          Live Interactive Preview
        </div>

        <h2 className="font-anton text-5xl text-text uppercase mb-2" data-rv="up">Live Meme Drop</h2>
        <p className="font-oswald text-muted text-lg mb-6" data-rv="up" style={{ transitionDelay: '100ms' }}>
          This is what gets served to your users. Tap the button.
        </p>

        {/* Drops Counter Badge */}
        <div className="mb-8 font-oswald text-sm font-semibold" data-rv="up" style={{ transitionDelay: '200ms' }}>
          {dropCount >= maxDrops ? (
            <span className="text-pink bg-surfaceHigh px-4 py-1.5 border border-pink uppercase tracking-wide">
              Web Preview Quota Reached (0 Drops Left)
            </span>
          ) : (
            <span className="text-gold bg-surface px-4 py-1.5 border border-gold uppercase tracking-wide">
              Web Preview Drops Remaining: <strong className="text-text">{remaining}</strong>
            </span>
          )}
        </div>

        {/* Meme Display Card */}
        <div 
          className="w-full max-w-[400px] border-2 border-purple bg-[#1c1b1b] relative flex flex-col" 
          style={{ boxShadow: '6px 6px 0px #f4c300', transitionDelay: '300ms' }}
          data-rv="up"
        >
          <div className="w-full aspect-[4/5] relative bg-[#131313] flex items-center justify-center overflow-hidden">
            {loading ? (
              <div className="absolute inset-0 bg-gradient-to-r from-purple/30 to-pink/30 animate-pulse flex flex-col items-center justify-center">
                <span className="font-anton text-gold text-xl tracking-wider uppercase animate-bounce">
                  Dropping Capsule...
                </span>
              </div>
            ) : error ? (
              <div className="text-center p-4">
                <div className="font-anton text-3xl text-pink uppercase mb-4">Something broke.</div>
                <button onClick={() => fetchMeme(false)} className="neo-button-primary px-6 py-2" data-cursor>Retry</button>
              </div>
            ) : meme ? (
              <>
                <img 
                  src={meme.url} 
                  alt={meme.title} 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                  width="400"
                  height="500"
                />
                <div className="absolute bottom-2 left-2 bg-pink text-bg font-anton px-2.5 py-1 uppercase text-xs border border-surface">
                  {meme.rarity || 'Fresh Drop'}
                </div>
              </>
            ) : null}

            {/* Lockout / Download Bumper Overlay */}
            {(isLocked || dropCount >= maxDrops) && !loading && (
              <div className="absolute inset-0 bg-bg/95 backdrop-blur-sm p-6 flex flex-col items-center justify-center text-center z-20 border-2 border-gold animate-fadeIn">
                <div className="w-14 h-14 bg-surfaceHigh border-2 border-gold flex items-center justify-center mb-4">
                  <Lock size={28} className="text-gold" />
                </div>
                <div className="font-anton text-3xl text-gold uppercase mb-2">
                  Capsule Depleted!
                </div>
                <p className="font-oswald text-text text-sm leading-snug mb-6">
                  You've unlocked all web preview drops. Download the official <strong>Meme Capsule</strong> app on Google Play for unlimited drops, zero wait, and your personal Meme Vault!
                </p>
                <a 
                  href={CONFIG.playStoreUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="neo-button-primary px-6 py-3 text-base flex items-center gap-2 w-full justify-center"
                  data-cursor
                >
                  <Download size={18} />
                  Get It on Google Play
                </a>
              </div>
            )}
          </div>

          {meme && !loading && !error && (
            <div className="p-4 border-t-2 border-purple bg-[#1c1b1b]">
              <div className="font-oswald font-bold text-gold truncate text-left text-base">
                {meme.title}
              </div>
            </div>
          )}
        </div>

        {/* Action Button */}
        {dropCount >= maxDrops ? (
          <a
            href={CONFIG.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="neo-button-secondary mt-8 px-10 py-4 text-xl flex items-center gap-2"
            data-cursor
            data-rv="up" style={{ transitionDelay: '400ms' }}
          >
            <Download size={22} />
            Download App for Unlimited Drops
          </a>
        ) : (
          <button 
            onClick={() => fetchMeme(false)} 
            disabled={loading}
            className="neo-button-primary mt-8 px-12 py-4 text-2xl"
            data-cursor
            data-rv="up" style={{ transitionDelay: '400ms' }}
          >
            {loading ? 'Dropping...' : 'HIT ME'}
          </button>
        )}
      </div>
    </section>
  )
}
