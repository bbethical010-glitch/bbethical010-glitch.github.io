import { useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { CustomCursor } from '../components/CustomCursor'
import { GrainOverlay } from '../components/GrainOverlay'
import { Vignette } from '../components/Vignette'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useNavbarScroll } from '../hooks/useNavbarScroll'

const listClassName = 'list-disc pl-6 space-y-1'

export default function Terms() {
  useScrollReveal()
  const { isHidden, isStuck } = useNavbarScroll()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-bg flex flex-col relative">
      <CustomCursor />
      <GrainOverlay />
      <Vignette />
      <Navbar isHidden={isHidden} isStuck={isStuck} />
      <main id="main-content" role="main" className="flex-1 max-w-3xl mx-auto px-4 py-32 w-full">
        <h1 className="font-anton text-5xl text-purple uppercase mb-8 border-b-4 border-purple pb-4">
          Terms of Service
        </h1>
        <div className="font-oswald text-text text-base leading-relaxed space-y-8">
          <div className="space-y-2 text-muted text-sm uppercase tracking-widest">
            <p>Version: 1.0</p>
            <p>Effective Date: 28 September 2026</p>
            <p>Last Updated: 13 October 2026</p>
            <p>Website: https://memecapsule.wtf</p>
            <p>Website Operator: Meme Capsule</p>
            <p>Contact / Legal Email: support@memecapsule.wtf</p>
          </div>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">1. Acceptance of Terms</h2>
            <p>
              Welcome to Meme Capsule (&quot;Meme Capsule&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of the website located at <a href="https://memecapsule.wtf" className="text-gold underline">https://memecapsule.wtf</a> (the &quot;Website&quot;), including any text, media, features, tools, or content made available on or through the Website.
            </p>
            <p>
              By accessing or using the Website, you agree to be bound by these Terms and our <a href="/privacy" className="text-purple underline">Privacy Policy</a>. If you do not agree to these Terms, you must not access or use the Website.
            </p>
            <p>
              The Meme Capsule mobile application available on Google Play is subject to its own end-user licensing and terms. These Website Terms apply specifically to your access to and interaction with the web domain and services at memecapsule.wtf.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">2. Description of the Service</h2>
            <p>
              Meme Capsule is a digital humor and culture platform dedicated to serendipitous, algorithm-free content discovery. The Website provides:
            </p>
            <ul className={listClassName}>
              <li>Informational resources, articles, and cultural commentary regarding internet humor and digital culture;</li>
              <li>A client-side interactive preview simulator illustrating the random drop mechanics of the mobile application;</li>
              <li>Official press kits, media assets, team backgrounds, and product changelogs;</li>
              <li>Inquiries, customer support, and communication facilities via our contact form; and</li>
              <li>Links to download the official Android application from the Google Play Store.</li>
            </ul>
            <p>
              We reserve the right to modify, suspend, or discontinue any aspect of the Website at any time without prior notice or liability.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">3. User Conduct and Prohibited Activities</h2>
            <p>
              You agree to use the Website only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className={listClassName}>
              <li>Use the Website in any manner that violates any applicable local, national, or international law or regulation;</li>
              <li>Submit false, defamatory, harassing, obscene, hateful, or abusive messages via the contact form;</li>
              <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Website, hosting servers, or connected networks;</li>
              <li>Use any robot, spider, crawler, scraper, or other automatic device or manual process to systematically harvest or scrape content from the Website without prior express written consent;</li>
              <li>Introduce viruses, Trojan horses, worms, logic bombs, or other malicious software or technologically harmful code;</li>
              <li>Circumvent, disable, or tamper with any security-related features, rate limiters, or quota guards on the Website; or</li>
              <li>Engage in any conduct that restricts or inhibits any other person from using or enjoying the Website.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">4. Intellectual Property Rights &amp; Meme Culture Fair Use</h2>
            <p>
              <strong>Website Content:</strong> The design, layout, code, visual interface, graphics, typography, editorial essays, branding, and logos on the Website are owned by or licensed to Meme Capsule and are protected by applicable intellectual property, copyright, and trademark laws.
            </p>
            <p>
              <strong>Memes and Digital Folklore:</strong> The internet memes displayed or referenced across our platform originate from the broader digital cultural commons. Memes constitute participatory cultural artifacts, parodies, commentary, and transformative digital folklore. We curate and archive memes under recognized transformative principles, fair dealing, and fair use doctrines for non-exclusive entertainment, review, and cultural archival purposes.
            </p>
            <p>
              We claim no ownership over underlying third-party images, photography, or source media that form the basis of community-generated meme formats. All trademarks, copyrights, and intellectual property in source media belong to their respective original creators or copyright holders.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">5. Copyright &amp; DMCA / Takedown Policy</h2>
            <p>
              Meme Capsule respects the intellectual property rights of creators and copyright holders. If you are a copyright owner or an authorized agent and believe that any content hosted or referenced on the Website infringes upon your copyright, you may submit a notification of claimed infringement pursuant to applicable law by contacting our Designated Copyright Agent at:
            </p>
            <div className="bg-surface p-4 border border-purple">
              <p className="font-mono text-gold text-sm">Designated Copyright Agent</p>
              <p className="text-text text-sm">Meme Capsule Editorial &amp; Legal Redress</p>
              <p className="text-text text-sm">Email: <a href="mailto:support@memecapsule.wtf" className="text-purple underline">support@memecapsule.wtf</a></p>
              <p className="text-muted text-xs mt-1">Subject Line: DMCA / Copyright Notice — [Description of Content]</p>
            </div>
            <p className="mt-2">
              Your notice must include: (a) a physical or electronic signature of the authorized person; (b) identification of the copyrighted work claimed to have been infringed; (c) identification of the material that is claimed to be infringing with sufficient information to enable us to locate it; (d) your contact information (address, telephone, and email); (e) a statement that you have a good faith belief that use of the material is not authorized; and (f) a statement, made under penalty of perjury, that the information in the notification is accurate.
            </p>
            <p>
              Upon receiving a valid notification, we will expeditiously remove or disable access to the infringing material.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">6. Third-Party Links &amp; Advertisements</h2>
            <p>
              The Website may contain links to third-party websites, applications, and services, including Google Play, GitHub, social media networks, and third-party advertising networks (including Google AdSense). Such links and advertisements are provided for your convenience and monetization support.
            </p>
            <p>
              We do not control, endorse, or assume responsibility for the content, privacy policies, or practices of any third-party websites or services. Your interactions with third-party advertisers or services are solely between you and the third party.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">7. Disclaimer of Warranties</h2>
            <p>
              THE WEBSITE, ITS CONTENT, AND ALL SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
            </p>
            <p>
              TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, MEME CAPSULE DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
            </p>
            <p>
              WE DO NOT WARRANT THAT THE WEBSITE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, NOR DO WE MAKE ANY WARRANTY AS TO THE ACCURACY, RELIABILITY, OR COMPLETENESS OF ANY CONTENT.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">8. Limitation of Liability</h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL MEME CAPSULE, ITS DEVELOPERS, CONTRIBUTORS, DIRECTORS, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES) ARISING OUT OF OR IN CONNECTION WITH YOUR ACCESS TO, USE OF, OR INABILITY TO ACCESS OR USE THE WEBSITE.
            </p>
            <p>
              OUR TOTAL CUMULATIVE LIABILITY FOR ANY CLAIMS ARISING UNDER OR RELATED TO THESE TERMS OR THE WEBSITE SHALL NOT EXCEED THE AMOUNT PAID BY YOU, IF ANY, TO ACCESS THE WEBSITE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ₹500 (INR), WHICHEVER IS LESS.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">9. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms and any dispute or claim arising out of or related to them or the Website shall be governed by and construed in accordance with the laws of the Republic of India, without giving effect to any choice or conflict of law principles.
            </p>
            <p>
              Any legal suit, action, or proceeding arising out of or related to these Terms or the Website shall be subject to the exclusive jurisdiction of the competent courts in India.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">10. Changes to These Terms</h2>
            <p>
              We may revise and update these Terms from time to time at our sole discretion. All changes are effective immediately upon posting to the Website. Your continued use of the Website following the posting of revised Terms means that you accept and agree to the changes.
            </p>
            <p>
              We encourage you to check this page periodically to ensure you are familiar with the current Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">11. Contact Information</h2>
            <p>
              If you have any questions, feedback, or concerns regarding these Terms of Service, please reach out to us:
            </p>
            <p>
              Email: <a href="mailto:support@memecapsule.wtf" className="text-purple underline font-semibold">support@memecapsule.wtf</a>
            </p>
            <p>
              Website: <a href="https://memecapsule.wtf" className="text-gold underline">https://memecapsule.wtf</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
