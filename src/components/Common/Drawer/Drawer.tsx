import React, { useState } from 'react'

import clsx from 'clsx'

import { DRAWER_POSITION, DRAWER_STATUS } from '@/constants'
import {
  useInitialPosition,
  useObserveTrigger,
  usePositionChange,
} from '@/hooks'

import { Backdrop } from '..'

type DrawerProps = {
  id: string
  position?: (typeof DRAWER_POSITION)[keyof typeof DRAWER_POSITION]
  children: React.ReactNode
  className?: string
}

export const Drawer: React.FC<DrawerProps> = ({
  id,
  position = DRAWER_POSITION.LEFT,
  children,
  className,
}) => {
  const triggerId = `${id}-trigger`

  const [sidebarCollapsed, setSidebarCollapsed] = useState(true)

  useObserveTrigger({ triggerId, setSidebarCollapsed })
  useInitialPosition({ id, position })
  usePositionChange({ id, position })
  usePositionChange({ id, position }, [position])

  const toggleDrawer = () => {
    document
      .getElementById(triggerId)
      ?.classList.replace(DRAWER_STATUS.EXPANDED, DRAWER_STATUS.COLLAPSED)

    const el = document.getElementById(id)

    if (el) {
      const isContain = (cn: string) => el.classList.contains(cn)
      const toggleClass = (cn: string, contain: boolean) =>
        el.classList.toggle(cn, contain)

      const setup = (cn: string) => {
        toggleClass(cn, !isContain(cn))
        setSidebarCollapsed(!isContain(cn))
      }

      switch (position) {
        case DRAWER_POSITION.TOP:
          setup('-translate-y-full')
          break
        case DRAWER_POSITION.RIGHT:
          setup('translate-x-full')
          break
        case DRAWER_POSITION.BOTTOM:
          setup('translate-y-full')
          break
        case DRAWER_POSITION.LEFT:
          setup('-translate-x-full')
      }
    }
  }

  return (
    <div id={id} className='fixed transition-transform z-10'>
      <Backdrop
        id={`${id}-backdrop`}
        open={!sidebarCollapsed}
        zIndex={-1}
        onClick={toggleDrawer}
      />

      <div className={clsx('bg-white dark:bg-black w-full h-full', className)}>
        {children}
      </div>
    </div>
  )
}
