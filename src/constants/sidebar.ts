import type { CommonOption } from '@/types'

export const SIDEBAR_TYPE = {
  FULL: 'full',
  MINI: 'mini',
  DRAWER: 'drawer',
} as const

export const SIDEBAR_TYPE_LABEL: readonly CommonOption[] = [
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
