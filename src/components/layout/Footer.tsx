import logoAsset from '../../assets/bteck-logo.png'
import { navLinks } from '../../data/site'
import { useSectionRouter } from '../../hooks/use-section-router'

export function Footer() {
  const { navigate } = useSectionRouter()

  const handleNavClick =
    (path: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      navigate(path)
    }

  return (
    <footer
      className="relative border-t"
      style={{
        backgroundColor: 'var(--footer-bg)',
        color: 'var(--footer-text)',
        borderColor: 'rgba(255,255,255,0.08)',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <a href="/" onClick={handleNavClick('/')} className="flex items-center gap-2">
            <img
              src={logoAsset}
              alt="B Teck logo"
              className="h-10 w-10 rounded-md object-contain bg-white/5 p-0.5"
            />
            <span className="font-display font-bold text-xl text-gradient-brand">
              B Teck
            </span>
          </a>
          <p className="mt-4 text-sm text-white/60 max-w-sm">
            Empowering businesses through technology — from software and web to
            hosting, branding and business setup.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Quick Links</div>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={handleNavClick(l.href)}
                  className="hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li>
              <a href="tel:+27780330972" className="hover:text-white">
                +27 78 033 0972
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/27780330972"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                WhatsApp Chat
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-center text-xs text-white/50">
          © 2026 B Teck. All rights reserved.
        </div>
      </div>
    </footer>
  )
}