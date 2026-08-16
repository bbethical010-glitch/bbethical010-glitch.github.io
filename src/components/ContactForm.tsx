import { useEffect, useState } from 'react'
import { CONFIG } from '../constants/config'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      if (urlParams.get('submitted') === 'true') {
        setSubmitted(true)
      }
    }
  }, [])

  return (
    <section id="contact" className="py-20 px-4 border-t-4 border-purple bg-[#131313]">
      <div className="max-w-lg mx-auto">
        <h2 className="font-anton text-5xl text-text uppercase mb-12 text-center">Get in Touch</h2>

        {submitted ? (
          <div className="neo-card bg-surface p-8 text-center" style={{boxShadow: '6px 6px 0px #dd0061'}}>
            <div className="font-anton text-4xl text-gold mb-2">MESSAGE RECEIVED</div>
            <p className="font-oswald text-muted text-lg">We'll get back to you soon.</p>
            <button 
              onClick={() => {
                window.history.replaceState({}, document.title, window.location.pathname)
                setSubmitted(false)
              }}
              className="neo-button-primary mt-8 px-6 py-2"
            >
              Send Another
            </button>
          </div>
        ) : (
          <form
            action={`https://formspree.io/f/${CONFIG.formspreeId}`}
            method="POST"
            className="flex flex-col gap-5"
          >
            <div>
              <input 
                type="text" 
                name="name" 
                placeholder="YOUR NAME"
                required
                className="bg-surfaceHigh border-2 border-purple text-text font-oswald p-4 w-full focus:border-gold focus:outline-none transition-colors"
                style={{boxShadow: 'focus-within: 4px 4px 0px #f4c300'}}
              />
            </div>
            
            <div>
              <input 
                type="email" 
                name="email" 
                placeholder="YOUR EMAIL"
                required
                className="bg-surfaceHigh border-2 border-purple text-text font-oswald p-4 w-full focus:border-gold focus:outline-none transition-colors"
              />
            </div>
            
            <div>
              <select 
                name="subject"
                className="bg-surfaceHigh border-2 border-purple text-text font-oswald p-4 w-full focus:border-gold focus:outline-none appearance-none rounded-none cursor-pointer"
              >
                <option value="General Question">General Question</option>
                <option value="Bug Report">Bug Report</option>
                <option value="Feature Request">Feature Request</option>
                <option value="Content Issue">Content Issue</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div>
              <textarea 
                name="message" 
                rows={6} 
                placeholder="TELL US EVERYTHING..."
                required
                className="bg-surfaceHigh border-2 border-purple text-text font-oswald p-4 w-full focus:border-gold focus:outline-none resize-none transition-colors"
              ></textarea>
            </div>
            
            <input type="hidden" name="_subject" value="New Meme Capsule Website Message" />
            <input type="hidden" name="_next" value={`${CONFIG.siteUrl}?submitted=true#contact`} />
            
            <button type="submit" className="neo-button-primary py-4 text-xl mt-2 w-full">
              SEND IT
            </button>
          </form>
        )}
      </div>
      <style>{`
        input:focus, select:focus, textarea:focus {
          box-shadow: 4px 4px 0px #f4c300;
        }
      `}</style>
    </section>
  )
}
