import { ArrowRight } from 'lucide-react'

import { CircuitLines } from '../components/shared/CircuitLines'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <div
        className="absolute inset-0 -z-10 animate-hero-shift"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 20% 20%, var(--hero-tint-1), transparent 55%), radial-gradient(ellipse at 80% 30%, var(--hero-tint-2), transparent 55%), radial-gradient(ellipse at 50% 90%, var(--hero-tint-3), transparent 60%)',
        }}
      />
      <div className="absolute inset-0 -z-10 bg-circuit opacity-70" />
      <CircuitLines className="absolute -left-10 top-10 w-[520px] opacity-40 hidden md:block" />
      <CircuitLines className="absolute -right-10 bottom-0 w-[520px] opacity-30 rotate-180 hidden md:block" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-soft bg-surface/60 backdrop-blur px-4 py-1.5 text-xs text-body-muted">
          <span className="h-2 w-2 rounded-full bg-[#7ed957] animate-pulse-glow" />
          Your trusted technology partner
        </div>
        <h1
          className="animate-fade-up mt-6 section-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-body max-w-4xl mx-auto"
          style={{ animationDelay: '.1s' }}
        >
          Empowering Businesses <br className="hidden sm:block" />
          Through <span className="text-gradient-brand">Technology</span>
        </h1>
        <p
          className="animate-fade-up mt-6 text-base sm:text-lg text-body-muted max-w-2xl mx-auto"
          style={{ animationDelay: '.2s' }}
        >
          At B Teck, we provide innovative digital solutions designed to help
          businesses grow, automate operations, and establish a strong online
          presence.
        </p>
        <div
          className="animate-fade-up mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: '.3s' }}
        >
          <a
            href="#contact"
            className="btn-brand inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#portfolio"
            className="btn-outline-brand inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
          >
            View Our Work
          </a>
        </div>

        {/* Trust bar */}
        <div
          className="animate-fade-up mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
          style={{ animationDelay: '.4s' }}
        >
          {[
            { k: '50+', v: 'Projects Delivered' },
            { k: '30+', v: 'Happy Clients' },
            { k: '5+', v: 'Years Experience' },
            { k: '24/7', v: 'Support' },
          ].map((s) => (
            <div key={s.v} className="glass-card p-4 text-center">
              <div className="text-2xl font-bold text-gradient-brand">
                {s.k}
              </div>
              <div className="mt-1 text-xs text-body-muted">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
