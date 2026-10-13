import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ShieldCheck, AlertTriangle, Copyright, HeartHandshake, Eye } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { CustomCursor } from '../components/CustomCursor'
import { GrainOverlay } from '../components/GrainOverlay'
import { Vignette } from '../components/Vignette'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useNavbarScroll } from '../hooks/useNavbarScroll'

const listClassName = 'list-disc pl-6 space-y-1.5'

export default function ContentGuidelines() {
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

      <main id="main-content" role="main" className="flex-1 max-w-4xl mx-auto px-4 py-32 w-full">
        <div className="sec-marker" data-rv="fade">
          <b>STANDARDS</b> — EDITORIAL INTEGRITY &amp; SAFETY<span className="rule"></span>
        </div>

        <h1 className="font-anton text-5xl md:text-6xl text-purple uppercase mb-6 border-b-4 border-purple pb-4">
          Content Guidelines &amp; Curation Standards
        </h1>

        <div className="font-oswald text-text text-base md:text-lg leading-relaxed space-y-10">
          <div className="space-y-1 text-muted text-sm uppercase tracking-widest bg-surface p-4 border border-purple/40">
            <p>Version: 1.0 &middot; Published: October 2026</p>
            <p>Applies to: memecapsule.wtf and Meme Capsule Editorial Pipeline</p>
            <p>Contact / Safety Desk: support@memecapsule.wtf</p>
          </div>

          <p className="text-xl text-gold font-medium leading-relaxed">
            At Meme Capsule, we believe humor should be surprising, chaotic, and joyful — not malicious, predatory, or harmful. These guidelines establish the transparent standards our human curators follow to evaluate, classify, and moderate content across our digital ecosystem.
          </p>

          {/* Section 1: Core Principles */}
          <section className="space-y-4">
            <h2 className="font-anton text-2xl md:text-3xl text-gold uppercase flex items-center gap-3">
              <ShieldCheck className="text-gold" size={28} />
              1. Fundamental Curation Principles
            </h2>
            <p>
              Every meme considered for our public library is evaluated against four foundational pillars:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="border border-purple/40 bg-surface p-4">
                <h3 className="font-anton text-lg text-purple uppercase mb-1">Human Discernment</h3>
                <p className="text-sm text-muted">
                  We reject uncurated bulk scraping. Automated feeds drown users in spam. Human curators verify that each meme features authentic comedic timing and visual clarity.
                </p>
              </div>
              <div className="border border-gold/40 bg-surface p-4">
                <h3 className="font-anton text-lg text-gold uppercase mb-1">Zero Exploitation</h3>
                <p className="text-sm text-muted">
                  We curate content for genuine laughter, not outrage bait or engagement traps. We do not amplify polarizing rage-farming designed to manipulate psychological vulnerability.
                </p>
              </div>
              <div className="border border-pink/40 bg-surface p-4">
                <h3 className="font-anton text-lg text-pink uppercase mb-1">Universal Inclusivity</h3>
                <p className="text-sm text-muted">
                  Humor that punches down at marginalized or vulnerable communities fails our standards. Punching up and absurd self-deprecation are celebrated; bigotry is excluded.
                </p>
              </div>
              <div className="border border-purpleLight/40 bg-surface p-4">
                <h3 className="font-anton text-lg text-purpleLight uppercase mb-1">Preservation of Folklore</h3>
                <p className="text-sm text-muted">
                  Memes are living digital folklore. We treat images with cultural respect, archiving transformative parodies that document shared internet history.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Prohibited Content */}
          <section className="space-y-4">
            <h2 className="font-anton text-2xl md:text-3xl text-pink uppercase flex items-center gap-3">
              <AlertTriangle className="text-pink" size={28} />
              2. Strictly Prohibited Content
            </h2>
            <p>
              Our curators operate under a strict zero-tolerance policy for the following categories. Content exhibiting any of these traits is permanently excluded from our catalog:
            </p>
            <ul className={listClassName}>
              <li>
                <strong>Hate Speech &amp; Discrimination:</strong> Content promoting violence, inciting hatred, or promoting discrimination based on race, ethnicity, religion, disability, age, nationality, sexual orientation, gender identity, or caste.
              </li>
              <li>
                <strong>Targeted Harassment &amp; Doxxing:</strong> Content that singles out non-public individuals for humiliation, bullying, cyberstalking, or exposes personal phone numbers, physical addresses, or private credentials.
              </li>
              <li>
                <strong>Non-Consensual Imagery &amp; Exploitation:</strong> Any non-consensual sexual imagery, explicit adult pornography, or content involving minors.
              </li>
              <li>
                <strong>Graphic Violence &amp; Self-Harm:</strong> Gratuitous depictions of real-world violence, gore, torture, animal abuse, or promotion of suicide and self-harm.
              </li>
              <li>
                <strong>Deceptive Scams &amp; Malicious Schemes:</strong> Phishing URLs, fake cryptocurrency giveaways, fraudulent schemes, or malware distribution disguised as memes.
              </li>
              <li>
                <strong>Commercial Watermark Clutter:</strong> Obtrusive third-party commercial gambling watermarks, spam promotional banners, or advertisements disguised as humor.
              </li>
            </ul>
          </section>

          {/* Section 3: Humor Taxonomy */}
          <section className="space-y-4">
            <h2 className="font-anton text-2xl md:text-3xl text-gold uppercase flex items-center gap-3">
              <Eye className="text-gold" size={28} />
              3. Our Humor Taxonomy &amp; Categories
            </h2>
            <p>
              To ensure diversity across random drops, our curators tag and balance content across recognized comedic modes:
            </p>
            <ul className={listClassName}>
              <li><strong>Relatable &amp; Observational:</strong> Humor drawn from universal daily struggles, workplace oddities, family dynamics, and social quirks.</li>
              <li><strong>Surreal &amp; Absurdist:</strong> Non-sequiturs, unexpected twists, linguistic nonsense, and abstract visual juxtapositions.</li>
              <li><strong>Self-Deprecating &amp; Anti-Humor:</strong> Jokes that subvert punchline expectations or poke fun at personal everyday flaws without bitterness.</li>
              <li><strong>Classic Internet Nostalgia:</strong> Preserved gems from vintage web forums, early image macros, and defining cultural memes of past decades.</li>
              <li><strong>Pop Culture &amp; Tech Satire:</strong> Transformative parodies examining technology trends, movies, gaming, and societal developments.</li>
            </ul>
          </section>

          {/* Section 4: Fair Use and Intellectual Property */}
          <section className="space-y-4">
            <h2 className="font-anton text-2xl md:text-3xl text-purple uppercase flex items-center gap-3">
              <Copyright className="text-purple" size={28} />
              4. Fair Use, Copyright &amp; Takedown Procedure
            </h2>
            <p>
              Meme culture exists at the intersection of parody, commentary, and transformative fair use. We do not claim proprietary ownership over third-party source media used in community-generated memes.
            </p>
            <p>
              We honor the rights of original creators, photographers, and artists. If you are a copyright owner and wish to request removal of an image from our platform:
            </p>
            <div className="bg-surface border-2 border-purple p-5 space-y-2">
              <p className="font-anton text-lg text-gold uppercase">Expedited Takedown Protocol</p>
              <p className="text-sm text-text">
                Send an email to <a href="mailto:support@memecapsule.wtf" className="text-purple font-bold underline">support@memecapsule.wtf</a> with the subject line <strong>&ldquo;Content Removal Request&rdquo;</strong>.
              </p>
              <p className="text-sm text-muted">
                Include a screenshot or description of the image and evidence of your ownership or authorization. Our safety team reviews and resolves valid takedown notices within 24 to 48 business hours.
              </p>
            </div>
          </section>

          {/* Section 5: Community Reporting */}
          <section className="space-y-4">
            <h2 className="font-anton text-2xl md:text-3xl text-text uppercase flex items-center gap-3">
              <HeartHandshake className="text-gold" size={28} />
              5. User Feedback &amp; Community Governance
            </h2>
            <p>
              Community vigilance is integral to maintaining a safe cultural archive. Users who encounter content that violates these guidelines can flag the item directly via our contact form or in the Android mobile application via <strong>MORE (⋮) → REPORT</strong>.
            </p>
            <p>
              Flagged items are immediately reviewed by our editorial desk and temporarily removed from circulation pending investigation.
            </p>
          </section>

          {/* Navigation link back */}
          <div className="pt-8 border-t border-purple/30 flex justify-between items-center">
            <Link
              to="/editorial"
              className="font-oswald font-semibold uppercase text-purple hover:text-gold transition-colors inline-flex items-center gap-2 tracking-wider"
              data-cursor
            >
              <ArrowLeft size={18} />
              EXPLORE OUR EDITORIAL ESSAYS
            </Link>
            <Link
              to="/terms"
              className="font-oswald font-semibold uppercase text-muted hover:text-gold transition-colors text-sm"
              data-cursor
            >
              TERMS OF SERVICE →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
