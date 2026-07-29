import { useEffect, useState } from 'react'

/**
 * Cycles through a list of words with a typing / deleting effect.
 * Used for the rotating focus-area line in the Hero section.
 */
export function useTypewriter(
  words: string[],
  typingSpeed = 55,
  pause = 1400,
  deletingSpeed = 30,
) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (words.length === 0) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setSubIndex(words[index % words.length].length)
      return
    }

    const current = words[index % words.length]

    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }

    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const t = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed,
    )
    return () => clearTimeout(t)
  }, [subIndex, deleting, index, words, typingSpeed, pause, deletingSpeed])

  if (words.length === 0) return ''
  return words[index % words.length].slice(0, subIndex)
}
