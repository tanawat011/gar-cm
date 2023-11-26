import { useEffect } from 'react'

type UsePositionChangeProps = {
  id: string
  position: 'top' | 'right' | 'bottom' | 'left'
}

export const usePositionChange = ({ id, position }: UsePositionChangeProps) => {
  useEffect(() => {
    const el = document.getElementById(id)

    if (el) {
      el.classList.add(`${id}-${position}`)

      switch (position) {
        case 'top':
          el.classList.add('top-0', 'left-0', 'w-full', 'h-[300px]')
          break
        case 'right':
          el.classList.add('top-0', 'right-0', 'w-[300px]', 'h-full')
          break
        case 'bottom':
          el.classList.add('bottom-0', 'left-0', 'w-full', 'h-[300px]')
          break
        case 'left':
          el.classList.add('top-0', 'left-0', 'w-[300px]', 'h-full')
      }
    }
  }, [position])
}
