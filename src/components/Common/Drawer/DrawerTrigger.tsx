import React from 'react'

import clsx from 'clsx'

import { DRAWER_POSITION } from '@/constants'

type DrawerTriggerProps = {
  id: string
  children: React.ReactNode
  className?: string
}

const transYMinus = '-translate-y-full'
const transYPlus = 'translate-y-full'
const transXMinus = '-translate-x-full'
const transXPlus = 'translate-x-full'

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

      // NOTE: toggle drawer position class name
      if (isContain(`${id}-${DRAWER_POSITION.TOP}`))
        toggleClass(transYMinus, !isContain(transYMinus))

      if (isContain(`${id}-${DRAWER_POSITION.RIGHT}`))
        toggleClass(transXPlus, !isContain(transXPlus))

      if (isContain(`${id}-${DRAWER_POSITION.BOTTOM}`))
        toggleClass(transYPlus, !isContain(transYPlus))

      if (isContain(`${id}-${DRAWER_POSITION.LEFT}`))
        toggleClass(transXMinus, !isContain(transXMinus))

      // NOTE: toggle drawer trigger class name
      const isCollapsed = el.className.includes('translate-')

      if (isCollapsed) {
        selfEl.classList.replace('expanded', 'collapsed')
      } else {
        selfEl.classList.replace('collapsed', 'expanded')
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
