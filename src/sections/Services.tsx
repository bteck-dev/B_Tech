import { ArrowRight } from 'lucide-react'

import { services } from '../data/site'

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-circuit">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal max-w-2xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
            What We Do
          </div>
          <h2 className="mt-3 section-heading text-3xl sm:text-4xl md:text-5xl text-body">
            Services That{' '}
            <span className="text-gradient-brand">Drive Growth</span>
          </h2>
          <p className="mt-4 text-body-muted">
            End-to-end digital solutions crafted to help your business scale.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="reveal glass-card glass-card-hover p-7"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-[#0d1117] shadow-[var(--shadow-glow-green)]">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-body">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-body-muted leading-relaxed">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
