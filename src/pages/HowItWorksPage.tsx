import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { HowItWorks } from '../components/HowItWorks'
import { HowItWorksDetail } from '../components/HowItWorksDetail'
import { Footer } from '../components/Footer'
import { CustomCursor } from '../components/CustomCursor'
import { GrainOverlay } from '../components/GrainOverlay'
import { Vignette } from '../components/Vignette'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useNavbarScroll } from '../hooks/useNavbarScroll'
import { CONFIG, trackInstallClick } from '../constants/config'
import playStoreBadge from '../assets/google-play-badge.svg'

export default function HowItWorksPage() {
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
        {/* ─── Page Header ─── */}
        <section className="pt-32 pb-12 px-4 bg-[#131313]">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="font-anton text-5xl md:text-7xl uppercase text-purple"
              style={{
                textShadow:
                  '4px 4px 0px #f4c300, -1px -1px 0px #f4c300, 1px -1px 0px #f4c300, -1px 1px 0px #f4c300, 1px 1px 0px #f4c300',
              }}
            >
              How Meme Capsule Works
            </h1>
            <h2 className="font-oswald font-bold text-gold text-lg uppercase tracking-wider mt-4">
              One Tap. Pure Serendipity. Zero Algorithms.
            </h2>
            <div className="border-b-2 border-gold mt-8" />
          </div>
        </section>

        {/* ─── 3-Step Experience Overview ─── */}
        <HowItWorks />

        {/* ─── High-Level Experience & Philosophy Breakdown ─── */}
        <HowItWorksDetail />

        {/* ─── Download CTA ─── */}
        <section className="py-16 px-4 bg-[#131313] border-t border-purple/20 text-center">
          <div className="max-w-md mx-auto">
            <h2 className="font-anton text-3xl text-text uppercase mb-2">Get the App</h2>
            <p className="font-oswald text-muted text-base mb-8">
              Free on Android. No account required.
            </p>
            <a
              href={CONFIG.getPlayStoreUrl('how_it_works_page')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackInstallClick('how_it_works_page')}
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

        {/* ─── Back to Home ─── */}
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
