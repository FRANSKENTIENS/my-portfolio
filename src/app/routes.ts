import { House, Briefcase, Stack, User, Envelope, ShieldCheck, FileText } from '@phosphor-icons/react'
import type { Icon } from '@phosphor-icons/react'
import { site } from '@/content/site'

export type PageRoute = {
  kind: 'page'
  id: string
  path: string
  label: string
  title: string
  description: string
  icon: Icon
  group?: 'menu' | 'discover' | 'general'
}

const SUFFIX = site.name

export const pages: PageRoute[] = [
  {
    kind: 'page',
    id: 'home',
    path: '/',
    label: 'Home',
    title: `${SUFFIX} | Your Headline Here`,
    description: 'Your professional portfolio',
    icon: House,
    group: 'menu',
  },
  {
    kind: 'page',
    id: 'work',
    path: '/work',
    label: 'Work',
    title: `Work | ${SUFFIX}`,
    description: 'Portfolio of projects and case studies',
    icon: Briefcase,
    group: 'menu',
  },
  {
    kind: 'page',
    id: 'services',
    path: '/services',
    label: 'Services',
    title: `Services | ${SUFFIX}`,
    description: 'Services offered',
    icon: Stack,
    group: 'menu',
  },
  {
    kind: 'page',
    id: 'about',
    path: '/about',
    label: 'About',
    title: `About ${SUFFIX}`,
    description: 'Background and expertise',
    icon: User,
    group: 'menu',
  },
  {
    kind: 'page',
    id: 'contact',
    path: '/contact',
    label: 'Contact',
    title: `Contact | ${SUFFIX}`,
    description: 'Get in touch',
    icon: Envelope,
    group: 'general',
  },
  {
    kind: 'page',
    id: 'privacy',
    path: '/privacy',
    label: 'Privacy Policy',
    title: `Privacy Policy | ${SUFFIX}`,
    description: 'Privacy policy',
    icon: ShieldCheck,
  },
  {
    kind: 'page',
    id: 'terms',
    path: '/terms',
    label: 'Terms of Service',
    title: `Terms of Service | ${SUFFIX}`,
    description: 'Terms of service',
    icon: FileText,
  },
]

export const notFoundTitle = `Page Not Found | ${SUFFIX}`
