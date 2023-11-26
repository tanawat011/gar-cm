import React, { useState } from 'react'

import {
  useInitialPosition,
  useObserveTrigger,
  usePositionChange,
} from '@/hooks'

import { Backdrop } from '..'

type DrawerProps = {
  id: string
  position?: 'left' | 'right' | 'top' | 'bottom'
  children: React.ReactNode
}

export const Drawer: React.FC<DrawerProps> = ({
  id,
  position = 'left',
  children,
}) => {
  const triggerId = `${id}-trigger`

  const [sidebarCollapsed, setSidebarCollapsed] = useState(true)

  useObserveTrigger({ triggerId, setSidebarCollapsed })
  useInitialPosition({ id, position })
  usePositionChange({ id, position })

  const toggleDrawer = () => {
    document
      .getElementById(triggerId)
      ?.classList.replace('expanded', 'collapsed')

    const el = document.getElementById(id)

    if (el) {
      const isContain = (className: string) => el.classList.contains(className)
      const toggleClass = (className: string, contain: boolean) =>
        el.classList.toggle(className, contain)

      switch (position) {
        case 'top':
          toggleClass('-translate-y-full', !isContain('-translate-y-full'))
          setSidebarCollapsed(!isContain('-translate-y-full'))
          break
        case 'right':
          toggleClass('translate-x-full', !isContain('translate-x-full'))
          setSidebarCollapsed(!isContain('translate-x-full'))
          break
        case 'bottom':
          toggleClass('translate-y-full', !isContain('translate-y-full'))
          setSidebarCollapsed(!isContain('translate-y-full'))
          break
        case 'left':
          toggleClass('-translate-x-full', !isContain('-translate-x-full'))
          setSidebarCollapsed(!isContain('-translate-x-full'))
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

      <div className='dark:bg-black w-full h-full'>{children}</div>
    </div>
  )
}
