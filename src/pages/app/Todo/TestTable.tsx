'use client'

import type { TableRefetchData, TableState } from '@/components/NextUI'
import type { todo as Todo } from '@prisma/client'

import { useCallback, useEffect, useMemo, useState } from 'react'

import { useDisclosure } from '@nextui-org/react'
import { useForm } from 'react-hook-form'

import { ModalConfirm, ModalForm, Table } from '@/components/NextUI'
import {
  mutationCreateTodo,
  mutationDeleteTodo,
  mutationForceDeleteTodo,
  mutationUpdateTodo,
  queryTodos,
} from '@/graphql/client/todo'
import { useGqlCrud } from '@/hooks/useGqlCrud'
import { toCapital } from '@/libs/utilities'

import { FormConfig } from './FormConfig'
import { TableConfig } from './TableConfig'

export const AppTodo = () => {
  // const { loading, data, refetch, createItem, updateItem, deleteItem, forceDeleteItem } = useGqlCrud({
  //   queryList: queryTodos,
  //   mutationCreate: mutationCreateTodo,
  //   mutationUpdate: mutationUpdateTodo,
  //   mutationDelete: mutationDeleteTodo,
  //   mutationForceDelete: mutationForceDeleteTodo,
  // })

  console.log('TestTable')

  const handleRefetchData = useCallback((v: TableRefetchData<Todo>) => {
    console.log('handleRefetchData', v)
  }, [])

  const renderTable = useMemo(() => {
    return (
      <Table
        // NOTE: Table configs & Common Data
        columns={[]}
        rows={[]}
        total={0}
        // loading={loading}
        showTotal
        showAction
        onRefetchData={handleRefetchData}
        // NOTE: Search Action
        showSearch
        // NOTE: Filter Action
        showFilterButton
        // filterItems={filterItems}
        // NOTE: Column Action
        showColumnButton
        // NOTE: Add Action
        // onAdd={() => onAction('add')}
        showAddButton
        // NOTE: Delete Selected Action
        // onDeleteSelected={() => void 0}
        showDeleteSelectedButton
        // NOTE: Force Delete Selected Action
        // onForceDeleteSelected={() => void 0}
        showForceDeleteSelectedButton
        // NOTE: Limit Action
        showPageLimit
        // NOTE: Selected Action
        // onRowSelected={setSelected}
        // selectedMode='multiple'
        showTotalSelected
        // rowSelected={selected}
        // NOTE: Edit Action
        // onEdit={(item) => onAction('edit', item)}
        showEditButton
        // NOTE: Copy Action
        // onCopy={(item) => onAction('copy', item)}
        showCopyButton
        // NOTE: Clone Action
        // onClone={(item) => onAction('clone', item)}
        showCloneButton
        // NOTE: Delete Action
        // onDelete={(item) => onAction('delete', item)}
        showDeleteButton
        // NOTE: ForceDelete Action
        // onForceDelete={(item) => onAction('force-delete', item)}
        showForceDeleteButton
        // NOTE: Quick Action
        // onQuickAction={onQuickAction}
        // quickActionItems={quickActionItems}
        // NOTE: Change Page Action
        showPagination
      />
    )
  }, [])

  return <>{renderTable}</>
}
