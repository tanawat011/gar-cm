import type { IconType } from '@/components/Icon'

export type MenuProps = {
  label: string
  icon?: IconType
  id: string
  link?: string
  isGroupLabel?: boolean
  items?: MenuProps[]
}

export const menu: MenuProps[] = [
  {
    label: 'Review POM NOI',
    icon: 'FaEye',
    id: 'dashboard',
    link: '/',
  },
]
