import type { PaginationProps as NextUIPaginationProps } from '@nextui-org/react'

import React, { useEffect, useMemo } from 'react'

import { Pagination as NextUIPagination } from '@nextui-org/react'

export type PaginationProps = {
  page?: number
  total?: number
  limit?: number
  setPages?: (pages: number) => void
  onChangePage?: (page: number) => void
} & NextUIPaginationProps

export const Pagination: React.FC<PaginationProps> = ({
  page = 1,
  total = 0,
  limit = 10,
  setPages,
  onChangePage,
  ...props
}) => {
  const totalPages = useMemo(() => Math.ceil(total / limit), [total, limit])

  useEffect(() => {
    if (page > totalPages) onChangePage?.(totalPages)

    setPages?.(totalPages)
  }, [totalPages])

  return (
    <NextUIPagination
      showControls
      showShadow
      color='primary'
      initialPage={1}
      isDisabled={totalPages < 2}
      {...props}
      page={page}
      total={totalPages || 1}
      onChange={onChangePage}
    />
  )
}
