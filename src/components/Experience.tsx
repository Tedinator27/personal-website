import { Briefcase } from 'lucide-react'
import RevealOnScroll from './ui/RevealOnScroll'
import SectionHeading from './ui/SectionHeading'
import Tag from './ui/Tag'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-slate-900/5 bg-slate-50 py-24 dark:border-white/5 dark:bg-navy-950"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Professional Experience"
          description="A timeline of roles spanning AI evaluation, DevOps, and software quality assurance."
        />

        <div className="relative space-y-10 border-l border-slate-900/10 pl-8 sm:pl-10 dark:border-white/10">
          {experience.map((item, i) => (
            <RevealOnScroll key={item.id} delay={i * 100}>
              <div className="relative">
                <span
                  className="absolute -left-[41px] top-1 flex h-7 w-7 items-center justify-center rounded-full border border-accent-cyan/40 bg-white sm:-left-[49px] dark:bg-navy-900"
                  aria-hidden="true"
                >
                  <Briefcase className="h-3.5 w-3.5 text-cyan-600 dark:text-accent-cyan" />
                </span>

                <div className="rounded-2xl border border-slate-900/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-cyan-600/30 dark:border-white/10 dark:bg-navy-800/50 dark:shadow-none dark:hover:border-accent-cyan/30 dark:hover:shadow-glowCyan">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
                        {item.role}
                      </h3>
                      <p className="text-sm text-cyan-600 dark:text-accent-cyan">
                        {item.company}
                        {item.location ? ` · ${item.location}` : ''}
                      </p>
                    </div>
                    <span className="rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-1 font-mono text-xs text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
                      {item.dates}
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{item.summary}</p>

                  <ul className="mt-4 space-y-2">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <span
                          className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-purple-600 dark:bg-accent-purple"
                          aria-hidden="true"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
