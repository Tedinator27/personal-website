/**
 * Skill categories, grouped for the Skills grid.
 * `icon` maps to a Lucide icon in the Skills component's iconMap.
 * Each skill carries a proficiency `level` so the UI can group skills by
 * depth (Expert / Proficient / Familiar) instead of a flat tag list.
 */
export type SkillIcon = 'brain' | 'code' | 'cloud' | 'shield'
export type SkillLevel = 'expert' | 'proficient' | 'familiar'

export interface Skill {
  name: string
  level: SkillLevel
}

export interface SkillCategory {
  id: string
  title: string
  icon: SkillIcon
  skills: Skill[]
}

export const skillLevelLabels: Record<SkillLevel, string> = {
  expert: 'Expert',
  proficient: 'Proficient',
  familiar: 'Familiar',
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: 'brain',
    skills: [
      { name: 'LLM Evaluation', level: 'expert' },
      { name: 'Prompt Engineering', level: 'expert' },
      { name: 'Adversarial Testing', level: 'expert' },
      { name: 'Benchmark Design', level: 'proficient' },
      { name: 'Generative AI', level: 'proficient' },
      { name: 'Large Language Models', level: 'proficient' },
      { name: 'Natural Language Processing', level: 'familiar' },
    ],
  },
  {
    id: 'programming',
    title: 'Programming',
    icon: 'code',
    skills: [
      { name: 'Python', level: 'expert' },
      { name: 'TypeScript', level: 'proficient' },
      { name: 'JavaScript', level: 'proficient' },
      { name: 'Java', level: 'familiar' },
      { name: 'C++', level: 'familiar' },
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    icon: 'cloud',
    skills: [
      { name: 'Git', level: 'expert' },
      { name: 'CI/CD', level: 'proficient' },
      { name: 'Linux', level: 'proficient' },
      { name: 'Firebase', level: 'proficient' },
      { name: 'Deployment Pipelines', level: 'proficient' },
      { name: 'Cloud Authentication', level: 'familiar' },
    ],
  },
  {
    id: 'software-eng',
    title: 'Software Engineering',
    icon: 'shield',
    skills: [
      { name: 'Debugging', level: 'expert' },
      { name: 'Software Quality Assurance', level: 'proficient' },
      { name: 'Automated Testing', level: 'proficient' },
      { name: 'Code Auditing', level: 'proficient' },
      { name: 'Technical Documentation', level: 'proficient' },
      { name: 'Agile Collaboration', level: 'familiar' },
    ],
  },
]
