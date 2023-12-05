import type { CommonOption } from '@/types'

export const SIZE = {
  '2XS': '2xs',
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
  '2XL': '2xl',
  '3XL': '3xl',
} as const

export const SIZE_STANDARD = {
  SM: SIZE.SM,
  MD: SIZE.MD,
  LG: SIZE.LG,
} as const

export const SIZE_BASE = {
  XS: SIZE.XS,
  SM: SIZE.SM,
  MD: SIZE.MD,
  LG: SIZE.LG,
  XL: SIZE.XL,
} as const

export const SIZE_LABEL: readonly CommonOption[] = [
  {
    key: SIZE['2XS'],
    label: 'Extra small',
  },
  {
    key: SIZE.XS,
    label: 'Small',
  },
  {
    key: SIZE.SM,
    label: 'Medium',
  },
  {
    key: SIZE.MD,
    label: 'Large',
  },
  {
    key: SIZE.LG,
    label: 'Extra large',
  },
  {
    key: SIZE.XL,
    label: '2 Extra large',
  },
  {
    key: SIZE['2XL'],
    label: '3 Extra large',
  },
  {
    key: SIZE['3XL'],
    label: '4 Extra large',
  },
] as const
