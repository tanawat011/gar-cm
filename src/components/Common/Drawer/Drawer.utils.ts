import { DRAWER_STATUS } from '@/constants'

export const setIsCollapsed = (el: HTMLElement) => {
  const isCollapsed = el.classList.contains(DRAWER_STATUS.COLLAPSED)

  if (isCollapsed) {
    el.classList.replace(DRAWER_STATUS.COLLAPSED, DRAWER_STATUS.EXPANDED)
  } else {
    el.classList.replace(DRAWER_STATUS.EXPANDED, DRAWER_STATUS.COLLAPSED)
  }
}
