import { useEffect } from 'react'

import { DRAWER_POSITION } from '@/constants'

type UsePositionChangeProps = {
  id: string
  position: (typeof DRAWER_POSITION)[keyof typeof DRAWER_POSITION]
}

export const usePositionChange = ({ id, position }: UsePositionChangeProps) => {
  useEffect(() => {
    const el = document.getElementById(id)

    if (el) {
      el.classList.add(`${id}-${position}`)

      switch (position) {
        case DRAWER_POSITION.TOP:
          el.classList.add('top-0', 'left-0', 'w-full', 'h-[300px]')
          break
        case DRAWER_POSITION.RIGHT:
          el.classList.add('top-0', 'right-0', 'w-[300px]', 'h-full')
          break
        case DRAWER_POSITION.BOTTOM:
          el.classList.add('bottom-0', 'left-0', 'w-full', 'h-[300px]')
          break
        case DRAWER_POSITION.LEFT:
          el.classList.add('top-0', 'left-0', 'w-[300px]', 'h-full')
      }
    }
  }, [id, position])
}
