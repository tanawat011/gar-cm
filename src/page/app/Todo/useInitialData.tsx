import type { DropdownInputProps, TableColumnProps, TableProps } from '@/components/NextUI'
import type { todo as Todo } from '@prisma/client'

import { useMemo } from 'react'

import { Icon } from '@/components/Icon'

import { ColumnName } from './CustomColumn'

export type QuickActionKey = 'done' | 'important'

export const useInitialData = () => {
  const columns: TableColumnProps<Todo>[] = useMemo(
    () => [
      {
        key: 'name',
        label: 'Name',
        show: true,
        render: (item) => <ColumnName item={item} />,
      },
      {
        key: 'detail',
        label: 'Detail',
      },
    ],
    [],
  )

  const filterItems: DropdownInputProps['items'] = useMemo(
    () => [
      {
        key: 'done',
        label: 'done',
        color: 'success',
        className: 'capitalize text-success',
        startContent: <Icon name='FaCheck' />,
      },
      {
        key: 'important',
        label: 'important',
        color: 'warning',
        className: 'capitalize text-warning',
        startContent: <Icon name='FaStar' />,
      },
      {
        key: 'deleted',
        label: 'deleted',
        color: 'danger',
        className: 'capitalize text-danger',
        startContent: <Icon name='FaTrashCan' />,
        showDivider: true,
      },
      {
        key: 'undone',
        label: 'undone',
        className: 'capitalize',
        startContent: <Icon name='FaX' />,
      },
      {
        key: 'unimportant',
        label: 'unimportant',
        className: 'capitalize',
        startContent: <Icon name='FaX' />,
      },
      {
        key: 'undeleted',
        label: 'undeleted',
        className: 'capitalize',
        startContent: <Icon name='FaX' />,
      },
    ],
    [],
  )

  const quickActionItems: TableProps<Todo, QuickActionKey>['quickActionItems'] = useMemo(
    () => [
      {
        key: 'done',
        children: <Icon name='FaCheck' />,
        toggleColor: (item) => (item.done ? 'success' : 'default'),
      },
      {
        key: 'important',
        children: <Icon name='FaStar' />,
        toggleColor: (item) => (item.important ? 'warning' : 'default'),
      },
    ],
    [],
  )

  return { columns, filterItems, quickActionItems }
}
