import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { site } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../hooks/useTheme'
import Button from './ui/Button'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'hobbies', label: 'Hobbies' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(links.map((l) => l.id))
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/5 bg-white/80 backdrop-blur-lg dark:border-white/5 dark:bg-navy-900/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Primary">
        <a
          href="#home"
          className="flex items-center gap-2 font-display text-lg font-semibold text-slate-900 dark:text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple font-mono text-sm text-white">
            TZ
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'page' : undefined}
                className={`text-sm font-medium transition-colors ${
                  active === link.id
                    ? 'text-cyan-600 dark:text-accent-cyan'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-900/10 text-slate-600 transition-colors hover:border-cyan-600/40 hover:text-cyan-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-accent-cyan/40 dark:hover:text-accent-cyan"
          >
            {theme === 'dark' ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>
          <Button href={site.resumeUrl} variant="outline" icon={<img src="./resume-icon.png" className="h-[22px] w-[22px] dark:invert" alt="" aria-hidden="true" />} download>
            Download Resume
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-900/10 text-slate-600 dark:border-white/10 dark:text-slate-300"
          >
            {theme === 'dark' ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-900/10 text-slate-900 dark:border-white/10 dark:text-white"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-slate-900/5 bg-white/95 px-6 pb-6 md:hidden dark:border-white/5 dark:bg-navy-900/95"
        >
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-slate-700 hover:text-cyan-600 dark:text-slate-200 dark:hover:text-accent-cyan"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            href={site.resumeUrl}
            variant="primary"
            className="mt-6 w-full"
            icon={<img src="./resume-icon.png" className="h-[22px] w-[22px] dark:invert" alt="" aria-hidden="true" />}
            download
          >
            Download Resume
          </Button>
        </div>
      )}
    </header>
  )
}
