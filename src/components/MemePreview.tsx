import { useState, useEffect, useRef } from 'react'
import { CONFIG, trackInstallClick } from '../constants/config'
import { Lock, Sparkles, Download } from 'lucide-react'

interface MemeResponse {
  url: string;
  title: string;
  category?: string;
  rarity?: string;
  id?: string;
}

const MAX_PREVIEW_DROPS = 10

// Curated backup memes with verified 200 OK Cloudflare R2 URLs
const FALLBACK_MEMES: MemeResponse[] = [
  {
    url: 'https://pub-3e7961a132964ff581b779a5dad40771.r2.dev/Dal4WDODYI-_1.jpg',
    title: 'Capsule Drop #101',
    category: 'Synced',
    rarity: 'Common'
  },
  {
    url: 'https://pub-3e7961a132964ff581b779a5dad40771.r2.dev/DatCw2NGlOu_3.jpg',
    title: 'Unhinged Drop #102',
    category: 'Synced',
    rarity: 'Rare'
  },
  {
    url: 'https://pub-3e7961a132964ff581b779a5dad40771.r2.dev/DbXOjEERFrR.jpg',
    title: 'Chaos Vault #103',
    category: 'Synced',
    rarity: 'Epic'
  },
  {
    url: 'https://pub-3e7961a132964ff581b779a5dad40771.r2.dev/DZjBSX5lHFz_2.jpg',
    title: 'Unhinged Drop #108',
    category: 'Synced',
    rarity: 'Rare'
  },
  {
    url: 'https://pub-3e7961a132964ff581b779a5dad40771.r2.dev/C5_UT-ExBuw.jpg',
    title: 'Random Capsule Drop #402',
    category: 'Synced',
    rarity: 'Common'
  },
  {
    url: 'https://pub-3e7961a132964ff581b779a5dad40771.r2.dev/Daggq7NjzJX_3.jpg',
    title: 'Unhinged Drop #205',
    category: 'Everyday Life',
    rarity: 'Common'
  },
  {
    url: 'https://pub-3e7961a132964ff581b779a5dad40771.r2.dev/C-1AoAgSZdK_2.jpg',
    title: 'Capsule Drop #206',
    category: 'Everyday Life',
    rarity: 'Rare'
  },
  {
    url: 'https://pub-3e7961a132964ff581b779a5dad40771.r2.dev/DZ_zoyFl2ll_2.jpg',
    title: 'Dank Core #207',
    category: 'Everyday Life',
    rarity: 'Epic'
  },
  {
    url: 'https://pub-3e7961a132964ff581b779a5dad40771.r2.dev/DKIzIp1N67i_4.jpg',
    title: 'Chaos Drop #208',
    category: 'Pop Culture',
    rarity: 'Common'
  },
  {
    url: 'https://pub-3e7961a132964ff581b779a5dad40771.r2.dev/DZThR9GjcbE_2.jpg',
    title: 'Capsule Vault #209',
    category: 'Everyday Life',
    rarity: 'Rare'
  }
]

export function MemePreview() {
  const [meme, setMeme] = useState<MemeResponse>(FALLBACK_MEMES[0])
  const [dropCount, setDropCount] = useState<number>(1)
  const [isLocked, setIsLocked] = useState<boolean>(false)
  const [isAnimating, setIsAnimating] = useState<boolean>(false)

  // In-memory FIFO queue holding preloaded memes for zero-latency drops
  const fifoQueueRef = useRef<MemeResponse[]>([])
  const initializedRef = useRef<boolean>(false)

  // Pre-cache image assets directly into browser HTTP/bitmap cache
  const preloadImage = (url: string) => {
    if (typeof window !== 'undefined') {
      const img = new Image()
      img.src = url
    }
  }

  // Preload all 10 memes upfront on component mount
  useEffect(() => {
    if (initializedRef.current) return
    initializedRef.current = true

    // Warm cache for all fallback items immediately
    FALLBACK_MEMES.forEach(m => preloadImage(m.url))

    const loadAllMemesUpfront = async () => {
      try {
        // Concurrently fetch 10 candidate memes from Cloudflare Edge API
        const fetchPromises = Array.from({ length: MAX_PREVIEW_DROPS }, async () => {
          try {
            const res = await fetch(`${CONFIG.apiBase}/api/random-meme`)
            if (!res.ok) return null
            const data = await res.json()
            const item = data?.meme || data
            if (item && item.url) {
              return {
                url: item.url,
                title: item.title || 'Spawned from Meme Capsule',
                category: item.category || 'Synced',
                rarity: item.rarity || 'Fresh Drop',
                id: item.id
              } as MemeResponse
            }
          } catch {
            return null
          }
          return null
        })

        const results = await Promise.all(fetchPromises)
        const validMemes: MemeResponse[] = []
        const seenUrls = new Set<string>()

        // Collect unique valid memes from network
        for (const m of results) {
          if (m && !seenUrls.has(m.url)) {
            seenUrls.add(m.url)
            validMemes.push(m)
            preloadImage(m.url)
          }
        }

        // Backfill with fallback memes to guarantee a full 10-meme buffer
        for (const fb of FALLBACK_MEMES) {
          if (validMemes.length >= MAX_PREVIEW_DROPS) break
          if (!seenUrls.has(fb.url)) {
            seenUrls.add(fb.url)
            validMemes.push(fb)
          }
        }

        // Update active meme and initialize FIFO queue with remaining 9
        if (validMemes.length > 0) {
          setMeme(validMemes[0])
          fifoQueueRef.current = validMemes.slice(1)
        }
      } catch (err) {
        console.warn('Batch prefetch fallback active:', err)
        fifoQueueRef.current = FALLBACK_MEMES.slice(1)
      }
    }

    loadAllMemesUpfront()
  }, [])

  const handleHitMe = () => {
    if (dropCount >= MAX_PREVIEW_DROPS) {
      setIsLocked(true)
      try {
        localStorage.setItem('mc_has_exhausted', 'true')
      } catch {}
      return
    }

    // Trigger snappy arcade tactile feedback
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 150)

    // Track GA4 engagement
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'meme_preview_click', {
        event_category: 'engagement',
        event_label: 'hit_me_button',
        drop_count: dropCount + 1
      })
    }

    // Pop the next meme from the FIFO buffer (0ms wait, no network latency!)
    let nextMeme = fifoQueueRef.current.shift()
    if (!nextMeme) {
      // Safety guarantee if clicked before all background promises settle
      const fallbackIndex = dropCount % FALLBACK_MEMES.length
      nextMeme = FALLBACK_MEMES[fallbackIndex]
    }

    // Instant swap without any loading screen
    setMeme(nextMeme)
    const nextCount = dropCount + 1
    setDropCount(nextCount)

    // Lock down when 10th drop is completed
    if (nextCount >= MAX_PREVIEW_DROPS) {
      setIsLocked(true)
      try {
        localStorage.setItem('mc_has_exhausted', 'true')
      } catch {}
    }
  }

  const remaining = Math.max(0, MAX_PREVIEW_DROPS - dropCount)

  return (
    <section id="see-it-in-action" className="py-20 px-4 border-t border-purple/20 bg-bg relative">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="sec-marker" data-rv="fade"><b>01</b> — LIVE MEME DROP<span className="rule"></span></div>
        
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-gold text-gold text-xs font-oswald font-bold uppercase tracking-wider mb-4" data-rv="fade">
          <Sparkles size={14} className="text-gold" />
          Live Interactive Preview • FIFO Engine
        </div>

        <h2 className="font-anton text-5xl text-text uppercase mb-2" data-rv="up">Live Meme Drop</h2>
        <p className="font-oswald text-muted text-lg mb-6" data-rv="up" style={{ transitionDelay: '100ms' }}>
          This is what gets served to your users. Instant drops with zero waiting. Tap the button.
        </p>

        {/* Drops Counter Badge */}
        <div className="mb-8 font-oswald text-sm font-semibold" data-rv="up" style={{ transitionDelay: '200ms' }}>
          {dropCount >= MAX_PREVIEW_DROPS ? (
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
          className={`w-full max-w-[400px] border-2 border-purple bg-[#1c1b1b] relative flex flex-col transition-transform duration-150 ${isAnimating ? 'scale-[0.98]' : 'scale-100'}`} 
          style={{ boxShadow: '6px 6px 0px #f4c300', transitionDelay: '300ms' }}
          data-rv="up"
        >
          <div className="w-full aspect-[4/5] relative bg-[#131313] flex items-center justify-center overflow-hidden">
            {meme && (
              <>
                <img 
                  key={meme.url}
                  src={meme.url} 
                  alt={meme.title} 
                  className="w-full h-full object-cover select-none pointer-events-none" 
                  width="400"
                  height="500"
                  decoding="async"
                  onError={(e) => {
                    const target = e.currentTarget
                    const nextFallback = FALLBACK_MEMES[Math.floor(Math.random() * FALLBACK_MEMES.length)].url
                    if (target.src !== nextFallback) {
                      target.src = nextFallback
                    }
                  }}
                />
                <div className="absolute bottom-2 left-2 bg-pink text-bg font-anton px-2.5 py-1 uppercase text-xs border border-surface shadow-sm">
                  {meme.rarity || 'Fresh Drop'}
                </div>
              </>
            )}

            {/* Lockout / Download Bumper Overlay */}
            {(isLocked || dropCount >= MAX_PREVIEW_DROPS) && (
              <div className="absolute inset-0 bg-bg/95 backdrop-blur-sm p-6 flex flex-col items-center justify-center text-center z-20 border-2 border-gold animate-fadeIn">
                <div className="w-14 h-14 bg-surfaceHigh border-2 border-gold flex items-center justify-center mb-4">
                  <Lock size={28} className="text-gold" />
                </div>
                <div className="font-anton text-3xl text-gold uppercase mb-2">
                  Capsule Depleted!
                </div>
                <p className="font-oswald text-text text-sm leading-snug mb-6">
                  You've unlocked all 10 web preview drops. Download the official <strong>Meme Capsule</strong> app on Google Play for unlimited drops, rolling FIFO prefetch, and your personal Meme Vault!
                </p>
                <a 
                  href={CONFIG.getPlayStoreUrl('preview_depleted')} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => trackInstallClick('preview_depleted')}
                  className="neo-button-primary px-6 py-3 text-base flex items-center gap-2 w-full justify-center"
                  data-cursor
                >
                  <Download size={18} />
                  Get It on Google Play
                </a>
              </div>
            )}
          </div>

          {meme && (
            <div className="p-4 border-t-2 border-purple bg-[#1c1b1b]">
              <div className="font-oswald font-bold text-gold truncate text-left text-base">
                {meme.title}
              </div>
            </div>
          )}
        </div>

        {/* Action Button */}
        {dropCount >= MAX_PREVIEW_DROPS ? (
          <a
            href={CONFIG.getPlayStoreUrl('preview_quota_btn')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackInstallClick('preview_quota_btn')}
            className="neo-button-secondary mt-8 px-10 py-4 text-xl flex items-center gap-2"
            data-cursor
            data-rv="up" style={{ transitionDelay: '400ms' }}
          >
            <Download size={22} />
            Download App for Unlimited Drops
          </a>
        ) : (
          <button 
            onClick={handleHitMe} 
            className="neo-button-primary mt-8 px-12 py-4 text-2xl active:translate-x-1 active:translate-y-1 transition-transform"
            data-cursor
            data-rv="up" style={{ transitionDelay: '400ms' }}
          >
            HIT ME
          </button>
        )}
      </div>
    </section>
  )
}
