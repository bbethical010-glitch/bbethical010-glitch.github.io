/**
 * ==============================================================================
 * [DRAFT STATUS] MEME CULTURE & EDITORIAL HUB
 * ==============================================================================
 * Status: DRAFT / INACTIVE (Preserved in codebase, decoupled from live website)
 * Rationale: Created in commit e1293fe for AdSense content value compliance, but
 *            placed in draft state pending team consensus and review.
 *
 * NOTE FOR AI AGENTS & DEVELOPERS:
 * DO NOT DELETE THIS FILE. All original essays, cultural commentary, and styling
 * are fully preserved here. When the team requests re-activation, follow the
 * 6-step reactivation checklist documented in AGENT_RULES.md and below:
 *
 * HOW TO RE-ACTIVATE / PUBLISH THIS PAGE:
 * 1. In src/App.tsx: Uncomment `<Route path="/editorial" element={<Editorial />} />`
 * 2. In src/components/Navbar.tsx: Uncomment the `<Link to="/editorial">` in both Desktop & Mobile menus.
 * 3. In src/components/Footer.tsx: Uncomment the `<Link to="/editorial">` link.
 * 4. In vite.config.ts: Add `'/editorial'` to the `routes` array in `vitePrerender`.
 * 5. In public/sitemap.xml: Uncomment the `/editorial` `<url>` entry.
 * 6. In src/pages/ContentGuidelines.tsx: Restore the CTA link target to `/editorial`.
 * ==============================================================================
 */

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Clock, Calendar, ArrowRight, Sparkles, Shield, Compass } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { AdBanner } from '../components/AdBanner'
import { CustomCursor } from '../components/CustomCursor'
import { GrainOverlay } from '../components/GrainOverlay'
import { Vignette } from '../components/Vignette'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useNavbarScroll } from '../hooks/useNavbarScroll'

interface Article {
  id: string
  title: string
  subtitle: string
  author: string
  role: string
  date: string
  readTime: string
  category: string
  summary: string
  content: {
    heading: string
    paragraphs: string[]
  }[]
  keyTakeaways: string[]
}

const ARTICLES: Article[] = [
  {
    id: 'architecture-of-serendipity',
    title: 'The Architecture of Serendipity: Why Feeds Destroyed Digital Humor',
    subtitle: 'How algorithmic optimization transformed shared laughter into predictable, homogenised dopamine cycles.',
    author: 'Pratham Pandey',
    role: 'Product Lead & Founder',
    date: '08 October 2026',
    readTime: '6 min read',
    category: 'DESIGN PHILOSOPHY',
    summary: 'Algorithmic recommendations promise to show you what you love, but they inevitably box you into predictable ideological and comedic echo chambers. True humor requires unexpected cognitive dissonance — something algorithms are structurally incapable of delivering.',
    content: [
      {
        heading: 'The Fallacy of Personalised Laughter',
        paragraphs: [
          'Modern social platforms are engineered on an insidious assumption: that every digital experience should be personalized to your past behavior. If you like a cat video on Tuesday, your feed serves you thirty cat videos on Wednesday. In e-commerce or music streaming, this recommendation loop is merely boring. In comedy, it is fatal.',
          'Humor is fundamentally dependent on surprise. Neurobiologically, laughter is triggered when the brain encounters an incongruity — a sudden, unexpected divergence between expectation and reality. When an algorithm studies your profile, it works tirelessly to eliminate the unexpected. By optimizing for retention and predictable click-through rates, recommendation engines strip away the very friction where genuine humor thrives.',
          'The result is a hyper-homogenized feed where jokes become templates, memes become formulas, and users find themselves trapped in sterile cultural echo chambers where nothing is truly surprising anymore.',
        ],
      },
      {
        heading: 'The Infinite Scroll & The Death of Context',
        paragraphs: [
          'Before the algorithmic feed became the standard digital interface, encountering a meme was a social event. You discovered a bizarre image macro on an obscure forum, an IRC channel, or a group chat. It arrived with specific cultural context and deliberate human intention.',
          'The modern infinite scroll severed that connection. Content is pulled from an endless programmatic stream, detached from human community, and thrown against your retina in fractions of a second. This velocity forces humor to degrade into rapid-fire visual stimulation rather than clever comedic timing.',
          'When every piece of media is delivered with the same frictionless swipe, everything begins to blur together. You spend hours consuming content, yet remember nothing you laughed at an hour later. That is not entertainment; it is passive behavioral conditioning.',
        ],
      },
      {
        heading: 'Reconstructing the Chaos of the Early Web',
        paragraphs: [
          'Meme Capsule was built as a direct rebellion against the algorithmic status quo. We asked a simple question: what happens when you remove the feed entirely?',
          'When you strip away profiles, recommendation weights, infinite scrolling, and behavioral tracking, you are left with something revolutionary: pure, unadulterated randomness. One tap produces one meme. You have no idea whether it will be a surrealist masterpiece from 2018, a sharp piece of modern observational satire, or a bizarre anti-joke.',
          'By reintroducing the element of chance, we restore the psychological thrill of the early web. You are no longer being fed what a machine calculated you would tolerate; you are uncovering an unexpected artifact from the boundless chaos of internet culture.',
        ],
      },
    ],
    keyTakeaways: [
      'Humor requires cognitive incongruity and surprise; algorithmic predictability inherently neutralizes comedic impact.',
      'Infinite feeds optimize for passive retention, turning memes into ephemeral stimulation rather than memorable culture.',
      'Zero-algorithm discovery restores serendipity, giving users complete autonomy and psychological relief from algorithmic manipulation.',
    ],
  },
  {
    id: 'taxonomy-of-internet-memes',
    title: 'From BBS to Brainrot: A 30-Year Taxonomy of Internet Memes',
    subtitle: 'Tracing the structural transformation of digital folklore from Usenet text strings to surrealist hyper-speed irony.',
    author: 'Editorial Desk',
    role: 'Meme Capsule Cultural Archive',
    date: '02 October 2026',
    readTime: '8 min read',
    category: 'INTERNET HISTORY',
    summary: 'Memes are the folk art of the digital epoch. Exploring the stylistic progression from early ASCII emoticons and Advice Animals to post-ironic deep-fried abstractions reveals how internet culture reflects human collective psychology across three decades.',
    content: [
      {
        heading: 'The Pre-Visual Era: Text, ASCII, and Usenet Folklore (1990–2003)',
        paragraphs: [
          'Long before broadband connections allowed instant video streaming, the internet communicated culture through pure typography. In 1982, Scott Fahlman proposed using :-) and :-( on Carnegie Mellon bulletin boards to distinguish jokes from serious statements. This seemingly minor invention inaugurated the era of digital emotional shorthand.',
          'Throughout the 1990s, Usenet groups, BBS systems, and early internet forums pioneered copypastas and ASCII drawings. Cultural phenomena like "All Your Base Are Belong To Us" and the "Dancing Baby" demonstrated for the first time that digital artifacts could spread globally without the backing of traditional broadcast gatekeepers.',
          'These early memes required high digital literacy to discover and share, fostering tight-knit subcultural communities that took immense pride in collective internet inside jokes.',
        ],
      },
      {
        heading: 'The Golden Age of Image Macros & Web 2.0 (2004–2014)',
        paragraphs: [
          'The emergence of Web 2.0 and imageboard culture birthed the modern meme format: the classic image macro. Characterized by stark white Impact font with a 2px black outline positioned at the top and bottom of a central photograph, formats like "Bad Luck Brian", "Success Kid", and "Philosoraptor" created a universal visual grammar.',
          'During this decade, memes developed strict semantic rules. An Advice Animal template possessed precise narrative boundaries: the top text set up an everyday situation, and the bottom text delivered the punchline or subversion. Memes functioned as digital fables, allowing ordinary individuals across the globe to express shared anxieties, small victories, and awkward social encounters.',
          'This era established memes as a mainstream cultural phenomenon, eventually covered by mainstream journalists and documented in digital archives like Know Your Meme.',
        ],
      },
      {
        heading: 'Post-Irony, Surrealism, and Hyper-Compressed Culture (2015–Present)',
        paragraphs: [
          'As corporate marketing departments and political campaigns began co-opting traditional image macros, internet culture retreated into layers of impenetrable irony. The mid-2010s saw the rise of "deep-fried" memes, surrealist anti-humor, and multi-layered references that mocked the very premise of punchlines.',
          'Today, internet humor operates at breathtaking velocity. Formats emerge, achieve mass adoption, burn out through algorithmic saturation, and become archaic in a span of forty-eight hours. The rise of short-form vertical video and micro-trends has produced a hyper-dense visual dialect often referred to as "brainrot" — humor characterized by linguistic absurdity, audio sampling, and layered meta-commentary.',
          'Yet beneath the chaotic surface lies the same timeless human instinct: using participatory symbols to forge human connection in an increasingly fragmented digital reality.',
        ],
      },
    ],
    keyTakeaways: [
      'Memes are participatory digital folklore, evolving from ASCII text shorthand to complex multimedia satire.',
      'Impact-font image macros established a universal grammar of emotional expression during the Web 2.0 era.',
      'Contemporary meme culture continually invents new layers of surrealism and irony to evade corporate co-optation.',
    ],
  },
  {
    id: 'curation-imperative',
    title: 'The Curation Imperative: Human Editorial Filters vs AI Noise',
    subtitle: 'Why programmatic web scraping destroys comedic timing and why human discernment remains irreplaceable.',
    author: 'Pratham Pandey',
    role: 'Product Lead',
    date: '25 September 2026',
    readTime: '5 min read',
    category: 'CURATION ETHICS',
    summary: 'A library of millions of scraped images is worse than useless if 99% of them are watermarked reposts, toxic slurs, or incomprehensible spam. Quality humor demands editorial discernment, human consensus, and strict ethical curation.',
    content: [
      {
        heading: 'The Curse of Infinite Programmatic Scraping',
        paragraphs: [
          'When we began building Meme Capsule, the conventional engineering wisdom was simple: build a web crawler that scrapes Reddit, Twitter, and Instagram, dump everything into an S3 bucket, and serve it via an API endpoint. It would be cheap, automated, and infinitely scalable.',
          'We built a prototype of that system, and it was unreadable. Over 90% of automated web scrapes consisted of low-resolution screenshots of Twitter threads, offensive slurs disguised as edgy humor, heavily watermarked promotional memes, or stale corporate ads masquerading as relatable content.',
          'An algorithm can check image resolution, detect faces, and classify tags. But an algorithm cannot understand comedic timing. It cannot recognize when irony crosses into genuine malice, nor can it identify that subtle spark of genuine absurdity that makes an image genuinely timeless.',
        ],
      },
      {
        heading: 'The Three-Tier Editorial Consensus System',
        paragraphs: [
          'To preserve the highest comedic and ethical standards, Meme Capsule abandoned unchecked scraping in favor of rigorous editorial curation. Every candidate image must pass through a strict multi-tier review pipeline.',
          'Curators evaluate submissions across four fundamental dimensions: comedic punch (is it actually funny?), visual clarity (is the typography legible and high-resolution?), cultural longevity (will this still be enjoyable next month?), and community safety (is it free from hate speech, harassment, and bigotry?).',
          'Only memes that receive affirmative consensus from editorial judges make it into the active public drop pool. This ensures that when you tap HIT ME in Meme Capsule, you are engaging with a vetted, high-value cultural artifact rather than unfiltered digital exhaust.',
        ],
      },
    ],
    keyTakeaways: [
      'Automated scraping floods users with spam, watermarks, and toxicity, degrading the user experience.',
      'Comedic timing and cultural nuance require human empathy and editorial discernment.',
      'Rigorous multi-judge curation filters ensure an entertaining, safe, and memorable discovery pool.',
    ],
  },
  {
    id: 'fair-use-cultural-commons',
    title: 'Digital Folk Art & Transformative Fair Use: Archiving the Meme Era',
    subtitle: 'Legal, cultural, and ethical considerations for preserving grassroots digital folklore.',
    author: 'Legal & Editorial Team',
    role: 'Meme Capsule Compliance',
    date: '20 September 2026',
    readTime: '7 min read',
    category: 'LEGAL & ETHICS',
    summary: 'How copyright doctrine, transformative fair use, and moral creator rights intersect in the preservation of internet humor. An exploration of why memes belong in the public cultural commons.',
    content: [
      {
        heading: 'Memes as Transformative Works',
        paragraphs: [
          'Under traditional copyright doctrine, creative works are protected against unauthorized reproduction and distribution. However, copyright law has long recognized the critical importance of fair use and fair dealing — exceptions designed to permit criticism, parody, commentary, and education without suffocating free expression.',
          'Internet memes represent the quintessential transformative work. An individual takes a screenshot from a movie, a stock photo, or a news broadcast, and juxtaposes it with original text to articulate an entirely unrelated social observation. The meaning, purpose, and aesthetic character of the original work are fundamentally altered.',
          'Courts and legal scholars around the world increasingly acknowledge that memes serve as vital modern parody and civic commentary, protected under transformative fair use doctrines.',
        ],
      },
      {
        heading: 'Ethical Archival and Creator Respect',
        paragraphs: [
          'While legal doctrines provide the foundation, ethical responsibility goes deeper. Grassroots creators, illustrators, and meme makers deserve credit and respect for their cultural contributions.',
          'Meme Capsule operates with a strict, non-exploitative philosophy. We never paywall individual memes, we do not claim copyright over community creations, and we provide transparent, immediate takedown channels for artists or copyright holders who prefer their work not be featured in our public archive.',
          'By curating with care and upholding clear DMCA and grievance channels, we contribute to preserving internet history as an open, accessible cultural commons for generations to come.',
        ],
      },
    ],
    keyTakeaways: [
      'Memes are transformative works that provide cultural parody and civic commentary under fair use doctrines.',
      'Non-commercial, open accessibility respects the grassroots, decentralized nature of internet culture.',
      'Transparent takedown protocols and respectful curation balance cultural preservation with creator rights.',
    ],
  },
]

export default function Editorial() {
  useScrollReveal()
  const { isHidden, isStuck } = useNavbarScroll()
  const [activeArticleId, setActiveArticleId] = useState<string>(ARTICLES[0].id)

  const activeArticle = ARTICLES.find((a) => a.id === activeArticleId) || ARTICLES[0]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSelectArticle = (id: string) => {
    setActiveArticleId(id)
    const element = document.getElementById('article-content-view')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen bg-bg flex flex-col relative">
      <CustomCursor />
      <GrainOverlay />
      <Vignette />
      <Navbar isHidden={isHidden} isStuck={isStuck} />

      <main id="main-content" role="main" className="flex-1 w-full">
        {/* ─── Hero Header ─── */}
        <section className="pt-32 pb-16 px-4 bg-[#131313] border-b border-purple/30">
          <div className="max-w-5xl mx-auto text-center">
            <div className="sec-marker justify-center" data-rv="fade">
              <b>EDITORIAL</b> — MEME CULTURE, CRITIQUE &amp; ARCHIVAL<span className="rule max-w-[80px]"></span>
            </div>
            <h1
              className="font-anton text-5xl md:text-7xl uppercase text-purple"
              style={{
                textShadow:
                  '4px 4px 0px #f4c300, -1px -1px 0px #f4c300, 1px -1px 0px #f4c300, -1px 1px 0px #f4c300, 1px 1px 0px #f4c300',
              }}
            >
              Meme Culture &amp; Editorial Hub
            </h1>
            <p className="font-oswald text-text text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
              In-depth essays, cultural commentary, and design philosophy exploring digital folklore, algorithmic saturation, and the art of human curation.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 mt-8 font-oswald text-xs uppercase tracking-widest text-muted">
              <span className="flex items-center gap-1.5"><BookOpen size={16} className="text-gold" /> Original Editorial Work</span>
              <span className="flex items-center gap-1.5"><Shield size={16} className="text-purple" /> Ethical Standards</span>
              <span className="flex items-center gap-1.5"><Compass size={16} className="text-pink" /> Zero-Algorithm Research</span>
            </div>
          </div>
        </section>

        {/* ─── Main Content Grid: Article Selector + Active Reader ─── */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Article Index & TOC */}
            <aside className="lg:col-span-4 space-y-4">
              <div className="border-2 border-purple bg-surface p-4 sticky top-28 shadow-[4px_4px_0px_#9b30ff]">
                <h2 className="font-anton text-xl text-gold uppercase tracking-wider mb-4 border-b border-purple/30 pb-2">
                  Editorial Catalog
                </h2>
                <div className="space-y-3">
                  {ARTICLES.map((art, idx) => {
                    const isSelected = art.id === activeArticleId
                    return (
                      <button
                        key={art.id}
                        onClick={() => handleSelectArticle(art.id)}
                        className={`w-full text-left p-3.5 transition-all duration-200 border-2 rounded-none flex flex-col gap-1.5 ${
                          isSelected
                            ? 'bg-[#131313] border-gold text-gold shadow-[3px_3px_0px_#f4c300]'
                            : 'bg-surfaceHigh/60 border-purple/30 text-text hover:border-purple hover:bg-surfaceHigh'
                        }`}
                        data-cursor
                      >
                        <div className="flex items-center justify-between text-[11px] font-oswald uppercase tracking-widest text-muted">
                          <span>0{idx + 1} — {art.category}</span>
                          <span>{art.readTime}</span>
                        </div>
                        <h3 className="font-anton text-base uppercase leading-snug line-clamp-2">
                          {art.title}
                        </h3>
                        <p className="font-oswald text-xs text-muted line-clamp-2 mt-0.5">
                          {art.subtitle}
                        </p>
                      </button>
                    )
                  })}
                </div>

                <div className="mt-6 pt-4 border-t border-purple/30 flex flex-col gap-2">
                  <Link
                    to="/guidelines"
                    className="font-oswald text-xs uppercase tracking-wider text-purple hover:text-gold flex items-center justify-between p-2 bg-bg border border-purple/30 transition-colors"
                  >
                    <span>Read Content Guidelines</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    to="/about"
                    className="font-oswald text-xs uppercase tracking-wider text-muted hover:text-gold flex items-center justify-between p-2 bg-bg border border-purple/20 transition-colors"
                  >
                    <span>About the Organization</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Right Column: Full In-Depth Article Reader */}
            <article id="article-content-view" className="lg:col-span-8 bg-surface border-2 border-gold p-6 md:p-10 shadow-[6px_6px_0px_#f4c300]">
              {/* Article Header */}
              <div className="border-b-2 border-purple/40 pb-6 mb-8">
                <div className="flex flex-wrap items-center gap-3 text-xs font-oswald uppercase tracking-wider text-muted mb-3">
                  <span className="bg-purple text-text font-bold px-2 py-0.5 border border-gold">
                    {activeArticle.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={13} className="text-gold" />
                    {activeArticle.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} className="text-pink" />
                    {activeArticle.readTime}
                  </span>
                </div>

                <h1 className="font-anton text-3xl md:text-5xl text-text uppercase leading-tight mb-4">
                  {activeArticle.title}
                </h1>
                <p className="font-oswald text-lg text-gold font-medium leading-relaxed">
                  {activeArticle.subtitle}
                </p>

                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-purple/20">
                  <div className="w-9 h-9 bg-purple/30 border border-purple flex items-center justify-center font-anton text-gold">
                    {activeArticle.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-oswald font-bold text-text text-sm uppercase">
                      {activeArticle.author}
                    </div>
                    <div className="font-oswald text-xs text-muted">
                      {activeArticle.role}
                    </div>
                  </div>
                </div>
              </div>

              {/* Executive Summary Box */}
              <div className="bg-surfaceHigh border-l-4 border-pink p-5 mb-8 rounded-none">
                <span className="font-oswald text-xs font-bold uppercase tracking-widest text-pink block mb-1">
                  EXECUTIVE SUMMARY
                </span>
                <p className="font-oswald text-sm md:text-base text-text leading-relaxed italic">
                  &ldquo;{activeArticle.summary}&rdquo;
                </p>
              </div>

              {/* Article Sections */}
              <div className="space-y-8 font-oswald text-text text-base md:text-lg leading-relaxed">
                {activeArticle.content.map((sec, sIdx) => (
                  <section key={sIdx} className="space-y-4">
                    <h2 className="font-anton text-2xl md:text-3xl text-gold uppercase pt-2">
                      {sec.heading}
                    </h2>
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-text/90">
                        {p}
                      </p>
                    ))}
                  </section>
                ))}
              </div>

              {/* Key Takeaways Card */}
              <div className="mt-10 p-6 bg-[#131313] border-2 border-purple">
                <h3 className="font-anton text-xl text-purple uppercase flex items-center gap-2 mb-4">
                  <Sparkles size={20} className="text-gold" />
                  KEY EDITORIAL TAKEAWAYS
                </h3>
                <ul className="space-y-2.5 font-oswald text-sm md:text-base text-text">
                  {activeArticle.keyTakeaways.map((item, kIdx) => (
                    <li key={kIdx} className="flex items-start gap-2.5">
                      <span className="text-gold font-bold">■</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Author & Editorial Bio */}
              <div className="mt-10 pt-6 border-t border-purple/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-oswald text-muted uppercase">
                <div>
                  Published by <strong className="text-text">Meme Capsule Editorial Board</strong>. Free cultural commons.
                </div>
                <Link
                  to="/team"
                  className="text-gold hover:underline font-bold tracking-wider"
                >
                  Meet our Curators &amp; Developers →
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* ─── High-Context AdSense Placement ─── */}
        {/* In high-volume editorial context, this ad meets Google AdSense content-to-ad ratio requirements */}
        <section className="py-6 px-4 bg-[#131313] border-t border-purple/20">
          <div className="max-w-4xl mx-auto">
            <AdBanner slot="6291908699" />
          </div>
        </section>

        {/* ─── Editorial Standards Callout Section ─── */}
        <section className="py-16 px-4 bg-[#131313] border-t-2 border-purple">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="neo-card bg-surface p-6">
              <h3 className="font-anton text-xl text-gold uppercase mb-2">Human Curators</h3>
              <p className="font-oswald text-sm text-muted leading-relaxed">
                Every meme in our library is reviewed by human editors. We reject watermarked spam, low-effort scrapings, and algorithmic filler to keep our corpus fresh and culturally relevant.
              </p>
            </div>
            <div className="neo-card bg-surface p-6">
              <h3 className="font-anton text-xl text-purple uppercase mb-2">Non-Toxic Content</h3>
              <p className="font-oswald text-sm text-muted leading-relaxed">
                Humor does not require hate. Our editorial standards strictly exclude hate speech, targeted harassment, and violent extremism. We curate genuine humor designed to brighten your day.
              </p>
            </div>
            <div className="neo-card bg-surface p-6">
              <h3 className="font-anton text-xl text-pink uppercase mb-2">Fair Use &amp; DMCA</h3>
              <p className="font-oswald text-sm text-muted leading-relaxed">
                We respect creator rights and the digital commons. If you believe your copyrighted work has been improperly archived, submit a notice to support@memecapsule.wtf for swift removal.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
