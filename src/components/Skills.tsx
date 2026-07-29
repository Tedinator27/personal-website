import { Brain, Code2, Cloud, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import RevealOnScroll from './ui/RevealOnScroll'
import SectionHeading from './ui/SectionHeading'
import Tag from './ui/Tag'
import { skillCategories, skillLevelLabels } from '../data/skills'
import type { SkillIcon, SkillLevel } from '../data/skills'

const iconMap: Record<SkillIcon, LucideIcon> = {
  brain: Brain,
  code: Code2,
  cloud: Cloud,
  shield: ShieldCheck,
}

const levelOrder: SkillLevel[] = ['expert', 'proficient', 'familiar']

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-slate-900/5 bg-slate-50 py-24 dark:border-white/5 dark:bg-navy-950"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Toolkit"
          description="Organized by domain and depth, from model evaluation to the infrastructure that ships it."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, i) => {
            const Icon = iconMap[category.icon]
            return (
              <RevealOnScroll key={category.id} delay={i * 80}>
                <div className="h-full rounded-2xl border border-slate-900/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-600/40 dark:border-white/10 dark:bg-navy-800/50 dark:shadow-none dark:hover:border-accent-blue/40 dark:hover:shadow-glow">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 text-cyan-600 dark:text-accent-cyan">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>

                  <div className="mt-4 space-y-4">
                    {levelOrder.map((level) => {
                      const skillsAtLevel = category.skills.filter((s) => s.level === level)
                      if (skillsAtLevel.length === 0) return null
                      return (
                        <div key={level}>
                          <h4 className="font-mono text-[10px] uppercase tracking-widest text-purple-600 dark:text-accent-purple">
                            {skillLevelLabels[level]}
                          </h4>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {skillsAtLevel.map((skill) => (
                              <Tag key={skill.name}>{skill.name}</Tag>
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
