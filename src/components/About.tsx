import RevealOnScroll from './ui/RevealOnScroll'
import SectionHeading from './ui/SectionHeading'
import { site } from '../data/site'

const facts: { key: string; value: string }[] = [
  { key: 'name', value: "'Theodore Zhang'" },
  { key: 'role', value: "'AI Evaluation Engineer'" },
  { key: 'education', value: "'B.S. Computer Science, ASU'" },
  { key: 'location', value: `'${site.location}'` },
]

const focusAreas = ['LLM Evaluation', 'Generative AI', 'DevOps', 'Software QA']

export default function About() {
  return (
    <section id="about" className="border-t border-slate-900/5 bg-white py-24 dark:border-white/5 dark:bg-navy-900">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About" title="Grounded in evaluation. Built for engineering." />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <RevealOnScroll className="space-y-5 text-slate-600 dark:text-slate-300">
            <p>
              Theodore is a recent Computer Science graduate from Arizona State University with hands-on
              experience evaluating large language models, designing complex AI benchmarks, deploying
              AI-powered systems, and improving software quality across two ASML engineering internships.
            </p>
            <p>
              At Handshake, he designs Golden Solutions and high-complexity evaluation tasks used to benchmark
              generative AI systems, then runs adversarial testing to surface the edge cases and failure modes
              that matter most before a model reaches production.
            </p>
            <p>
              At ASML, he worked across DevOps and software quality assurance, building CI/CD pipelines,
              managing cloud and network authentication, auditing and modernizing Python codebases, and using
              prompt engineering to improve an AI system that analyzed large volumes of technical documentation.
            </p>
            <p>
              He's focused on one problem: building AI systems that are accurate, measurable, and dependable
              enough to trust in real production environments, not just impressive in a demo.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={150}>
            <div className="rounded-2xl border border-slate-900/10 bg-slate-50 p-6 font-mono text-sm shadow-sm dark:border-white/10 dark:bg-navy-800/60 dark:shadow-glow">
              <div className="mb-4 flex gap-1.5" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
              </div>
              <pre className="whitespace-pre-wrap leading-relaxed text-slate-600 dark:text-slate-300">
                <span>
                  <span className="text-purple-600 dark:text-accent-purple">const</span>{' '}
                  <span className="text-cyan-600 dark:text-accent-cyan">theodore</span> = {'{'}
                </span>
                {facts.map((fact) => (
                  <div key={fact.key} className="pl-4">
                    {fact.key}: <span className="text-emerald-600 dark:text-emerald-300">{fact.value}</span>,
                  </div>
                ))}
                <div className="pl-4">focus: [</div>
                {focusAreas.map((area) => (
                  <div key={area} className="pl-8 text-emerald-600 dark:text-emerald-300">
                    '{area}',
                  </div>
                ))}
                <div className="pl-4">],</div>
                <div>{'}'}</div>
              </pre>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
