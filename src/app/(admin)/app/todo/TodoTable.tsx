import type { CrudType, DropdownInputProps, TableColumnProps, TableProps } from '@/components/NextUI'
import type { MutationFunctionOptions, OperationVariables } from '@apollo/client'
import type { todo as Todo } from '@prisma/client'

import React, { useCallback, useState } from 'react'

import { Icon } from '@/components/Icon'
import { Table } from '@/components/NextUI'

import { TodoTableColData } from './TodoTableColData'

export type TodoTableProps = {
  refetch: (v?: Partial<OperationVariables>) => Promise<unknown>
  onOpenForm: () => void
  onOpenModalConfirm: (force?: boolean) => void
  data: Todo[]
  onSetItem: (item: Todo, crudType: CrudType) => void
  setCrudType: (crudType: CrudType) => void
  updateTodo: (opt?: MutationFunctionOptions) => Promise<unknown>
  deleteTodo: (opt?: MutationFunctionOptions) => Promise<unknown>
  forceDeleteTodo: (opt?: MutationFunctionOptions) => Promise<unknown>
} & Pick<
  TableProps<unknown>,
  | 'search'
  | 'total'
  | 'page'
  | 'limit'
  | 'loading'
  | 'filterSelected'
  | 'onSearch'
  | 'onFilterSelected'
  | 'onChangeLimit'
  | 'onChangePage'
>

export type QuickAction = {
  done?: boolean
  important?: boolean
}

type QuickActionKey = 'done' | 'important'

export const TodoTable: React.FC<TodoTableProps> = (props) => {
  const [selected, setSelected] = useState<string[]>([])

  const columns: TableColumnProps<Todo>[] = [
    {
      key: 'name',
      label: 'Name',
      show: true,
      render: (item) => <TodoTableColData item={item} />,
    },
    {
      key: 'detail',
      label: 'Detail',
    },
  ]

  const filterItems: DropdownInputProps['items'] = [
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
      startContent: <Icon name='FaTrash' />,
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
  ]

  const quickActionItems: TableProps<Todo, QuickActionKey>['quickActionItems'] = [
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
  ]

  const onQuickAction = useCallback(
    async (item: Todo, key: QuickActionKey) => {
      if (key === 'done') {
        const done = !item.done
        await props.updateTodo({
          variables: {
            id: item.id,
            done,
          },
        })
      }

      if (key === 'important') {
        const important = !item.important
        await props.updateTodo({
          variables: {
            id: item.id,
            important,
          },
        })
      }

      await props.refetch()
    },
    [props.page],
  )

  const onAction = useCallback((crudType: CrudType, item?: Todo) => {
    if (crudType === 'add') props.setCrudType(crudType)
    else !!item && props.onSetItem(item, crudType)

    switch (crudType) {
      case 'add':
      case 'edit':
      case 'copy':
        props.onOpenForm()
        break
      case 'clone':
      case 'delete':
      case 'force-delete':
        props.onOpenModalConfirm()
        break
    }
  }, [])

  return (
    <Table
      // NOTE: Table configs & Common Data
      columns={columns}
      rows={props.data}
      page={props.page}
      total={props.total}
      limit={props.limit}
      loading={props.loading}
      showTotal
      showAction
      // NOTE: Search Action
      onSearch={props.onSearch}
      showSearch
      search={props.search}
      // NOTE: Filter Action
      onFilterSelected={props.onFilterSelected}
      showFilterButton
      filterItems={filterItems}
      filterSelected={props.filterSelected}
      // NOTE: Column Action
      showColumnButton
      // NOTE: Add Action
      onAdd={() => onAction('add')}
      showAddButton
      // NOTE: Delete Selected Action
      onDeleteSelected={() => void 0}
      showDeleteSelectedButton
      // NOTE: Force Delete Selected Action
      onForceDeleteSelected={() => void 0}
      showForceDeleteSelectedButton
      // NOTE: Limit Action
      onChangeLimit={props.onChangeLimit}
      showPageLimit
      // NOTE: Selected Action
      onSelected={setSelected}
      selectedMode='multiple'
      showTotalSelected
      selected={selected}
      // NOTE: Edit Action
      onEdit={(item) => onAction('edit', item)}
      showEditButton
      // NOTE: Copy Action
      onCopy={(item) => onAction('copy', item)}
      showCopyButton
      // NOTE: Clone Action
      onClone={(item) => onAction('clone', item)}
      showCloneButton
      // NOTE: Delete Action
      onDelete={(item) => onAction('delete', item)}
      showDeleteButton
      // NOTE: ForceDelete Action
      onForceDelete={(item) => onAction('force-delete', item)}
      showForceDeleteButton
      // NOTE: Quick Action
      onQuickAction={onQuickAction}
      quickActionItems={quickActionItems}
      // NOTE: Change Page Action
      onChangePage={props.onChangePage}
      showPagination
    />
  )
}
