import { Linkedin, Github, Mail } from 'lucide-react'
import { site } from '../data/site'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-900/5 bg-slate-50 py-12 dark:border-white/5 dark:bg-navy-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-slate-900 dark:text-white">{site.name}</p>
          <p className="text-sm text-slate-500">{site.title}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600 dark:text-slate-400">
            {links.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="hover:text-cyan-600 dark:hover:text-accent-cyan">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-4">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-accent-cyan"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-accent-cyan"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-accent-cyan"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-slate-900/5 px-6 pt-6 text-xs text-slate-500 dark:border-white/5 dark:text-slate-600">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <p className="mt-1">Designed and built with a focus on reliable AI.</p>
      </div>
    </footer>
  )
}
