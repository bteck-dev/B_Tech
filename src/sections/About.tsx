import logoAsset from '../assets/bteck-logo.png'
import port12 from '../assets/logo12.jpeg'
import { stats } from '../data/site'

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal">
          <div className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
            About Us
          </div>
          <h2 className="mt-3 section-heading text-3xl sm:text-4xl md:text-5xl text-body">
            About <span className="text-gradient-brand">B Teck</span>
          </h2>
          <p className="mt-6 text-body-muted leading-relaxed">
            B Teck is a technology company dedicated to delivering high-quality
            digital solutions for startups, entrepreneurs, and established
            businesses. We combine innovation, creativity, and technical
            expertise to help our clients succeed in the digital world.
          </p>
          <p className="mt-4 text-body-muted leading-relaxed">
            Our mission is to simplify technology for businesses by providing
            reliable, affordable, and scalable solutions that drive growth and
            efficiency. We believe great technology should be accessible — not
            intimidating.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass-card p-4 flex items-center gap-3"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-brand text-[#0d1117]">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold text-body">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal relative">
          <div className="absolute -inset-8 bg-gradient-brand opacity-20 blur-3xl rounded-full" />
          <div className="relative glass-card p-10 flex items-center justify-center animate-float">
            <img
              src={port12}
              alt="B Teck brand logo"
              className="w-full max-w-sm object-contain drop-shadow-[0_10px_40px_rgba(212,175,55,0.35)]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
