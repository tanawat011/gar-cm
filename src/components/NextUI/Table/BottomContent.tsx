import type { TableProps } from './Table'

import { useCallback, useState } from 'react'

import { Button } from '../Button'
import { Pagination } from '../Pagination'

type BottomContentProps<T> = Pick<
  TableProps<T>,
  | 'rows'
  | 'page'
  | 'total'
  | 'limit'
  | 'selected'
  | 'onChangePage'
  | 'onSelected'
  | 'showTotalSelected'
  | 'showPagination'
  | 'showNavigation'
  | 'loading'
>

export const BottomContent = <T,>(props: BottomContentProps<T>) => {
  const {
    showTotalSelected = true,
    showPagination = true,
    showNavigation,
    rows,
    page = 1,
    total = 0,
    limit = 10,
    selected = [],
    onChangePage,
    onSelected,
    loading,
  } = props

  const [pages, setPages] = useState(1)

  const disabledNavigate = pages === 1 || !limit

  const handleOnChangePage = useCallback((_page: number) => {
    if (_page) {
      onChangePage?.(_page)
      onSelected?.([])
    }
  }, [])

  const onNext = useCallback(() => {
    if (page < pages) {
      const _page = page + 1
      handleOnChangePage(_page)
    }
  }, [page, pages])

  const onPrev = useCallback(() => {
    if (page > 1) {
      const _page = page - 1
      handleOnChangePage(_page)
    }
  }, [page])

  return (
    <div className='py-2 px-2 flex justify-between items-center flex-col md:flex-row'>
      {showTotalSelected && (
        <span className='w-[30%] text-small text-default-400 h-[36px] whitespace-nowrap select-none'>{`${selected.length} of ${rows.length} selected`}</span>
      )}

      {showPagination && !!limit && (
        <Pagination
          page={page}
          total={total}
          limit={limit}
          setPages={setPages}
          onChangePage={handleOnChangePage}
          isDisabled={loading}
        />
      )}

      {showNavigation && (
        <div className='hidden sm:flex w-[30%] justify-end gap-2 mt-1'>
          <Button
            isDisabled={disabledNavigate}
            size='sm'
            variant='flat'
            onPress={onPrev}
            icon='FaChevronLeft'
            isLoading={loading}
          />
          <Button
            isDisabled={disabledNavigate}
            size='sm'
            variant='flat'
            onPress={onNext}
            icon='FaChevronRight'
            isLoading={loading}
          />
        </div>
      )}
    </div>
  )
}
