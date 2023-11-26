import { useEffect } from 'react'

import { DRAWER_STATUS } from '@/constants'

type UseObserveTriggerProps = {
  triggerId: string
  setSidebarCollapsed: (isCollapsed: boolean) => void
}

export const useObserveTrigger = ({
  triggerId,
  setSidebarCollapsed,
}: UseObserveTriggerProps) => {
  useEffect(() => {
    const triggerEl = document.getElementById(triggerId)

    if (triggerEl) {
      const observer = new MutationObserver((mutationList) => {
        const isCollapsed = triggerEl?.classList.contains(
          DRAWER_STATUS.COLLAPSED,
        )

        setSidebarCollapsed(isCollapsed)

        const mutationFilter = mutationList.filter(
          ({ type, attributeName }) =>
            type === 'attributes' && attributeName === 'class',
        )

        if (mutationFilter) {
          const elCoreBody = document.getElementById('core-body')

          if (isCollapsed) {
            elCoreBody?.classList.remove('overflow-hidden')
          } else {
            elCoreBody?.classList.add('overflow-hidden')
          }
        }
      })

      observer.observe(triggerEl, { attributes: true })
    }
  }, [])
}
