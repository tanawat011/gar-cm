'use client'

import type { TableRefetchData, TableState } from '@/components/NextUI'
import type { link_remember as LinkRemember } from '@prisma/client'

import React, { useCallback } from 'react'

import { Table } from '@/components/NextUI'
import {
  mutationCreateLinkRemember,
  mutationDeleteLinkRemember,
  mutationForceDeleteLinkRemember,
  mutationUpdateLinkRemember,
  mutationDeleteSelectedLinkRemember,
  mutationForceDeleteSelectedLinkRemember,
  queryLinkRemembers,
} from '@/graphql/linkRemember'
import { useGqlCrud } from '@/hooks/useGqlCrud'

import { FormConfig } from './FormConfig'
import { useInitialData } from './useInitialData'

export type QuickAction = {
  done?: boolean
  important?: boolean
}

export const AppLinkRemember = () => {
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
    queryList: queryLinkRemembers,
    mutationCreate: mutationCreateLinkRemember,
    mutationUpdate: mutationUpdateLinkRemember,
    mutationDelete: mutationDeleteLinkRemember,
    mutationForceDelete: mutationForceDeleteLinkRemember,
    mutationDeleteSelected: mutationDeleteSelectedLinkRemember,
    mutationForceDeleteSelected: mutationForceDeleteSelectedLinkRemember,
  })

  const { columns } = useInitialData()

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

  const handleSubmitConfirmModal = useCallback(async (state: TableState, item: LinkRemember) => {
    let action: (opt?: { variables: LinkRemember }) => Promise<unknown> = () => Promise.resolve()

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

  const handleSubmitFormModal = useCallback(async (state: TableState, item: LinkRemember) => {
    let action: (opt?: { variables: LinkRemember }) => Promise<unknown> = () => Promise.resolve()

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

  const handleRefetchData = useCallback(async (v: TableRefetchData<LinkRemember>) => {
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
        link: '',
      }}
      formBuilder={(control, errors) => <FormConfig control={control} errors={errors} />}
      columns={columns}
      rows={data?.linkRemembers.data || []}
      total={data?.linkRemembers.count || 0}
      loading={loading}
      // NOTE: Event/Action
      onRefetchData={handleRefetchData}
      onSubmitDeleteSelectedModal={handleSubmitDeleteSelectedModal}
      onSubmitConfirmModal={handleSubmitConfirmModal}
      onSubmitFormModal={handleSubmitFormModal}
      // NOTE: Show/Hide
      showSearch
      showAddButton
      showTotal
      showPageLimit
      showAction
      showEditButton
      showForceDeleteButton
      showTotalSelected
      showPagination
    />
  )
}
