import { useEffect } from 'react'

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
        const isCollapsed = triggerEl?.classList.contains('collapsed')

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

          setSidebarCollapsed(isCollapsed)
        }
      })

      observer.observe(triggerEl, { attributes: true })
    }
  }, [])
}
