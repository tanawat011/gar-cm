import type { ButtonProps as ButtonPropsNextUI } from '@nextui-org/react'

import React from 'react'

import { Button as ButtonNextUI } from '@nextui-org/react'

import { Icon, type IconType } from '@/components/Icon'

type ButtonProps = {
  label?: string
  icon?: IconType
  iconR?: IconType
  placement?: 'left' | 'right' | 'two-side'
} & ButtonPropsNextUI

export const Button: React.FC<ButtonProps> = ({ label, icon, placement = 'left', iconR, ...leftProps }) => {
  return (
    <ButtonNextUI
      {...leftProps}
      {...(icon && placement === 'left' && { startContent: <Icon name={icon} /> })}
      {...(icon && placement === 'right' && { endContent: <Icon name={icon} /> })}
      {...(icon &&
        placement === 'two-side' && {
          startContent: <Icon name={icon} />,
          endContent: <Icon name={iconR || icon} />,
        })}
    >
      {label}
    </ButtonNextUI>
  )
}
