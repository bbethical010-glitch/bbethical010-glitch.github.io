import { useRef } from 'react'
import { ReactLenis } from 'lenis/react'
import { useScroll } from 'motion/react'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { MemePreview } from '../components/MemePreview'
import { Features } from '../components/Features'
import { Screenshots } from '../components/Screenshots'
import { HowItWorks } from '../components/HowItWorks'
import { Changelog } from '../components/Changelog'
import { FAQ } from '../components/FAQ'
import { ContactForm } from '../components/ContactForm'
import { Footer } from '../components/Footer'
import { StackSection } from '../components/StackSection'

// Kage-inspired components & hooks
import { Preloader } from '../components/Preloader'
import { CustomCursor } from '../components/CustomCursor'
import { GrainOverlay } from '../components/GrainOverlay'
import { Vignette } from '../components/Vignette'
import { ScrollRail } from '../components/ScrollRail'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useNavbarScroll } from '../hooks/useNavbarScroll'

export default function Home() {
  // Initialize scroll reveal observer
  useScrollReveal()

  // Initialize navbar and scroll rail state
  const { isHidden, isStuck, activeSection } = useNavbarScroll()

  // Master container ref for page-level scroll progress
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Full-page sections structured as stacking layers
  const sections = [
    { id: 'hero', accent: '#9b30ff', component: <Hero /> },
    { id: 'see-it-in-action', accent: '#f4c300', component: <MemePreview /> },
    { id: 'features', accent: '#dd0061', component: <Features /> },
    { id: 'screenshots', accent: '#00f0ff', component: <Screenshots /> },
    { id: 'how-it-works', accent: '#39ff14', component: <HowItWorks /> },
    { id: 'changelog', accent: '#9b30ff', component: <Changelog /> },
    { id: 'faq', accent: '#f4c300', component: <FAQ /> },
    { id: 'contact', accent: '#dd0061', component: <ContactForm /> },
    { id: 'footer', accent: '#9b30ff', component: <Footer /> },
  ]

  const total = sections.length
  const step = 1 / (total - 1)

  return (
    <ReactLenis root>
      <div className="relative min-h-screen bg-bg">
        {/* Global Overlays & Utilities */}
        <Preloader />
        <CustomCursor />
        <GrainOverlay />
        <Vignette />
        <ScrollRail activeSection={activeSection} />

        <Navbar 
          isHidden={isHidden} 
          isStuck={isStuck} 
        />

        {/* Master Stacking Deck Container */}
        <main ref={containerRef} className="relative w-full">
          {sections.map((sec, i) => {
            // Olivier Larose targetScale:
            // cards scale down proportionally as subsequent cards stack on top
            const targetScale = 1 - (total - 1 - i) * 0.035
            // Start scaling as the next card begins its entry
            const startRange = i * step
            const endRange = 1

            return (
              <StackSection
                key={sec.id}
                id={sec.id}
                i={i}
                total={total}
                progress={scrollYProgress}
                range={[startRange, endRange]}
                targetScale={targetScale}
                accentColor={sec.accent}
              >
                {sec.component}
              </StackSection>
            )
          })}
        </main>
      </div>
    </ReactLenis>
  )
}
