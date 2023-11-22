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
  const el = document.getElementById(id)
  const drawerClass = ['z-[3]', 'sticky', 'top-0', 'h-screen']
  const translateX = '-translate-x-full'

  if (sidebarType === 'drawer') el?.classList.add(...drawerClass)
  else el?.classList.remove(...drawerClass)

  if (sidebarCollapsed) el?.classList.add(translateX)
  else el?.classList.remove(translateX)
}
