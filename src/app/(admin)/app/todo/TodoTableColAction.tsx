import type { QuickAction, TodoTableProps } from './TodoTable'
import type { MenuItemProps } from '@nextui-org/react'
import type { todo as Todo } from '@prisma/client'

import React from 'react'

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'

import { Icon } from '@/components/Icon'

type TodoTableColActionProps = {
  item: Todo
  onQuickAction: (id: string, val: QuickAction) => void
  onOpenModalForm: TodoTableProps['onOpenModalForm']
  onOpenModalConfirm: TodoTableProps['onOpenModalConfirm']
  onSetItem: TodoTableProps['onSetItem']
}

export const TodoTableColAction: React.FC<TodoTableColActionProps> = ({
  item,
  onQuickAction,
  onOpenModalForm,
  onOpenModalConfirm,
  onSetItem,
}) => {
  const actions: MenuItemProps[] = [
    {
      key: 'edit',
      startContent: <Icon name='FaPencil' />,
      children: 'Edit',
      onClick: () => {
        onSetItem(item, 'edit')
        onOpenModalForm()
      },
    },
    {
      key: 'copy',
      startContent: <Icon name='FaCopy' />,
      children: 'Copy',
      onClick: () => {
        onSetItem(item, 'copy')
        onOpenModalForm()
      },
    },
    {
      key: 'clone',
      startContent: <Icon name='FaRegCopy' />,
      children: 'Clone',
      showDivider: true,
      onClick: () => {
        onSetItem(item, 'clone')
        onOpenModalConfirm()
      },
    },
    {
      key: 'delete',
      startContent: <Icon name='FaTrash' />,
      color: 'danger',
      className: 'text-danger',
      children: 'Delete',
      onClick: () => {
        onSetItem(item, 'delete')
        onOpenModalConfirm()
      },
    },
    {
      key: 'force-delete',
      startContent: <Icon name='FaTrash' />,
      color: 'danger',
      className: 'text-danger',
      children: 'Force Delete',
      onClick: () => {
        onSetItem(item, 'f-delete')
        onOpenModalConfirm(true)
      },
    },
  ]

  return (
    <div className='flex'>
      <Button
        isIconOnly
        color={item.done ? 'success' : 'default'}
        size='sm'
        variant='light'
        onClick={() => onQuickAction(item.id, { done: !item.done })}
      >
        <Icon name='FaCheck' />
      </Button>

      <Button
        isIconOnly
        color={item.important ? 'warning' : 'default'}
        size='sm'
        variant='light'
        onClick={() => onQuickAction(item.id, { important: !item.important })}
      >
        <Icon name='FaStar' />
      </Button>

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
