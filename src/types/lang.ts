import type { LANG } from '@/constants'

export type Lang = (typeof LANG)[keyof typeof LANG]
