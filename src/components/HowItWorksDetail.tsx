export function HowItWorksDetail() {
  return (
    <section className="py-20 px-4 border-t-4 border-gold bg-[#131313]">
      <div className="max-w-7xl mx-auto">
        <div className="sec-marker" data-rv="fade">
          <b>04</b> — INSIDE THE CAPSULE<span className="rule"></span>
        </div>

        <h2
          className="font-anton text-4xl md:text-5xl text-text uppercase mb-3 text-center"
          data-rv="up"
        >
          HOW THE APP ACTUALLY WORKS
        </h2>
        <p
          className="font-oswald text-muted text-base md:text-lg uppercase tracking-wider text-center mb-12"
          data-rv="up"
        >
          BUILT FOR INSTANT LAUGHS — ZERO ALGORITHMS, ZERO DOOMSCROLLING.
        </p>

        {/* Three Content Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Block 1 — 12-Meme Rolling FIFO Engine */}
          <div
            className="border-2 border-surfaceHigh bg-surface p-6 rounded-none border-l-[3px] border-l-gold"
            data-rv="up"
            style={{ transitionDelay: '100ms' }}
          >
            <h3 className="font-anton text-xl text-gold uppercase mb-3">
              12-MEME ROLLING FIFO ENGINE
            </h3>
            <p className="font-oswald text-sm text-text leading-relaxed">
              Meme Capsule runs a high-performance 12-meme rolling FIFO prefetch engine.
              As you browse, reaching a 60%–70% stack consumption trigger silently enqueues
              the next batch in the background. Images are decoded in streaming fashion,
              eliminating loading screens and full-stack pauses so your next laugh is always ready.
            </p>
          </div>

          {/* Block 2 — Unobstructed UI & 4-Column Bar */}
          <div
            className="border-2 border-surfaceHigh bg-surface p-6 rounded-none border-l-[3px] border-l-purple"
            data-rv="up"
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="font-anton text-xl text-purple uppercase mb-3">
              4-COLUMN CTA &amp; FLUSH SHARE RIBBON
            </h3>
            <p className="font-oswald text-sm text-text leading-relaxed">
              The Meme Card is completely unobstructed with zero floating button clutter.
              Below it sits a tactile 4-column Neo-Brutalist bar: LIKE (#FF2A85), VAULT (#A855F7),
              PIN (#FACC15), and MORE ⋮ (#00E5FF). Sharing to WhatsApp or Instagram triggers an
              Instagram-style flush draggable Share Sheet Ribbon with active session retention.
            </p>
          </div>

          {/* Block 3 — In-App Data Erasure */}
          <div
            className="border-2 border-surfaceHigh bg-surface p-6 rounded-none border-l-[3px] border-l-pink"
            data-rv="up"
            style={{ transitionDelay: '300ms' }}
          >
            <h3 className="font-anton text-xl text-pink uppercase mb-3">
              ZERO ACCOUNTS &amp; HISTORY ERASURE
            </h3>
            <p className="font-oswald text-sm text-text leading-relaxed">
              No account, email, or login is ever required. With built-in App Settings,
              users have granular self-serve data controls: Delete All App History &amp; Data,
              Clear Past Viewing History &amp; Stats, and Empty Vault &amp; Mood Boards.
              Everything stays on your device under your total control.
            </p>
          </div>
        </div>

        {/* Philosophy Box */}
        <div
          className="bg-surfaceHigh border-l-4 border-gold p-6 mt-8 rounded-none"
          data-rv="up"
          style={{ transitionDelay: '400ms' }}
        >
          <span className="font-oswald text-[11px] uppercase tracking-widest text-gold font-semibold block mb-2">
            THE PHILOSOPHY
          </span>
          <p className="font-oswald text-base text-text leading-relaxed">
            Meme Capsule does not use a recommendation algorithm. It does not show you more of
            what you have liked before. It does not build a profile of your preferences. It
            does not try to maximise your screen time. The entire product is designed
            around a single interaction: you tap once, you get a meme, you decide what to do
            with it. That is the complete feature set.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksDetail
