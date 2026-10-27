import React, { useState, useEffect } from 'react'

export interface MemeItem {
  id: string
  url: string
  title?: string
  rarity?: string
  category?: string
  naturalWidth?: number
  naturalHeight?: number
}

interface MemeCardProps {
  meme?: MemeItem | null
  isFront?: boolean
  onDimensionsLoaded?: (id: string, width: number, height: number) => void
}

export function MemeCard({ meme, isFront = false, onDimensionsLoaded }: MemeCardProps) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!meme?.url) return

    // Quick check if already cached in browser
    const testImg = new Image()
    testImg.src = meme.url
    if (testImg.complete && testImg.naturalWidth > 0) {
      setLoaded(true)
      onDimensionsLoaded?.(meme.id, testImg.naturalWidth, testImg.naturalHeight)
    }
  }, [meme?.url, meme?.id, onDimensionsLoaded])

  // Watchdog timer (2.5s) to prevent permanent stuck loading state
  useEffect(() => {
    if (loaded || !meme?.url) return
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 2500)
    return () => clearTimeout(timer)
  }, [loaded, meme?.url])

  if (!meme) {
    // Placeholder shimmer card for position 3 if next item still loading
    return (
      <div className="w-full h-full bg-[#1c1b1b] border-2 border-black flex items-center justify-center relative overflow-hidden select-none">
        <div className="absolute inset-0 bg-gradient-to-r from-purple/10 via-gold/10 to-purple/10 animate-pulse" />
        <span className="font-anton text-xs text-muted/60 uppercase tracking-widest animate-pulse">
          PREFETCHING DROP...
        </span>
      </div>
    )
  }

  return (
    <div className="w-full h-full bg-[#18181b] border-2 border-black relative overflow-hidden flex flex-col items-center justify-center select-none shadow-inner">
      {/* Loading Shimmer Overlay */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-[#1c1b1b] z-20 flex flex-col items-center justify-center p-4">
          <div className="absolute inset-0 bg-gradient-to-r from-purple/20 via-pink/20 to-purple/20 animate-pulse" />
          <span className="font-anton text-gold text-sm tracking-wider uppercase relative z-10 animate-bounce">
            DECRYPTING...
          </span>
        </div>
      )}

      {/* Main Meme Image */}
      <img
        src={meme.url}
        alt={meme.title || 'Meme Capsule Drop'}
        loading={isFront ? 'eager' : 'lazy'}
        decoding="async"
        draggable={false}
        className={`w-full h-full object-contain transition-opacity duration-200 select-none pointer-events-none ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={(e) => {
          const img = e.currentTarget
          setLoaded(true)
          if (img.naturalWidth > 0 && img.naturalHeight > 0) {
            onDimensionsLoaded?.(meme.id, img.naturalWidth, img.naturalHeight)
          }
        }}
        onError={() => {
          setError(true)
          setLoaded(true)
        }}
      />

      {/* Rarity Pill */}
      <div className="absolute bottom-2.5 left-2.5 z-10 bg-pink text-[#121212] font-anton px-2.5 py-0.5 uppercase text-[11px] border border-black shadow-[2px_2px_0px_#000] tracking-wider pointer-events-none">
        {meme.rarity || 'Fresh Drop'}
      </div>
    </div>
  )
}
