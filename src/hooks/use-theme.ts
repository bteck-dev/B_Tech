import { useEffect, useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  useEffect(() => {
    const saved = (typeof window !== 'undefined' &&
      localStorage.getItem('bteck-theme')) as 'light' | 'dark' | null
    const initial = saved ?? 'dark'
    setTheme(initial)
    document.documentElement.classList.toggle('dark', initial === 'dark')
  }, [])
  const toggle = () => {
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark'
      document.documentElement.classList.toggle('dark', next === 'dark')
      localStorage.setItem('bteck-theme', next)
      return next
    })
  }
  return { theme, toggle }
}
