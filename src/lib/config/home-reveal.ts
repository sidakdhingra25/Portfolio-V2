/** Staggered home page entrance (ms from mount). Keep footer before bio. */
export const HOME_REVEAL_MS = {
  footer: 2000,
  bio: 1200,
} as const

/**
 * In-memory only — resets on full page reload.
 * First time `/` is shown in this SPA session: play stagger (nav, footer, bio).
 * Later client navigations to `/`: instant, no stagger.
 */
let homeRevealConsumed = false

export function shouldPlayHomeReveal(): boolean {
  return !homeRevealConsumed
}

export function markHomeRevealComplete(): void {
  homeRevealConsumed = true
}
