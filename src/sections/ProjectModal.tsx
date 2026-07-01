import { Check, ExternalLink, X } from 'lucide-react'
import { useEffect } from 'react'
import type { Project } from '../data/site'

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      style={{
        backgroundColor: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(6px)',
      }}
      onClick={onClose}
    >
      <div
        className="animate-modal-in relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface border border-soft shadow-[var(--shadow-glow-gold)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-surface-2 border border-soft text-body hover:scale-105 transition-transform"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="text-xs uppercase tracking-[0.2em] text-[#f5c842]">
              {project.category} · {project.year}
            </div>
            <h3 className="mt-1 section-heading text-2xl sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-white/85">{project.tagline}</p>
          </div>
        </div>
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full border border-soft bg-surface-2 text-body-muted"
              >
                {t}
              </span>
            ))}
          </div>

          <div>
            <h4 className="text-sm font-semibold text-body uppercase tracking-wide">
              Overview
            </h4>
            <p className="mt-2 text-sm text-body-muted leading-relaxed">
              {project.overview}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-body uppercase tracking-wide">
              Key Features
            </h4>
            <ul className="mt-3 space-y-2">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-sm text-body-muted"
                >
                  <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-brand text-[#0d1117]">
                    <Check className="h-3 w-3" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-body uppercase tracking-wide">
              Results
            </h4>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {project.results.map((r) => (
                <div
                  key={r.label}
                  className="rounded-xl border border-soft bg-surface-2 p-3 text-center"
                >
                  <div className="text-lg font-bold text-gradient-brand">
                    {r.value}
                  </div>
                  <div className="mt-0.5 text-[11px] text-body-muted">
                    {r.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-brand inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm"
            >
              Visit Live Site <ExternalLink className="h-4 w-4" />
            </a>
            <button
              onClick={onClose}
              className="btn-outline-brand inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
