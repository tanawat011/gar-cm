import { useEffect } from 'react'

type UseResizeProps = {
  isMobileDevice?: boolean
  cb: () => void
}

export const useResize = ({ isMobileDevice, cb }: UseResizeProps) => {
  useEffect(() => {
    if (isMobileDevice) {
      window.addEventListener('orientationchange', cb)
    } else {
      window.addEventListener('resize', cb)
    }

    return () => {
      if (isMobileDevice) {
        window.removeEventListener('orientationchange', cb)
      } else {
        window.removeEventListener('resize', cb)
      }
    }
  }, [])
}
