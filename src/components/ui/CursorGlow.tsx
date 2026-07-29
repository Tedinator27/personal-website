import { useEffect, useRef } from 'react'

/**
 * A soft radial glow that follows the mouse cursor across the page.
 * Automatically disabled on touch devices and for users who prefer
 * reduced motion.
 */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isCoarsePointer || prefersReducedMotion) return

    const node = glowRef.current
    if (!node) return

    function handleMove(e: MouseEvent) {
      node!.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px] transition-transform duration-300 ease-out will-change-transform"
    />
  )
}
