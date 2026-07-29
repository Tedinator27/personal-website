import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2 } from 'lucide-react'
import RevealOnScroll from './ui/RevealOnScroll'
import SectionHeading from './ui/SectionHeading'
import { site } from '../data/site'

interface FormState {
  name: string
  email: string
  company: string
  subject: string
  message: string
}

const initialState: FormState = { name: '', email: '', company: '', subject: '', message: '' }

function validate(values: FormState): Partial<FormState> {
  const next: Partial<FormState> = {}
  if (!values.name.trim()) next.name = 'Name is required.'
  if (!values.email.trim()) {
    next.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    next.email = 'Enter a valid email address.'
  }
  if (!values.subject.trim()) next.subject = 'Subject is required.'
  if (!values.message.trim()) next.message = 'Message is required.'
  return next
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    setSubmitted(false)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    // NOTE: No backend is connected yet. Submitting opens the visitor's email
    // client with a prefilled message so the form is genuinely functional
    // out of the box. Swap this for a real form service (e.g. Formspree,
    // EmailJS, or a custom API route) when one is available.
    const body = `Name: ${form.name}\nCompany: ${form.company || 'N/A'}\n\n${form.message}`
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto

    setSubmitted(true)
    setForm(initialState)
  }

  function inputClasses(field: keyof FormState) {
    return `w-full rounded-lg border bg-slate-100/70 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-cyan/60 dark:bg-navy-900/60 dark:text-white dark:placeholder:text-slate-500 ${
      errors[field] ? 'border-red-500/60' : 'border-slate-900/10 dark:border-white/10'
    }`
  }

  return (
    <section
      id="contact"
      className="border-t border-slate-900/5 bg-slate-50 py-24 dark:border-white/5 dark:bg-navy-950"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Better AI Systems"
          description="Have an AI evaluation, generative AI, or reliability engineering role in mind? Send a message below. That's the fastest way to reach me. I typically respond within 24 hours."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <RevealOnScroll className="space-y-4">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-4 rounded-xl border border-slate-900/10 bg-white p-4 shadow-sm transition-colors hover:border-cyan-600/40 dark:border-white/10 dark:bg-navy-800/50 dark:shadow-none dark:hover:border-accent-cyan/40"
            >
              <Mail className="h-5 w-5 flex-shrink-0 text-cyan-600 dark:text-accent-cyan" aria-hidden="true" />
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">Email</p>
                <p className="text-sm text-slate-900 dark:text-white">{site.email}</p>
              </div>
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border border-slate-900/10 bg-white p-4 shadow-sm transition-colors hover:border-cyan-600/40 dark:border-white/10 dark:bg-navy-800/50 dark:shadow-none dark:hover:border-accent-cyan/40"
            >
              <Linkedin className="h-5 w-5 flex-shrink-0 text-cyan-600 dark:text-accent-cyan" aria-hidden="true" />
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">LinkedIn</p>
                <p className="text-sm text-slate-900 dark:text-white">linkedin.com/in/theodore-zhang-266b79191</p>
              </div>
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border border-slate-900/10 bg-white p-4 shadow-sm transition-colors hover:border-cyan-600/40 dark:border-white/10 dark:bg-navy-800/50 dark:shadow-none dark:hover:border-accent-cyan/40"
            >
              <Github className="h-5 w-5 flex-shrink-0 text-cyan-600 dark:text-accent-cyan" aria-hidden="true" />
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">GitHub</p>
                <p className="text-sm text-slate-900 dark:text-white">github.com/Tedinator27</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-xl border border-slate-900/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-navy-800/50 dark:shadow-none">
              <MapPin className="h-5 w-5 flex-shrink-0 text-cyan-600 dark:text-accent-cyan" aria-hidden="true" />
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">Location</p>
                <p className="text-sm text-slate-900 dark:text-white">{site.location}</p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={120}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5 rounded-2xl border border-slate-900/10 bg-white p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-navy-800/50 dark:shadow-none"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-slate-500 dark:text-slate-400">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={inputClasses('name')}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-red-600 dark:text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-slate-500 dark:text-slate-400">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={inputClasses('email')}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-600 dark:text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="company" className="mb-1.5 block text-xs font-medium text-slate-500 dark:text-slate-400">
                  Company <span className="text-slate-600">(optional)</span>
                </label>
                <input
                  id="company"
                  type="text"
                  value={form.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  className={inputClasses('company')}
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-slate-500 dark:text-slate-400">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  className={inputClasses('subject')}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1 text-xs text-red-600 dark:text-red-400">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-slate-500 dark:text-slate-400">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className={inputClasses('message')}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs text-red-600 dark:text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                <Send className="h-4 w-4" aria-hidden="true" /> Send Message
              </button>
              <p className="text-xs text-slate-500 dark:text-slate-400">Typically responds within 24 hours.</p>

              {submitted && (
                <p className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-300" role="status">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> Opening your email client with this
                  message pre-filled.
                </p>
              )}
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
