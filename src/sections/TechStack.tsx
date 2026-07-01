import { techStack } from '../data/site'

export function TechStack() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
            Technology
          </div>
          <h2 className="mt-3 section-heading text-2xl sm:text-3xl md:text-4xl text-body">
            Modern, Scalable{' '}
            <span className="text-gradient-brand">Tech Stack</span>
          </h2>
          <p className="mt-3 text-body-muted">
            We build on trusted, industry-standard tools.
          </p>
        </div>
        <div className="reveal mt-10 flex flex-wrap justify-center gap-3">
          {techStack.map((t) => (
            <span
              key={t}
              className="glass-card px-4 py-2 text-sm text-body font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
