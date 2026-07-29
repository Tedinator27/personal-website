import { Linkedin, Github, Mail, ArrowRight, Sparkles } from 'lucide-react'
import { site } from '../data/site'
import Button from './ui/Button'
import NeuralBackground from './ui/NeuralBackground'
import { useTypewriter } from '../hooks/useTypewriter'

const rotatingWords = ['Generative AI', 'LLM Evaluation', 'DevOps Pipelines', 'Software Quality']

export default function Hero() {
  const typed = useTypewriter(rotatingWords)

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-900/5 bg-hero-glow bg-white pb-24 pt-28 dark:border-white/5 dark:bg-navy-900"
    >
      <div className="absolute inset-0 bg-grid-pattern bg-[size:44px_44px] opacity-40" aria-hidden="true" />
      <NeuralBackground className="absolute inset-0 h-full w-full opacity-70" density={35} />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {site.statusBadge}
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            I Find Where{' '}
            <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan bg-clip-text text-transparent">
              AI Systems Break
            </span>
            {' '}Before Users Do
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-500 dark:text-slate-400">
            {site.name} is an AI Evaluation Engineer specializing in LLM reliability, evaluation pipelines, and
            quality assurance for AI systems, designing benchmarks, running adversarial tests, and shipping the
            infrastructure that keeps generative AI trustworthy in production.
          </p>

          <p
            className="mt-4 flex h-6 items-center gap-2 font-mono text-sm text-cyan-600 dark:text-accent-cyan"
            aria-hidden="true"
          >
            <span>{'>'}</span>
            <span>{typed}</span>
            <span className="inline-block h-4 w-[2px] animate-blink bg-cyan-600 dark:bg-accent-cyan" />
          </p>
          <span className="sr-only">Focus areas: {rotatingWords.join(', ')}</span>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects" variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
              View My Work
            </Button>
            <Button href="#contact" variant="outline">
              Contact Me
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Theodore Zhang on LinkedIn"
              className="text-slate-500 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-accent-cyan"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Theodore Zhang on GitHub"
              className="text-slate-500 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-accent-cyan"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email Theodore Zhang"
              className="text-slate-500 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-accent-cyan"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex h-80 w-80 items-center justify-center sm:h-96 sm:w-96">
          <div
            className="absolute inset-0 animate-pulseGlow rounded-full bg-gradient-to-br from-accent-blue/30 via-accent-purple/20 to-accent-cyan/30 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-slate-900/10 shadow-glow sm:h-72 sm:w-72 dark:border-white/10 overflow-hidden">
            <img
              src="./profile.jpg"
              alt="Theodore Zhang"
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div className="absolute -left-4 top-6 animate-floaty rounded-xl border border-slate-900/10 bg-white px-3 py-2 font-mono text-xs text-cyan-600 shadow-lg backdrop-blur dark:border-white/10 dark:bg-navy-800/90 dark:text-accent-cyan">
            <Sparkles className="mb-1 h-3.5 w-3.5" aria-hidden="true" /> LLM Evaluation
          </div>
          <div className="absolute -right-2 top-16 animate-floaty rounded-xl border border-slate-900/10 bg-white px-3 py-2 font-mono text-xs text-purple-600 shadow-lg backdrop-blur [animation-delay:1.2s] dark:border-white/10 dark:bg-navy-800/90 dark:text-accent-purple">
            Python · TypeScript
          </div>
          <div className="absolute bottom-2 left-2 animate-floaty rounded-xl border border-slate-900/10 bg-white px-3 py-2 font-mono text-xs text-blue-600 shadow-lg backdrop-blur [animation-delay:2.1s] dark:border-white/10 dark:bg-navy-800/90 dark:text-accent-blue">
            Firebase · CI/CD
          </div>
        </div>
      </div>
    </section>
  )
}
