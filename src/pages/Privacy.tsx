import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { CONFIG } from '../constants/config'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-3xl mx-auto px-4 py-32 w-full">
        <h1 className="font-anton text-5xl text-purple uppercase mb-8 border-b-4 border-purple pb-4">
          Privacy Policy
        </h1>
        
        <div className="font-oswald text-text text-base leading-relaxed space-y-8">
          <p className="text-muted text-sm uppercase tracking-widest">
            Last Updated: August 2026
          </p>

          <section>
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">1. Data Collection</h2>
            <p>
              Meme Capsule collects completely anonymous usage analytics through Google Analytics to help us understand how the app is used (e.g., button taps, errors). We do not collect, store, or transmit any personally identifiable information (PII).
            </p>
          </section>

          <section>
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">2. Server Data</h2>
            <p>
              No personal data is ever stored on our servers. The app interacts with our backend solely to fetch random meme images. We do not track which users request which memes, and we do not maintain user accounts or profiles.
            </p>
          </section>

          <section>
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">3. Advertising</h2>
            <p>
              Meme Capsule uses Google AdMob to display advertisements. AdMob may use device identifiers and other information to serve personalized ads. You can learn more about how Google uses your data by visiting{' '}
              <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-purple hover:text-pink underline">
                Google's Privacy & Terms
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">4. Content Sources</h2>
            <p>
              The memes displayed in the app are fetched from our curated collection and public communities on Reddit. While we actively filter out NSFW content to ensure a safe experience, Meme Capsule is a platform for accessing third-party content. We are not responsible for the content itself.
            </p>
          </section>

          <section>
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:{' '}
              <a href={`mailto:${CONFIG.contactEmail}`} className="text-purple hover:text-pink underline font-bold">
                {CONFIG.contactEmail}
              </a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
