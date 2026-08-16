import Giscus from '@giscus/react'
import { CONFIG } from '../constants/config'

export function Comments() {
  return (
    <section id="comments" className="py-20 px-4 border-t-4 border-purple bg-[#131313]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-anton text-5xl text-text uppercase mb-4">
          What People Say
        </h2>
        <p className="font-oswald text-muted mb-12 text-lg">
          Leave a comment — you need a GitHub account (it's free)
        </p>
        <div className="border-2 border-purple p-6 bg-surface text-left"
             style={{boxShadow: '6px 6px 0px #f4c300'}}>
          <Giscus
            repo={CONFIG.giscusRepo as `${string}/${string}`}
            repoId={CONFIG.giscusRepoId}
            category={CONFIG.giscusCategory}
            categoryId={CONFIG.giscusCategoryId}
            mapping="pathname"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="dark"
            lang="en"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
