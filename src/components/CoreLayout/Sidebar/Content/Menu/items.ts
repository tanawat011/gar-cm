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
  },
  {
    label: 'Children',
    icon: 'FaSignal',
    id: 'children',
    items: [
      {
        label: 'Children 2',
        id: 'children2',
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
      },
      {
        label: 'Level 2(2)',
        id: 'level22',
        items: [
          {
            label: 'Level 3',
            id: 'level3',
          },
        ],
      },
    ],
  },
  {
    label: 'Dashboard 2',
    icon: 'FaShop',
    id: 'dashboard2',
  },
]
