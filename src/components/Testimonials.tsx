import { Linkedin, Quote } from 'lucide-react'
import RevealOnScroll from './ui/RevealOnScroll'
import SectionHeading from './ui/SectionHeading'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-t border-slate-900/5 bg-white py-24 dark:border-white/5 dark:bg-navy-900"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Recommendations"
          title="What Colleagues Say"
          description="These cards are placeholders — swap in real LinkedIn recommendations when available."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <RevealOnScroll key={t.id} delay={i * 100}>
              <div className="relative h-full rounded-2xl border border-dashed border-slate-900/15 bg-slate-50 p-6 dark:border-white/15 dark:bg-navy-800/40">
                <span className="absolute right-4 top-4 rounded-full border border-slate-900/10 bg-slate-900/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-slate-500 dark:border-white/10 dark:bg-white/5">
                  Placeholder
                </span>
                <Quote className="h-5 w-5 text-purple-600/70 dark:text-accent-purple/70" aria-hidden="true" />
                <p className="mt-3 text-sm italic text-slate-500 dark:text-slate-400">{t.quote}</p>
                <div className="mt-6 flex items-center justify-between border-t border-slate-900/5 pt-4 dark:border-white/5">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{t.name}</h3>
                    <p className="text-xs text-slate-500">
                      {t.title}, {t.company}
                    </p>
                  </div>
                  {t.linkedin && (
                    <a
                      href={t.linkedin}
                      aria-label={`${t.name} on LinkedIn`}
                      className="text-slate-500 hover:text-cyan-600 dark:hover:text-accent-cyan"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
