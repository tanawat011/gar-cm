import { useEffect } from 'react'

type UseInitialPositionProps = {
  id: string
  position: 'top' | 'right' | 'bottom' | 'left'
}

export const useInitialPosition = ({
  id,
  position,
}: UseInitialPositionProps) => {
  useEffect(() => {
    const el = document.getElementById(id)

    el?.classList.remove(
      'left',
      'right',
      'top',
      'bottom',
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
      case 'top':
        el?.classList.add('-translate-y-full')
        break
      case 'right':
        el?.classList.add('translate-x-full')
        break
      case 'bottom':
        el?.classList.add('translate-y-full')
        break
      case 'left':
        el?.classList.add('-translate-x-full')
    }
  }, [])
}
