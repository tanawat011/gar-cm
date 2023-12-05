import type { CommonOption } from '@/types'

export const LANG = {
  EN: 'en',
  TH: 'th',
} as const

export const LANG_LABEL: readonly CommonOption[] = [
  {
    key: LANG.EN,
    label: 'English',
  },
  {
    key: LANG.TH,
    label: 'ไทย',
  },
] as const
