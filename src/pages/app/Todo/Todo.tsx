'use client'

import type { QuickActionKey } from './useInitialData'
import type { TableRefetchData, TableState } from '@/components/NextUI'
import type { todo as Todo } from '@prisma/client'

import React, { useCallback } from 'react'

import { Table } from '@/components/NextUI'
import {
  mutationCreateTodo,
  mutationDeleteTodo,
  mutationForceDeleteTodo,
  mutationUpdateTodo,
  mutationDeleteSelectedTodo,
  mutationForceDeleteSelectedTodo,
  queryTodos,
} from '@/graphql/client/todo'
import { useGqlCrud } from '@/hooks/useGqlCrud'

import { FormConfig } from './FormConfig'
import { useInitialData } from './useInitialData'

export type QuickAction = {
  done?: boolean
  important?: boolean
}

export const AppTodo = () => {
  const {
    loading,
    data,
    refetch,
    createItem,
    updateItem,
    deleteItem,
    forceDeleteItem,
    deleteSelectedItem,
    forceDeleteSelectedItem,
  } = useGqlCrud({
    queryList: queryTodos,
    mutationCreate: mutationCreateTodo,
    mutationUpdate: mutationUpdateTodo,
    mutationDelete: mutationDeleteTodo,
    mutationForceDelete: mutationForceDeleteTodo,
    mutationDeleteSelected: mutationDeleteSelectedTodo,
    mutationForceDeleteSelected: mutationForceDeleteSelectedTodo,
  })

  const { columns, filterItems, quickActionItems } = useInitialData()

  const onQuickAction = useCallback(
    async (item: Todo, key: QuickActionKey) => {
      if (key === 'done') {
        const done = !item.done
        await updateItem({
          variables: {
            id: item.id,
            done,
          },
        })
      }

      if (key === 'important') {
        const important = !item.important
        await updateItem({
          variables: {
            id: item.id,
            important,
          },
        })
      }

      await refetch()
    },
    [data],
  )

  const handleSubmitDeleteSelectedModal = useCallback(async (state: TableState, item: string[]) => {
    let action: (opt?: { variables: { ids: string[] } }) => Promise<unknown> = () => Promise.resolve()

    switch (state) {
      case 'delete-selected':
        action = deleteSelectedItem
        break
      case 'force-delete-selected':
        action = forceDeleteSelectedItem
        break
    }

    await action({
      variables: { ids: item },
    })

    await refetch()
  }, [])

  const handleSubmitConfirmModal = useCallback(async (state: TableState, item: Todo) => {
    let action: (opt?: { variables: Todo }) => Promise<unknown> = () => Promise.resolve()

    switch (state) {
      case 'clone':
        action = createItem
        break
      case 'delete':
        action = deleteItem
        break
      case 'force-delete':
        action = forceDeleteItem
        break
    }

    await action({
      variables: item,
    })

    await refetch()
  }, [])

  const handleSubmitFormModal = useCallback(async (state: TableState, item: Todo) => {
    let action: (opt?: { variables: Todo }) => Promise<unknown> = () => Promise.resolve()

    switch (state) {
      case 'copy':
      case 'add':
        action = createItem
        break
      case 'edit':
        action = updateItem
        break
    }

    await action({
      variables: item,
    })

    await refetch()
  }, [])

  const handleRefetchData = useCallback(async (v: TableRefetchData<Todo>) => {
    await refetch({
      search: v.search,
      page: v.page,
      limit: v.limit,
      done: v.filter?.includes('done') || undefined,
      important: v.filter?.includes('important') || undefined,
      deleted: v.filter?.includes('deleted') || undefined,
      undone: v.filter?.includes('undone') || undefined,
      unimportant: v.filter?.includes('unimportant') || undefined,
      undeleted: v.filter?.includes('undeleted') || undefined,
    })
  }, [])

  return (
    <Table
      // NOTE: Config
      selectedMode='multiple'
      // NOTE: Data
      defaultFormValues={{
        name: '',
        detail: '',
        done: false,
        important: false,
      }}
      formBuilder={(control, errors) => <FormConfig control={control} errors={errors} />}
      columns={columns}
      rows={data?.todos.data || []}
      total={data?.todos.count || 0}
      loading={loading}
      // NOTE: All Items
      filterItems={filterItems}
      quickActionItems={quickActionItems}
      // NOTE: Event/Action
      onRefetchData={handleRefetchData}
      onDeleteSelected={() => void 0}
      onForceDeleteSelected={() => void 0}
      onQuickAction={onQuickAction}
      onSubmitDeleteSelectedModal={handleSubmitDeleteSelectedModal}
      onSubmitConfirmModal={handleSubmitConfirmModal}
      onSubmitFormModal={handleSubmitFormModal}
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
