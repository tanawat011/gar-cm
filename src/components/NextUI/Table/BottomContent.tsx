import type { BottomContentProps } from './types'

import { useCallback } from 'react'

import { Button } from '../Button'

import { defaultLimit } from './constant'
import { usePaginationInput } from './usePaginationInput'

export const BottomContent = <T,>(props: BottomContentProps<T>) => {
  const {
    showTotalSelected = true,
    showPagination = true,
    showNavigation,
    rows,
    total = 0,
    limit = defaultLimit,
    rowSelected = [],
    onPageChange,
    loading,
  } = props

  const { page, countPages, renderPagination, handlePageChange } = usePaginationInput({
    page: props.page,
    limit,
    total,
    loading,
    onPageChange,
  })

  const disabledNavigate = countPages === 1 || !limit

  const handleNextPage = useCallback(() => {
    if (page < countPages) handlePageChange(page + 1)
  }, [page, countPages])

  const handlePrevPage = useCallback(() => {
    if (page > 1) handlePageChange(page - 1)
  }, [page])

  return (
    <div className='py-2 px-2 flex justify-between items-center flex-col md:flex-row'>
      {showTotalSelected && (
        <span className='w-[30%] text-small text-default-400 h-[36px] whitespace-nowrap select-none'>{`${rowSelected.length} of ${rows.length} selected`}</span>
      )}

      {!showTotalSelected && <div />}

      {showPagination && !!limit && renderPagination}

      {showNavigation && (
        <div className='hidden sm:flex w-[30%] justify-end gap-2 mt-1'>
          <Button
            isDisabled={disabledNavigate}
            size='sm'
            variant='flat'
            onPress={handlePrevPage}
            icon='FaChevronLeft'
            isLoading={loading}
          />
          <Button
            isDisabled={disabledNavigate}
            size='sm'
            variant='flat'
            onPress={handleNextPage}
            icon='FaChevronRight'
            isLoading={loading}
          />
        </div>
      )}
    </div>
  )
}
