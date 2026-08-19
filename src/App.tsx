import { useEffect, useState } from 'react'

import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import type { Project } from './data/site'
import { useScrollReveal } from './hooks/use-scroll-reveal'
import { useSectionRouter } from './hooks/use-section-router'
import { useTheme } from './hooks/use-theme'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { FAQ } from './sections/FAQ'
import { Hero } from './sections/Hero'
import { LegalPolicies } from './sections/LegalPolicies'
import { Portfolio } from './sections/Portfolio'
import { Process } from './sections/Process'
import { ProjectModal } from './sections/ProjectModal'
import { Services } from './sections/Services'
import { TechStack } from './sections/TechStack'
import { Testimonials } from './sections/Testimonials'
import { WhyUs } from './sections/WhyUs'

export default function App() {
  const { theme, toggle } = useTheme()
  const [active, setActive] = useState<Project | null>(null)
  const [pathname, setPathname] = useState(() => window.location.pathname)

  useEffect(() => {
    const syncPathname = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', syncPathname)
    window.addEventListener('locationchange', syncPathname)
    return () => {
      window.removeEventListener('popstate', syncPathname)
      window.removeEventListener('locationchange', syncPathname)
    }
  }, [])

  useScrollReveal()
  useSectionRouter()

  const isPoliciesPage = [
    '/terms-and-policies',
    '/terms-of-service',
    '/privacy-policy',
  ].includes(pathname)

  if (isPoliciesPage) {
    return (
      <div className="min-h-screen bg-page text-body overflow-x-hidden">
        <Navbar theme={theme} toggle={toggle} />
        <LegalPolicies pathname={pathname} />
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-page text-body overflow-x-hidden">
      <Navbar theme={theme} toggle={toggle} />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio onOpen={setActive} />
        <Process />
        <WhyUs />
        <TechStack />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      {active && (
        <ProjectModal project={active} onClose={() => setActive(null)} />
      )}
    </div>
  )
}
