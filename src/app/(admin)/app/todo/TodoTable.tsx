import type { CrudType, TableProps } from '@/components/NextUI'
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

export const TodoTable: React.FC<TodoTableProps> = (props) => {
  const [selected, setSelected] = useState<string[]>([])

  const onQuickAction = useCallback(
    async (item: Todo, key: 'done' | 'important') => {
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

  const onAddNew = useCallback(() => {
    props.onOpenForm()
    props.setCrudType('add')
  }, [])

  return (
    <Table
      // NOTE: Configs & Common Data
      selectedMode='multiple'
      columns={[
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
      ]}
      search={props.search}
      rows={props.data}
      total={props.total}
      page={props.page}
      limit={props.limit}
      loading={props.loading}
      // NOTE: Table Events
      onSearch={props.onSearch}
      onChangeLimit={props.onChangeLimit}
      onAddNew={onAddNew}
      onChangePage={props.onChangePage}
      // NOTE: Column Selected
      selected={selected}
      onSelected={setSelected}
      // NOTE: Filter
      filterSelected={props.filterSelected}
      onFilterSelected={props.onFilterSelected}
      filterItems={[
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
      ]}
      // NOTE: Column Actions
      showAction
      onOpenForm={props.onOpenForm}
      onOpenModalConfirm={props.onOpenModalConfirm}
      onSetItem={props.onSetItem}
      // NOTE: Quick Actions
      onQuickAction={onQuickAction}
      quickActionItems={[
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
      ]}
    />
  )
}
