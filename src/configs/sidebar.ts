import type { SidebarItem } from '@/types/sidebar'

// NOTE: Please set the Home Page to the first item.
export const sidebarItems: SidebarItem[] = [
  {
    title: 'Home',
    icon: 'FaHouseChimneyCrack',
    link: '/',
  },
  {
    title: 'App',
    icon: 'FaLock',
    link: 'app',
    subItems: [
      { title: 'TO-DO', link: 'to-do' },
      { title: 'Something', link: 'something' },
    ],
  },
  {
    title: 'Settings',
    icon: 'FaGears',
    link: 'setting',
    subItems: [
      { title: 'Profile', link: 'profile' },
      { title: 'Theme', link: 'theme' },
    ],
  },
  {
    title: 'Test Not Found',
    icon: 'FaHouseChimneyCrack',
    link: 'test-not-found',
  },
  {
    title: 'Test Error',
    icon: 'FaHouseChimneyCrack',
    link: 'test-error',
  },
]