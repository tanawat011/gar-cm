import React, { useContext } from 'react'

import clsx from 'clsx'

import { DRAWER_POSITION, DRAWER_STATUS } from '@/constants'
import { DrawerContext } from '@/contexts'
import { useInitialPosition, usePositionChange } from '@/hooks'

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
  const backdropId = `${id}-backdrop`

  const drawerCtx = useContext(DrawerContext)

  useInitialPosition({ id, position })
  usePositionChange({ id, position })
  usePositionChange({ id, position }, [position])

  const toggleDrawer = () => {
    drawerCtx.setCollapsed(!drawerCtx.collapsed)

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
      }

      switch (position) {
        case DRAWER_POSITION.TOP:
          return setup('-translate-y-full')
        case DRAWER_POSITION.RIGHT:
          return setup('translate-x-full')
        case DRAWER_POSITION.BOTTOM:
          return setup('translate-y-full')
        case DRAWER_POSITION.LEFT:
          return setup('-translate-x-full')
      }
    }
  }

  return (
    <>
      <Backdrop
        id={backdropId}
        zIndex={1}
        open={!drawerCtx.collapsed}
        onClick={toggleDrawer}
      />

      <div id={id} className='fixed transition-transform z-10'>
        <div
          className={clsx('bg-white dark:bg-black w-full h-full', className)}
        >
          {children}
        </div>
      </div>
    </>
  )
}
