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
  {
    label: 'Level 1',
    icon: 'FaRegSun',
    id: 'level11',
    items: [
      {
        label: 'Level 2',
        id: 'level21',
        link: '/level1/level2',
      },
      {
        label: 'Level 2(2)',
        id: 'level221',
        items: [
          {
            label: 'Level 3',
            id: 'level31',
            link: '/level1/level2/level3',
          },
        ],
      },
    ],
  },
  {
    label: 'Level 1',
    icon: 'FaRegSun',
    id: 'level12',
    items: [
      {
        label: 'Level 2',
        id: 'level22',
        link: '/level1/level2',
      },
      {
        label: 'Level 2(2)',
        id: 'level222',
        items: [
          {
            label: 'Level 3',
            id: 'level32',
            link: '/level1/level2/level3',
          },
        ],
      },
    ],
  },
  {
    label: 'Level 1',
    icon: 'FaRegSun',
    id: 'level13',
    items: [
      {
        label: 'Level 2',
        id: 'level23',
        link: '/level1/level2',
      },
      {
        label: 'Level 2(2)',
        id: 'level223',
        items: [
          {
            label: 'Level 3',
            id: 'level33',
            link: '/level1/level2/level3',
          },
        ],
      },
    ],
  },
  {
    label: 'Level 1',
    icon: 'FaRegSun',
    id: 'level14',
    items: [
      {
        label: 'Level 2',
        id: 'level24',
        link: '/level1/level2',
      },
      {
        label: 'Level 2(2)',
        id: 'level224',
        items: [
          {
            label: 'Level 3',
            id: 'level34',
            link: '/level1/level2/level3',
          },
        ],
      },
    ],
  },
]
