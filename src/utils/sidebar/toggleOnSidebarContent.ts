import type { SIDEBAR_TYPE } from '@/constants'

type ToggleOnSidebarContentProps = {
  id: string
  sidebarType: (typeof SIDEBAR_TYPE)[keyof typeof SIDEBAR_TYPE]
}

export const toggleOnSidebarContent = ({
  id,
  sidebarType,
}: ToggleOnSidebarContentProps) => {
  const el = document.getElementById(id)

  if (sidebarType === 'mini') return el?.classList.replace('w-64', 'w-16')

  el?.classList.replace('w-16', 'w-64')
}
