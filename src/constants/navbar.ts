import type { CommonOption, NavbarStyle, NavbarType } from '@/types'

export const NAVBAR_TYPE = {
  NORMAL: 'normal',
  STICKY: 'sticky',
} as const

export const NAVBAR_TYPE_LABEL: readonly CommonOption<NavbarType>[] = [
  {
    key: NAVBAR_TYPE.NORMAL,
    label: 'Normal',
  },
  {
    key: NAVBAR_TYPE.STICKY,
    label: 'Sticky',
  },
] as const

export const NAVBAR_STYLE = {
  CLASSIC: 'classic',
  MODERN: 'modern',
} as const

export const NAVBAR_STYLE_LABEL: readonly CommonOption<NavbarStyle>[] = [
  {
    key: NAVBAR_STYLE.CLASSIC,
    label: 'Classic',
  },
  {
    key: NAVBAR_STYLE.MODERN,
    label: 'Modern',
  },
] as const
