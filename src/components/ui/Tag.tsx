import type { ReactNode } from 'react'

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
      {children}
    </span>
  )
}
