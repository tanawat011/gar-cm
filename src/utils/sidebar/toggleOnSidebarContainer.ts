import type { SIDEBAR_TYPE } from '@/constants'

type ToggleOnSidebarContainerProps = {
  id: string
  sidebarType: (typeof SIDEBAR_TYPE)[keyof typeof SIDEBAR_TYPE]
  sidebarCollapsed: boolean
}

export const toggleOnSidebarContainer = ({
  id,
  sidebarType,
  sidebarCollapsed,
}: ToggleOnSidebarContainerProps) => {
  const elContainer = document.getElementById(id)

  if (sidebarType === 'drawer') {
    elContainer?.classList.add('z-[3]', 'sticky', 'top-0', 'h-screen')
  } else {
    elContainer?.classList.remove('z-[3]', 'sticky', 'top-0', 'h-screen')
  }

  if (sidebarCollapsed) {
    elContainer?.classList.add('-translate-x-full')
  } else {
    elContainer?.classList.remove('-translate-x-full')
  }
}
