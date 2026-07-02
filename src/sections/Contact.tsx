import { useState } from 'react'
import { ArrowRight, Mail, MessageCircle, Phone } from 'lucide-react'
import { log } from 'console'

const supportEmail = 'support@bteck.co.za'
const formEndpoint = `https://formsubmit.co/ajax/${supportEmail}`

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const visitorEmail = String(formData.get('email') || '').trim()

    formData.append('_subject', 'New website enquiry from B Teck website')
    formData.append('_template', 'table')
    formData.append('_replyto', visitorEmail)
    formData.append(
      '_autoresponse',
      'Thank you for contacting B Teck. We received your message and will respond shortly.',
    )

    setStatus('sending')

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }
      setStatus('sent')

      console.log("Response: ", response);
      
      alert('Thank you for your message. We will respond shortly.')
      form.reset()
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      alert(
        `Sorry, the message could not be sent right now. Please email us directly at ${supportEmail}.`,
      )
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
            Contact
          </div>
          <h2 className="mt-3 section-heading text-3xl sm:text-4xl md:text-5xl text-body">
            Let's Build Something{' '}
            <span className="text-gradient-brand">Great Together</span>
          </h2>
          <p className="mt-4 text-body-muted">
            Tell us about your project - we'll get back to you shortly.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-[1fr_1.2fr] gap-8">
          <div className="reveal glass-card p-8 flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-semibold text-body">Get in touch</h3>
              <p className="mt-1 text-sm text-body-muted">
                Reach out via phone, WhatsApp or email for a fast response.
              </p>
            </div>
            <a
              href="tel:+27780330972"
              className="flex items-center gap-4 rounded-xl border border-soft bg-surface-2 p-4 hover:scale-[1.01] transition-transform"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-brand text-[#0d1117]">
                <Phone className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-body-muted">Call us</div>
                <div className="font-semibold text-body truncate">
                  +27 78 033 0972
                </div>
              </div>
            </a>
            <a
              href="https://wa.me/27780330972"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-4 rounded-xl border border-soft bg-surface-2 p-4 hover:scale-[1.01] transition-transform"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-brand text-[#0d1117]">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-body-muted">WhatsApp</div>
                <div className="font-semibold text-body truncate">
                  Chat with us
                </div>
              </div>
            </a>
            <a
              href={`mailto:${supportEmail}`}
              className="flex items-center gap-4 rounded-xl border border-soft bg-surface-2 p-4 hover:scale-[1.01] transition-transform"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-brand text-[#0d1117]">
                <Mail className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-body-muted">Email</div>
                <div className="font-semibold text-body truncate">
                  {supportEmail}
                </div>
              </div>
            </a>
            <div className="mt-auto text-xs text-body-muted">
              Based in South Africa - Available worldwide
            </div>
          </div>

          <form onSubmit={handleSubmit} className="reveal glass-card p-8 space-y-5">
            <input type="text" name="_honey" className="hidden" tabIndex={-1} />
            <div className="grid sm:grid-cols-2 gap-5">
              <label className="block">
                <span className="text-xs font-medium text-body-muted">
                  Your name
                </span>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Jane Doe"
                  className="field-input mt-1 w-full rounded-lg px-4 py-3 text-sm"
                />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-body-muted">
                  Email
                </span>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                  className="field-input mt-1 w-full rounded-lg px-4 py-3 text-sm"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-xs font-medium text-body-muted">
                Message
              </span>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                className="field-input mt-1 w-full rounded-lg px-4 py-3 text-sm resize-none"
              />
            </label>
            {status === 'sent' && (
              <p className="text-sm font-medium text-[#d4af37]">
                Message sent. We will respond shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm font-medium text-red-400">
                Message could not be sent. Please email {supportEmail} directly.
              </p>
            )}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-brand w-full sm:w-auto inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'sending'
                ? 'Sending...'
                : status === 'sent'
                  ? 'Message sent!'
                  : 'Send Message'}{' '}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
