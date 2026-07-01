import { Star } from 'lucide-react'

import { testimonials } from '../data/site'

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-28 bg-circuit">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
            Testimonials
          </div>
          <h2 className="mt-3 section-heading text-3xl sm:text-4xl md:text-5xl text-body">
            What Our Clients <span className="text-gradient-brand">Say</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="reveal glass-card p-6"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex gap-1 text-[#d4af37]">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm text-body leading-relaxed">
                "{t.quote}"
              </p>
              <footer className="mt-5 pt-4 border-t border-soft">
                <div className="text-sm font-semibold text-body">{t.name}</div>
                <div className="text-xs text-body-muted">{t.role}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
