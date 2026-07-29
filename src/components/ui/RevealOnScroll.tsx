import type { ReactNode } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
}

/**
 * Wraps any block of content in a subtle fade + rise transition that
 * triggers once when the block scrolls into view.
 */
export default function RevealOnScroll({ children, className = '', delay = 0 }: Props) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
