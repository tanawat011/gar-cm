import type { TableProps } from './Table'
import type { MenuItemProps } from '@nextui-org/react'

import React, { useMemo } from 'react'

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'

import { Icon } from '@/components/Icon'

type ColumnActionProps<T, U = never> = {
  item: T
  quickActionItems?: TableProps<T, U>['quickActionItems']
  onQuickAction?: TableProps<T, U>['onQuickAction']
  onOpenForm: TableProps<T, U>['onOpenForm']
  onOpenModalConfirm: TableProps<T, U>['onOpenModalConfirm']
  onSetItem: TableProps<T, U>['onSetItem']
}

export const ColumnAction = <T, U>({
  item,
  quickActionItems,
  onQuickAction,
  onOpenForm,
  onOpenModalConfirm,
  onSetItem,
}: ColumnActionProps<T, U>) => {
  const actions: MenuItemProps[] = useMemo(() => {
    return [
      {
        key: 'edit',
        startContent: <Icon name='FaPencil' />,
        children: 'Edit',
        onClick: () => {
          onSetItem?.(item, 'edit')
          onOpenForm?.()
        },
      },
      {
        key: 'copy',
        startContent: <Icon name='FaCopy' />,
        children: 'Copy',
        onClick: () => {
          onSetItem?.(item, 'copy')
          onOpenForm?.()
        },
      },
      {
        key: 'clone',
        startContent: <Icon name='FaRegCopy' />,
        children: 'Clone',
        showDivider: true,
        onClick: () => {
          onSetItem?.(item, 'clone')
          onOpenModalConfirm?.()
        },
      },
      {
        key: 'delete',
        startContent: <Icon name='FaTrash' />,
        color: 'danger',
        className: 'text-danger',
        children: 'Delete',
        onClick: () => {
          onSetItem?.(item, 'delete')
          onOpenModalConfirm?.()
        },
      },
      {
        key: 'force-delete',
        startContent: <Icon name='FaTrash' />,
        color: 'danger',
        className: 'text-danger',
        children: 'Force Delete',
        onClick: () => {
          onSetItem?.(item, 'force-delete')
          onOpenModalConfirm?.()
        },
      },
    ]
  }, [item])

  return (
    <div className='flex'>
      {quickActionItems?.map(({ toggleColor, variant, size, ...action }, idx) => (
        <Button
          isIconOnly
          variant={variant || 'light'}
          size={size || 'sm'}
          color={toggleColor?.(item) || action?.color || 'default'}
          onClick={() => onQuickAction?.(item, action.key)}
          key={`${idx}${action.key}`}
        >
          {action.children}
        </Button>
      ))}

      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly color='default' size='sm' variant='light'>
            <Icon name='FaEllipsisVertical' />
          </Button>
        </DropdownTrigger>

        <DropdownMenu variant='faded' aria-label='Static Actions'>
          {actions.map((action, idx) => (
            <DropdownItem {...action} key={`${idx}${action.key}`} color={action.color as MenuItemProps['color']}>
              {action.children}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}
