import { GraduationCap } from 'lucide-react'
import RevealOnScroll from './ui/RevealOnScroll'
import SectionHeading from './ui/SectionHeading'
import Tag from './ui/Tag'
import { education } from '../data/education'

export default function Education() {
  return (
    <section id="education" className="border-t border-slate-900/5 bg-white py-24 dark:border-white/5 dark:bg-navy-900">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Education" title="Education" />

        <RevealOnScroll>
          <div className="rounded-2xl border border-slate-900/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-navy-800/50 dark:shadow-none">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 text-cyan-600 dark:text-accent-cyan">
                  <GraduationCap className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
                    {education.school}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{education.degree}</p>
                  <p className="text-sm text-slate-500">{education.location}</p>
                </div>
              </div>
              <span className="rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-1 font-mono text-xs text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
                {education.graduationDate}
              </span>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-purple-600 dark:text-accent-purple">
                  Relevant Coursework
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <Tag key={course}>{course}</Tag>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-purple-600 dark:text-accent-purple">
                    Academic Achievements
                  </h4>
                  <ul className="mt-3 space-y-1.5 text-sm italic text-slate-500">
                    {education.achievements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-purple-600 dark:text-accent-purple">
                    Clubs &amp; Organizations
                  </h4>
                  <ul className="mt-3 space-y-1.5 text-sm italic text-slate-500">
                    {education.organizations.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
