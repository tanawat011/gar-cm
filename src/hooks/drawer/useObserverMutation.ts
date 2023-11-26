import { useEffect } from 'react'

import { DRAWER_STATUS } from '@/constants'

type UseObserverMutationProps = {
  id: string
  setCollapsed: (isCollapsed: boolean) => void
}

export const useObserverMutation = ({
  id,
  setCollapsed,
}: UseObserverMutationProps) => {
  useEffect(() => {
    const triggerEl = document.getElementById(id)
    const elCoreBody = document.getElementById('core-body')

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          if (triggerEl && elCoreBody) {
            const isCollapsed = triggerEl.classList.contains(
              DRAWER_STATUS.COLLAPSED,
            )

            setCollapsed(isCollapsed)

            if (isCollapsed) {
              elCoreBody.classList.remove('overflow-hidden')
            } else {
              elCoreBody.classList.add('overflow-hidden')
            }
          }

          break
        }
      }
    })

    if (triggerEl) {
      observer.observe(triggerEl, { attributes: true })
    }
  }, [])
}
