/**
 * Site configuration - START HERE!
 * Every page reads these values, so changing them here changes them everywhere.
 */
export const site = {
  name: 'Your Name',
  brand: 'Your Brand',
  role: 'Your Role, Your Title',
  email: 'you@example.com',
  emailSubject: 'Project inquiry',
  replyPromise: 'Reply within one business day.',
  location: 'Your City, GMT+0',
  countryCode: 'US',
  timeZone: 'UTC',
  timePlace: 'in Your City',
  url: 'https://example.com',
} as const

export function mailtoHref(): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(site.emailSubject)}`
}

export const socials = [
  { label: 'LinkedIn', href: '#', external: true },
  { label: 'GitHub', href: '#', external: true },
  { label: 'Twitter', href: '#', external: true },
]

export const externalLinks = {
  resource: '#',
  showcase: '#',
  company: '#',
} as const
