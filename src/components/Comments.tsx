import Giscus from '@giscus/react'
import { CONFIG } from '../constants/config'
export function Comments() {
  return (
    <section id="comments" className="py-20 px-4 border-t border-purple/20 bg-[#131313]">
      <div className="max-w-3xl mx-auto text-center">
        <div className="sec-marker" data-rv="fade"><b>07</b> — COMMUNITY<span className="rule"></span></div>
        <h2 className="font-anton text-5xl text-text uppercase mb-4" data-rv="up">What People Say</h2>
        <p className="font-oswald text-muted mb-12 text-lg" data-rv="up" style={{ transitionDelay: '100ms' }}>Leave a comment — you need a GitHub account (it's free)</p>
        <div 
          className="border-2 border-purple p-6 bg-surface text-left" 
          style={{boxShadow: '6px 6px 0px #f4c300', transitionDelay: '200ms'}}
          data-rv="up"
          data-cursor
        >
          <Giscus repo={CONFIG.giscusRepo as `${string}/${string}`} repoId={CONFIG.giscusRepoId} category={CONFIG.giscusCategory} categoryId={CONFIG.giscusCategoryId} mapping="pathname" strict="0" reactionsEnabled="1" emitMetadata="0" inputPosition="top" theme="dark" lang="en" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
