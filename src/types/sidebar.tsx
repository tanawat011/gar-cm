import type { IconProps } from '@/components/Icon'

export type SidebarItem = {
  title: string
  icon?: IconProps['name']
  link: string
  subItem?: SidebarItem // NOTE: this is for breadcrumb format only
  subItems?: SidebarItem[] // NOTE: this is for sidebar format only
}
