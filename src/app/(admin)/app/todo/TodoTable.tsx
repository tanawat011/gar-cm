import type { ModalType } from './page'
import type { TableProps } from '@/components/NextUI'
import type { MutationFunctionOptions, OperationVariables } from '@apollo/client'
import type { todo as Todo } from '@prisma/client'

import React, { useCallback, useState } from 'react'

import { Icon } from '@/components/Icon'
import { Table } from '@/components/NextUI'

import { TodoTableColAction } from './TodoTableColAction'
import { TodoTableColData } from './TodoTableColData'

export type TodoTableProps = {
  refetch: (v?: Partial<OperationVariables>) => Promise<unknown>
  onOpenModalForm: () => void
  onOpenModalConfirm: (force?: boolean) => void
  data: Todo[]
  onSetItem: (item: Todo, modalType: ModalType) => void
  setModalType: (modalType: ModalType) => void
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
    async (id: string, { done, important }: QuickAction) => {
      await props.updateTodo({
        variables: {
          id,
          done,
          important,
        },
      })

      await props.refetch()
    },
    [props.page],
  )

  return (
    <Table
      columns={[
        {
          key: 'name',
          width: '80%',
          render: (item) => <TodoTableColData item={item} />,
        },
        {
          key: 'action',
          align: 'start',
          width: '10%',
          render: (item) => (
            <TodoTableColAction
              item={item}
              onQuickAction={onQuickAction}
              onOpenModalForm={props.onOpenModalForm}
              onOpenModalConfirm={props.onOpenModalConfirm}
              onSetItem={props.onSetItem}
            />
          ),
        },
      ]}
      // NOTE: Configs & Data
      selectedMode='multiple'
      search={props.search}
      rows={props.data}
      total={props.total}
      page={props.page}
      limit={props.limit}
      loading={props.loading}
      selected={selected}
      filterSelected={props.filterSelected}
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
      // NOTE: Events
      onSearch={props.onSearch}
      onChangePage={props.onChangePage}
      onChangeLimit={props.onChangeLimit}
      onSelected={setSelected}
      onFilterSelected={props.onFilterSelected}
      onAddNew={() => {
        props.onOpenModalForm()
        props.setModalType('add')
      }}
    />
  )
}
