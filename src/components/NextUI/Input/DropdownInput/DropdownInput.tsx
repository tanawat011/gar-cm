import type { DropdownItemProps, DropdownMenuProps } from '@nextui-org/react'
import type { Control } from 'react-hook-form'

import React, { useCallback } from 'react'

import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { Controller } from 'react-hook-form'

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
} & Omit<DropdownMenuProps, 'children'>

export const DropdownInput: React.FC<DropdownInputProps> = (props) => {
  const { uncontrolled, control, children, items, ...leftProps } = props

  const renderInput = useCallback(
    () => (
      <Dropdown placement='bottom-end'>
        <DropdownTrigger>{children}</DropdownTrigger>

        <DropdownMenu selectionMode={'single'} variant={'flat'} {...leftProps}>
          {items.map(({ key, label, ...leftItem }) => {
            return (
              <DropdownItem key={key} {...leftItem}>
                {leftItem.children || label}
              </DropdownItem>
            )
          })}
        </DropdownMenu>
      </Dropdown>
    ),
    [leftProps.selectedKeys, items],
  )

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
