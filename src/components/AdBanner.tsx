import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

interface AdBannerProps {
  slot?: string
  className?: string
}

export function AdBanner({ slot = '6291908699', className = '' }: AdBannerProps) {
  const adRef = useRef<HTMLModElement>(null)
  const isPushed = useRef(false)

  useEffect(() => {
    if (isPushed.current) return

    try {
      if (typeof window !== 'undefined' && adRef.current) {
        if (!adRef.current.getAttribute('data-adsbygoogle-status')) {
          (window.adsbygoogle = window.adsbygoogle || []).push({})
          isPushed.current = true
        }
      }
    } catch (e) {
      // Gracefully handle ad-blocker or load error
      console.warn('AdSense slot initialization:', e)
    }
  }, [])

  return (
    <div className={`w-full max-w-xl mx-auto my-6 text-center overflow-hidden ${className}`}>
      <span className="font-oswald text-[10px] text-[#a8a29e] uppercase tracking-widest block mb-1" style={{ color: '#a8a29e' }}>
        Advertisement
      </span>
      {/* meme1 ad slot */}
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2093403233028868"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
