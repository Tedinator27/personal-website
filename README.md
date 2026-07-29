# Theodore Zhang — Portfolio

Personal portfolio site for Theodore Zhang, an AI Evaluation Engineer specializing in LLM
reliability, evaluation pipelines, and quality assurance for AI systems. Built with React,
TypeScript, Tailwind CSS, and Vite.

**Live demo:** TODO — add the deployed URL once hosted (e.g. Vercel/Netlify).

## Tech stack

| Choice | Why |
| --- | --- |
| **React 18 + TypeScript** | Component-based UI with strict typing catches content/prop mistakes at build time rather than in the browser. |
| **Vite** | Near-instant dev server startup and HMR; simpler config than Webpack for a site this size. |
| **Tailwind CSS** | Utility-first styling keeps the dark-mode design system (navy/charcoal + blue/purple/cyan accents) consistent without hand-rolled CSS files. |
| **lucide-react** | Tree-shakeable icon set that matches the site's technical, minimal aesthetic. |
| **Custom hooks, no animation library** | Scroll reveals, a rotating typewriter line, active-nav-link tracking, and a canvas-based neural-network background are all hand-rolled to avoid a runtime dependency for a handful of small effects. |

## Key features

- Content-as-data architecture — every section reads from `src/data/*.ts`, so updating copy
  never requires touching component/JSX code.
- Dark/light theme toggle with `localStorage` persistence and a pre-hydration inline script
  (in `index.html`) to avoid a flash of the wrong theme.
- AI-crawler and search-friendly `<head>`: descriptive title, meta description, Open Graph and
  Twitter Card tags, and a viewport tag.
- Skills organized by proficiency (Expert / Proficient / Familiar) within each domain, not a
  flat tag list.
- Project cards each expose a "Live Demo" and "GitHub" button (pointing to `#` placeholders
  until real links are added) plus an optional case-study link.
- Accessible by default: semantic heading hierarchy (`h1` → `h2` → `h3`), `aria-*` labeling on
  icon-only links, and `prefers-reduced-motion` support across all animations.

## Running locally

Requires [Node.js](https://nodejs.org) 18+.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Build for production (outputs to /dist)
npm run build

# 4. Preview the production build locally
npm run preview
```

## Project structure

```
src/
  data/            Editable content objects — update these to change site copy
    site.ts           Name, title, email, LinkedIn, GitHub, resume link
    experience.ts      Work history timeline
    projects.ts        Featured project cards (problem/solution/decisions framing)
    skills.ts          Skill categories, each skill tagged with a proficiency level
    education.ts        ASU degree, coursework, achievements
    testimonials.ts     Placeholder LinkedIn recommendations
    highlights.ts        Professional highlight stat cards
  hooks/            Reusable behavior
    useScrollReveal.ts    IntersectionObserver-based reveal-on-scroll
    useTypewriter.ts      Rotating/typing text effect for the hero
    useActiveSection.ts   Tracks which section is in view for nav highlighting
    useTheme.ts           Dark/light theme toggle + persistence
  components/
    ui/                Reusable primitives (Button, Tag, SectionHeading,
                        RevealOnScroll, NeuralBackground, CursorGlow)
    Navbar.tsx, Hero.tsx, About.tsx, Experience.tsx, Projects.tsx,
    Skills.tsx, Education.tsx, Highlights.tsx, Testimonials.tsx,
    Contact.tsx, Footer.tsx
  App.tsx           Assembles all sections
  main.tsx          React entry point
  index.css         Tailwind directives + global base styles
```

## Editing content

Everything visitor-facing lives in `src/data/*.ts`. You generally do not need to
touch component files to update copy, dates, links, or skills — just edit the
relevant data file and the UI updates automatically.

Search the codebase for `TODO:` to find every placeholder that still needs a
real value, including:

- Resume file URL (`src/data/site.ts` → `resumeUrl`)
- GitHub profile URL (`src/data/site.ts` → `github`)
- Employment dates (`src/data/experience.ts`)
- Project live-demo / GitHub links (`src/data/projects.ts`)
- Graduation date, achievements, and organizations (`src/data/education.ts`)
- Real testimonials to replace the labeled placeholders (`src/data/testimonials.ts`)

Quantified figures in `experience.ts` and `projects.ts` (percentages, counts) are
illustrative estimates written for recruiter-facing impact framing — replace them
with verified numbers as they become available.

## Challenges & solutions

- **Avoiding a flash of unstyled/wrong theme on load.** Since the theme choice lives in
  `localStorage` and React only hydrates after the initial HTML paints, a naive
  implementation flashes the default theme before switching. Solved with a small inline
  `<script>` in `index.html` that runs before first paint and toggles the `dark` class
  directly on `<html>`.
- **Keeping content edits decoupled from layout code.** Every section pulls from a typed
  object/array in `src/data/`, so updating a job description, a skill, or a project link never
  risks breaking JSX — TypeScript will flag a shape mismatch immediately.
- **Making the site legible to AI search/screening tools, not just human visitors.** Added a
  specific `<title>`, meta description, Open Graph, and Twitter Card tags so link previews and
  AI-driven search/summarization tools get an accurate, role-specific description instead of a
  generic "React app" fallback.
- **Respecting motion preferences without disabling the site's visual identity.** All custom
  animations (typewriter, scroll reveals, neural background, floaty cards) are wrapped so that
  `prefers-reduced-motion: reduce` collapses transition/animation durations globally, rather than
  hand-checking the media query in each component.

## Notes

- The contact form validates required fields client-side and, on submit, opens
  the visitor's email client with a prefilled message (no backend required).
  Swap the `handleSubmit` logic in `src/components/Contact.tsx` for a real
  form service (Formspree, EmailJS, a custom API route, etc.) if you'd like a
  fully in-page submission.
- The hero portrait is a placeholder initials avatar — replace it with a real
  photo by swapping the marked block in `src/components/Hero.tsx`.
- All animations respect `prefers-reduced-motion`.
