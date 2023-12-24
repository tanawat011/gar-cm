import type { CommonOption, SidebarStyle, SidebarType } from '@/types'

export const SIDEBAR_TYPE = {
  FULL: 'full',
  MINI: 'mini',
  DRAWER: 'drawer',
} as const

export const SIDEBAR_TYPE_LABEL: readonly CommonOption<SidebarType>[] = [
  {
    key: SIDEBAR_TYPE.DRAWER,
    label: 'Drawer',
  },
  {
    key: SIDEBAR_TYPE.FULL,
    label: 'Full',
  },
  {
    key: SIDEBAR_TYPE.MINI,
    label: 'Mini',
  },
] as const

export const SIDEBAR_STYLE = {
  CLASSIC: 'classic',
  MODERN: 'modern',
} as const

export const SIDEBAR_STYLE_LABEL: readonly CommonOption<SidebarStyle>[] = [
  {
    key: SIDEBAR_STYLE.CLASSIC,
    label: 'Classic',
  },
  {
    key: SIDEBAR_STYLE.MODERN,
    label: 'Modern',
  },
] as const
