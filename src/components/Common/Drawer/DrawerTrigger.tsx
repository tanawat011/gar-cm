import React from 'react'

import clsx from 'clsx'

import { DRAWER_POSITION, DRAWER_STATUS } from '@/constants'

type DrawerTriggerProps = {
  id: string
  children: React.ReactNode
  className?: string
}

export const DrawerTrigger: React.FC<DrawerTriggerProps> = ({
  id,
  children,
  className,
}) => {
  const selfId = `${id}-trigger`

  const toggleDrawer = () => {
    const el = document.getElementById(id)
    const selfEl = document.getElementById(selfId)

    if (el && selfEl) {
      const isContain = (cn: string) => el.classList.contains(cn)
      const toggleClass = (cn: string, contain: boolean) =>
        el.classList.toggle(cn, contain)

      const setup = (cn: string) => toggleClass(cn, !isContain(cn))

      // NOTE: toggle drawer position class name
      if (isContain(`${id}-${DRAWER_POSITION.TOP}`)) setup('-translate-y-full')

      if (isContain(`${id}-${DRAWER_POSITION.RIGHT}`)) setup('translate-x-full')

      if (isContain(`${id}-${DRAWER_POSITION.BOTTOM}`))
        setup('translate-y-full')

      if (isContain(`${id}-${DRAWER_POSITION.LEFT}`)) setup('-translate-x-full')

      // NOTE: toggle drawer trigger class name
      const isCollapsed = selfEl.classList.contains(DRAWER_STATUS.COLLAPSED)

      if (isCollapsed) {
        selfEl.classList.add(DRAWER_STATUS.EXPANDED)
        selfEl.classList.remove(DRAWER_STATUS.COLLAPSED)
      } else {
        selfEl.classList.add(DRAWER_STATUS.COLLAPSED)
        selfEl.classList.remove(DRAWER_STATUS.EXPANDED)
      }
    }
  }

  return (
    <div
      id={selfId}
      className={clsx('collapsed', className)}
      onClick={toggleDrawer}
    >
      {children}
    </div>
  )
}
