import type { THEME, THEME_STYLE } from '@/constants'

export type Theme = (typeof THEME)[keyof typeof THEME]
export type ThemeStyle = (typeof THEME_STYLE)[keyof typeof THEME_STYLE]
