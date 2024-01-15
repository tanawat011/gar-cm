import type { TopContentProps } from './types'
import type { FieldValues } from 'react-hook-form'

import { Button } from '../Button'

import { useColumnInput } from './useColumnInput'
import { useFilterInput } from './useFilterInput'
import { useLimitInput } from './useLimitInput'
import { useSearchInput } from './useSearchInput'

export const TopContent = <T extends FieldValues>(props: TopContentProps<T>) => {
  const { renderSearchInput } = useSearchInput({
    onSearch: props.onSearch,
    search: props.search,
  })
  const { renderFilterInput } = useFilterInput({
    onFilterSelected: props.onFilterSelected,
    filterSelected: props.filterSelected,
    filterItems: props.filterItems,
  })
  const { renderColumnInput } = useColumnInput({
    onColumnSelected: props.onColumnSelected,
    columnSelected: props.columnSelected,
    columnItems: props.columnItems,
  })
  const { renderLimitInput } = useLimitInput({
    onLimitSelected: props.onLimitSelected,
    limit: props.limit,
  })

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between gap-3 items-end'>
        {props.showSearch && renderSearchInput}

        {!props.showSearch && <div />}

        <div className='flex gap-3'>
          {props.showFilterButton && renderFilterInput}

          {props.showColumnButton && renderColumnInput}

          {props.showAddButton && (
            <Button color='primary' isIconOnly icon='FaPlus' placement='right' onClick={props.onAdd} />
          )}
        </div>
      </div>

      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          {props.showTotal && (
            <span className='text-default-400 text-small pl-2 select-none'>Total {props.total} rows</span>
          )}

          {props.showDeleteSelectedButton && (
            <Button
              isIconOnly
              color={!props.rowSelected?.length ? 'default' : 'danger'}
              variant='flat'
              icon='FaTrashCan'
              placement='right'
              onClick={() => props.onDeleteSelected?.(props.rowSelected || [])}
              isDisabled={!props.rowSelected?.length}
            />
          )}

          {props.showForceDeleteSelectedButton && (
            <Button
              label='Force Delete'
              color={!props.rowSelected?.length ? 'default' : 'danger'}
              variant='flat'
              onClick={() => props.onForceDeleteSelected?.(props.rowSelected || [])}
              isDisabled={!props.rowSelected?.length}
            />
          )}
        </div>

        <div className='h-[40px' />

        {props.showPageLimit && (
          <div>
            <span className='text-default-400 text-small select-none'>Rows per page: </span>

            {renderLimitInput}
          </div>
        )}
      </div>
    </div>
  )
}
