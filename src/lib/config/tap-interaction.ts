import type { Transition } from 'framer-motion'

/** Subtle spring overshoot on release — minimal bounce, not playful. */
export const tapSpring: Transition = {
  type: 'spring',
  stiffness: 500,
  damping: 19,
  mass: 0.85,
}

/** Press scale for all `CNLink` / motion links — keep in sync app-wide. */
export const tapWhile = { scale: 0.97 } as const
