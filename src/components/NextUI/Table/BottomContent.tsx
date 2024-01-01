import type { TableProps } from './Table'

import { useCallback } from 'react'

import { Pagination } from '@nextui-org/react'

import { Button } from '../Button'

type BottomContentProps<T> = {
  onPrevPage?: TableProps<T>['onChangePage']
  onNextPage?: TableProps<T>['onChangePage']
} & Pick<TableProps<T>, 'rows' | 'page' | 'total' | 'limit' | 'selected' | 'onChangePage'>

export const BottomContent = <T,>(props: BottomContentProps<T>) => {
  const { rows, page = 1, total = 0, limit = 10, selected = [], onChangePage, onPrevPage, onNextPage } = props

  const pages = Math.ceil(total / limit)

  const onNext = useCallback(() => {
    if (page < pages) {
      const _page = page + 1
      onChangePage?.(_page)
      onNextPage?.(_page)
    }
  }, [page, pages])

  const onPrev = useCallback(() => {
    if (page > 1) {
      const _page = page - 1
      onChangePage?.(_page)
      onPrevPage?.(_page)
    }
  }, [page])

  return (
    <div className='py-2 px-2 flex justify-between items-center'>
      <span className='w-[30%] text-small text-default-400'>{`${selected.length} of ${rows.length} selected`}</span>

      <Pagination isCompact showControls showShadow color='primary' page={page} total={pages} onChange={onChangePage} />

      <div className='hidden sm:flex w-[30%] justify-end gap-2'>
        <Button isDisabled={pages === 1} size='sm' variant='flat' onPress={onPrev}>
          Previous
        </Button>
        <Button isDisabled={pages === 1} size='sm' variant='flat' onPress={onNext}>
          Next
        </Button>
      </div>
    </div>
  )
}
