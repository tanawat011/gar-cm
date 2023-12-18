import type { MenuItemProps, SelectionMode } from '@nextui-org/react'

import React from 'react'

import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'

type DropdownInputProps = {
  selectedKeys?: string[]
  variant?: MenuItemProps['variant']
  mode?: SelectionMode
  disallowEmptySelection?: boolean
  children?: React.ReactNode
  ariaLabel?: string
  items: {
    key: string
    label: string
    startContent?: React.ReactNode
    children?: React.ReactNode
    onClick?: () => void
  }[]
  onSelected?: (key: string | number) => void
}

export const DropdownInput: React.FC<DropdownInputProps> = (props) => {
  const {
    selectedKeys,
    variant = 'flat',
    mode = 'single',
    disallowEmptySelection,
    children,
    ariaLabel,
    items,
    onSelected,
  } = props

  return (
    <Dropdown placement='bottom-end'>
      <DropdownTrigger>{children}</DropdownTrigger>

      <DropdownMenu
        aria-label={ariaLabel}
        variant={variant}
        disallowEmptySelection={disallowEmptySelection}
        selectionMode={mode}
        selectedKeys={selectedKeys}
        onAction={onSelected}
      >
        {items.map(({ key, label, startContent, onClick, children: itemChildren }) => {
          return (
            <DropdownItem key={key} startContent={startContent} onClick={onClick}>
              {itemChildren || label}
            </DropdownItem>
          )
        })}
      </DropdownMenu>
    </Dropdown>
  )
}
