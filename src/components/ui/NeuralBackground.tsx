import { useEffect, useRef } from 'react'

interface Props {
  className?: string
  /** Approximate maximum number of nodes to render. */
  density?: number
}

interface Node {
  x: number
  y: number
  vx: number
  vy: number
}

/**
 * Lightweight canvas-based neural-network / data-grid visual.
 * Nodes drift slowly and connect to nearby nodes with faint lines,
 * evoking a neural network without being distracting. Respects
 * prefers-reduced-motion by rendering a single static frame.
 */
export default function NeuralBackground({ className = '', density = 55 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let animationFrame = 0
    let nodes: Node[] = []

    function resize() {
      const parent = canvas!.parentElement
      width = parent ? parent.clientWidth : window.innerWidth
      height = parent ? parent.clientHeight : window.innerHeight
      const dpr = window.devicePixelRatio || 1

      canvas!.width = width * dpr
      canvas!.height = height * dpr
      canvas!.style.width = `${width}px`
      canvas!.style.height = `${height}px`
      ctx!.setTransform(1, 0, 0, 1, 0, 0)
      ctx!.scale(dpr, dpr)

      const count = Math.max(18, Math.min(density, Math.floor((width * height) / 18000)))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }))
    }

    function drawFrame() {
      ctx!.clearRect(0, 0, width, height)

      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy
        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 140) {
            ctx!.strokeStyle = `rgba(96,165,250,${0.14 * (1 - dist / 140)})`
            ctx!.lineWidth = 1
            ctx!.beginPath()
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
            ctx!.stroke()
          }
        }
      }

      for (const node of nodes) {
        ctx!.fillStyle = 'rgba(148,197,255,0.55)'
        ctx!.beginPath()
        ctx!.arc(node.x, node.y, 1.6, 0, Math.PI * 2)
        ctx!.fill()
      }
    }

    function loop() {
      drawFrame()
      animationFrame = requestAnimationFrame(loop)
    }

    resize()
    if (prefersReducedMotion) {
      drawFrame()
    } else {
      loop()
    }

    function handleResize() {
      cancelAnimationFrame(animationFrame)
      resize()
      if (prefersReducedMotion) {
        drawFrame()
      } else {
        loop()
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', handleResize)
    }
  }, [density])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
