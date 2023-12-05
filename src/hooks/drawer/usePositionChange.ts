import type { DrawerPosition } from '@/types'

import { useEffect } from 'react'

import { DRAWER_POSITION } from '@/constants'

type UsePositionChangeProps = {
  id: string
  position: DrawerPosition
}

export const usePositionChange = ({ id, position }: UsePositionChangeProps) => {
  useEffect(() => {
    const el = document.getElementById(id)

    el?.classList.remove(
      `${id}-${DRAWER_POSITION.TOP}`,
      `${id}-${DRAWER_POSITION.RIGHT}`,
      `${id}-${DRAWER_POSITION.BOTTOM}`,
      `${id}-${DRAWER_POSITION.LEFT}`,
      'left-0',
      'right-0',
      'bottom-0',
      'top-0',
    )

    if (el) {
      el.classList.add(`${id}-${position}`)

      switch (position) {
        case DRAWER_POSITION.TOP:
          el.classList.add('top-0', 'left-0')
          break
        case DRAWER_POSITION.RIGHT:
          el.classList.add('top-0', 'right-0')
          break
        case DRAWER_POSITION.BOTTOM:
          el.classList.add('bottom-0', 'left-0')
          break
        case DRAWER_POSITION.LEFT:
          el.classList.add('top-0', 'left-0')
      }
    }
  }, [position])
}
