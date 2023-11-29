import { useEffect } from 'react'

import { isMobile } from 'react-device-detect'

type UseResizeProps = {
  cb: () => void
}

export const useResize = ({ cb }: UseResizeProps) => {
  useEffect(() => {
    if (isMobile) {
      window.addEventListener('orientationchange', cb)
    } else {
      window.addEventListener('resize', cb)
    }

    return () => {
      if (isMobile) {
        window.removeEventListener('orientationchange', cb)
      } else {
        window.removeEventListener('resize', cb)
      }
    }
  }, [])
}
