import RevealOnScroll from './ui/RevealOnScroll'
import SectionHeading from './ui/SectionHeading'
import { highlights } from '../data/highlights'

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="border-t border-slate-900/5 bg-slate-50 py-24 dark:border-white/5 dark:bg-navy-950"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Highlights" title="Professional Highlights" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <RevealOnScroll key={item.id} delay={i * 80}>
              <div className="h-full rounded-2xl border border-slate-900/10 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-cyan-600/40 dark:border-white/10 dark:bg-navy-800/50 dark:shadow-none dark:hover:border-accent-cyan/40 dark:hover:shadow-glowCyan">
                <p className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan bg-clip-text font-display text-3xl font-bold text-transparent">
                  {item.value}
                </p>
                <h3 className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">{item.label}</h3>
                <p className="mt-1 text-xs text-slate-500">{item.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
