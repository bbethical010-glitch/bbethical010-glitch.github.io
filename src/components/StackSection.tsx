import React, { useRef } from 'react'
import { motion, useTransform, MotionValue } from 'motion/react'

export interface StackSectionProps {
  i: number
  total: number
  id?: string
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
  accentColor?: string
  children: React.ReactNode
  className?: string
}

export const StackSection: React.FC<StackSectionProps> = ({
  i,
  total,
  id,
  progress,
  range,
  targetScale,
  accentColor = '#9b30ff',
  children,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const isLast = i === total - 1
  // Ensure strictly increasing range for useTransform safety
  const safeRange: [number, number] = range[0] >= range[1] ? [0.999, 1] : range
  const scale = useTransform(progress, safeRange, [1, isLast ? 1 : targetScale])

  // Subtle darkening overlay as subsequent cards stack on top (none for the last card)
  const overlayOpacity = useTransform(
    progress,
    safeRange,
    [0, isLast ? 0 : 0.35]
  )

  // Staggered top offset so tops of stacked cards stay layered like an index deck
  // Using 8px per card so 9 cards stack gracefully with minimal header consumption
  const topPosition = `calc(${i * 8}px)`

  return (
    <div
      ref={containerRef}
      id={id}
      className={`min-h-screen sticky top-0 flex flex-col justify-start origin-top will-change-transform ${className}`}
      style={{
        zIndex: i + 1,
      }}
    >
      <motion.div
        style={{
          scale,
          top: topPosition,
          transformOrigin: 'top center',
        }}
        className="relative w-full rounded-t-2xl md:rounded-t-3xl overflow-hidden border-t-2 border-purple/30 bg-bg shadow-[0_-10px_35px_rgba(0,0,0,0.85),0_0_0_1px_rgba(155,48,255,0.15)] transition-shadow"
      >
        {/* Top Deck Accent Ribbon */}
        <div
          className="h-1 w-full"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${accentColor} 50%, transparent 100%)`,
          }}
        />

        {/* Section Child Component */}
        <div className="relative w-full">
          {children}
        </div>

        {/* Subtle Darkening / Dimming Veil when stacked underneath */}
        {!isLast && (
          <motion.div
            className="absolute inset-0 bg-black/60 pointer-events-none rounded-t-2xl md:rounded-t-3xl"
            style={{ opacity: overlayOpacity }}
          />
        )}
      </motion.div>
    </div>
  )
}
