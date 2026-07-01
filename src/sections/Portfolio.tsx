import { ArrowRight, ExternalLink } from 'lucide-react'

import { projects, type Project } from '../data/site'

export function Portfolio({ onOpen }: { onOpen: (p: Project) => void }) {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal max-w-2xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
            Our Work
          </div>
          <h2 className="mt-3 section-heading text-3xl sm:text-4xl md:text-5xl text-body">
            Projects We're <span className="text-gradient-brand">Proud Of</span>
          </h2>
          <p className="mt-4 text-body-muted">
            Real products shipped for real businesses. Click any project to see
            the full case study.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="reveal glass-card overflow-hidden group flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={p.image}
                  alt={`${p.title} website preview`}
                  loading="lazy"
                  width={1280}
                  height={832}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute top-3 left-3 text-[11px] px-2.5 py-1 rounded-full bg-black/50 backdrop-blur text-white border border-white/15">
                  {p.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-body">{p.title}</h3>
                <p className="mt-1 text-sm text-[#d4af37]">{p.tagline}</p>
                <p className="mt-3 text-sm text-body-muted flex-1">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-[11px] px-2 py-0.5 rounded-full border border-soft bg-surface-2 text-body-muted"
                    >
                      {h}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={() => onOpen(p)}
                    className="btn-brand inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </button>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-outline-brand inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
                  >
                    Visit Site <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
