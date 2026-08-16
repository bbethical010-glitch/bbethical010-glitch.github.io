import { useState, useEffect } from 'react'
import { CONFIG } from '../constants/config'

interface MemeResponse {
  url?: string;
  title?: string;
  error?: string;
}

export function MemePreview() {
  const [meme, setMeme] = useState<MemeResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchMeme = async () => {
    setLoading(true)
    setError(false)
    try {
      // Track event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'meme_preview_click', {
          event_category: 'engagement',
          event_label: 'hit_me_button'
        })
      }

      const res = await fetch(`${CONFIG.apiBase}/api/random-meme`)
      if (!res.ok) throw new Error('Failed to fetch')
      const data = await res.json()
      setMeme({
        url: data.url || 'https://via.placeholder.com/400x400/1c1b1b/9b30ff?text=MEME',
        title: data.title || 'Random Meme'
      })
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMeme()
  }, [])

  return (
    <section id="see-it-in-action" className="py-20 px-4 border-t-4 border-purple bg-bg">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="font-anton text-5xl text-text uppercase mb-2">Live Meme Drop</h2>
        <p className="font-oswald text-muted text-lg mb-12">This is what gets served to your users. Tap the button.</p>

        <div className="w-full max-w-[400px] border-2 border-purple bg-[#1c1b1b] relative flex flex-col" style={{ boxShadow: '6px 6px 0px #f4c300' }}>
          <div className="w-full aspect-[4/5] relative bg-[#131313] flex items-center justify-center overflow-hidden">
            {loading ? (
              <div className="absolute inset-0 bg-gradient-to-r from-purple to-pink opacity-20 animate-pulse"></div>
            ) : error ? (
              <div className="text-center p-4">
                <div className="font-anton text-3xl text-pink uppercase mb-4">Something broke.</div>
                <button onClick={fetchMeme} className="neo-button-primary px-6 py-2">Retry</button>
              </div>
            ) : meme ? (
              <>
                <img src={meme.url} alt="Random meme" className="w-full h-full object-cover" />
                <div className="absolute bottom-2 left-2 bg-pink text-bg font-anton px-2 py-1 uppercase text-sm border-2 border-surface">
                  Fresh Drop
                </div>
              </>
            ) : null}
          </div>
          {meme && !loading && !error && (
            <div className="p-4 border-t-2 border-purple bg-[#1c1b1b]">
              <div className="font-oswald font-bold text-gold truncate text-left text-lg">{meme.title}</div>
            </div>
          )}
        </div>

        <button 
          onClick={fetchMeme} 
          disabled={loading}
          className="neo-button-primary mt-12 px-12 py-4 text-2xl"
        >
          {loading ? 'Dropping...' : 'HIT ME'}
        </button>

        <p className="font-oswald text-muted text-xs mt-4 uppercase tracking-wide">
          Fetching from our live backend — these are the actual memes in the app
        </p>
      </div>
    </section>
  )
}
