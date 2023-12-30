import type { TableProps } from './Table'

import React from 'react'

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from '@nextui-org/react'

import { Icon } from '@/components/Icon'

type TopContentProps<T> = {
  rows: TableProps<T>['rows']
  hideSearch?: TableProps<T>['hideSearch']
  hideFilter?: TableProps<T>['hideFilter']
  hideColumnSelecter?: TableProps<T>['hideColumnSelecter']
  hideAddNew?: TableProps<T>['hideAddNew']
  onAddNew?: TableProps<T>['onAddNew']
}

export const TopContent = <T,>(props: TopContentProps<T>) => {
  const { rows, onAddNew } = props

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between gap-3 items-end'>
        <Input
          isClearable
          className='w-full sm:max-w-[44%]'
          placeholder='Search by name...'
          labelPlacement='outside'
          startContent={<Icon name='FaMagnifyingGlass' />}
          // value={filterValue}
          // onClear={() => onClear()}
          // onValueChange={onSearchChange}
        />

        <div className='flex gap-3'>
          <Dropdown>
            <DropdownTrigger className='hidden sm:flex'>
              <Button endContent={<Icon name='FaChevronDown' />} variant='flat'>
                Status
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label='Table Columns'
              closeOnSelect={false}
              // selectedKeys={statusFilter}
              selectionMode='multiple'
              // onSelectionChange={setStatusFilter}
            >
              <DropdownItem className='capitalize'>xxx</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown>
            <DropdownTrigger className='hidden sm:flex'>
              <Button endContent={<Icon name='FaChevronDown' />} variant='flat'>
                Columns
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label='Table Columns'
              closeOnSelect={false}
              // selectedKeys={visibleColumns}
              selectionMode='multiple'
              // onSelectionChange={setVisibleColumns}
            >
              <DropdownItem className='capitalize'>xxx</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Button color='primary' endContent={<Icon name='FaPlus' />} onClick={onAddNew}>
            Add New
          </Button>
        </div>
      </div>

      <div className='flex justify-between items-center'>
        <span className='text-default-400 text-small'>Total {rows.length} users</span>
      </div>
    </div>
  )
}
