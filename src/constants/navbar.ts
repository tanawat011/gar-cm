import type { CommonOption } from '@/types'

export const NAVBAR_TYPE = {
  NORMAL: 'normal',
  STICKY: 'sticky',
} as const

export const NAVBAR_TYPE_LABEL: readonly CommonOption[] = [
  {
    key: NAVBAR_TYPE.NORMAL,
    label: 'Normal',
  },
  {
    key: NAVBAR_TYPE.STICKY,
    label: 'Sticky',
  },
] as const
