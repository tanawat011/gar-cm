import React, { useContext } from 'react'

import clsx from 'clsx'

import { DRAWER_POSITION } from '@/constants'
import { DrawerContext } from '@/contexts'

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

  const drawerCtx = useContext(DrawerContext)

  const toggleDrawer = () => {
    drawerCtx.setCollapsed(!drawerCtx.collapsed)

    const el = document.getElementById(id)
    const selfEl = document.getElementById(selfId)

    if (el && selfEl) {
      const isContain = (cn: string) => el.classList.contains(cn)
      const toggleClass = (cn: string, contain: boolean) =>
        el.classList.toggle(cn, contain)

      const getPos = (pos: string) => `${id}-${pos}`
      const setup = (cn: string) => toggleClass(cn, !isContain(cn))

      // NOTE: toggle drawer position class name
      if (isContain(getPos(DRAWER_POSITION.TOP))) setup('-translate-y-full')

      if (isContain(getPos(DRAWER_POSITION.RIGHT))) setup('translate-x-full')

      if (isContain(getPos(DRAWER_POSITION.BOTTOM))) setup('translate-y-full')

      if (isContain(getPos(DRAWER_POSITION.LEFT))) setup('-translate-x-full')
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
