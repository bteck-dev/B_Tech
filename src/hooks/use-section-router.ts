import { useCallback, useEffect } from 'react'

/**
 * Enables clean-URL section navigation for a single-page site.
 * - Clicking a nav link updates the URL (e.g. /services) without a reload
 * - Smooth-scrolls to the matching section id
 * - Handles direct loads (e.g. someone opens bteck.co.za/services)
 * - Handles browser back/forward buttons
 */

// Map of path -> section element id. "/" maps to the hero/home section.
const PATH_TO_SECTION: Record<string, string> = {
  '/': 'home',
  '/about': 'about',
  '/services': 'services',
  '/portfolio': 'portfolio',
  '/process': 'process',
  '/contact': 'contact',
}

function scrollToSection(pathname: string) {
  const id = PATH_TO_SECTION[pathname]
  if (!id) return
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function useSectionRouter() {
  // On first load, scroll to whatever section matches the current URL
  useEffect(() => {
    // Small delay so layout/images have settled before measuring scroll position
    const t = setTimeout(() => {
      scrollToSection(window.location.pathname)
    }, 50)
    return () => clearTimeout(t)
  }, [])

  // Handle back/forward browser buttons
  useEffect(() => {
    const onPopState = () => scrollToSection(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  // Call this from any nav link's onClick
  const navigate = useCallback((path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path)
    }
    scrollToSection(path)
  }, [])

  return { navigate }
}