import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

const sections = [
  {
    title: '1. Introduction',
    content: (
      <>
        <p>Welcome to Meme Capsule.</p>
        <p>
          This Privacy Policy explains how Meme Capsule (&quot;Meme Capsule&quot;, &quot;we&quot;, &quot;us&quot;, or
          &quot;our&quot;), as the operator of memecapsule.wtf (the &quot;Website&quot;), collects, uses, and
          processes personal data when you visit or interact with the Website.
        </p>
        <p>
          This Privacy Policy applies only to the Website. The Meme Capsule mobile application is a
          separate product and is not governed by this Privacy Policy. The mobile application may have
          separate privacy practices and notices.
        </p>
        <p>
          This Privacy Policy is focused on the Website&apos;s operations in India and is intended to
          operate consistently with applicable Indian privacy and data-protection law, including the
          Digital Personal Data Protection Act, 2023 (&quot;DPDP Act&quot;), the Digital Personal Data
          Protection Rules, 2025 (&quot;DPDP Rules&quot;), and other applicable Indian law, to the extent
          applicable and in force from time to time.
        </p>
      </>
    ),
  },
  {
    title: '2. Information We Collect',
    content: (
      <>
        <p>We seek to collect only information reasonably necessary for operating the Website, responding to enquiries, and understanding Website usage.</p>
        <h3>2.1 Contact Form</h3>
        <p>When you use the Website&apos;s contact form, we collect your name, email address, and the message you choose to submit. Please do not voluntarily submit unnecessary sensitive or confidential information, including passwords, payment information, government identification numbers, authentication credentials, or other information that is not necessary for your enquiry.</p>
        <h3>2.2 Website Analytics</h3>
        <p>The Website collects basic, non-directly identifying technical and usage telemetry through Google Analytics 4 (GA4). This may include browser type, operating system, approximate non-identifying location information, referring URL, pages viewed, page interactions, general Website usage information, and related technical analytics information. GA4 is configured so that Google Signals, advertising and remarketing features, and cross-site advertising tracking are disabled.</p>
      </>
    ),
  },
  {
    title: '3. How We Use Personal Data',
    content: <p>We use personal data for purposes connected with operating and improving the Website, including providing and maintaining the Website; understanding visitor usage; improving content, functionality, and performance; responding to contact-form enquiries; communicating about enquiries; understanding general traffic and usage; detecting or addressing misuse, abuse, or technical issues; and complying with applicable law or responding to lawful requests. We do not use contact-form information merely because it has been provided to us for unrelated purposes.</p>,
  },
  {
    title: '4. Contact Form and Consent',
    content: <p>The Website&apos;s contact form collects only your name, email address, and message. Before submitting the form, you will be presented with a consent checkbox linked to this Privacy Policy. The checkbox will be unchecked by default and will require affirmative action before the form can be submitted. Consent is limited to receiving, reviewing, understanding, and responding to your enquiry. It does not constitute consent to unrelated processing, advertising, behavioural profiling, marketing communications, or future uses unrelated to your enquiry. Where applicable law provides a right to withdraw consent, contact <a href="mailto:memecapsule.app@gmail.com">memecapsule.app@gmail.com</a>. Withdrawal does not affect processing carried out before withdrawal.</p>,
  },
  {
    title: '5. Cookies and Similar Technologies',
    content: <p>The Website uses cookies and similar technologies, including cookies associated with Google Analytics. Cookies may be used for essential Website functionality, security and technical operation, and analytics and understanding Website usage. Google Analytics cookies are used for analytics and are not used by Meme Capsule for advertising or remarketing. Where consent is required for non-essential cookies under applicable law, Meme Capsule will obtain the required consent before activating those cookies and provide an appropriate means of declining or withdrawing consent. The actual cookie configuration may change as the technical implementation changes.</p>,
  },
  {
    title: '6. Google Analytics and Third-Party Processing',
    content: <p>Meme Capsule uses Google Analytics 4 (GA4), measurement ID G-8VMD4ZNQQK, to understand Website usage. Google Signals, advertising features, Google Ads remarketing, cross-site advertising tracking, demographics and interests reporting, Google Ads conversion links, Campaign Manager 360 tracking, and additional Google Analytics integrations are disabled or not used. The AdMob implementation in the Android mobile application is separate from this Website&apos;s Google Analytics configuration. GA4 may process analytics information outside India. User-level and event-level analytics data is configured to the standard 2-month retention period and remains subject to the retention configuration of the relevant Google Analytics property.</p>,
  },
  {
    title: '7. Children&apos;s Privacy',
    content: <p>The Website is accessible to users of all ages and does not impose an 18+ restriction. We do not intentionally request unnecessary personal data from children. Where applicable Indian law requires safeguards for children&apos;s personal data, Meme Capsule will implement those safeguards, including a separate verification mechanism where verifiable parental or lawful-guardian consent is required. Meme Capsule will not knowingly process a child&apos;s personal data in a manner prohibited by applicable Indian law and will take appropriate steps to stop processing and delete affected data where legally required.</p>,
  },
  {
    title: '8. Sharing and Disclosure',
    content: <p>Meme Capsule does not indiscriminately disclose personal data. Personal data may be disclosed where reasonably necessary to operate the Website, use Google Analytics, respond to lawful legal or governmental requests, comply with applicable law, investigate suspected unlawful activity or misuse, or protect the Website, its users, or the rights and safety of others. Meme Capsule does not sell personal data for monetary consideration and does not intentionally use contact-form information for unrelated purposes or add enquirers to promotional mailing lists solely because they submitted an enquiry.</p>,
  },
  {
    title: '9. Privacy Rights and Grievances',
    content: <p>Subject to applicable Indian law and the provisions in force at the relevant time, individuals may have rights concerning access, correction, erasure, withdrawal of consent, grievance redressal, and nomination where applicable. To submit a privacy request, withdraw consent, or raise a privacy-related grievance, contact <a href="mailto:memecapsule.app@gmail.com">memecapsule.app@gmail.com</a>. Meme Capsule will process valid requests in accordance with applicable Indian law and may request reasonable information to understand and, where appropriate, verify a request.</p>,
  },
  {
    title: '10. Third-Party Websites',
    content: <p>The Website may contain links to third-party websites or services. Those third parties operate independently and may have their own privacy policies, terms, cookies, and data-processing practices. This Privacy Policy does not govern information provided directly to third parties.</p>,
  },
  {
    title: '11. Indian Legal Framework',
    content: <p>This Privacy Policy is intended to describe the Website&apos;s processing of personal data under applicable Indian law, including the Information Technology Act, 2000, applicable rules and regulations, the Digital Personal Data Protection Act, 2023, and the Digital Personal Data Protection Rules, 2025, to the extent applicable and in force. The DPDP Act and DPDP Rules have a phased commencement structure, so provisions not yet in force are not represented as though they were already operative. Nothing in this Privacy Policy excludes or restricts any right or obligation that cannot lawfully be excluded or restricted under Indian law.</p>,
  },
  {
    title: '12. Changes to Our Privacy Policy',
    content: <p>The Website and its privacy practices may change over time. Meme Capsule may update this Privacy Policy to reflect changes in the Website, corrections, administrative changes, or applicable law. If a new purpose, category of personal data, or material processing change requires fresh notice or consent, Meme Capsule will provide the required notice and obtain fresh consent where required. The latest version will be published on the Website with a revised Last Updated date.</p>,
  },
  {
    title: '13. Contact Information',
    content: <p>For questions concerning this Privacy Policy, personal-data processing, consent, privacy rights, or privacy grievances, contact Meme Capsule at <a href="mailto:memecapsule.app@gmail.com">memecapsule.app@gmail.com</a>. This email may be used for privacy questions, personal-data requests, withdrawal of consent where applicable, children&apos;s privacy concerns, and privacy grievances.</p>,
  },
]

export default function Privacy() {
  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-32 w-full">
        <h1 className="font-anton text-5xl text-purple uppercase mb-8 border-b-4 border-purple pb-4">Privacy Policy</h1>
        <div className="font-oswald text-text text-base leading-relaxed space-y-8">
          <p className="text-muted text-sm uppercase tracking-widest">Version: 1.0 · Effective Date: 25 September 2026 · Last Updated: 25 September 2026</p>
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-anton text-2xl text-gold uppercase mb-4">{section.title}</h2>
              <div className="space-y-4">{section.content}</div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
