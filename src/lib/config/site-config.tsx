export const siteMap = {
  home: '/',
  projects: '/projects',
  resume: '/resume',
  mailTo: 'mailto:sidakdhingra73@gmail.com',
  contact: '/contact',
} as const

/** Canonical site origin (no trailing slash) — matches sitemap / production host. */
export const siteUrl = 'https://sidak.work'

/** Public path to default Open Graph image (`public/og.png`). */
export const ogImagePath = '/og.png'

/** Default text for `og:description` and `twitter:description` when sharing links. */
export const defaultOgDescription =
  "Hi, I'm Sidak Dhingra, a Software Engineer from India."

export function pageAbsoluteUrl(path: string): string {
  const base = siteUrl.replace(/\/$/, '')
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalized}`
}
