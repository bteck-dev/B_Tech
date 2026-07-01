import { Check } from 'lucide-react'

import { whyUs } from '../data/site'

export function WhyUs() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal glass-card p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
          <div className="relative grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
                Why B Teck
              </div>
              <h2 className="mt-3 section-heading text-2xl sm:text-3xl md:text-4xl text-body">
                Built for businesses that want{' '}
                <span className="text-gradient-brand">quality</span>
              </h2>
              <p className="mt-3 text-body-muted">
                We combine speed, transparency and technical craft — so you get
                results that last.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {whyUs.map((w) => (
                <div
                  key={w.title}
                  className="rounded-xl bg-surface-2 border border-soft p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-7 w-7 place-items-center rounded-full bg-gradient-brand text-[#0d1117]">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold text-body">
                      {w.title}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-body-muted leading-relaxed">
                    {w.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
