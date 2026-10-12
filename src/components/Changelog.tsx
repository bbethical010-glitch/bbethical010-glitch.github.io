import { useEffect, useRef } from 'react'
import { CHANGELOG } from '../constants/changelog'
import './Changelog.css'

/**
 * CELEBRATION TARGET CONFIGURATION
 * Single obvious constant to toggle celebration target:
 * - 'v1.0.0' (Default: Celebrates foundational Launch)
 * - 'v3.4'   (Option: Celebrates the latest current release)
 */
export const CELEBRATION_TARGET = 'v1.0.0'

export function Changelog() {
  const arenaRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])
  const hasCelebratedRef = useRef(false)

  useEffect(() => {
    const arena = arenaRef.current
    if (!arena) return

    let isTicking = false
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let isReducedMotion = mediaQuery.matches

    const handleMotionChange = (e: MediaQueryListEvent) => {
      isReducedMotion = e.matches
      onScrollUpdate()
    }
    mediaQuery.addEventListener('change', handleMotionChange)

    function triggerCelebration(targetEl: HTMLElement) {
      if (hasCelebratedRef.current) return
      hasCelebratedRef.current = true

      if (isReducedMotion) {
        const ring = document.createElement('div')
        ring.className = 'celebration-static-ring'
        targetEl.appendChild(ring)
        return
      }

      const burstContainer = document.createElement('div')
      burstContainer.className = 'burst-container'

      const colors = ['#9b30ff', '#f4c300', '#dd0061', '#dcb8ff', '#ffe399']
      const numParticles = 8
      const radius = 56

      for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div')
        particle.className = 'burst-particle'

        const angle = (i / numParticles) * Math.PI * 2
        const dx = Math.round(Math.cos(angle) * radius) + 'px'
        const dy = Math.round(Math.sin(angle) * radius) + 'px'
        const rot = Math.round(Math.random() * 180 - 90) + 'deg'
        const color = colors[i % colors.length]

        particle.style.setProperty('--dx', dx)
        particle.style.setProperty('--dy', dy)
        particle.style.setProperty('--rot', rot)
        particle.style.backgroundColor = color
        particle.style.animationDelay = `${i * 20}ms`

        if (i % 3 === 0) {
          particle.style.borderRadius = '50%'
        } else if (i % 2 === 0) {
          particle.style.transform = 'rotate(45deg)'
        }

        burstContainer.appendChild(particle)
      }

      targetEl.appendChild(burstContainer)

      setTimeout(() => {
        if (burstContainer.parentNode) {
          burstContainer.parentNode.removeChild(burstContainer)
        }
      }, 650)
    }

    function updateMeasurements() {
      if (!arena) return
      const arenaHeight = arena.offsetHeight
      arena.style.setProperty('--tl-track-height', `${arenaHeight}px`)
    }

    function onScrollUpdate() {
      if (!arena) return
      const items = itemRefs.current.filter((el): el is HTMLLIElement => el !== null)
      if (items.length === 0) return

      if (isReducedMotion) {
        arena.style.setProperty('--tl-progress', '1')
        items.forEach((item) => {
          item.classList.add('is-active')
          const node = item.querySelector('.timeline-anchor-node')
          if (node) node.classList.add('is-passed')
        })
        return
      }

      const firstItem = items[0]
      const lastItem = items[items.length - 1]

      const firstNode = firstItem.querySelector('.timeline-anchor-node')
      const lastNode = lastItem.querySelector('.timeline-anchor-node')

      const firstNodeRect = firstNode ? firstNode.getBoundingClientRect() : firstItem.getBoundingClientRect()
      const lastNodeRect = lastNode ? lastNode.getBoundingClientRect() : lastItem.getBoundingClientRect()

      // Viewport trigger focus line: 55% from top of viewport
      const triggerY = window.innerHeight * 0.55

      // Calculate progress normalized between start and end
      const denominator = lastNodeRect.top - firstNodeRect.top
      const rawProgress = denominator !== 0 ? (triggerY - firstNodeRect.top) / denominator : 0
      const progress = Math.max(0, Math.min(1, rawProgress))

      arena.style.setProperty('--tl-progress', progress.toFixed(4))

      items.forEach((item) => {
        const anchor = item.querySelector('.timeline-anchor-node')
        if (!anchor) return
        const anchorRect = anchor.getBoundingClientRect()
        const isPassed = anchorRect.top <= triggerY

        if (isPassed) {
          item.classList.add('is-active')
          anchor.classList.add('is-passed')
        } else {
          item.classList.remove('is-active')
          anchor.classList.remove('is-passed')
        }

        const version = item.getAttribute('data-version')
        if (version === CELEBRATION_TARGET && isPassed && !hasCelebratedRef.current) {
          triggerCelebration(item)
        }
      })
    }

    function requestTick() {
      if (!isTicking) {
        window.requestAnimationFrame(() => {
          onScrollUpdate()
          isTicking = false
        })
        isTicking = true
      }
    }

    // IntersectionObserver for celebration trigger backup
    let celebrationObserver: IntersectionObserver | null = null
    const targetItem = itemRefs.current.find((item) => item?.getAttribute('data-version') === CELEBRATION_TARGET)
    if (targetItem) {
      celebrationObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasCelebratedRef.current) {
              triggerCelebration(entry.target as HTMLElement)
            }
          })
        },
        { threshold: 0.6 }
      )
      celebrationObserver.observe(targetItem)
    }

    window.addEventListener('scroll', requestTick, { passive: true })
    const handleResize = () => {
      updateMeasurements()
      requestTick()
    }
    window.addEventListener('resize', handleResize, { passive: true })

    updateMeasurements()
    onScrollUpdate()

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange)
      window.removeEventListener('scroll', requestTick)
      window.removeEventListener('resize', handleResize)
      if (celebrationObserver) celebrationObserver.disconnect()
    }
  }, [])

  return (
    <section id="changelog" aria-labelledby="changelog-heading" className="py-20 px-4 border-t border-purple/20 bg-bg">
      <div className="timeline-container">
        <div className="sec-marker" data-rv="fade">
          <b>05</b> — WHAT'S NEW<span className="rule"></span>
        </div>
        <h2 id="changelog-heading" className="font-anton text-4xl sm:text-5xl md:text-6xl text-text uppercase mb-4 text-center tracking-wide" data-rv="up">
          What's New
        </h2>
        <p className="font-oswald text-base sm:text-lg text-muted text-center max-w-2xl mx-auto mb-16 leading-relaxed" data-rv="up">
          Every drop, every tweak, every chaotic upgrade. Trace the evolution of Meme Capsule from day-one launch to the latest edge release.
        </p>

        <div className="timeline-arena" ref={arenaRef}>
          {/* Central Spine Track */}
          <div className="timeline-spine-track" aria-hidden="true">
            <div className="timeline-spine-fill"></div>
          </div>

          {/* Smoothly Tracking Scrubber Node */}
          <div className="timeline-scrubber-node" aria-hidden="true"></div>

          {/* 6 Authentic Changelog Items (Alternating side-right / side-left) */}
          <ol className="timeline-list">
            {CHANGELOG.map((release, idx) => {
              const isRight = idx % 2 === 0
              return (
                <li
                  key={release.version}
                  ref={(el) => { itemRefs.current[idx] = el }}
                  className={`timeline-item ${isRight ? 'side-right' : 'side-left'}`}
                  data-version={release.version}
                  id={`item-${release.version.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                >
                  <div className="timeline-anchor-node" aria-hidden="true"></div>
                  <div className="timeline-connector" aria-hidden="true"></div>
                  <div className="timeline-card-wrapper" data-cursor>
                    <article className="neo-card" aria-label={`Version ${release.version} release notes`}>
                      <header className="card-header">
                        <h3 className={`card-version color-${release.tagColor}`}>{release.version}</h3>
                        <time className="card-date">{release.date}</time>
                        <span className={`card-badge badge-${release.tagColor}`}>{release.tag}</span>
                      </header>
                      <ul className="card-changes">
                        {release.changes.map((change, cIdx) => (
                          <li key={cIdx} className="change-item">
                            <span className="change-bullet" aria-hidden="true">■</span>
                            <span>{change}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
