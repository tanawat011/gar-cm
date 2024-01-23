import type { ButtonProps } from '../../Button'
import type { IconType } from '@/components/Icon'
import type { DropdownItemProps, DropdownMenuProps } from '@nextui-org/react'
import type { Control } from 'react-hook-form'

import React, { useCallback } from 'react'

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { Controller } from 'react-hook-form'

import { Icon } from '@/components/Icon'

export type DropdownInputProps = {
  uncontrolled?: boolean
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: Control<any>
  errorMessage?: string
  children?: React.ReactNode
  items: (DropdownItemProps & {
    label?: string
  })[]
  label?: string
  buttonOptions?: {
    icon?: IconType
    iconR?: IconType
    placement?: 'left' | 'right' | 'two-side'
  } & ButtonProps
} & Omit<DropdownMenuProps, 'children'>

export const DropdownInput: React.FC<DropdownInputProps> = (props) => {
  const { uncontrolled, control, children, items, label, buttonOptions: btnOpt, ...leftProps } = props

  const renderInput = useCallback(() => {
    const { icon = 'FaChevronDown', iconR, placement = 'right' } = btnOpt || {}
    const isLeft = icon && placement === 'left'
    const isRight = icon && placement === 'right'
    const isTwoSide = icon && placement === 'two-side'

    return (
      <Dropdown placement='bottom-end'>
        <DropdownTrigger>
          {children || (
            <Button
              variant='flat'
              {...btnOpt}
              {...(isLeft && { startContent: <Icon name={icon} /> })}
              {...(isRight && { endContent: <Icon name={icon} /> })}
              {...(isTwoSide && {
                startContent: <Icon name={icon} />,
                endContent: <Icon name={iconR || icon} />,
              })}
            >
              {label}
            </Button>
          )}
        </DropdownTrigger>

        <DropdownMenu aria-label={`${props.name}-${label}`} selectionMode={'single'} variant={'flat'} {...leftProps}>
          {items.map(({ key, label: itemLabel, ...leftItem }) => {
            return (
              <DropdownItem key={key} {...leftItem}>
                {leftItem.children || itemLabel}
              </DropdownItem>
            )
          })}
        </DropdownMenu>
      </Dropdown>
    )
  }, [leftProps.selectedKeys, items])

  if (uncontrolled) {
    return renderInput()
  }

  return (
    <Controller
      control={control}
      name={props.name}
      render={() => {
        return renderInput()
      }}
    />
  )
}
