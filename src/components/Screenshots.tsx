export function Screenshots() {
  const screenshots = ['Home Screen','Loading Screen','Meme Loaded','Meme Vault','Share Sheet','Settings']
  return (
    <section className="py-20 px-0 border-t border-purple/20 bg-bg overflow-hidden relative">
      <div className="px-4 max-w-7xl mx-auto mb-12 text-center">
        <div className="sec-marker" data-rv="fade"><b>03</b> — WHAT IT LOOKS LIKE<span className="rule"></span></div>
        <h2 className="font-anton text-5xl text-text uppercase" data-rv="up">What It Looks Like</h2>
      </div>
      <div className="flex overflow-x-auto gap-6 px-4 md:px-12 pb-8" style={{ scrollSnapType: 'x mandatory' }}>
        {screenshots.map((title, idx) => (
          <div 
            key={idx} 
            className="flex-none w-[200px] border-2 border-purple bg-surface" 
            style={{ boxShadow: '6px 6px 0px #dd0061', scrollSnapAlign: 'start', transitionDelay: `${idx * 100}ms` }}
            data-rv="up"
            data-cursor
          >
            <div className="w-full aspect-[1/2] bg-[#1c1b1b]">
              <img src={`https://via.placeholder.com/200x400/1c1b1b/9b30ff?text=${title.toUpperCase().replace(/ /g, '+')}`} alt={`${title} screenshot`} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="p-3 border-t-2 border-purple text-center bg-surfaceHigh">
              <span className="font-oswald font-bold text-sm text-gold uppercase">{title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
