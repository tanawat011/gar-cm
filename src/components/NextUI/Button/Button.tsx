import type { IconProps, IconType } from '@/components/Icon'
import type { ButtonProps as ButtonPropsNextUI } from '@nextui-org/react'

import React from 'react'

import { Button as ButtonNextUI } from '@nextui-org/react'
import clsx from 'clsx'

import { Icon } from '@/components/Icon'

export type ButtonProps = {
  label?: string
  icon?: IconType
  iconR?: IconType
  iconSize?: IconProps['size']
  iconPlacement?: 'left' | 'right' | 'two-side'
  iconOnly?: boolean
  loading?: boolean
} & Omit<ButtonPropsNextUI, 'isIconOnly' | 'isLoading'>

export const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  iconPlacement = 'left',
  iconR,
  iconSize,
  iconOnly,
  children,
  className,
  loading,
  ...leftProps
}) => {
  const isLeft = icon && iconPlacement === 'left'
  const isRight = icon && iconPlacement === 'right'
  const isTwoSide = icon && iconPlacement === 'two-side'

  return (
    <ButtonNextUI
      {...leftProps}
      {...(isLeft && { startContent: <Icon name={icon} size={iconSize} /> })}
      {...(isRight && { endContent: <Icon name={icon} size={iconSize} /> })}
      {...(isTwoSide && {
        startContent: <Icon name={icon} size={iconSize} />,
        endContent: <Icon name={iconR || icon} size={iconSize} />,
      })}
      isLoading={loading}
      className={clsx(className, iconOnly && 'rounded-full')}
      isIconOnly={iconOnly}
    >
      {label}
      {children}
    </ButtonNextUI>
  )
}
