import type { CommonOption } from '@/types'

export type Lang = (typeof LANG)[keyof typeof LANG]

export const LANG = {
  EN: 'en',
  TH: 'th',
} as const

export const LANG_LABEL: readonly CommonOption<Lang>[] = [
  {
    key: LANG.EN,
    label: 'English',
  },
  {
    key: LANG.TH,
    label: 'ไทย',
  },
] as const
