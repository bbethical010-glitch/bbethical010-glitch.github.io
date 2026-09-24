export function HowItWorksDetail() {
  return (
    <section className="py-20 px-4 border-t-4 border-gold bg-[#131313]">
      <div className="max-w-7xl mx-auto">
        <div className="sec-marker" data-rv="fade">
          <b>04.5</b> — UNDER THE HOOD<span className="rule" />
        </div>
        <h2 className="font-anton text-4xl md:text-5xl text-text uppercase mb-4" data-rv="up">
          How the App Actually Works
        </h2>
        <p className="font-oswald text-muted text-base mb-12 uppercase tracking-wider" data-rv="up" style={{ transitionDelay: '100ms' }}>
          The honest technical explanation — no marketing fluff.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-rv="up" style={{ transitionDelay: '200ms' }}>
          {/* Block 1 — The Meme Library */}
          <div className="border-2 border-surfaceHigh bg-surface p-6 rounded-none border-l-[3px] border-l-gold">
            <h3 className="font-anton text-xl text-gold uppercase mb-4">The Meme Library</h3>
            <p className="font-oswald text-sm text-text leading-relaxed">
              Meme Capsule maintains a library of over 5,000 curated meme images stored
              in Cloudflare's global CDN. Every image in the library has been manually
              reviewed before being added. When you tap HIT ME, the app selects a
              completely random image from this library and displays it immediately.
              No viewing history is tracked. No preferences are recorded. Every tap is
              a fresh random draw from the full collection.
            </p>
          </div>

          {/* Block 2 — The Reddit Feed */}
          <div className="border-2 border-surfaceHigh bg-surface p-6 rounded-none border-l-[3px] border-l-purple">
            <h3 className="font-anton text-xl text-purple uppercase mb-4">The Reddit Feed</h3>
            <p className="font-oswald text-sm text-text leading-relaxed">
              Every third meme served by Meme Capsule is fetched live from Reddit's top
              meme communities including r/memes and r/dankmemes. Before delivery, the
              app automatically inspects every Reddit meme for NSFW flags and spoiler
              tags. Any meme flagged as NSFW or marked as a spoiler is dropped and
              replaced with a meme from the curated library instead. This ensures the
              Reddit integration never delivers inappropriate content.
            </p>
          </div>

          {/* Block 3 — Your Data */}
          <div className="border-2 border-surfaceHigh bg-surface p-6 rounded-none border-l-[3px] border-l-pink">
            <h3 className="font-anton text-xl text-pink uppercase mb-4">Your Data</h3>
            <p className="font-oswald text-sm text-text leading-relaxed">
              Meme Capsule does not require an account. It does not collect your name,
              email address, phone number, location, or any personal identifier.
              Anonymous usage analytics are collected via Google Analytics to understand
              general usage patterns. Your Meme Vault is stored locally on your device
              and is never uploaded to any server. You can delete all local data by
              uninstalling the app.
            </p>
          </div>
        </div>

        {/* Philosophy block */}
        <div className="bg-surfaceHigh border-l-4 border-gold p-6 mt-8 rounded-none" data-rv="up" style={{ transitionDelay: '300ms' }}>
          <span className="font-oswald text-[11px] font-semibold uppercase tracking-[0.2em] text-gold block mb-3">
            THE PHILOSOPHY
          </span>
          <p className="font-oswald text-base text-text leading-relaxed">
            Meme Capsule does not use a recommendation algorithm. It does not show you
            more of what you have liked before. It does not build a profile of your
            preferences. It does not try to maximise your time in the app. The entire
            product is designed around a single interaction: you tap once, you get a
            meme, you decide what to do with it. That is the complete feature set.
          </p>
        </div>
      </div>
    </section>
  )
}
