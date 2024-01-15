import type { QuickActionKey } from './useInitialData'
import type { TableProps, TableRefetchData, TableState } from '@/components/NextUI'
import type { MutationFunctionOptions, OperationVariables } from '@apollo/client'
import type { todo as Todo } from '@prisma/client'

import React, { useCallback, useState } from 'react'

import { Table } from '@/components/NextUI'

import { useInitialData } from './useInitialData'

export type TableConfigProps = {
  refetch: (v?: Partial<OperationVariables>) => Promise<unknown>
  onOpenForm: () => void
  onOpenModalConfirm: (force?: boolean) => void
  data: Todo[]
  onSetItem: (item: Todo, state: TableState) => void
  onStateChange: (state: TableState) => void
  updateTodo: (opt?: MutationFunctionOptions) => Promise<unknown>
  deleteTodo: (opt?: MutationFunctionOptions) => Promise<unknown>
  forceDeleteTodo: (opt?: MutationFunctionOptions) => Promise<unknown>
} & Pick<TableProps<Todo>, 'total' | 'loading' | 'onRefetchData'>

export type QuickAction = {
  done?: boolean
  important?: boolean
}

export const TableConfig: React.FC<TableConfigProps> = (props) => {
  const [selected, setSelected] = useState<string[]>([])

  const { columns, filterItems, quickActionItems } = useInitialData()

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
    [props.data],
  )

  const onAction = useCallback((state: TableState, item?: Todo) => {
    if (state === 'add') props.onStateChange(state)
    else !!item && props.onSetItem(item, state)

    switch (state) {
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

  const handleRefetchData = useCallback((v: TableRefetchData<Todo>) => {
    props?.onRefetchData?.(v)
  }, [])

  return (
    <Table
      // NOTE: Config
      selectedMode='single'
      // NOTE: Data
      columns={columns}
      rows={props.data}
      total={props.total}
      loading={props.loading}
      rowSelected={selected}
      // NOTE: All Items
      filterItems={filterItems}
      quickActionItems={quickActionItems}
      // NOTE: Event/Action
      onRefetchData={handleRefetchData}
      onAdd={() => onAction('add')}
      onEdit={(item) => onAction('edit', item)}
      onCopy={(item) => onAction('copy', item)}
      onClone={(item) => onAction('clone', item)}
      onDelete={(item) => onAction('delete', item)}
      onForceDelete={(item) => onAction('force-delete', item)}
      onDeleteSelected={() => void 0}
      onForceDeleteSelected={() => void 0}
      onQuickAction={onQuickAction}
      // NOTE: Show/Hide
      showSearch
      showFilterButton
      showColumnButton
      showAddButton
      showTotal
      showDeleteSelectedButton
      showForceDeleteSelectedButton
      showPageLimit
      showAction
      showEditButton
      showCopyButton
      showCloneButton
      showDeleteButton
      showForceDeleteButton
      showTotalSelected
      showPagination
    />
  )
}
