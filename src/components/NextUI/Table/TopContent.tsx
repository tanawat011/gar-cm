import type { TableLimitList, TableProps } from './Table'
import type { UseColumnsPropsReturn } from './useColumns'

import React, { useState } from 'react'

import { Input } from '@nextui-org/react'

import { Icon } from '@/components/Icon'

import { Button } from '../Button'
import { DropdownInput } from '../Input'

type TopContentProps<T> = Pick<
  TableProps<T> & UseColumnsPropsReturn<T>,
  | 'total'
  | 'showTotal'

  // NOTE: Search Action
  | 'onSearch'
  | 'showSearch'
  | 'search'

  // NOTE: Filter Action
  | 'onFilterSelected'
  | 'showFilterButton'
  | 'filterItems'
  | 'filterSelected'

  // NOTE: Column Action
  | 'showColumnButton'
  | 'columnItems'
  | 'columnSelected'
  | 'setColumnSelected'

  // NOTE: Add Action
  | 'onAdd'
  | 'showAddButton'

  // NOTE: Delete Selected Action
  | 'onDeleteSelected'
  | 'showDeleteSelectedButton'

  // NOTE: Force Delete Selected Action
  | 'onForceDeleteSelected'
  | 'showForceDeleteSelectedButton'

  // NOTE: Limit Action
  | 'onChangeLimit'
  | 'showPageLimit'
  | 'pageLimitItems'

  // NOTE: Selected Action
  | 'selected'
>

export const TopContent = <T,>(props: TopContentProps<T>) => {
  const {
    // NOTE: Set default value
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
  } = props

  const [perPage, setPerPage] = useState<TableLimitList>(10)

  const onSetPerPage = (v: TableLimitList) => {
    props.onChangeLimit?.(v)
    setPerPage(v)
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between gap-3 items-end'>
        {props.showSearch && (
          <Input
            isClearable
            className='w-full sm:max-w-[44%]'
            placeholder='Search by name...'
            labelPlacement='outside'
            startContent={<Icon name='FaMagnifyingGlass' />}
            value={props.search}
            onClear={() => props.onSearch?.('')}
            onValueChange={props.onSearch}
          />
        )}

        {!props.showSearch && <div />}

        <div className='flex gap-3'>
          {props.showFilterButton && (
            <DropdownInput
              uncontrolled
              name='filter-actions'
              selectionMode='multiple'
              variant='faded'
              closeOnSelect={false}
              selectedKeys={new Set(props.filterSelected)}
              onSelectionChange={(keys) => {
                props.onFilterSelected?.(Array.from(keys) as string[])
              }}
              items={props.filterItems || []}
              buttonOptions={{
                isIconOnly: true,
                icon: 'FaFilter',
              }}
            />
          )}

          {props.showColumnButton && (
            <DropdownInput
              uncontrolled
              name='columns-actions'
              selectionMode='multiple'
              variant='faded'
              closeOnSelect={false}
              selectedKeys={new Set(props.columnSelected || [])}
              onSelectionChange={(keys) => {
                props.setColumnSelected?.(Array.from(keys) as string[])
              }}
              items={props.columnItems || []}
              buttonOptions={{
                isIconOnly: true,
                icon: 'FaTableColumns',
              }}
            />
          )}

          {props.showAddButton && (
            <Button label='Add New' color='primary' icon='FaPlus' placement='right' onClick={props.onAdd} />
          )}
        </div>
      </div>

      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          {props.showTotal && <span className='text-default-400 text-small pl-2'>Total {props.total}</span>}

          {!!props.selected?.length && (
            <>
              {props.showDeleteSelectedButton && (
                <Button
                  label='Delete'
                  color='danger'
                  icon='FaTrash'
                  placement='right'
                  onClick={props.onDeleteSelected}
                />
              )}

              {props.showForceDeleteSelectedButton && (
                <Button
                  label='Force Delete'
                  color='danger'
                  icon='FaTrash'
                  placement='right'
                  onClick={props.onForceDeleteSelected}
                />
              )}
            </>
          )}
        </div>

        <div className='h-[40px' />

        {props.showPageLimit && (
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
