import { useCallback, useEffect, useMemo, useState } from 'react'

import { Pagination } from '../Pagination'

type UsePaginationInputProps = {
  onPageChange?: (v: number) => void
  page?: number
  limit: number
  total: number
  loading?: boolean
}

export const usePaginationInput = ({ limit, total, loading, ...props }: UsePaginationInputProps) => {
  const [page, setPage] = useState(props?.page || 1)
  const [countPages, setCountPages] = useState(1)

  useEffect(() => {
    const countP = Math.ceil(total / limit)

    if (page > countP) handlePageChange(countP)

    setCountPages(countP)
  }, [total, limit])

  const handlePageChange = useCallback((p: number) => {
    setPage(p)
    props?.onPageChange?.(p)
  }, [])

  const renderPagination = useMemo(
    () => (
      <Pagination
        page={page}
        countPages={countPages}
        total={total}
        onPageChange={handlePageChange}
        isDisabled={loading}
      />
    ),
    [page, countPages, total, loading],
  )

  return {
    countPages,
    page,
    renderPagination,
    handlePageChange,
  }
}
