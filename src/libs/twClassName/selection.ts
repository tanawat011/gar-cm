import type { TwTheme } from './types'

import { TW_THEME } from './constants'

export type Selection<T = string> = {
  key: string
  label: string
  icon?: T
}

export const TW_THEME_SELECTION: readonly Selection<TwTheme>[] = [
  {
    key: TW_THEME.LIGHT,
    label: 'Light',
    icon: 'FaRegSun',
  },
  {
    key: TW_THEME.DARK,
    label: 'Dark',
    icon: 'FaRegMoon',
  },
] as const
