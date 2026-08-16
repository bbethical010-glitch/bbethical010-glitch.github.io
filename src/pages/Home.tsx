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

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
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
