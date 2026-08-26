import { useEffect, useState } from 'react'
import { CONFIG } from '../constants/config'
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      if (urlParams.get('submitted') === 'true') setSubmitted(true)
    }
  }, [])
  return (
    <section id="contact" className="py-20 px-4 border-t border-purple/20 bg-[#131313]">
      <div className="max-w-lg mx-auto">
        <div className="sec-marker" data-rv="fade"><b>08</b> — GET IN TOUCH<span className="rule"></span></div>
        <h2 className="font-anton text-5xl text-text uppercase mb-12 text-center" data-rv="up">Get in Touch</h2>
        {submitted ? (
          <div className="neo-card bg-surface p-8 text-center" style={{boxShadow: '6px 6px 0px #dd0061'}} data-rv="up">
            <div className="font-anton text-4xl text-gold mb-2">MESSAGE RECEIVED</div>
            <p className="font-oswald text-muted text-lg">We'll get back to you soon.</p>
            <button onClick={() => { window.history.replaceState({}, document.title, window.location.pathname); setSubmitted(false) }} className="neo-button-primary mt-8 px-6 py-2" data-cursor>Send Another</button>
          </div>
        ) : (
          <form action={`https://formspree.io/f/${CONFIG.formspreeId}`} method="POST" className="flex flex-col gap-5">
            <div data-rv="up" style={{ transitionDelay: '100ms' }}>
              <input type="text" name="name" placeholder="YOUR NAME" required className="bg-surfaceHigh border-2 border-purple text-text font-oswald p-4 w-full focus:border-gold focus:outline-none transition-colors" data-cursor />
            </div>
            <div data-rv="up" style={{ transitionDelay: '200ms' }}>
              <input type="email" name="email" placeholder="YOUR EMAIL" required className="bg-surfaceHigh border-2 border-purple text-text font-oswald p-4 w-full focus:border-gold focus:outline-none transition-colors" data-cursor />
            </div>
            <div data-rv="up" style={{ transitionDelay: '300ms' }}>
              <select name="subject" className="bg-surfaceHigh border-2 border-purple text-text font-oswald p-4 w-full focus:border-gold focus:outline-none appearance-none rounded-none cursor-pointer" data-cursor>
                <option value="General Question">General Question</option>
                <option value="Bug Report">Bug Report</option>
                <option value="Feature Request">Feature Request</option>
                <option value="Content Issue">Content Issue</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div data-rv="up" style={{ transitionDelay: '400ms' }}>
              <textarea name="message" rows={6} placeholder="TELL US EVERYTHING..." required className="bg-surfaceHigh border-2 border-purple text-text font-oswald p-4 w-full focus:border-gold focus:outline-none resize-none transition-colors" data-cursor></textarea>
            </div>
            <input type="hidden" name="_subject" value="New Meme Capsule Website Message" />
            <input type="hidden" name="_next" value={`${CONFIG.siteUrl}?submitted=true#contact`} />
            <div data-rv="up" style={{ transitionDelay: '500ms' }}>
              <button type="submit" className="cta-fill py-4 text-xl mt-2 w-full justify-center" data-cursor>
                <span className="fill"></span>
                <span className="relative z-10 font-oswald font-bold">SEND IT</span>
              </button>
            </div>
          </form>
        )}
      </div>
      <style>{`input:focus, select:focus, textarea:focus { box-shadow: 4px 4px 0px #f4c300; }`}</style>
    </section>
  )
}
