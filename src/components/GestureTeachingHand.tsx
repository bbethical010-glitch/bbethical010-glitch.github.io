import React, { useEffect, useState } from 'react'

interface GestureTeachingHandProps {
  isUserInteracting?: boolean
  onDone?: () => void
}

export function GestureTeachingHand({ isUserInteracting, onDone }: GestureTeachingHandProps) {
  const [step, setStep] = useState<number>(0)
  const [dismissed, setDismissed] = useState(false)

  // 1. Check sessionStorage on mount (only skip in production; in local dev/review, always show on card 0)
  useEffect(() => {
    if (import.meta.env.DEV) return
    if (typeof window !== 'undefined' && sessionStorage.getItem('mc_gesture_hint_shown') === 'true') {
      setDismissed(true)
    }
  }, [])

  // 2. Clear, deliberate beat schedule with distinct travel, hold, and center pauses:
  // Step 0: Initial rest at center (0ms - 500ms)
  // Step 1: Drag Right (500ms - 1300ms)
  // Step 2: Hold Right + Label (1300ms - 2000ms)
  // Step 3: Return Center (2000ms - 2500ms)
  // Step 4: Center Pause (2500ms - 2900ms)
  // Step 5: Drag Left (2900ms - 3700ms)
  // Step 6: Hold Left + Label (3700ms - 4400ms)
  // Step 7: Return Center (4400ms - 4900ms)
  // Step 8: Center Pause (4900ms - 5300ms)
  // Step 9: Drag Up (5300ms - 6100ms)
  // Step 10: Hold Up + Label (6100ms - 6800ms)
  // Step 11: Return Center (6800ms - 7300ms)
  // Step 12: Fade Out (7300ms - 7800ms)
  useEffect(() => {
    if (dismissed) return

    const t0 = setTimeout(() => setStep(1), 500)
    const t1 = setTimeout(() => setStep(2), 1300)
    const t2 = setTimeout(() => setStep(3), 2000)
    const t3 = setTimeout(() => setStep(4), 2500)
    const t4 = setTimeout(() => setStep(5), 2900)
    const t5 = setTimeout(() => setStep(6), 3700)
    const t6 = setTimeout(() => setStep(7), 4400)
    const t7 = setTimeout(() => setStep(8), 4900)
    const t8 = setTimeout(() => setStep(9), 5300)
    const t9 = setTimeout(() => setStep(10), 6100)
    const t10 = setTimeout(() => setStep(11), 6800)
    const t11 = setTimeout(() => setStep(12), 7300)
    const t12 = setTimeout(() => {
      setDismissed(true)
      if (typeof window !== 'undefined' && !import.meta.env.DEV) {
        sessionStorage.setItem('mc_gesture_hint_shown', 'true')
      }
      onDone?.()
    }, 7800)

    return () => {
      clearTimeout(t0)
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(t5)
      clearTimeout(t6)
      clearTimeout(t7)
      clearTimeout(t8)
      clearTimeout(t9)
      clearTimeout(t10)
      clearTimeout(t11)
      clearTimeout(t12)
    }
  }, [dismissed, onDone])

  // Cancel immediately if the user touches, clicks, or drags anywhere on the deck
  useEffect(() => {
    if (isUserInteracting) {
      setDismissed(true)
      if (typeof window !== 'undefined' && !import.meta.env.DEV) {
        sessionStorage.setItem('mc_gesture_hint_shown', 'true')
      }
    }
  }, [isUserInteracting])

  if (dismissed) return null

  // Determine translation, action label, and accent colors based on current step
  let translateX = 0
  let translateY = 0
  let label = 'SWIPE TO INTERACT'
  let labelBg = 'bg-surface'
  let labelBorder = 'border-gold text-gold'
  let isPressed = false
  let opacity = 1

  if (step === 0) {
    // Initial Resting Center
    translateX = 0
    translateY = 0
    label = 'SWIPE TO INTERACT'
    isPressed = false
    opacity = 0.95
  } else if (step === 1 || step === 2) {
    // Beat 1: Moving right or holding at right
    translateX = 80
    translateY = 0
    label = 'KEEP (SWIPE RIGHT) →'
    labelBg = 'bg-[#18181b]'
    labelBorder = 'border-gold text-gold'
    isPressed = true
    opacity = 1
  } else if (step === 3 || step === 4) {
    // Returning to center / pause
    translateX = 0
    translateY = 0
    label = 'SWIPE TO INTERACT'
    isPressed = false
    opacity = 0.85
  } else if (step === 5 || step === 6) {
    // Beat 2: Moving left or holding at left
    translateX = -80
    translateY = 0
    label = '← SKIP (SWIPE LEFT)'
    labelBg = 'bg-[#18181b]'
    labelBorder = 'border-pink text-pink'
    isPressed = true
    opacity = 1
  } else if (step === 7 || step === 8) {
    // Returning to center / pause
    translateX = 0
    translateY = 0
    label = 'SWIPE TO INTERACT'
    isPressed = false
    opacity = 0.85
  } else if (step === 9 || step === 10) {
    // Beat 3: Moving up or holding at up
    translateX = 0
    translateY = -75
    label = '↑ VAULT (SWIPE UP)'
    labelBg = 'bg-[#18181b]'
    labelBorder = 'border-purple text-purple-light'
    isPressed = true
    opacity = 1
  } else if (step === 11) {
    // Returning to center
    translateX = 0
    translateY = 0
    label = 'SWIPE TO INTERACT'
    isPressed = false
    opacity = 0.7
  } else if (step >= 12) {
    // Fade out
    translateX = 0
    translateY = 0
    opacity = 0
  }

  return (
    <div
      className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center select-none overflow-hidden"
      style={{
        zIndex: 100,
        transform: 'translate3d(0, 0, 80px)',
        transition: 'opacity 0.4s ease',
        opacity,
      }}
      aria-hidden="true"
    >
      <div
        className="flex flex-col items-center justify-center"
        style={{
          transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
          transition: 'transform 0.75s cubic-bezier(0.25, 1, 0.5, 1)',
        }}
      >
        {/* Animated Hand / Finger Cursor Container */}
        <div className="relative flex items-center justify-center">
          {/* Touch Ripple indicator when finger presses down */}
          {isPressed && (
            <span className="absolute w-16 h-16 rounded-full border-2 border-gold/70 animate-ping pointer-events-none" />
          )}

          {/* Neo-Brutalist Hand Pointer Icon */}
          <div
            className={`w-14 h-14 rounded-full bg-gold border-[3px] border-black flex items-center justify-center shadow-[4px_4px_0px_#000] transform transition-transform duration-200 ${
              isPressed ? 'scale-95' : 'scale-100'
            }`}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#121212"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
              <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
              <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
              <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
            </svg>
          </div>
        </div>

        {/* Action Cue Pill */}
        <div
          className={`mt-3 px-3 py-1 font-anton text-xs tracking-wider uppercase border-2 shadow-[3px_3px_0px_#000] whitespace-nowrap transition-colors duration-300 ${labelBg} ${labelBorder}`}
        >
          {label}
        </div>
      </div>
    </div>
  )
}
