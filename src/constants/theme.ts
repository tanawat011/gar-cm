import type { CommonOption, Theme } from '@/types'

export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
} as const

export const THEME_LABEL: readonly CommonOption<Theme>[] = [
  {
    key: THEME.LIGHT,
    label: 'Light',
    icon: 'FaRegSun',
  },
  {
    key: THEME.DARK,
    label: 'Dark',
    icon: 'FaRegMoon',
  },
] as const
