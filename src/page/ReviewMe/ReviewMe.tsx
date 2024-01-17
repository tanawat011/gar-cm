'use client'

import type { TableRefetchData } from '@/components/NextUI'
import type { review_me as ReviewMeType } from '@prisma/client'

import React, { useCallback } from 'react'

import { Table } from '@/components/NextUI'
import { reviewMeList } from '@/graphql/reviewMe'
import { useGqlCrud } from '@/hooks/useGqlCrud'

import { useInitialData } from './useInitialData'

export type QuickAction = {
  done?: boolean
  important?: boolean
}

export const ReviewMe = () => {
  const { loading, data, refetch } = useGqlCrud({
    queryList: reviewMeList,
  })

  const { columns } = useInitialData()

  const handleRefetchData = useCallback(async (v: TableRefetchData<ReviewMeType>) => {
    await refetch({
      search: v.search,
      page: v.page,
      limit: v.limit,
    })
  }, [])

  return (
    <Table
      // NOTE: Config
      striped
      // NOTE: Data
      columns={columns}
      rows={data?.reviewMeList.data || []}
      total={data?.reviewMeList.count || 0}
      loading={loading}
      // NOTE: Event/Action
      onRefetchData={handleRefetchData}
      // NOTE: Show/Hide
      showSearch
      showColumnButton
      showTotal
      showPageLimit
      showPagination
    />
  )
}
