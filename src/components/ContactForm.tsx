import { useEffect, useState, type FormEvent } from 'react'
import { CONFIG } from '../constants/config'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      if (urlParams.get('submitted') === 'true') {
        setStatus('success')
      }
    }
  }, [])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: (formData.get('name') as string)?.trim(),
      email: (formData.get('email') as string)?.trim(),
      subject: (formData.get('subject') as string)?.trim(),
      message: (formData.get('message') as string)?.trim(),
      privacy_consent: formData.get('privacy_consent') === 'on',
      _hp: (formData.get('_hp') as string)?.trim() || '',
    }

    try {
      const res = await fetch(`${CONFIG.apiBase}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = (await res.json()) as { success?: boolean; error?: string }

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to dispatch message. Please try again.')
      }

      setStatus('success')
    } catch (err: any) {
      setErrorMessage(err.message || 'Something went wrong. Please check your network and try again.')
      setStatus('error')
    }
  }

  function handleReset() {
    if (typeof window !== 'undefined') {
      window.history.replaceState({}, document.title, window.location.pathname)
    }
    setErrorMessage('')
    setStatus('idle')
  }

  return (
    <section id="contact" className="py-20 px-4 border-t border-purple/20 bg-[#131313]">
      <div className="max-w-lg mx-auto">
        <div className="sec-marker" data-rv="fade"><b>06</b> — GET IN TOUCH<span className="rule"></span></div>
        <h2 className="font-anton text-5xl text-text uppercase mb-12 text-center" data-rv="up">Get in Touch</h2>

        {status === 'success' ? (
          <div className="neo-card bg-surface p-8 text-center" style={{ boxShadow: '6px 6px 0px #dd0061' }} data-rv="up">
            <div className="font-anton text-4xl text-gold mb-2">MESSAGE RECEIVED</div>
            <p className="font-oswald text-muted text-lg">We'll get back to you soon.</p>
            <button
              onClick={handleReset}
              className="neo-button-primary mt-8 px-6 py-2"
              data-cursor
            >
              Send Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Honeypot field for bot deterrence */}
            <input
              type="text"
              name="_hp"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            {status === 'error' && (
              <div
                className="neo-card bg-surface p-4 text-left border-2 border-pink text-pink font-oswald text-sm"
                style={{ boxShadow: '4px 4px 0px #dd0061' }}
              >
                <div className="font-bold uppercase tracking-wider mb-1">Transmission Failed</div>
                <p className="text-text/90">{errorMessage}</p>
              </div>
            )}

            <div data-rv="up" style={{ transitionDelay: '100ms' }}>
              <label htmlFor="contact-name" className="sr-only">Your Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                aria-label="Your Name"
                aria-required="true"
                placeholder="YOUR NAME"
                required
                disabled={status === 'submitting'}
                className="bg-surfaceHigh border-2 border-purple text-text font-oswald p-4 w-full focus:border-gold focus:outline-none transition-colors disabled:opacity-50"
                data-cursor
              />
            </div>

            <div data-rv="up" style={{ transitionDelay: '200ms' }}>
              <label htmlFor="contact-email" className="sr-only">Your Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                aria-label="Your Email"
                aria-required="true"
                placeholder="YOUR EMAIL"
                required
                disabled={status === 'submitting'}
                className="bg-surfaceHigh border-2 border-purple text-text font-oswald p-4 w-full focus:border-gold focus:outline-none transition-colors disabled:opacity-50"
                data-cursor
              />
            </div>

            <div data-rv="up" style={{ transitionDelay: '300ms' }}>
              <label htmlFor="contact-subject" className="sr-only">Inquiry Subject</label>
              <select
                id="contact-subject"
                name="subject"
                aria-label="Inquiry Subject"
                aria-required="true"
                disabled={status === 'submitting'}
                className="bg-surfaceHigh border-2 border-purple text-text font-oswald p-4 w-full focus:border-gold focus:outline-none appearance-none rounded-none cursor-pointer disabled:opacity-50"
                data-cursor
              >
                <option value="General Question">General Question</option>
                <option value="Bug Report">Bug Report</option>
                <option value="Feature Request">Feature Request</option>
                <option value="Content Issue">Content Issue</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div data-rv="up" style={{ transitionDelay: '400ms' }}>
              <label htmlFor="contact-message" className="sr-only">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                aria-label="Your Message"
                aria-required="true"
                rows={6}
                placeholder="TELL US EVERYTHING..."
                required
                disabled={status === 'submitting'}
                className="bg-surfaceHigh border-2 border-purple text-text font-oswald p-4 w-full focus:border-gold focus:outline-none resize-none transition-colors disabled:opacity-50"
                data-cursor
              ></textarea>
            </div>

            <div data-rv="up" style={{ transitionDelay: '450ms' }} className="flex items-start gap-3 mt-1 text-left">
              <input
                type="checkbox"
                id="privacy-consent"
                name="privacy_consent"
                required
                disabled={status === 'submitting'}
                className="mt-1 w-4 h-4 accent-purple cursor-pointer rounded-none border-2 border-purple bg-surfaceHigh"
                data-cursor
              />
              <label htmlFor="privacy-consent" className="font-oswald text-xs sm:text-sm text-muted leading-relaxed cursor-pointer select-none">
                I have read the <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-gold underline hover:text-purple transition-colors">Privacy Policy</a> and consent to the processing of my personal data for the purpose of responding to my enquiry.
              </label>
            </div>

            <div data-rv="up" style={{ transitionDelay: '500ms' }}>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="cta-fill py-4 text-xl mt-2 w-full justify-center disabled:opacity-50"
                data-cursor
              >
                <span className="fill"></span>
                <span className="relative z-10 font-oswald font-bold">
                  {status === 'submitting' ? 'SENDING...' : 'SEND IT'}
                </span>
              </button>
            </div>
          </form>
        )}
      </div>
      <style>{`input:focus, select:focus, textarea:focus { box-shadow: 4px 4px 0px #f4c300; }`}</style>
    </section>
  )
}
