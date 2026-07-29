/**
 * Professional highlight cards — short, realistic, editable summaries
 * of Theodore's experience. No fabricated performance statistics.
 */
export interface Highlight {
  id: string
  value: string
  label: string
  description: string
}

export const highlights: Highlight[] = [
  {
    id: 'llm-eval',
    value: 'LLM',
    label: 'Evaluation & Benchmark Development',
    description: 'Golden Solutions and adversarial testing at Handshake.',
  },
  {
    id: 'internships',
    value: '2',
    label: 'ASML Engineering Internships',
    description: 'DevOps Engineer and Software Quality Assurance Engineer roles.',
  },
  {
    id: 'domains',
    value: '3',
    label: 'Domains: AI, DevOps & QA',
    description: 'Cross-functional experience across the AI systems lifecycle.',
  },
  {
    id: 'network',
    value: '500+',
    label: 'Professional Connections',
    description: 'TODO: verify current LinkedIn connection count.',
  },
]
