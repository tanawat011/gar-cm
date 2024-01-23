import type { ColumnActionProps } from './types'
import type { MenuItemProps } from '@nextui-org/react'
import type { FieldValues } from 'react-hook-form'

import React, { useMemo } from 'react'

import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'

import { Icon } from '@/components/Icon'

import { Button } from '../Button'

export const ColumnAction = <T extends FieldValues, U>({
  item,
  onEdit,
  onCopy,
  onClone,
  onDelete,
  onForceDelete,
  quickActionItems,
  onQuickAction,
}: ColumnActionProps<T, U>) => {
  const actions: MenuItemProps[] = useMemo(() => {
    return [
      {
        key: 'edit',
        startContent: <Icon name='FaPencil' />,
        children: 'Edit',
        onClick: () => onEdit?.(item),
      },
      {
        key: 'copy',
        startContent: <Icon name='FaCopy' />,
        children: 'Copy',
        onClick: () => onCopy?.(item),
      },
      {
        key: 'clone',
        startContent: <Icon name='FaRegCopy' />,
        children: 'Clone',
        showDivider: true,
        onClick: () => onClone?.(item),
      },
      {
        key: 'delete',
        startContent: <Icon name='FaTrashCan' />,
        color: 'danger',
        className: 'text-danger',
        children: 'Delete',
        onClick: () => onDelete?.(item),
      },
      {
        key: 'force-delete',
        startContent: <Icon name='FaTrashCan' />,
        color: 'danger',
        className: 'text-danger',
        children: 'Force Delete',
        onClick: () => onForceDelete?.(item),
      },
    ]
  }, [item])

  return (
    <div className='flex'>
      {quickActionItems?.map(({ toggleColor, variant, size, ...action }, idx) => (
        <Button
          iconOnly
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
          <Button iconOnly color='default' size='sm' variant='light'>
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
