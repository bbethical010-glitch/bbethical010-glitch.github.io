import { useState, useRef, useCallback } from 'react'
import { CONFIG } from '../constants/config'
import { Sparkles, Download } from 'lucide-react'
import { MemeStack } from './MemeStack'
import { type MemeItem } from './MemeCard'
import { sniffImageDimensions } from '../utils/memeDimensions'

// Curated backup memes with verified 200 OK URLs
const FALLBACK_MEMES: Omit<MemeItem, 'id'>[] = [
  {
    url: 'https://pub-3e7961a132964ff581b779a5dad40771.r2.dev/Dal4WDODYI-_1.jpg',
    title: 'Capsule Drop #101',
    category: 'Synced',
    rarity: 'Common',
  },
  {
    url: 'https://pub-3e7961a132964ff581b779a5dad40771.r2.dev/DatCw2NGlOu_3.jpg',
    title: 'Unhinged Drop #102',
    category: 'Synced',
    rarity: 'Rare',
  },
  {
    url: 'https://pub-3e7961a132964ff581b779a5dad40771.r2.dev/DbXOjEERFrR.jpg',
    title: 'Chaos Vault #103',
    category: 'Synced',
    rarity: 'Epic',
  },
  {
    url: 'https://pub-3e7961a132964ff581b779a5dad40771.r2.dev/DZjBSX5lHFz_2.jpg',
    title: 'Unhinged Drop #108',
    category: 'Synced',
    rarity: 'Rare',
  },
  {
    url: 'https://pub-3e7961a132964ff581b779a5dad40771.r2.dev/C5_UT-ExBuw.jpg',
    title: 'Random Capsule Drop #402',
    category: 'Synced',
    rarity: 'Common',
  },
]

const MAX_SESSION_MEMES = 7

export function MemePreview() {
  const [isStarted, setIsStarted] = useState(false)
  const [loadingEager, setLoadingEager] = useState(false)
  const [queue, setQueue] = useState<MemeItem[]>([])
  const [totalSwiped, setTotalSwiped] = useState(0)

  // Session tracking refs
  const seenIds = useRef<Set<string>>(new Set())
  const totalFetchedRef = useRef(0)
  const isFetchingProgressiveRef = useRef(false)

  /**
   * Fetches a single unique meme from the API (or fallback), sniffing dimensions.
   */
  const fetchSingleMeme = useCallback(async (retriesLeft = 3): Promise<MemeItem> => {
    try {
      const res = await fetch(`${CONFIG.apiBase}/api/random-meme`)
      if (!res.ok) throw new Error(`HTTP error ${res.status}`)

      const data = await res.json()
      const item = data?.meme || data

      if (item && item.url) {
        const id = String(item.id || item.url)
        if (seenIds.current.has(id) && retriesLeft > 0) {
          return await fetchSingleMeme(retriesLeft - 1)
        }
        seenIds.current.add(id)

        // Sniff image dimensions
        const dims = await sniffImageDimensions(item.url)

        return {
          id,
          url: item.url,
          title: item.title,
          rarity: item.rarity || 'Fresh Drop',
          category: item.category || 'Synced',
          naturalWidth: dims.width,
          naturalHeight: dims.height,
        }
      }
      throw new Error('Invalid meme structure')
    } catch {
      // Pick random fallback meme
      const randomFallback = FALLBACK_MEMES[Math.floor(Math.random() * FALLBACK_MEMES.length)]
      const fallbackId = `${randomFallback.url}_${Math.random().toString(36).slice(2, 6)}`
      seenIds.current.add(fallbackId)
      const dims = await sniffImageDimensions(randomFallback.url)

      return {
        id: fallbackId,
        url: randomFallback.url,
        title: randomFallback.title,
        rarity: randomFallback.rarity || 'Fresh Drop',
        category: randomFallback.category || 'Synced',
        naturalWidth: dims.width,
        naturalHeight: dims.height,
      }
    }
  }, [])

  /**
   * Background progressive prefetch of memes #3 through #7.
   */
  const startProgressivePrefetch = useCallback(async () => {
    if (isFetchingProgressiveRef.current) return
    isFetchingProgressiveRef.current = true

    while (totalFetchedRef.current < MAX_SESSION_MEMES) {
      const nextMeme = await fetchSingleMeme()
      totalFetchedRef.current += 1
      setQueue((prev) => [...prev, nextMeme])
    }

    isFetchingProgressiveRef.current = false
  }, [fetchSingleMeme])

  /**
   * Primary entry point when user clicks "HIT ME".
   * Eagerly fetches meme #1 and #2, immediately mounts the deck, and starts progressive background prefetch.
   */
  const handleStart = async () => {
    if (isStarted) return
    setIsStarted(true)
    setLoadingEager(true)

    // Track GA4 event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'meme_preview_click', {
        event_category: 'engagement',
        event_label: 'hit_me_button_card_stack',
      })
    }

    // Eagerly fetch first 2 memes
    const [m1, m2] = await Promise.all([fetchSingleMeme(), fetchSingleMeme()])
    totalFetchedRef.current = 2
    setQueue([m1, m2])
    setLoadingEager(false)

    // Kick off background progressive fetch for memes #3..#7
    startProgressivePrefetch()
  }

  /**
   * Card dismissed callback
   */
  const handleDismiss = useCallback((_direction: 'left' | 'right' | 'up') => {
    setTotalSwiped((prev) => prev + 1)
  }, [])

  /**
   * Image natural dimensions loaded asynchronously
   */
  const handleDimensionsLoaded = useCallback((id: string, width: number, height: number) => {
    setQueue((prev) =>
      prev.map((item) => (item.id === id ? { ...item, naturalWidth: width, naturalHeight: height } : item))
    )
  }, [])

  return (
    <section id="see-it-in-action" className="py-20 px-4 border-t border-purple/20 bg-bg relative">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Section Header */}
        <div className="sec-marker" data-rv="fade">
          <b>01</b> — LIVE MEME DROP<span className="rule"></span>
        </div>

        <div
          className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-gold text-gold text-xs font-oswald font-bold uppercase tracking-wider mb-4"
          data-rv="fade"
        >
          <Sparkles size={14} className="text-gold" />
          Live Interactive Preview
        </div>

        <h2 className="font-anton text-5xl text-text uppercase mb-2" data-rv="up">
          Live Meme Drop
        </h2>
        <p className="font-oswald text-muted text-lg mb-8" data-rv="up" style={{ transitionDelay: '100ms' }}>
          This is what gets served to your users. Tap the button.
        </p>

        {/* Live Deck Area */}
        {isStarted ? (
          loadingEager ? (
            /* Eager Prefetch Shimmer (Meme 1 & 2 loading) */
            <div
              className="w-[320px] h-[400px] border-2 border-black bg-[#1c1b1b] relative flex flex-col items-center justify-center shadow-[6px_6px_0px_#f4c300]"
              data-rv="up"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple/30 via-pink/30 to-purple/30 animate-pulse flex flex-col items-center justify-center p-6 text-center">
                <span className="font-anton text-gold text-2xl tracking-wider uppercase animate-bounce mb-2">
                  Dropping Capsule...
                </span>
                <span className="font-oswald text-muted text-xs uppercase tracking-widest">
                  Decrypting live card stack
                </span>
              </div>
            </div>
          ) : totalSwiped >= MAX_SESSION_MEMES ? (
            /* Silent 7-Swipe Completed: Deck is clear */
            <div
              className="w-[320px] h-[360px] border-2 border-purple bg-surface p-8 flex flex-col items-center justify-center text-center shadow-[6px_6px_0px_#f4c300]"
              data-rv="up"
            >
              <span className="font-anton text-3xl text-gold uppercase mb-3">
                All 7 Memes Dropped
              </span>
              <p className="font-oswald text-muted text-sm leading-relaxed mb-6">
                You've experienced the full web stack. Download the official app for unlimited random drops and your personal Meme Vault.
              </p>
              <a
                href={CONFIG.getPlayStoreUrl('web_preview_deck_end_cta')}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-button-primary px-6 py-3 text-sm flex items-center gap-2"
                data-cursor
              >
                <Download size={16} />
                Get Meme Capsule
              </a>
            </div>
          ) : (
            /* Active 4-Card 3D Perspective Deck */
            <div className="min-h-[420px] flex items-center justify-center py-4">
              <MemeStack
                queue={queue}
                totalSwiped={totalSwiped}
                maxTotalMemes={MAX_SESSION_MEMES}
                onDismiss={handleDismiss}
                onDimensionsLoaded={handleDimensionsLoaded}
              />
            </div>
          )
        ) : (
          {/* Pre-click Resting State (Prerender-safe, styled to match reference specification) */}
          <div className="flex flex-col items-center">
            <div
              className="w-[300px] h-[400px] sm:w-[340px] sm:h-[440px] border-2 border-purple bg-[#121212] relative flex flex-col justify-between shadow-[8px_8px_0px_#f4c300] cursor-pointer group transition-all duration-300"
              onClick={handleStart}
              data-cursor
              data-rv="up"
              style={{ transitionDelay: '300ms' }}
            >
              {/* Main Interior Content */}
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                {/* Icon Box with Gold Border & Purple Shadow */}
                <div className="w-16 h-16 bg-[#1a1a1a] border-2 border-gold flex items-center justify-center shadow-[4px_4px_0px_#9b30ff] mb-4 group-hover:rotate-6 transition-transform">
                  <Sparkles size={28} className="text-gold" />
                </div>

                {/* Primary Title */}
                <h3 className="font-anton text-gold text-3xl sm:text-4xl uppercase tracking-wider mb-2">
                  CAPSULE SEALED
                </h3>

                {/* Subtitle Description */}
                <p className="font-oswald text-[#888888] text-xs sm:text-sm text-center max-w-[260px] leading-relaxed mb-6">
                  10 unhinged memes primed in memory. Tap below to dispense your first drop.
                </p>

                {/* Internal Action Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleStart()
                  }}
                  className="bg-gold text-black font-anton uppercase text-base tracking-wider px-6 py-2.5 border-2 border-black shadow-[4px_4px_0px_#9b30ff] flex items-center justify-center gap-2 hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
                  data-cursor
                >
                  <Sparkles size={16} className="text-black" />
                  OPEN CAPSULE
                </button>
              </div>

              {/* Bottom Card Bar */}
              <div className="w-full border-t border-purple/60 px-4 py-3 text-left bg-[#141414]">
                <span className="font-anton text-gold text-sm uppercase tracking-wide">
                  Ready to Dispense
                </span>
              </div>
            </div>

            {/* External OPEN CAPSULE Button (Centered below card) */}
            <button
              onClick={handleStart}
              className="bg-gold text-black font-anton uppercase text-xl sm:text-2xl tracking-wider px-10 py-3.5 border-2 border-black shadow-[5px_5px_0px_#9b30ff] flex items-center justify-center gap-2.5 mt-8 hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
              data-cursor
              data-rv="up"
              style={{ transitionDelay: '400ms' }}
            >
              <Sparkles size={20} className="text-black" />
              OPEN CAPSULE
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
