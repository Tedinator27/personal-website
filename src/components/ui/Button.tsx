import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'ghost'
  icon?: ReactNode
  className?: string
  type?: 'button' | 'submit'
  download?: boolean
  target?: string
  rel?: string
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-navy-900'

const variants: Record<NonNullable<Props['variant']>, string> = {
  primary:
    'bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan text-white shadow-glow hover:shadow-glowPurple hover:-translate-y-0.5',
  outline:
    'border border-slate-900/15 text-slate-900 hover:border-cyan-600/60 hover:text-cyan-600 hover:-translate-y-0.5 dark:border-white/15 dark:text-white dark:hover:border-accent-cyan/60 dark:hover:text-accent-cyan',
  ghost: 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white',
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  icon,
  className = '',
  type = 'button',
  download,
  target,
  rel,
}: Props) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes} download={download} target={target} rel={rel}>
        {children}
        {icon}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  )
}
