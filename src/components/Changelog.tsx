import { CHANGELOG } from '../constants/changelog'

export function Changelog() {
  return (
    <section className="py-20 px-4 border-t-4 border-purple bg-bg">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-anton text-5xl text-text uppercase mb-16 text-center">What's New</h2>

        <div className="space-y-12">
          {CHANGELOG.map((release, idx) => (
            <div key={idx} className="relative border-l-4 border-purple ml-4 pl-8 py-4">
              <div className="absolute w-4 h-4 rounded-full bg-purple -left-[10px] top-8 border-4 border-bg"></div>
              
              <div className="neo-card bg-surface p-6">
                <div className="flex flex-wrap items-center gap-4 mb-4 border-b-2 border-purple pb-4">
                  <h3 className="font-anton text-3xl text-purple">{release.version}</h3>
                  <span className="font-oswald text-muted text-sm uppercase tracking-widest">{release.date}</span>
                  <span className={`px-2 py-1 text-xs font-bold uppercase bg-${release.tagColor} text-bg border border-${release.tagColor}`}>
                    {release.tag}
                  </span>
                </div>
                
                <ul className="space-y-3">
                  {release.changes.map((change, cIdx) => (
                    <li key={cIdx} className="font-oswald text-text text-base flex items-start">
                      <span className="text-gold mr-3 mt-1.5 text-xs">■</span>
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
