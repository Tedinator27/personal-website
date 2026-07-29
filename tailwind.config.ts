import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#05070d',
          900: '#0a0e17',
          800: '#0f1522',
          700: '#161d2e',
          600: '#1e2740',
        },
        accent: {
          blue: '#3b82f6',
          purple: '#8b5cf6',
          cyan: '#22d3ee',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)',
        'hero-glow':
          'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.18), transparent 45%), radial-gradient(circle at 80% 30%, rgba(139,92,246,0.16), transparent 45%), radial-gradient(circle at 50% 90%, rgba(34,211,238,0.12), transparent 50%)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.06)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3.5s ease-in-out infinite',
        fadeUp: 'fadeUp 0.8s ease forwards',
        blink: 'blink 1s step-end infinite',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(59,130,246,0.45)',
        glowPurple: '0 0 40px -10px rgba(139,92,246,0.45)',
        glowCyan: '0 0 40px -10px rgba(34,211,238,0.45)',
      },
    },
  },
  plugins: [],
} satisfies Config
