import React, { useEffect } from 'react'

import clsx from 'clsx'

import { DRAWER_POSITION } from '@/constants'
import { useInitialPosition, usePositionChange } from '@/hooks'

import { Backdrop } from '..'

type DrawerProps = {
  id: string
  open?: boolean
  onClose?: () => void
  position?: (typeof DRAWER_POSITION)[keyof typeof DRAWER_POSITION]
  children: React.ReactNode
  className?: string
}

export const Drawer: React.FC<DrawerProps> = ({
  id,
  open,
  onClose,
  position = DRAWER_POSITION.LEFT,
  children,
  className,
}) => {
  const backdropId = `${id}-backdrop`

  useInitialPosition({ id, position })
  usePositionChange({ id, position })

  const handleClose = () => {
    onClose?.()
    toggleDrawer()
  }

  const toggleDrawer = () => {
    const el = document.getElementById(id)

    if (el) {
      const setup = (cn: string) => el.classList.toggle(cn, !open)

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

  useEffect(() => {
    toggleDrawer()
  }, [open])

  return (
    <>
      <Backdrop id={backdropId} open={!!open} onClick={handleClose} />

      <div id={id} className='fixed transition-transform z-30'>
        <div className={clsx('bg-white dark:bg-black w-full h-full', className)}>{children}</div>
      </div>
    </>
  )
}
