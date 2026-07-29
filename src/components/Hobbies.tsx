import { Dumbbell, Film, Music, Heart } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import RevealOnScroll from './ui/RevealOnScroll'
import SectionHeading from './ui/SectionHeading'

function PickleballPaddleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="2" width="18" height="13" rx="5" />
      <line x1="3" y1="8.5" x2="21" y2="8.5" />
      <rect x="10" y="15" width="4" height="7" rx="2" />
    </svg>
  )
}

type Hobby =
  | {
      kind: 'icon'
      icon: LucideIcon | (({ className }: { className?: string }) => JSX.Element)
      iconColor: string
      title: string
      description: string
      color: string
    }
  | {
      kind: 'img'
      src: string
      imgClass?: string
      title: string
      description: string
      color: string
    }
  | {
      kind: 'pets'
      photos: string[]
      title: string
      description: string
      color: string
    }

const hobbies: Hobby[] = [
  {
    kind: 'icon',
    icon: Dumbbell,
    title: 'Gym',
    description:
      "Consistent training is a big part of how Theodore stays sharp. Whether it's lifting, cardio, or trying a new program, the gym is a regular part of the routine.",
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-cyan-600 dark:text-accent-cyan',
  },
  {
    kind: 'icon',
    icon: PickleballPaddleIcon,
    title: 'Pickleball',
    description:
      "Pickleball has become a go-to sport, combining quick reflexes, strategy, and the fun of rallying with friends. Always down for a competitive match.",
    color: 'from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    kind: 'img',
    src: './chess-pawn.svg',
    imgClass: 'dark:invert',
    title: 'Board Games',
    description:
      "From strategy-heavy euros to chaotic party games, board games are a favorite way to unwind. There's something great about gathering around a table for a few hours.",
    color: 'from-purple-500/20 to-violet-500/20',
  },
  {
    kind: 'icon',
    icon: Film,
    title: 'Film',
    description:
      "A wide and enthusiastic film diet spanning arthouse, blockbusters, classic cinema, and everything in between. Always looking for the next great watch.",
    color: 'from-rose-500/20 to-pink-500/20',
    iconColor: 'text-rose-600 dark:text-rose-400',
  },
  {
    kind: 'icon',
    icon: Music,
    title: 'Music',
    description:
      "Music is a constant backdrop. Genres, eras, moods, it's all fair game. Discovering new artists and revisiting old favorites is an ongoing and rewarding pastime.",
    color: 'from-amber-500/20 to-orange-500/20',
    iconColor: 'text-amber-600 dark:text-amber-400',
  },
  {
    kind: 'pets',
    photos: ['./cat1.jpg', './cat2.jpg', './cat3.jpg'],
    title: 'Pets',
    description:
      "Two fluffy Persian cats who are fully convinced they own the house. Equal parts chaos and comfort, they're always nearby whether you want them to be or not.",
    color: 'from-pink-500/20 to-rose-500/20',
  },
]

export default function Hobbies() {
  return (
    <section
      id="hobbies"
      className="border-t border-slate-900/5 bg-white py-24 dark:border-white/5 dark:bg-navy-900"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Hobbies"
          title="Outside the terminal"
          description="A few things that keep life interesting when the laptop is closed."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {hobbies.map((hobby, i) => {
            const isWide = hobby.kind === 'pets'
            return (
              <RevealOnScroll key={hobby.title} delay={i * 80} className={isWide ? 'xl:col-span-2' : 'xl:col-span-1'}>
                <div className="group flex h-full flex-col rounded-2xl border border-slate-900/10 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:border-cyan-600/40 hover:shadow-md dark:border-white/10 dark:bg-navy-800/50 dark:hover:border-accent-cyan/40 dark:hover:shadow-glow">

                  {/* Icon / image area */}
                  {hobby.kind === 'pets' ? (
                    <div className="mb-4 flex gap-2">
                      {hobby.photos.map((src, idx) => (
                        <div key={idx} className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl">
                          <img
                            src={src}
                            alt=""
                            aria-hidden="true"
                            className="h-full w-full object-cover object-top"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div
                      className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${hobby.color}`}
                    >
                      {hobby.kind === 'icon' ? (
                        <hobby.icon className={`h-5 w-5 ${hobby.iconColor}`} aria-hidden="true" />
                      ) : (
                        <img
                          src={hobby.src}
                          alt=""
                          aria-hidden="true"
                          className={`h-5 w-5 object-contain ${hobby.imgClass ?? ''}`}
                        />
                      )}
                    </div>
                  )}

                  <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white">
                    {hobby.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {hobby.description}
                  </p>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
