import { Moon, Sun } from 'lucide-react'

export function ThemeToggle({
  theme,
  toggle,
}: {
  theme: 'light' | 'dark'
  toggle: () => void
}) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="grid h-10 w-10 place-items-center rounded-full border border-soft bg-surface text-body hover:scale-105 transition-transform"
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  )
}
