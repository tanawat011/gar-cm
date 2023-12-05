import type { DrawerPosition } from '@/types'

import { useEffect } from 'react'

import { DRAWER_POSITION } from '@/constants'

type UseInitialPositionProps = {
  id: string
  position: DrawerPosition
}

export const useInitialPosition = ({ id, position }: UseInitialPositionProps) => {
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
      'translate-x-full',
      '-translate-x-full',
      'translate-y-full',
      '-translate-y-full',
    )

    switch (position) {
      case DRAWER_POSITION.TOP:
        el?.classList.add('-translate-y-full')
        break
      case DRAWER_POSITION.RIGHT:
        el?.classList.add('translate-x-full')
        break
      case DRAWER_POSITION.BOTTOM:
        el?.classList.add('translate-y-full')
        break
      case DRAWER_POSITION.LEFT:
        el?.classList.add('-translate-x-full')
    }
  }, [])
}
