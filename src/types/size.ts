import type { SIZE, SIZE_STANDARD, SIZE_BASE } from '@/constants'

export type Size = (typeof SIZE)[keyof typeof SIZE]
export type SizeStandard = (typeof SIZE_STANDARD)[keyof typeof SIZE_STANDARD]
export type SizeBase = (typeof SIZE_BASE)[keyof typeof SIZE_BASE]
