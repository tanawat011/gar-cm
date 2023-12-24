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

export const THEME_STYLE = {
  CLASSIC: 'classic',
  MODERN: 'modern',
} as const

export const THEME_STYLE_LABEL: readonly CommonOption[] = [
  {
    key: THEME_STYLE.CLASSIC,
    label: 'Classic',
  },
  {
    key: THEME_STYLE.MODERN,
    label: 'Modern',
  },
] as const
