import type { SIDEBAR_TYPE } from '@/constants'

type ToggleOnContentWrapperProps = {
  id: string
  sidebarCollapsed: boolean
  sidebarType: (typeof SIDEBAR_TYPE)[keyof typeof SIDEBAR_TYPE]
  isMobileDevice?: boolean
}

export const toggleOnContentWrapper = ({
  id,
  sidebarCollapsed,
  sidebarType,
  isMobileDevice,
}: ToggleOnContentWrapperProps) => {
  const el = document.getElementById(id)

  if (isMobileDevice) {
    if (sidebarCollapsed) {
      el?.classList.replace('h-screen', 'h-full')
    } else {
      el?.classList.replace('h-full', 'h-screen')
    }
  }

  const wFull = 'w-full'
  const wFu = 'w-[calc(100%-theme(spacing.64))]'
  const wMn = 'w-[calc(100%-theme(spacing.16))]'
  const mlMinusFu = '-ml-64'
  const mlMinusMn = '-ml-16'

  if (sidebarType === 'full') {
    if (sidebarCollapsed) {
      el?.classList.add(wFull, mlMinusFu)
      el?.classList.remove(wFu, mlMinusMn)
    } else {
      el?.classList.add(wFu)
      el?.classList.remove(wMn, wFull, mlMinusFu)
    }
  }

  if (sidebarType === 'mini') {
    if (sidebarCollapsed) {
      el?.classList.add(wFull, mlMinusMn)
      el?.classList.remove(wMn, mlMinusFu)
    } else {
      el?.classList.add(wMn)
      el?.classList.remove(wFu, wFull, mlMinusMn)
    }
  }

  if (sidebarType === 'drawer') {
    if (sidebarCollapsed) {
      el?.classList.add(mlMinusFu)
      el?.classList.remove(wFu, wMn, mlMinusMn)
    } else {
      el?.classList.add(wFull, mlMinusFu)
      el?.classList.remove(wFu, wMn, mlMinusMn)
    }
  }
}
