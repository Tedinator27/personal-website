/**
 * NOTE: These are placeholder testimonials only.
 * Replace name/title/company/quote with real LinkedIn recommendations
 * before publishing. The Testimonials component visibly labels each
 * card as "Placeholder" until this file is updated.
 */
export interface Testimonial {
  id: string
  name: string
  title: string
  company: string
  quote: string
  linkedin?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'placeholder-1',
    name: '[Manager Name]',
    title: '[Job Title]',
    company: '[Company — e.g. Handshake]',
    quote:
      "PLACEHOLDER — Replace with a real recommendation describing Theodore's work on AI evaluation and benchmark design.",
    linkedin: '#',
  },
  {
    id: 'placeholder-2',
    name: '[Mentor Name]',
    title: '[Job Title]',
    company: '[Company — e.g. ASML]',
    quote:
      "PLACEHOLDER — Replace with a real recommendation describing Theodore's DevOps and CI/CD contributions.",
    linkedin: '#',
  },
  {
    id: 'placeholder-3',
    name: '[Coworker Name]',
    title: '[Job Title]',
    company: '[Company — e.g. ASML]',
    quote:
      "PLACEHOLDER — Replace with a real recommendation describing Theodore's software quality assurance work.",
    linkedin: '#',
  },
]
