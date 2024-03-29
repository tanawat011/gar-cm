import type { IconType } from '@/components/Icon'

export type Permission = 'SUPERADMIN' | 'ADMIN' | 'USER'

export type MenuProps = {
  label: string
  icon?: IconType
  id: string
  link?: string
  isGroupLabel?: boolean
  permission?: Permission[]
  items?: MenuProps[]
}

export const menu: MenuProps[] = [
  {
    label: 'Dashboard',
    icon: 'FaShop',
    id: 'dashboard',
    link: '/',
  },
  {
    label: 'Review Me',
    icon: 'FaShop',
    id: 'review-me',
    permission: ['SUPERADMIN'],
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
      },
      {
        label: 'TODO',
        icon: 'FaShop',
        id: 'todo',
      },
    ],
  },
  {
    label: 'Component',
    id: 'component',
    isGroupLabel: true,
  },
  {
    label: 'Component',
    icon: 'FaShop',
    id: 'component',
    items: [
      {
        label: 'Layout',
        icon: 'FaShop',
        id: 'layout',
        items: [
          {
            label: 'Flex',
            icon: 'FaShop',
            id: 'flex',
          },
          {
            label: 'Grid',
            icon: 'FaShop',
            id: 'grid',
          },
        ],
      },
      {
        label: 'Common',
        icon: 'FaShop',
        id: 'common',
        items: [
          {
            label: 'Typography',
            icon: 'FaShop',
            id: 'typography',
          },
          {
            label: 'Divider',
            icon: 'FaShop',
            id: 'divider',
          },
        ],
      },
      {
        label: 'Input',
        icon: 'FaShop',
        id: 'input',
        items: [
          {
            label: 'Text Input',
            icon: 'FaShop',
            id: 'text-input',
          },
        ],
      },
    ],
  },
  {
    label: 'Example',
    id: 'example',
    isGroupLabel: true,
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
