import type { IconType } from '@/components/Icon'

export type ItemProps = {
  label: string
  icon?: IconType
  id: string
  link?: string
  items?: ItemProps[]
}

export const items: ItemProps[] = [
  {
    label: 'Dashboard',
    icon: 'FaShop',
    id: 'dashboard',
    link: '/',
  },
  {
    label: 'Application',
    icon: 'FaShop',
    id: 'app',
    items: [
      {
        label: 'Link Remember',
        icon: 'FaShop',
        id: 'link-remember',
        link: '/app/link-remember',
      },
      {
        label: 'TODO',
        icon: 'FaShop',
        id: 'to-do',
        link: '/app/to-do',
      },
    ],
  },
  {
    label: 'Level 1',
    icon: 'FaRegSun',
    id: 'level1',
    items: [
      {
        label: 'Level 2',
        id: 'level2',
        link: '/level1/level2',
      },
      {
        label: 'Level 2(2)',
        id: 'level22',
        items: [
          {
            label: 'Level 3',
            id: 'level3',
            link: '/level1/level2/level3',
          },
        ],
      },
    ],
  },
  {
    label: 'Example Not Found',
    icon: 'FaShop',
    id: 'not-found',
    link: '/not-found',
  },
  {
    label: 'Example Error',
    icon: 'FaShop',
    id: 'error',
    link: '/error',
  },
]
