import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

import { faqs } from '../data/site'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
            FAQ
          </div>
          <h2 className="mt-3 section-heading text-3xl sm:text-4xl md:text-5xl text-body">
            Frequently Asked{' '}
            <span className="text-gradient-brand">Questions</span>
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className="reveal glass-card overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-body">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-body-muted shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-body-muted leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
