import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { MemePreview } from '../components/MemePreview'
import { Features } from '../components/Features'
import { Screenshots } from '../components/Screenshots'
import { HowItWorks } from '../components/HowItWorks'
import { Changelog } from '../components/Changelog'
import { FAQ } from '../components/FAQ'
import { Comments } from '../components/Comments'
import { ContactForm } from '../components/ContactForm'
import { Footer } from '../components/Footer'

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

  return (
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
      
      <div id="hero">
        <Hero />
      </div>
      <MemePreview />
      <Features />
      <Screenshots />
      <HowItWorks />
      <Changelog />
      <FAQ />
      <Comments />
      <ContactForm />
      <Footer />
    </div>
  )
}
