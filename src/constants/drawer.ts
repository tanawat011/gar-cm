import type { CommonOption, DrawerPosition } from '@/types'

export const DRAWER_POSITION = {
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left',
} as const

export const DRAWER_STATUS = {
  EXPANDED: 'expanded',
  COLLAPSED: 'collapsed',
} as const

export const DRAWER_POSITION_LABEL: readonly CommonOption<DrawerPosition>[] = [
  {
    key: DRAWER_POSITION.TOP,
    label: 'Top',
  },
  {
    key: DRAWER_POSITION.RIGHT,
    label: 'Right',
  },
  {
    key: DRAWER_POSITION.BOTTOM,
    label: 'Bottom',
  },
  {
    key: DRAWER_POSITION.LEFT,
    label: 'Left',
  },
] as const
