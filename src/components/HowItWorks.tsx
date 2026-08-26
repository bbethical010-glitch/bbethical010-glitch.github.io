export function HowItWorks() {
  const steps = [
    { num: '01', title: 'OPEN THE APP', desc: 'Launch Meme Capsule on your Android device' },
    { num: '02', title: 'HIT THE BUTTON', desc: 'Tap HIT ME and get a completely random meme from our collection' },
    { num: '03', title: 'REACT AND SHARE', desc: 'Like it, save it, share it, or just hit the button again for another drop' }
  ]
  return (
    <section id="how-it-works" className="py-20 px-4 border-t border-purple/20 bg-[#131313]">
      <div className="max-w-7xl mx-auto">
        <div className="sec-marker" data-rv="fade"><b>04</b> — HOW IT WORKS<span className="rule"></span></div>
        <h2 className="font-anton text-5xl text-text uppercase mb-16 text-center" data-rv="up">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="relative flex-1 w-full max-w-sm"
              data-rv="up" 
              style={{ transitionDelay: `${idx * 150}ms` }}
              data-cursor
            >
              <div className="absolute top-0 right-0 font-anton text-8xl text-purple opacity-20 -z-10 leading-none select-none -translate-y-4 translate-x-4">{step.num}</div>
              <div className="border-l-4 border-purple pl-6 py-2 bg-gradient-to-r from-surface to-transparent">
                <div className="font-anton text-2xl text-gold uppercase mb-2">{step.num} — {step.title}</div>
                <p className="font-oswald text-muted text-lg">{step.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-8 -translate-y-1/2 font-anton text-4xl text-gold z-10">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
