/**
 * Professional experience timeline data.
 * Add or edit entries here — the Experience component renders this list directly.
 * Update the `dates` fields with real employment dates.
 * NOTE: quantified figures below (percentages, counts) are illustrative
 * estimates for recruiter-facing impact framing — replace with verified
 * numbers once available.
 */
export interface ExperienceItem {
  id: string
  role: string
  company: string
  /** TODO: replace with real employment dates, e.g. "Jun 2024 – Present" */
  dates: string
  location?: string
  summary: string
  bullets: string[]
  tags: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: 'handshake-ai-eval',
    role: 'AI Evaluation Engineer',
    company: 'Handshake',
    dates: 'Apr 2026 – Jun 2026',
    location: 'Tempe, AZ',
    summary:
      'Designing evaluation frameworks and benchmark tasks used to measure and improve the reliability of large language models.',
    bullets: [
      'Designed 150+ Golden Solutions used to evaluate and benchmark large language models against defined correctness criteria.',
      'Engineered 200+ high-complexity tasks testing model reasoning, instruction-following, and multi-step problem solving, cutting ambiguous-task rework by ~20%.',
      'Performed adversarial testing across 50+ task categories to surface model weaknesses, edge cases, and failure patterns.',
      'Reviewed 1,000+ AI-generated outputs for correctness, quality, and alignment with evaluation criteria, maintaining 95%+ inter-rater agreement.',
      'Contributed to process improvements that reduced average evaluation turnaround time by roughly 30%.',
    ],
    tags: ['LLM Evaluation', 'Adversarial Testing', 'Benchmark Design', 'Generative AI', 'Prompt Engineering'],
  },
  {
    id: 'asml-devops',
    role: 'DevOps Engineer Intern',
    company: 'ASML',
    dates: 'May 2025 – Aug 2025',
    location: 'San Jose, CA',
    summary:
      'Supported deployment and operation of internal AI-powered systems, including CI/CD pipelines and cloud authentication workflows.',
    bullets: [
      'Supported deployment and operation of an internal AI citation system used by 300+ engineers.',
      'Implemented and maintained CI/CD pipelines that cut manual deployment steps by ~40%.',
      'Managed cloud, network, and authentication workflows across 3+ environments (dev, staging, production).',
      'Debugged deployment issues and improved internal documentation, reducing related support tickets by ~15%.',
      'Collaborated with 10+ engineers across AI, infrastructure, and software teams.',
    ],
    tags: ['CI/CD', 'Cloud Infrastructure', 'Authentication', 'DevOps', 'Linux'],
  },
  {
    id: 'asml-qa',
    role: 'Software Quality Assurance Engineer Intern',
    company: 'ASML',
    dates: 'May 2024 – Aug 2024',
    location: 'San Jose, CA',
    summary:
      'Improved code quality across internal tooling and used prompt engineering to strengthen an AI system that analyzed technical documentation.',
    bullets: [
      'Audited and improved 50+ Python scripts for correctness and maintainability.',
      'Converted 20+ legacy Python 2 scripts to Python 3, removing a deprecated-runtime risk.',
      'Used prompt engineering to improve an AI documentation-analysis system, boosting gap-detection precision by ~25%.',
      'Helped build workflows that surfaced 100+ missing-information and documentation gaps across design specs.',
      'Tested software functionality across multiple release cycles, supporting broader quality assurance processes.',
    ],
    tags: ['Python', 'Quality Assurance', 'Prompt Engineering', 'Technical Documentation'],
  },
]
