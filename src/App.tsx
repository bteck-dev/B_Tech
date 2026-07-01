import { useState } from 'react'

import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import type { Project } from './data/site'
import { useScrollReveal } from './hooks/use-scroll-reveal'
import { useTheme } from './hooks/use-theme'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { FAQ } from './sections/FAQ'
import { Hero } from './sections/Hero'
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

  useScrollReveal()

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
