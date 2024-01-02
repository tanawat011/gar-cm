import type { TableLimitList, TableProps } from './Table'

import React, { useState } from 'react'

import { Input } from '@nextui-org/react'

import { Icon } from '@/components/Icon'

import { Button } from '../Button'
import { DropdownInput } from '../Input'

type TopContentProps<T> = Pick<
  TableProps<T>,
  | 'total'
  | 'onAddNew'
  | 'onChangeLimit'
  | 'filterSelected'
  | 'onFilterSelected'
  | 'columnSelected'
  | 'onColumnSelected'
  | 'showSearchInput'
  | 'showFilterButton'
  | 'showColumnButton'
  | 'showAddButton'
  | 'showTotal'
  | 'showPageLimit'
  | 'filterItems'
  | 'columnItems'
  | 'pageLimitItems'
  | 'search'
  | 'onSearch'
>

export const TopContent = <T,>(props: TopContentProps<T>) => {
  const {
    total,
    search,
    filterSelected = [],
    columnSelected = [],
    onSearch,
    onFilterSelected,
    onColumnSelected,
    onAddNew,
    onChangeLimit,
    filterItems = [],
    columnItems = [],
    pageLimitItems = [
      { key: '5', label: '5', onClick: () => onSetPerPage(5) },
      { key: '10', label: '10', onClick: () => onSetPerPage(10) },
      { key: '15', label: '15', onClick: () => onSetPerPage(15) },
      { key: '20', label: '20', onClick: () => onSetPerPage(20) },
      { key: '30', label: '30', onClick: () => onSetPerPage(30) },
      { key: '50', label: '50', onClick: () => onSetPerPage(50) },
      { key: '100', label: '100', onClick: () => onSetPerPage(100) },
      { key: 'all', label: 'ALL', onClick: () => onSetPerPage(0) },
    ],
    showSearchInput = true,
    showFilterButton = true,
    showColumnButton = true,
    showAddButton = true,
    showTotal = true,
    showPageLimit = true,
  } = props
  const [perPage, setPerPage] = useState<TableLimitList>(10)

  const onSetPerPage = (v: TableLimitList) => {
    onChangeLimit?.(v)
    setPerPage(v)
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between gap-3 items-end'>
        {showSearchInput && (
          <Input
            isClearable
            className='w-full sm:max-w-[44%]'
            placeholder='Search by name...'
            labelPlacement='outside'
            startContent={<Icon name='FaMagnifyingGlass' />}
            value={search}
            onClear={() => onSearch?.('')}
            onValueChange={onSearch}
          />
        )}

        {!showSearchInput && <div />}

        <div className='flex gap-3'>
          {showFilterButton && (
            <DropdownInput
              uncontrolled
              name='filter-actions'
              selectionMode='multiple'
              variant='faded'
              closeOnSelect={false}
              selectedKeys={new Set(filterSelected)}
              onSelectionChange={(keys) => {
                onFilterSelected?.(Array.from(keys) as string[])
              }}
              items={filterItems}
              buttonOptions={{
                isIconOnly: true,
                icon: 'FaFilter',
              }}
            />
          )}

          {showColumnButton && (
            <DropdownInput
              uncontrolled
              name='columns-actions'
              selectionMode='multiple'
              variant='faded'
              closeOnSelect={false}
              selectedKeys={new Set(columnSelected)}
              onSelectionChange={(keys) => {
                onColumnSelected?.(Array.from(keys) as string[])
              }}
              items={columnItems}
              buttonOptions={{
                isIconOnly: true,
                icon: 'FaTableColumns',
              }}
            />
          )}

          {showAddButton && (
            <Button label='Add New' color='primary' icon='FaPlus' placement='right' onClick={onAddNew} />
          )}
        </div>
      </div>

      <div className='flex justify-between items-center'>
        {showTotal && <span className='text-default-400 text-small pl-2'>Total {total}</span>}

        <div className='h-[40px' />

        {showPageLimit && (
          <div>
            <span className='text-default-400 text-small'>Rows per page: </span>

            <DropdownInput
              uncontrolled
              name='limit-actions'
              variant='faded'
              selectedKeys={new Set([`${perPage}`])}
              onSelectionChange={(keys) => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onSetPerPage(Number((keys as any).values().next().value) as TableLimitList)
              }}
              items={pageLimitItems}
              label={`${perPage || 'ALL'}`}
            />
          </div>
        )}
      </div>
    </div>
  )
}
