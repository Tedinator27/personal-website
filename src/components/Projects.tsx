import { FileText } from 'lucide-react'
import RevealOnScroll from './ui/RevealOnScroll'
import SectionHeading from './ui/SectionHeading'
import Tag from './ui/Tag'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-slate-900/5 bg-white py-24 dark:border-white/5 dark:bg-navy-900"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Projects"
          description="Work spanning AI evaluation tooling, LLM-powered documentation analysis, and DevOps deployment."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <RevealOnScroll key={project.id} delay={i * 80}>
              <article className="group flex h-full flex-col rounded-2xl border border-slate-900/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-600/40 dark:border-white/10 dark:bg-navy-800/50 dark:shadow-none dark:hover:border-accent-purple/40 dark:hover:shadow-glowPurple">
                <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-slate-500 dark:text-slate-400">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-900/5 pt-4 text-sm font-medium dark:border-white/5">
                  {project.links.caseStudy && (
                    <a
                      href={project.links.caseStudy}
                      className="inline-flex items-center gap-1.5 self-center text-xs text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    >
                      <FileText className="h-3.5 w-3.5" aria-hidden="true" /> Case Study
                    </a>
                  )}
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
