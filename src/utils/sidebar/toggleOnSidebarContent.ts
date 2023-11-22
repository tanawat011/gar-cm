import type { SIDEBAR_TYPE } from '@/constants'

type ToggleOnSidebarContentProps = {
  id: string
  sidebarType: (typeof SIDEBAR_TYPE)[keyof typeof SIDEBAR_TYPE]
}

export const toggleOnSidebarContent = ({
  id,
  sidebarType,
}: ToggleOnSidebarContentProps) => {
  const elContainer = document.getElementById(id)

  switch (sidebarType) {
    case 'mini':
      elContainer?.classList.add('w-16')
      elContainer?.classList.remove('w-64')
      break
    case 'full':
    case 'drawer':
      elContainer?.classList.add('w-64')
      elContainer?.classList.remove('w-16')
      break
  }
}
