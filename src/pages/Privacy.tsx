import { useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { CustomCursor } from '../components/CustomCursor'
import { GrainOverlay } from '../components/GrainOverlay'
import { Vignette } from '../components/Vignette'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useNavbarScroll } from '../hooks/useNavbarScroll'

const listClassName = 'list-disc pl-6 space-y-1'

export default function Privacy() {
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
        <h1 className="font-anton text-5xl text-purple uppercase mb-8 border-b-4 border-purple pb-4">Privacy Policy</h1>
        <div className="font-oswald text-text text-base leading-relaxed space-y-8">
          <div className="space-y-2 text-muted text-sm uppercase tracking-widest">
            <p>Version: 1.0</p>
            <p>Effective Date: 25 September 2026</p>
            <p>Last Updated: 25 September 2026</p>
            <p>Website: https://memecapsule.wtf</p>
            <p>Website Operator: Meme Capsule</p>
            <p>Privacy / Grievance Email: support@memecapsule.wtf</p>
            <p>Grievance Officer: Pratham Pandey</p>
            <p>Designation: Grievance Officer</p>
          </div>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">1. Introduction</h2>
            <p>Welcome to Meme Capsule.</p>
            <p>This Privacy Policy explains how Meme Capsule (&quot;Meme Capsule&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), as the operator of memecapsule.wtf (the &quot;Website&quot;), collects, uses, and processes personal data when you visit or interact with the Website.</p>
            <p>This Privacy Policy applies only to the Website.</p>
            <p>The Meme Capsule mobile application is a separate product and is not governed by this Privacy Policy. The mobile application may have separate privacy practices and notices.</p>
            <p>This Privacy Policy is focused on the Website&apos;s operations in India and is intended to operate consistently with applicable Indian privacy and data-protection law, including the Digital Personal Data Protection Act, 2023 (&quot;DPDP Act&quot;), the Digital Personal Data Protection Rules, 2025 (&quot;DPDP Rules&quot;), and other applicable Indian law, to the extent applicable and in force from time to time.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">2. Information We Collect</h2>
            <p>We seek to collect only information reasonably necessary for operating the Website, responding to enquiries, and understanding Website usage.</p>
            <h3 className="font-anton text-xl text-gold uppercase">2.1 Contact Form</h3>
            <p>When you use the Website&apos;s contact form, we collect:</p>
            <ul className={listClassName}>
              <li>your name;</li>
              <li>your email address; and</li>
              <li>the message you choose to submit.</li>
            </ul>
            <p>The message field allows you to provide information of your choosing.</p>
            <p>Please do not voluntarily submit unnecessary sensitive or confidential information through the contact form, including passwords, payment information, government identification numbers, authentication credentials, or other information that is not necessary for your enquiry.</p>
            <h3 className="font-anton text-xl text-gold uppercase">2.2 Website Analytics</h3>
            <p>The Website collects technical and usage information that does not directly identify you by name or contact details through Google Analytics 4 (GA4).</p>
            <p>This may include:</p>
            <ul className={listClassName}>
              <li>browser type;</li>
              <li>operating system;</li>
              <li>approximate, non-identifying location information;</li>
              <li>referring URL;</li>
              <li>pages viewed;</li>
              <li>page interactions;</li>
              <li>general Website usage information; and</li>
              <li>related technical analytics information.</li>
            </ul>
            <p>Google Analytics is configured for website analytics and is not used by Meme Capsule for advertising or remarketing.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">3. How We Use Personal Data</h2>
            <p>We use personal data for purposes connected with operating and improving the Website, including:</p>
            <ul className={listClassName}>
              <li>providing and maintaining the Website;</li>
              <li>understanding how visitors use the Website;</li>
              <li>improving Website content, functionality, and performance;</li>
              <li>responding to enquiries submitted through the contact form;</li>
              <li>communicating with individuals regarding their enquiries;</li>
              <li>understanding general Website traffic and usage;</li>
              <li>detecting or addressing misuse, abuse, or technical issues; and</li>
              <li>complying with applicable law or responding to lawful requests.</li>
            </ul>
            <p>We do not use contact-form information merely because it has been provided to us for unrelated purposes.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">4. Contact Form and Consent</h2>
            <p>The Website&apos;s contact form collects only your name, email address, and message.</p>
            <p>Before submitting the form, you will be presented with a consent checkbox linked to this Privacy Policy.</p>
            <p>The checkbox will state:</p>
            <p>&quot;I have read the Privacy Policy and consent to the processing of my personal data for the purpose of responding to my enquiry.&quot;</p>
            <p>The checkbox will be unchecked by default and will require an affirmative action before the form can be submitted.</p>
            <p>The consent is limited to receiving, reviewing, understanding, and responding to your enquiry. It does not constitute consent to unrelated processing, advertising, behavioural profiling, marketing communications, or future uses unrelated to your enquiry.</p>
            <p>Where applicable law provides a right to withdraw consent, you may contact Meme Capsule at <a href="mailto:support@memecapsule.wtf">support@memecapsule.wtf</a>.</p>
            <p>Withdrawal of consent does not affect the lawfulness of processing carried out before withdrawal.</p>
            <p>Meme Capsule will maintain an appropriate record of consent where required or reasonably necessary to demonstrate that consent was obtained.</p>
            <p>The contact-form consent mechanism does not replace any separate consent or verification requirement that may apply to children&apos;s personal data.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">5. Cookies and Similar Technologies</h2>
            <p>The Website uses cookies and similar technologies, including cookies associated with Google Analytics.</p>
            <p>Cookies may be used for:</p>
            <ul className={listClassName}>
              <li>essential Website functionality;</li>
              <li>security and technical operation; and</li>
              <li>analytics and understanding Website usage.</li>
            </ul>
            <p>Google Analytics cookies are used for analytics purposes and are not used by Meme Capsule for advertising or remarketing.</p>
            <p>Where a consent mechanism is required for non-essential cookies under applicable law, Meme Capsule will obtain the required consent before activating those cookies and will provide an appropriate means of declining or withdrawing such consent.</p>
            <p>The Website&apos;s actual cookie configuration may change as its technical implementation changes. This Privacy Policy will be updated where a material change affects the purposes or manner of cookie-based processing.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">6. Google Analytics and Third-Party Processing</h2>
            <p>Meme Capsule uses Google Analytics 4 (GA4) provided by Google to understand how visitors use the Website.</p>
            <p>Google Analytics is configured for website analytics and is not used by Meme Capsule for advertising or remarketing.</p>
            <h3 className="font-anton text-xl text-gold uppercase">Analytics Information</h3>
            <p>The Website collects technical and usage information that does not directly identify you by name or contact details through GA4, including browser type, operating system, approximate non-identifying location, referring URL, and page interactions.</p>
            <p>GA4 uses IP information at collection for purposes such as determining approximate geographic information and routing data, but Google states that IP addresses are discarded before the data is logged or stored by Google Analytics. Meme Capsule does not implement a separate custom IP-address collection or tracking system through the Website&apos;s GA4 implementation.</p>
            <h3 className="font-anton text-xl text-gold uppercase">Analytics Retention</h3>
            <p>The Website&apos;s GA4 user-level and event-level analytics data is configured to the standard 2-month retention period.</p>
            <p>Analytics data is subject to the retention configuration maintained in the relevant Google Analytics property.</p>
            <h3 className="font-anton text-xl text-gold uppercase">Processing Outside India</h3>
            <p>Google Analytics is operated by Google and may process Website analytics information using infrastructure located outside India.</p>
            <p>Accordingly, information collected through Google Analytics may be processed outside India in accordance with Google&apos;s applicable data-processing practices and applicable law.</p>
            <p>Meme Capsule does not independently determine the geographic location of Google&apos;s infrastructure used to process the analytics information.</p>
            <p>If the Website&apos;s Google Analytics configuration materially changes in a way that affects the purposes or manner of processing described in this Privacy Policy, this Privacy Policy may be updated accordingly.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">7. Children&apos;s Privacy</h2>
            <p>The Website is accessible to users of all ages. Meme Capsule does not impose an 18+ restriction on access to the Website.</p>
            <p>We recognise that children may access the Website and may potentially use the contact form or be exposed to Website analytics.</p>
            <p>We do not intentionally request unnecessary personal data from children.</p>
            <p>Where applicable Indian law requires specific safeguards for processing personal data relating to children, Meme Capsule will implement those safeguards.</p>
            <p>In particular, where verifiable parental or lawful-guardian consent is required, Meme Capsule will use a separate verification mechanism rather than relying solely on a child&apos;s completion of the ordinary contact-form consent checkbox.</p>
            <h3 className="font-anton text-xl text-gold uppercase">Website-specific verification mechanism</h3>
            <p>Meme Capsule will implement a Website-specific verification mechanism designed to satisfy the applicable verifiable parental-consent requirements under Indian law, including the requirements applicable under the DPDP Act and DPDP Rules when those provisions are in force.</p>
            <p>The mechanism will be implemented using appropriate technical and organisational measures and will maintain an appropriate audit record of the verification and consent process.</p>
            <p>The mechanism will be adapted as necessary to reflect the verification requirements applicable under Indian law at the time it is used.</p>
            <p>Meme Capsule will not knowingly process a child&apos;s personal data in a manner prohibited by applicable Indian law.</p>
            <p>If Meme Capsule becomes aware that a child&apos;s personal data has been processed without a legally required parental or lawful-guardian consent, Meme Capsule will take appropriate steps to stop the relevant processing and delete the affected personal data where required by applicable law.</p>
            <p>The Website&apos;s analytics configuration will also be reviewed and adjusted as necessary to address requirements applicable to children&apos;s personal data.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">8. Sharing and Disclosure</h2>
            <p>Meme Capsule does not indiscriminately disclose personal data.</p>
            <p>Personal data may be disclosed where reasonably necessary:</p>
            <ul className={listClassName}>
              <li>to operate the Website;</li>
              <li>to use Google Analytics;</li>
              <li>to respond to lawful legal or governmental requests;</li>
              <li>to comply with applicable law;</li>
              <li>to investigate suspected unlawful activity or misuse; or</li>
              <li>to protect the Website, its users, or the rights and safety of others.</li>
            </ul>
            <p>For Website analytics, information is processed by Google through Google Analytics as described in Section 6.</p>
            <p>Meme Capsule does not sell personal data for monetary consideration.</p>
            <p>Meme Capsule does not intentionally use contact-form information for unrelated purposes or add individuals to promotional mailing lists solely because they submitted an enquiry.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">9. Privacy Rights and Grievances</h2>
            <p>Subject to applicable Indian law and the provisions in force at the relevant time, individuals may have rights concerning their personal data.</p>
            <p>These may include:</p>
            <ul className={listClassName}>
              <li>access to information concerning the processing of personal data;</li>
              <li>correction or updating of inaccurate or incomplete personal data;</li>
              <li>erasure of personal data where applicable;</li>
              <li>withdrawal of consent, where processing is based on consent;</li>
              <li>grievance redressal concerning the processing of personal data; and</li>
              <li>nomination, where and when the applicable law provides such a right.</li>
            </ul>
            <p>The scope and availability of these rights may depend on the applicable law and the provisions in force at the relevant time.</p>
            <p>To submit a privacy request, withdraw consent where applicable, or raise a privacy-related grievance, contact the Privacy / Grievance Email provided at the end of this Privacy Policy.</p>
            <p>Meme Capsule will process valid requests in accordance with applicable Indian law.</p>
            <p>We may request reasonable information necessary to understand and, where appropriate, verify a request before taking action.</p>
            <h3 className="font-anton text-xl text-gold uppercase">Grievance Officer</h3>
            <p>Name: Pratham Pandey</p>
            <p>Designation: Grievance Officer</p>
            <p>Email: <a href="mailto:support@memecapsule.wtf">support@memecapsule.wtf</a></p>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">10. Third-Party Websites</h2>
            <p>The Website may contain links to third-party websites or services.</p>
            <p>Those third parties operate independently from Meme Capsule and may have their own privacy policies, terms, cookies, and data-processing practices.</p>
            <p>This Privacy Policy does not govern information that you provide directly to those third parties.</p>
            <p>We encourage you to review the privacy information applicable to third-party websites before providing them with personal data.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">11. Indian Legal Framework</h2>
            <p>This Privacy Policy is intended to describe the Website&apos;s processing of personal data under applicable Indian law.</p>
            <p>The relevant legal framework includes the Information Technology Act, 2000, applicable rules and regulations made under it where relevant, and the Digital Personal Data Protection Act, 2023 and Digital Personal Data Protection Rules, 2025, to the extent applicable and in force.</p>
            <p>The DPDP Act and DPDP Rules have a phased commencement structure. Accordingly, provisions that are not yet in force are not represented by this Privacy Policy as though they were already operative.</p>
            <p>Meme Capsule will update its privacy practices and this Privacy Policy as additional provisions become applicable or as the Website&apos;s processing activities materially change.</p>
            <p>Nothing in this Privacy Policy is intended to exclude or restrict any right or obligation that cannot lawfully be excluded or restricted under Indian law.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">12. Changes to Our Privacy Policy</h2>
            <p>The Website and its privacy practices may change over time.</p>
            <p>Meme Capsule may make routine updates to this Privacy Policy to reflect changes in the Website, corrections, administrative changes, or changes in applicable law.</p>
            <p>If Meme Capsule introduces a new purpose for processing personal data, materially changes an existing processing purpose, introduces a new category of personal data, or otherwise makes a change for which fresh notice or consent is required under applicable law, Meme Capsule will provide the required notice and obtain fresh consent where required.</p>
            <p>A change to this Privacy Policy alone will not be treated as consent to a materially different purpose where applicable law requires separate consent.</p>
            <p>The latest version will be published on the Website with the revised &quot;Last Updated&quot; date.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-anton text-2xl text-gold uppercase mb-4">13. Contact Information</h2>
            <p>For questions concerning this Privacy Policy, personal-data processing, consent, privacy rights, or privacy grievances:</p>
            <p>Meme Capsule</p>
            <p>Website: https://memecapsule.wtf</p>
            <p>Privacy / Grievance Email: <a href="mailto:support@memecapsule.wtf">support@memecapsule.wtf</a></p>
            <p>Grievance Officer: Pratham Pandey</p>
            <p>Designation: Grievance Officer</p>
            <p>This email may be used for:</p>
            <ul className={listClassName}>
              <li>privacy questions;</li>
              <li>requests concerning personal data;</li>
              <li>withdrawal of consent where applicable;</li>
              <li>children&apos;s privacy concerns; and</li>
              <li>privacy grievances.</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
