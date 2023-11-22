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
  const elContainer = document.getElementById(id)

  if (isMobileDevice) {
    if (sidebarType === 'drawer') {
      if (sidebarCollapsed) {
        elContainer?.classList.add('h-full')
        elContainer?.classList.remove('h-screen')
      } else {
        elContainer?.classList.add('h-screen')
        elContainer?.classList.remove('h-full')
      }
    }
  }

  if (sidebarCollapsed) {
    switch (sidebarType) {
      case 'full':
        elContainer?.classList.add('w-full', '-ml-64')
        elContainer?.classList.remove(
          'w-[calc(100%-theme(spacing.64))]',
          '-ml-16',
        )
        break
      case 'mini':
        elContainer?.classList.add('w-full', '-ml-16')
        elContainer?.classList.remove(
          'w-[calc(100%-theme(spacing.16))]',
          '-ml-64',
        )
        break
      case 'drawer':
        elContainer?.classList.add('-ml-64')
        elContainer?.classList.remove(
          'w-[calc(100%-theme(spacing.64))]',
          'w-[calc(100%-theme(spacing.16))]',
          '-ml-16',
        )
        break
    }

    return
  }

  switch (sidebarType) {
    case 'full':
      elContainer?.classList.add('w-[calc(100%-theme(spacing.64))]')
      elContainer?.classList.remove(
        'w-[calc(100%-theme(spacing.16))]',
        'w-full',
        '-ml-64',
      )
      break
    case 'mini':
      elContainer?.classList.add('w-[calc(100%-theme(spacing.16))]')
      elContainer?.classList.remove(
        'w-[calc(100%-theme(spacing.64))]',
        'w-full',
        '-ml-16',
      )
      break
    case 'drawer':
      elContainer?.classList.add('w-full', '-ml-64')
      elContainer?.classList.remove(
        'w-[calc(100%-theme(spacing.64))]',
        'w-[calc(100%-theme(spacing.16))]',
        '-ml-16',
      )
      break
  }
}
