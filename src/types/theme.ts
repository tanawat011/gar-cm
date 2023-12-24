import type { THEME } from '@/constants'

export type Theme = (typeof THEME)[keyof typeof THEME]
