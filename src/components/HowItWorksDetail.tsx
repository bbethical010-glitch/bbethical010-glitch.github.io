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
          {/* Block 1 — The Curated Collection */}
          <div
            className="border-2 border-surfaceHigh bg-surface p-6 rounded-none border-l-[3px] border-l-gold"
            data-rv="up"
            style={{ transitionDelay: '100ms' }}
          >
            <h3 className="font-anton text-xl text-gold uppercase mb-3">
              THE MEME COLLECTION
            </h3>
            <p className="font-oswald text-sm text-text leading-relaxed">
              Meme Capsule houses thousands of hand-picked memes curated from across internet
              culture. Every drop is reviewed for quality and humor before entering the capsule
              pool. When you tap HIT ME, our proprietary shuffle engine picks a completely
              unpredictable drop on the spot. No viewing history is tracked and no preferences
              are recorded — every tap is a fresh surprise.
            </p>
          </div>

          {/* Block 2 — Fresh Culture Stream */}
          <div
            className="border-2 border-surfaceHigh bg-surface p-6 rounded-none border-l-[3px] border-l-purple"
            data-rv="up"
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="font-anton text-xl text-purple uppercase mb-3">
              ALWAYS FRESH DROPS
            </h3>
            <p className="font-oswald text-sm text-text leading-relaxed">
              Alongside timeless classics, Meme Capsule continuously blends in fresh, trending
              internet humor so the pool never goes stale. Every incoming drop passes through
              multi-layer automated safety screening to keep out spoilers and inappropriate
              material, ensuring a clean, chaotic, and safe experience every time you tap.
            </p>
          </div>

          {/* Block 3 — Your Privacy */}
          <div
            className="border-2 border-surfaceHigh bg-surface p-6 rounded-none border-l-[3px] border-l-pink"
            data-rv="up"
            style={{ transitionDelay: '300ms' }}
          >
            <h3 className="font-anton text-xl text-pink uppercase mb-3">
              YOUR PRIVACY
            </h3>
            <p className="font-oswald text-sm text-text leading-relaxed">
              Meme Capsule never asks for an account, sign-up, name, email address, or phone
              number. We do not build a hidden profile of what makes you laugh. Any memes you
              save to your personal Meme Vault stay right on your device under your control,
              ready to view, share, or clear whenever you choose.
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
            does not try to maximise your time in the app. The entire product is designed
            around a single interaction: you tap once, you get a meme, you decide what to do
            with it. That is the complete feature set.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksDetail
