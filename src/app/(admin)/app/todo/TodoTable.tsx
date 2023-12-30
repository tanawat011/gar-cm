import type { ModalType } from './page'
import type { MutationFunctionOptions, OperationVariables } from '@apollo/client'
import type { todo as Todo } from '@prisma/client'

import React, { useContext, useState } from 'react'

import { CoreLayoutContext } from '@/components/CoreLayout/Provider'
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
    />
  )
}
