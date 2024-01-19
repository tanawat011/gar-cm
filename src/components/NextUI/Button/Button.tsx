import type { ButtonProps as ButtonPropsNextUI } from '@nextui-org/react'

import React from 'react'

import { Button as ButtonNextUI } from '@nextui-org/react'

import { Icon, type IconType } from '@/components/Icon'

export type ButtonProps = {
  label?: string
  icon?: IconType
  iconR?: IconType
  placement?: 'left' | 'right' | 'two-side'
  iconOnly?: boolean
} & Omit<ButtonPropsNextUI, 'isIconOnly'>

export const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  placement = 'left',
  iconR,
  iconOnly,
  children,
  ...leftProps
}) => {
  const isLeft = icon && placement === 'left'
  const isRight = icon && placement === 'right'
  const isTwoSide = icon && placement === 'two-side'

  return (
    <ButtonNextUI
      {...leftProps}
      {...(isLeft && { startContent: <Icon name={icon} /> })}
      {...(isRight && { endContent: <Icon name={icon} /> })}
      {...(isTwoSide && {
        startContent: <Icon name={icon} />,
        endContent: <Icon name={iconR || icon} />,
      })}
      isIconOnly={iconOnly}
    >
      {label}
      {children}
    </ButtonNextUI>
  )
}
