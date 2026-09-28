import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Users, Mail, Construction } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { CustomCursor } from '../components/CustomCursor'
import { GrainOverlay } from '../components/GrainOverlay'
import { Vignette } from '../components/Vignette'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useNavbarScroll } from '../hooks/useNavbarScroll'
import { CONFIG, trackInstallClick } from '../constants/config'
import playStoreBadge from '../assets/google-play-badge.svg'

export default function TeamPage() {
  useScrollReveal()
  const { isHidden, isStuck } = useNavbarScroll()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Meet the Team (In Progress) — Meme Capsule'
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
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold text-bg font-bold font-oswald text-xs uppercase tracking-widest border border-black shadow-[2px_2px_0px_#000] mb-6" data-rv="fade">
              <Construction size={14} className="text-bg animate-pulse" />
              <span>IN PROGRESS</span>
            </div>

            <h1
              className="font-anton text-5xl md:text-7xl uppercase text-purple"
              style={{
                textShadow:
                  '4px 4px 0px #f4c300, -1px -1px 0px #f4c300, 1px -1px 0px #f4c300, -1px 1px 0px #f4c300, 1px 1px 0px #f4c300',
              }}
            >
              Meet the Team
            </h1>
            <h2 className="font-oswald font-bold text-gold text-lg uppercase tracking-wider mt-4">
              In Progress — The People Behind Meme Capsule
            </h2>
            <div className="border-b-2 border-gold mt-8" />
          </div>
        </section>

        {/* ─── Main Content Card ─── */}
        <section className="py-16 px-4 bg-[#131313]">
          <div className="max-w-3xl mx-auto" data-rv="up">
            <div
              className="border-2 border-purple bg-surface p-8 md:p-12 relative"
              style={{ boxShadow: '6px 6px 0px #f4c300' }}
            >
              {/* Corner Accent */}
              <div className="flex items-center gap-3 mb-6 border-b-2 border-purple/30 pb-4">
                <div className="w-12 h-12 bg-surfaceHigh border-2 border-purple flex items-center justify-center text-purple">
                  <Users size={24} />
                </div>
                <div>
                  <span className="font-oswald text-[11px] font-semibold uppercase tracking-[0.2em] text-gold block">
                    TEAM DIRECTORY
                  </span>
                  <h3 className="font-anton text-2xl text-text uppercase">
                    Pratham Pandey and team
                  </h3>
                </div>
              </div>

              <div className="font-oswald text-text text-base md:text-lg leading-relaxed space-y-4">
                <p>
                  Meme Capsule is built, curated, and maintained by <strong>Pratham Pandey and team</strong>.
                </p>
                <p className="text-muted text-sm md:text-base">
                  We are currently putting together our full team profiles, leadership roles, and collaborator credits.
                  Full member bios, social links, and details will be updated right here shortly.
                </p>
              </div>

              {/* In-Progress Notification Box */}
              <div className="mt-8 border-l-4 border-gold bg-[#222] p-5">
                <span className="font-oswald text-xs font-bold uppercase tracking-widest text-gold block mb-1">
                  STATUS: IN PROGRESS
                </span>
                <p className="font-oswald text-sm text-text">
                  Team roster details are being finalized. Check back soon for the complete team showcase!
                </p>
              </div>

              {/* Contact Button */}
              <div className="mt-8 pt-6 border-t border-purple/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span className="font-oswald text-xs uppercase tracking-wider text-muted">
                  For press enquiries or collaborations:
                </span>
                <a
                  href={`mailto:${CONFIG.contactEmail}`}
                  className="neo-button-primary px-5 py-2 text-xs font-oswald uppercase tracking-wider inline-flex items-center gap-2"
                  data-cursor
                >
                  <Mail size={14} />
                  {CONFIG.contactEmail}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Download CTA ─── */}
        <section className="py-16 px-4 bg-[#131313] border-t border-purple/20 text-center">
          <div className="max-w-md mx-auto">
            <h2 className="font-anton text-3xl text-text uppercase mb-2">Get the App</h2>
            <p className="font-oswald text-muted text-base mb-8">
              Free on Android. No account required.
            </p>
            <a
              href={CONFIG.getPlayStoreUrl('team_page')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackInstallClick('team_page')}
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

        {/* ─── Navigation Back ─── */}
        <section className="py-8 px-4 bg-[#131313] border-t border-purple/20">
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/about"
              className="font-oswald font-semibold uppercase text-purple hover:text-gold transition-colors inline-flex items-center gap-2 tracking-wider"
              data-cursor
            >
              <ArrowLeft size={18} />
              BACK TO ABOUT
            </Link>
            <Link
              to="/"
              className="font-oswald text-xs uppercase text-muted hover:text-gold transition-colors tracking-widest"
              data-cursor
            >
              HOME →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
