import logoAsset from '../../assets/bteck-logo.png'
import { navLinks } from '../../data/site'
import { useSectionRouter } from '../../hooks/use-section-router'

const supportEmail = 'support@bteck.co.za'

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.6 5.82a6.08 6.08 0 0 0 3.56 1.14v3.12a9.02 9.02 0 0 1-3.54-.72v5.18a5.62 5.62 0 1 1-5.62-5.62c.35 0 .69.03 1.02.1v3.24a2.5 2.5 0 1 0 1.42 2.28V2h3.16v3.82Z" />
    </svg>
  )
}

export function Footer() {
  const { navigate } = useSectionRouter()

  const handleNavClick =
    (path: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      navigate(path)
    }

  const handleTikTokPlaceholder = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    alert('TikTok link coming soon.')
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-5">
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
          <div className="mt-5 flex items-center gap-3">
            <a
              href="#"
              onClick={handleTikTokPlaceholder}
              aria-label="TikTok link coming soon"
              title="TikTok link coming soon"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <TikTokIcon className="h-5 w-5" />
            </a>
          </div>
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
              <a href={`mailto:${supportEmail}`} className="hover:text-white">
                {supportEmail}
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
        <div>
          <div className="text-sm font-semibold text-white">Policies</div>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li>
              <a href="/terms-and-policies#refunds" className="hover:text-white transition-colors">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="/terms-and-policies#cancellations" className="hover:text-white transition-colors">
                Cancellation Policy
              </a>
            </li>
            <li>
              <a href="/terms-and-policies#delivery" className="hover:text-white transition-colors">
                Delivery Policy
              </a>
            </li>
            <li>
              <a href="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
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
