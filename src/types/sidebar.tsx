import type { IconProps } from '@/components/Icon'

export type SidebarItem = {
  title: string
  icon: IconProps['name']
  link: string
  subItems?: {
    title: string
    link: string
  }[]
}
