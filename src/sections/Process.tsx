import { process } from '../data/site'

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32 bg-circuit">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal max-w-2xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
            How We Work
          </div>
          <h2 className="mt-3 section-heading text-3xl sm:text-4xl md:text-5xl text-body">
            A Clear, Proven <span className="text-gradient-brand">Process</span>
          </h2>
          <p className="mt-4 text-body-muted">
            From idea to launch — you'll always know where your project stands.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {process.map((p, i) => (
            <div
              key={p.title}
              className="reveal glass-card p-6 relative"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute -top-3 -right-3 grid h-8 w-8 place-items-center rounded-full bg-gradient-brand text-[#0d1117] text-xs font-bold shadow-[var(--shadow-glow-gold)]">
                {i + 1}
              </div>
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-[#0d1117]">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-body">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-body-muted leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
