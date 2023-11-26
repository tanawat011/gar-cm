import { useEffect } from 'react'

import { DRAWER_POSITION } from '@/constants'

type UseInitialPositionProps = {
  id: string
  position: (typeof DRAWER_POSITION)[keyof typeof DRAWER_POSITION]
}

export const useInitialPosition = ({
  id,
  position,
}: UseInitialPositionProps) => {
  useEffect(() => {
    const el = document.getElementById(id)

    el?.classList.remove(
      DRAWER_POSITION.LEFT,
      DRAWER_POSITION.RIGHT,
      DRAWER_POSITION.TOP,
      DRAWER_POSITION.BOTTOM,
      'left-0',
      'right-0',
      'bottom-0',
      'top-0',
      'w-full',
      'w-[300px]',
      'h-full',
      'h-[300px]',
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
