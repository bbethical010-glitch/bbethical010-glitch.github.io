import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Download, Copy, Check } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { CustomCursor } from '../components/CustomCursor'
import { GrainOverlay } from '../components/GrainOverlay'
import { Vignette } from '../components/Vignette'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useNavbarScroll } from '../hooks/useNavbarScroll'
import { CONFIG, trackInstallClick } from '../constants/config'
import logoWebp from '../assets/logo.webp'
import logoImg from '../assets/logo.png'
import playStoreBadge from '../assets/google-play-badge.svg'

const DESCRIPTIONS = [
  {
    label: 'SHORT (UNDER 10 WORDS)',
    text: 'Random memes. One tap. No algorithm.',
  },
  {
    label: 'MEDIUM (UNDER 30 WORDS)',
    text: 'Meme Capsule is a free Android app that delivers hand-curated random memes with one tap. No feed, no algorithm, just pure meme chaos.',
  },
  {
    label: 'LONG (UNDER 80 WORDS)',
    text: 'Meme Capsule is a free entertainment app for Android that randomly delivers curated memes from a library of thousands of hand-picked images, supplemented by a live Reddit meme feed. Users tap one button to receive a meme — there is no algorithm, no personalisation, and no endless scrolling. Memes can be saved to a personal vault, shared to any messaging app, or downloaded directly to the phone gallery.',
  },
]

const QUICK_FACTS = [
  { label: 'PLATFORM', value: 'Android' },
  { label: 'DEVELOPER', value: 'Pratham Pandey' },
  { label: 'LAUNCHED', value: '2026' },
  { label: 'PACKAGE ID', value: 'com.meme.capsule' },
  { label: 'PRICE', value: 'Free' },
  { label: 'CATEGORY', value: 'Entertainment' },
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea')
      textarea.value = text
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="neo-button-primary px-4 py-1.5 text-xs flex items-center gap-1.5 whitespace-nowrap"
      data-cursor
    >
      {copied ? (
        <>
          <Check size={12} />
          COPIED ✓
        </>
      ) : (
        <>
          <Copy size={12} />
          COPY
        </>
      )}
    </button>
  )
}

export default function About() {
  useScrollReveal()
  const { isHidden, isStuck } = useNavbarScroll()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-bg flex flex-col relative">
      <CustomCursor />
      <GrainOverlay />
      <Vignette />
      <Navbar isHidden={isHidden} isStuck={isStuck} />
      <main id="main-content" role="main" className="flex-1 w-full">

        {/* ─── Section 1 — Page Header ─── */}
        <section className="pt-32 pb-12 px-4 bg-[#131313]">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="font-anton text-5xl md:text-7xl uppercase text-purple"
              style={{
                textShadow: '4px 4px 0px #f4c300, -1px -1px 0px #f4c300, 1px -1px 0px #f4c300, -1px 1px 0px #f4c300, 1px 1px 0px #f4c300',
              }}
            >
              About Meme Capsule
            </h1>
            <h2 className="font-oswald font-bold text-gold text-lg uppercase tracking-wider mt-4">
              The Story. The App. The Chaos.
            </h2>
            <div className="border-b-2 border-gold mt-8" />
          </div>
        </section>

        {/* ─── Section 2 — What Is Meme Capsule (Entity Definition Block) ─── */}
        <section className="py-16 px-4 bg-[#131313]">
          <div className="max-w-[720px] mx-auto">
            <span className="font-oswald text-[11px] font-semibold uppercase tracking-[0.2em] text-muted block mb-6">
              WHAT IS MEME CAPSULE
            </span>
            <div className="font-oswald text-text text-base leading-relaxed space-y-6">
              <p>
                Meme Capsule is a free Android application available on the Google Play Store,
                developed by Pratham Pandey and launched in 2026. It delivers random memes to
                users with a single button press. The app has no social feed, no algorithm, and
                no content personalisation of any kind. Every meme in the collection is curated
                from internet culture and filtered to ensure it is appropriate for general
                audiences.
              </p>
              <p>
                Users can save memes to a personal Meme Vault, share them directly to WhatsApp
                and other messaging apps, and download them to their phone gallery. The app also
                integrates a live feed from Reddit's top meme communities, with automatic NSFW
                and spoiler filtering applied. Meme Capsule is free of charge and supported by
                infrequent advertisements.
              </p>
              <p>
                The app is available exclusively for Android devices via the Google Play Store
                under package ID com.meme.capsule. The official website is memecapsule.wtf.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Section 3 — Quick Facts Grid ─── */}
        <section className="py-16 px-4 bg-[#131313] border-t border-purple/20">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {QUICK_FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="border-2 border-purple bg-surface rounded-none p-4 text-center"
                  style={{ boxShadow: '4px 4px 0px #f4c300' }}
                >
                  <span className="font-oswald text-[10px] font-semibold uppercase tracking-[0.2em] text-muted block mb-2">
                    {fact.label}
                  </span>
                  <span className="font-anton text-[22px] text-text block leading-tight">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Section 4 — Press Kit ─── */}
        <section className="py-16 px-4 bg-[#131313] border-t border-purple/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-anton text-4xl text-gold uppercase mb-2">Press Kit</h2>
            <p className="font-oswald text-muted text-base mb-10">
              Everything you need to write about us.
            </p>

            {/* Subsection A — One-liner descriptions */}
            <div className="space-y-4 mb-12">
              {DESCRIPTIONS.map((desc) => (
                <div
                  key={desc.label}
                  className="border-l-4 border-purple bg-surface p-4 rounded-none flex flex-col sm:flex-row sm:items-start gap-3"
                >
                  <div className="flex-1">
                    <span className="font-oswald text-[11px] font-semibold uppercase tracking-[0.2em] text-gold block mb-2">
                      {desc.label}
                    </span>
                    <p className="font-oswald text-sm text-text leading-relaxed">
                      {desc.text}
                    </p>
                  </div>
                  <div className="flex-shrink-0 self-start sm:self-center">
                    <CopyButton text={desc.text} />
                  </div>
                </div>
              ))}
            </div>

            {/* Subsection B — Brand Assets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* App Logo Card */}
              <div
                className="border-2 border-purple bg-surface rounded-none p-6"
                style={{ boxShadow: '4px 4px 0px #dd0061' }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-24 h-24 bg-[#131313] border-2 border-purple p-2">
                    <picture>
                      <source srcSet={logoWebp} type="image/webp" />
                      <img
                        src={logoImg}
                        alt="Meme Capsule App Logo"
                        className="w-full h-full object-contain"
                        width="512"
                        height="512"
                      />
                    </picture>
                  </div>
                </div>
                <span className="font-oswald font-bold uppercase text-gold text-sm tracking-wider block text-center mb-1">
                  APP LOGO
                </span>
                <span className="font-oswald text-[10px] text-muted uppercase tracking-wider block text-center mb-4">
                  WebP · PNG · 512×512px
                </span>
                <a
                  href="/logo.webp"
                  download="meme-capsule-logo.webp"
                  className="neo-button-primary w-full py-2 text-sm flex items-center justify-center gap-2"
                  data-cursor
                >
                  <Download size={14} />
                  DOWNLOAD LOGO
                </a>
              </div>

              {/* OG Image Card */}
              <div
                className="border-2 border-purple bg-surface rounded-none p-6"
                style={{ boxShadow: '4px 4px 0px #dd0061' }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-full max-w-[200px] bg-[#131313] border-2 border-purple p-1">
                    <img
                      src="/og-image.png"
                      alt="Meme Capsule OG Banner Image"
                      className="w-full h-auto object-cover"
                      width="1200"
                      height="630"
                    />
                  </div>
                </div>
                <span className="font-oswald font-bold uppercase text-gold text-sm tracking-wider block text-center mb-1">
                  BANNER / OG IMAGE
                </span>
                <span className="font-oswald text-[10px] text-muted uppercase tracking-wider block text-center mb-4">
                  PNG · 1200×630px
                </span>
                <a
                  href="/og-image.png"
                  download="meme-capsule-og-image.png"
                  className="neo-button-primary w-full py-2 text-sm flex items-center justify-center gap-2"
                  data-cursor
                >
                  <Download size={14} />
                  DOWNLOAD BANNER
                </a>
              </div>
            </div>

            {/* Subsection C — Contact */}
            <div className="border-t border-purple/20 pt-8">
              <p className="font-oswald text-text text-base">
                For press enquiries, review copies, or collaborations:{' '}
                <a
                  href={`mailto:${CONFIG.contactEmail}`}
                  className="text-purple underline-offset-4 hover:underline"
                  data-cursor
                >
                  {CONFIG.contactEmail}
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ─── Section 5 — Download CTA ─── */}
        <section className="py-16 px-4 bg-[#131313] border-t border-purple/20 text-center">
          <div className="max-w-md mx-auto">
            <h2 className="font-anton text-3xl text-text uppercase mb-2">Get the App</h2>
            <p className="font-oswald text-muted text-base mb-8">
              Free on Android. No account required.
            </p>
            <a
              href={CONFIG.getPlayStoreUrl('about_page')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackInstallClick('about_page')}
              className="inline-block transform hover:scale-[1.03] transition-transform duration-300"
              data-cursor
            >
              <img
                src={playStoreBadge}
                alt="Get it on Google Play"
                className="h-[64px] md:h-[72px] w-auto mx-auto"
                width="200"
                height="60"
              />
            </a>
          </div>
        </section>

        {/* ─── Section 6 — Back to Home ─── */}
        <section className="py-8 px-4 bg-[#131313] border-t border-purple/20">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/"
              className="font-oswald font-semibold uppercase text-purple hover:text-gold transition-colors inline-flex items-center gap-2 tracking-wider"
              data-cursor
            >
              <ArrowLeft size={18} />
              BACK TO HOME
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
