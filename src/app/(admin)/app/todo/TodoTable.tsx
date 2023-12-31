import type { ModalType } from './page'
import type { TableProps } from '@/components/NextUI'
import type { MutationFunctionOptions, OperationVariables } from '@apollo/client'
import type { todo as Todo } from '@prisma/client'

import React, { useContext, useState } from 'react'

import { CoreLayoutContext } from '@/components/CoreLayout/Provider'
import { Icon } from '@/components/Icon'
import { Table } from '@/components/NextUI'

import { TodoTableColAction } from './TodoTableColAction'
import { TodoTableColData } from './TodoTableColData'

export type TodoTableProps = {
  refetch: (v?: Partial<OperationVariables>) => Promise<unknown>
  onOpenModalForm: () => void
  onOpenModalConfirm: (force?: boolean) => void
  data: { todos: Todo[] } | undefined
  onSetItem: (item: Todo, modalType: ModalType) => void
  setModalType: (modalType: ModalType) => void
  updateTodo: (opt?: MutationFunctionOptions) => Promise<unknown>
  deleteTodo: (opt?: MutationFunctionOptions) => Promise<unknown>
  forceDeleteTodo: (opt?: MutationFunctionOptions) => Promise<unknown>
  statusSelected?: TableProps<unknown>['statusSelected']
  onStatusSelected?: TableProps<unknown>['onStatusSelected']
}

export type QuickAction = {
  done?: boolean
  important?: boolean
}

export const TodoTable: React.FC<TodoTableProps> = ({
  data,
  refetch,
  onOpenModalForm,
  onOpenModalConfirm,
  onSetItem,
  setModalType,
  updateTodo,
  statusSelected,
  onStatusSelected,
}) => {
  const { onLoading } = useContext(CoreLayoutContext)

  const [selected, setSelected] = useState<string[]>([])

  const onQuickAction = async (id: string, { done, important }: QuickAction) => {
    onLoading(true)

    await updateTodo({
      variables: {
        id,
        done,
        important,
      },
    })

    await refetch()
    onLoading(false)
  }

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
              onOpenModalForm={onOpenModalForm}
              onOpenModalConfirm={onOpenModalConfirm}
              onSetItem={onSetItem}
            />
          ),
        },
      ]}
      rows={data?.todos || []}
      selectedMode='multiple'
      selected={selected}
      onSelected={setSelected}
      onAddNew={() => {
        onOpenModalForm()
        setModalType('add')
      }}
      statusSelected={statusSelected}
      onStatusSelected={onStatusSelected}
      statusItems={[
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
    />
  )
}
