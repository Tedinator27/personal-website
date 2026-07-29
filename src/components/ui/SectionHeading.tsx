interface Props {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: Props) {
  return (
    <div className={`mb-12 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-cyan-600 dark:text-accent-cyan">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && <p className="mt-4 text-slate-500 dark:text-slate-400">{description}</p>}
    </div>
  )
}
