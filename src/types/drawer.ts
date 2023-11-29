import type { DRAWER_POSITION } from '@/constants'

export type DrawerPosition = (typeof DRAWER_POSITION)[keyof typeof DRAWER_POSITION]
