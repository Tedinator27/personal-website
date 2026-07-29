/**
 * Featured project data.
 * `links.project` (Live Demo) and `links.code` (GitHub) are always shown on
 * each project card. Until real URLs exist, they point to "#" — swap them
 * in directly once a project is deployed / open-sourced.
 * NOTE: quantified figures below are illustrative estimates for
 * recruiter-facing impact framing — replace with verified numbers once available.
 */
export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  links: {
    project: string
    code: string
    caseStudy?: string
  }
}

export const projects: Project[] = [
  {
    id: 'kimuntu-pro-ai',
    title: 'KimuntuPro AI',
    description:
      'KimuntuPro AI is a full-stack, AI-powered platform designed to help users navigate career growth, business building, legal guidance, and everyday productivity all in one place. ' +
      'Built in collaboration with a cross-functional team under Kimuntu Power Inc., the platform combines domain-specific AI assistants with practical workflows to make complex real-world tasks more manageable. ' +
      'As a contributor, I was responsible for the Legal Track and Administration Functions, building AI-driven tools to help users understand legal processes, draft documents, and navigate immigration-related workflows. ' +
      'Key features include resume building and interview preparation, business plan generation, legal document drafting, and a multi-purpose AI assistant capable of supporting users across a wide range of tasks. ' +
      'The project is deployed on Vercel and built with TypeScript, JavaScript, Next.js, Firebase, and Tailwind CSS.',
    tags: ['TypeScript', 'JavaScript', 'Next.js', 'Firebase', 'Tailwind CSS', 'Generative AI', 'Vercel'],
    links: { project: '#', code: '#' },
  },
  {
    id: 'tabstalker',
    title: 'TabStalker',
    description:
      'Built a Chrome extension that tracks active browsing time per domain and enforces user-defined time limits. ' +
      'The extension runs as a Manifest V3 service worker, accurately measuring only foreground-focused tab time (pausing on system idle or when Chrome loses focus). ' +
      'Key features include configurable per-site time limits with OS-level notifications, a popup showing real-time progress toward your daily limit, and a full dashboard with Chart.js visualizations, a daily site breakdown and a 30-day trend line. ' +
      'All data is stored locally with 90-day rolling retention and zero backend dependency.',
    tags: ['Chrome Extension', 'Manifest V3', 'JavaScript', 'Chart.js', 'Service Worker'],
    links: { project: '#', code: '#' },
  },
  {
    id: 'personal-website',
    title: 'Personal Website',
    description: "You're Looking At It!",
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    links: { project: '#', code: '#' },
  },
  {
    id: 'ai-eval-agent',
    title: 'AI Evaluation Agent',
    description: 'TODO: add description for AI Evaluation Agent.',
    tags: ['TODO'],
    links: { project: '#', code: '#' },
  },
]
