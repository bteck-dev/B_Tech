import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

import logoAsset from '../../assets/bteck-logo.png'
import { navLinks } from '../../data/site'
import { useSectionRouter } from '../../hooks/use-section-router.ts'
import { ThemeToggle } from '../shared/ThemeToggle'

export function Navbar({
  theme,
  toggle,
}: {
  theme: 'light' | 'dark'
  toggle: () => void
}) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { navigate } = useSectionRouter()

  const handleNavClick =
    (path: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      navigate(path)
      setOpen(false)
    }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'var(--nav-bg-scrolled)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? '1px solid var(--border-soft)'
          : '1px solid transparent',
      }}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <a
          href="/"
          onClick={handleNavClick('/')}
          className="flex items-center gap-2 min-w-0"
        >
          <img
            src={logoAsset}
            alt="B Teck logo"
            className="h-9 w-9 shrink-0 rounded-md object-contain bg-white/5 p-0.5"
          />
          <span className="font-display font-bold tracking-tight text-lg text-gradient-brand truncate">
            B Teck
          </span>
        </a>
        <div className="flex items-center gap-3">
          <ul className="hidden lg:flex items-center gap-7 mr-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={handleNavClick(l.href)}
                  className="text-sm text-body-muted hover:text-body transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-brand after:transition-all hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle theme={theme} toggle={toggle} />
          <a
            href="/contact"
            onClick={handleNavClick('/contact')}
            className="btn-brand hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm"
          >
            Get a Quote <ArrowRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-soft bg-surface text-body"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="lg:hidden border-t border-soft bg-surface">
          <ul className="px-6 py-4 space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  onClick={handleNavClick(l.href)}
                  href={l.href}
                  className="block text-body py-1"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                onClick={handleNavClick('/contact')}
                href="/contact"
                className="btn-brand inline-flex w-full justify-center items-center gap-2 rounded-full px-5 py-2.5 text-sm"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}