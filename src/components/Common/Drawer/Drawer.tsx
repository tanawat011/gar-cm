import type { DrawerPosition } from '@/types'

import React, { useEffect } from 'react'

import { ScrollShadow } from '@nextui-org/react'
import tw, { css, styled } from 'twin.macro'

import { DRAWER_POSITION } from '@/constants'
import { useInitialPosition, usePositionChange } from '@/hooks'

import { Backdrop } from '..'

type DrawerProps = {
  id: string
  open?: boolean
  onClose?: () => void
  position?: DrawerPosition
  children: React.ReactNode
  className?: string
  containerClassName?: string
  $specifySize?: `${number}px`
}

export const Drawer: React.FC<DrawerProps> = ({
  id,
  open,
  onClose,
  position = DRAWER_POSITION.LEFT,
  children,
  className,
  containerClassName,
  $specifySize = '300px',
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

      <StyledDrawerContainer
        id={id}
        className={['fixed transition-transform z-30', containerClassName].join(' ')}
        position={position}
        size={0}
        $specifySize={$specifySize}
      >
        <div className={className}>{children}</div>
      </StyledDrawerContainer>
    </>
  )
}

const StyledDrawerContainer = styled(ScrollShadow)<{
  position: DrawerProps['position']
  $specifySize: DrawerProps['$specifySize']
}>(({ position, $specifySize }) => {
  switch (position) {
    case DRAWER_POSITION.TOP:
    case DRAWER_POSITION.BOTTOM:
      return [
        tw`w-full h-0`,
        css`
          height: ${$specifySize};
        `,
      ]
    case DRAWER_POSITION.RIGHT:
    case DRAWER_POSITION.LEFT:
      return [
        tw`h-full w-0`,
        css`
          width: ${$specifySize};
        `,
      ]
  }
})
