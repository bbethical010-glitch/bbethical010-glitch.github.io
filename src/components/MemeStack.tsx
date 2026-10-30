import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useSprings, animated, to } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { MemeCard, type MemeItem } from './MemeCard'
import { GestureTeachingHand } from './GestureTeachingHand'
import { computeCanvasDimensions } from '../utils/memeDimensions'
import { CONFIG } from '../constants/config'

interface MemeStackProps {
  queue: MemeItem[]
  totalSwiped: number
  maxTotalMemes?: number
  onDismiss: (direction: 'left' | 'right' | 'up') => void
  onDimensionsLoaded: (id: string, width: number, height: number) => void
}

const POS_CONFIG = [
  // Position 0 (Active Front)
  {
    scale: 1.0,
    x: 0,
    y: 0,
    z: 0,
    rotZ: 0,
    opacity: 1.0,
    zIndex: 40,
    shadow: '6px 6px 0px #f4c300',
  },
  // Position 1 (Understudy)
  {
    scale: 0.95,
    x: 0,
    y: 10,
    z: -40,
    rotZ: 0,
    opacity: 0.9,
    zIndex: 30,
    shadow: '6px 6px 0px #9b30ff',
  },
  // Position 2 (Queue #3)
  {
    scale: 0.90,
    x: 0,
    y: 18,
    z: -80,
    rotZ: 0,
    opacity: 0.75,
    zIndex: 20,
    shadow: '6px 6px 0px #dd0061',
  },
  // Position 3 (Queue #4)
  {
    scale: 0.85,
    x: 0,
    y: 24,
    z: -120,
    rotZ: 0,
    opacity: 0.5,
    zIndex: 10,
    shadow: '0px 0px 0px transparent',
  },
]

const SPRING_CONFIG_SNAP = {
  tension: 280,
  friction: 26,
  mass: 1.2,
}

const SPRING_CONFIG_PULL_FORWARD = {
  tension: 280,
  friction: 34,
  mass: 1.0,
}

const SPRING_CONFIG_FLING = {
  tension: 220,
  friction: 22,
  mass: 0.9,
}

export function MemeStack({
  queue,
  totalSwiped,
  maxTotalMemes = 10,
  onDismiss,
  onDimensionsLoaded,
}: MemeStackProps) {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isInteracting, setIsInteracting] = useState(false)
  const isAnimatingRef = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Track viewport dimensions for canvas computation
  const [viewport, setViewport] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  })

  useEffect(() => {
    const handleResize = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Keep activeIdx in sync with totalSwiped if parent updates it
  useEffect(() => {
    setActiveIdx(totalSwiped)
  }, [totalSwiped])

  const activeMeme = queue[activeIdx]

  // Dynamic canvas dimensions based on current active meme
  const canvasDims = computeCanvasDimensions(
    activeMeme?.naturalWidth || 400,
    activeMeme?.naturalHeight || 500,
    viewport.width,
    viewport.height
  )

  /**
   * Setup exactly 10 springs — one dedicated spring per card in the session.
   * This guarantees that when a card is swiped away, its spring flings off,
   * while the next card's spring was ALWAYS at x: 0 and smoothly pulls forward
   * from behind with ZERO recoil or pulling from the side of the webpage!
   */
  const [springs, api] = useSprings(maxTotalMemes, (i) => {
    const relPos = i - activeIdx
    if (relPos < 0) {
      return {
        x: 1000,
        y: 0,
        z: 0,
        scale: 1,
        rotZ: 0,
        opacity: 0,
        shadow: '0px 0px 0px transparent',
        zIndex: 0,
        config: SPRING_CONFIG_SNAP,
      }
    }
    const cfg = POS_CONFIG[relPos] || {
      scale: 0.85,
      x: 0,
      y: 24,
      z: -120,
      rotZ: 0,
      opacity: 0,
      shadow: '0px 0px 0px transparent',
      zIndex: 10,
    }
    return {
      x: cfg.x,
      y: cfg.y,
      z: cfg.z,
      scale: cfg.scale,
      rotZ: cfg.rotZ,
      opacity: cfg.opacity,
      shadow: cfg.shadow,
      zIndex: cfg.zIndex,
      config: SPRING_CONFIG_SNAP,
    }
  })

  /**
   * Dismiss the active card in a given direction (keep, skip, vault)
   */
  const executeDismiss = useCallback(
    (direction: 'right' | 'left' | 'up') => {
      if (isAnimatingRef.current || activeIdx >= maxTotalMemes) return
      isAnimatingRef.current = true

      // 1. Silent 10-Swipe Redirect: MUST fire synchronously in the gesture/action release
      const currentSwipeNumber = activeIdx + 1
      if (currentSwipeNumber >= maxTotalMemes) {
        const storeUrl = CONFIG.getPlayStoreUrl('web_preview_full_swipe_complete')
        window.open(storeUrl, '_blank')
      }

      // 2. Compute exit target coordinates
      const exitWidth = (typeof window !== 'undefined' ? window.innerWidth : 1200) + 200
      const exitHeight = (typeof window !== 'undefined' ? window.innerHeight : 800) + 200

      let targetX = 0
      let targetY = 0
      let targetRotZ = 0
      let targetScale = 1.0

      if (direction === 'right') {
        targetX = exitWidth
        targetRotZ = 15
      } else if (direction === 'left') {
        targetX = -exitWidth
        targetRotZ = -15
      } else {
        targetY = -exitHeight
        targetScale = 0.5
      }

      const nextActive = activeIdx + 1

      // 3. Simultaneously animate:
      // - Active card flings OUT
      // - Behind card (activeIdx + 1) smoothly pulls forward into Position 0
      // - Card (activeIdx + 2) smoothly pulls forward into Position 1
      // - Card (activeIdx + 3) smoothly pulls forward into Position 2
      // - Card (activeIdx + 4) smoothly steps into Position 3
      api.start((i) => {
        if (i < activeIdx) {
          // Already dismissed
          return { opacity: 0 }
        }

        if (i === activeIdx) {
          // Card flings out
          return {
            x: targetX,
            y: targetY,
            scale: targetScale,
            rotZ: targetRotZ,
            opacity: 0,
            config: SPRING_CONFIG_FLING,
          }
        }

        // Relative position after dismissal
        const newRelPos = i - nextActive
        if (newRelPos >= 0 && newRelPos < 3) {
          // On-screen cards smoothly spring-interpolate forward (1->0, 2->1, 3->2)
          // Purely y/z/scale/shadow/opacity changing, x strictly staying at 0 throughout
          const targetCfg = POS_CONFIG[newRelPos]
          return {
            x: 0,
            y: targetCfg.y,
            z: targetCfg.z,
            scale: targetCfg.scale,
            rotZ: 0,
            opacity: targetCfg.opacity,
            shadow: targetCfg.shadow,
            zIndex: targetCfg.zIndex,
            config: SPRING_CONFIG_PULL_FORWARD,
          }
        }

        if (newRelPos === 3) {
          // Brand-new card filling position 3 mounts directly at its resting transform:
          // scale: 0.85, y: 24px, z: -120px, x: 0, opacity: 0.5 — with a brief (180ms) opacity fade-in
          const targetCfg = POS_CONFIG[3]
          return {
            x: 0,
            y: targetCfg.y,
            z: targetCfg.z,
            scale: targetCfg.scale,
            rotZ: 0,
            opacity: targetCfg.opacity,
            shadow: targetCfg.shadow,
            zIndex: targetCfg.zIndex,
            config: { duration: 180 },
          }
        }

        return { opacity: 0 }
      })

      // 4. Update index after exit transition completes (260ms)
      setTimeout(() => {
        setActiveIdx(nextActive)
        onDismiss(direction)
        isAnimatingRef.current = false
      }, 260)
    },
    [activeIdx, maxTotalMemes, api, onDismiss]
  )

  // Drag gesture binding for active front card
  const bind = useDrag(
    ({ event, active, movement: [mx, my], velocity: [vx, vy], cancel }) => {
      // Abort if touch originated on nested interactive element
      const target = event?.target as HTMLElement | null
      if (target && target.closest('button, a')) {
        cancel()
        return
      }

      if (isAnimatingRef.current || activeIdx >= maxTotalMemes) return

      if (active) {
        if (Math.abs(mx) > 10 || Math.abs(my) > 10) {
          setIsInteracting(true)
        }

        // Card 0 translates directly with [mx, my]
        const rotZ = (mx / 80) * 15

        // Understudy progress in lockstep with drag: min(1, max(|mx|, max(0, -my)) / 80)
        const progress = Math.min(1, Math.max(Math.abs(mx), Math.max(0, -my)) / 80)
        const understudyScale = 0.95 + 0.05 * progress
        const understudyY = 10 - 10 * progress
        const understudyZ = -40 + 40 * progress
        const understudyOpacity = 0.9 + 0.1 * progress

        api.start((i) => {
          if (i === activeIdx) {
            return {
              x: mx,
              y: my,
              rotZ,
              scale: 1.0,
              opacity: 1.0,
              immediate: true,
            }
          }
          if (i === activeIdx + 1) {
            return {
              scale: understudyScale,
              y: understudyY,
              z: understudyZ,
              opacity: understudyOpacity,
              immediate: true,
            }
          }
          return {}
        })
      } else {
        // Drag ended: evaluate dismissal thresholds
        // Keep (Swipe Right): mx > 80px or (vx > 0.5 and mx > 25px)
        const isKeep = mx > 80 || (vx > 0.5 && mx > 25)
        // Skip (Swipe Left): mx < -80px or (vx > 0.5 and mx < -25px)
        const isSkip = mx < -80 || (vx > 0.5 && mx < -25)
        // Vault (Swipe Up): my < -60px or (vy > 0.5 and my < -20px)
        const isVault = my < -60 || (vy > 0.5 && my < -20)

        if (isKeep) {
          executeDismiss('right')
        } else if (isSkip) {
          executeDismiss('left')
        } else if (isVault) {
          executeDismiss('up')
        } else {
          // Below threshold: snap back smoothly into resting position
          api.start((i) => {
            const relPos = i - activeIdx
            if (relPos < 0 || relPos >= 4) return {}
            const cfg = POS_CONFIG[relPos]
            return {
              x: cfg.x,
              y: cfg.y,
              z: cfg.z,
              scale: cfg.scale,
              rotZ: cfg.rotZ,
              opacity: cfg.opacity,
              shadow: cfg.shadow,
              zIndex: cfg.zIndex,
              immediate: false,
              config: SPRING_CONFIG_SNAP,
            }
          })
        }
      }
    },
    {
      filterTaps: true,
      rubberband: true,
    }
  )

  // Keyboard accessibility fallback (Arrow keys)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isAnimatingRef.current) return
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      executeDismiss('right')
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      executeDismiss('left')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      executeDismiss('up')
    }
  }

  // Filter cards to render: only cards currently in the stack (activeIdx to activeIdx + 3)
  // or the currently exiting card (activeIdx - 1 if animating)
  const renderRange: number[] = []
  for (let i = Math.max(0, activeIdx - 1); i < Math.min(maxTotalMemes, activeIdx + 4); i++) {
    renderRange.push(i)
  }

  return (
    <div className="relative flex flex-col items-center select-none" style={{ perspective: '1000px' }}>
      {/* Dynamic Aspect-Ratio Outer Deck Container with 0.22s Bezier Morph */}
      <div
        ref={containerRef}
        tabIndex={0}
        role="region"
        aria-label="Meme swipe deck. Use Left arrow to skip, Right arrow to keep, Up arrow to vault."
        onKeyDown={handleKeyDown}
        className="relative outline-none focus-visible:ring-2 focus-visible:ring-gold"
        style={{
          width: `${canvasDims.width}px`,
          height: `${canvasDims.height}px`,
          transition:
            'width 0.22s cubic-bezier(0.2, 0.9, 0.3, 1), height 0.22s cubic-bezier(0.2, 0.9, 0.3, 1)',
        }}
      >
        {/* Render cards in reverse order so the active card sits physically on top */}
        {renderRange
          .map((cardIndex) => {
            const style = springs[cardIndex]
            if (!style) return null
            const cardMeme = queue[cardIndex]
            const isFront = cardIndex === activeIdx

            return (
              <animated.div
                key={`meme-card-slot-${cardIndex}`}
                {...(isFront ? bind() : {})}
                className="absolute inset-0 cursor-grab active:cursor-grabbing touch-none"
                style={{
                  transform: to(
                    [style.x, style.y, style.z, style.rotZ, style.scale],
                    (x, y, z, r, s) =>
                      `translate3d(${x}px, ${y}px, ${z}px) rotateZ(${r}deg) scale(${s})`
                  ),
                  opacity: style.opacity,
                  zIndex: style.zIndex,
                  boxShadow: style.shadow,
                  touchAction: 'none',
                }}
              >
                <MemeCard
                  meme={cardMeme}
                  isFront={isFront}
                  onDimensionsLoaded={onDimensionsLoaded}
                />
              </animated.div>
            )
          })
          .reverse()}

        {/* Gesture Teaching Hand Overlay: prominently shown on the first card */}
        {activeIdx === 0 && (
          <GestureTeachingHand isUserInteracting={isInteracting} />
        )}
      </div>
    </div>
  )
}
