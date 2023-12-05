import type { CommonOption } from '@/types'

export const THEME = {
  DARK: 'dark',
  LIGHT: 'light',
} as const

export const THEME_LABEL: readonly CommonOption[] = [
  {
    key: THEME.DARK,
    label: 'Dark',
  },
  {
    key: THEME.LIGHT,
    label: 'Light',
  },
] as const
