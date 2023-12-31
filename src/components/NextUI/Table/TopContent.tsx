import type { TableProps } from './Table'
import type { DropdownInputProps } from '../Input'

import React from 'react'

import { Button as ButtonNextUI, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from '@nextui-org/react'

import { Icon } from '@/components/Icon'

import { Button } from '../Button'
import { DropdownInput } from '../Input'

type TopContentProps<T> = {
  rows: TableProps<T>['rows']
  hideSearch?: TableProps<T>['hideSearch']
  hideFilter?: TableProps<T>['hideFilter']
  hideColumnSelecter?: TableProps<T>['hideColumnSelecter']
  hideAddNew?: TableProps<T>['hideAddNew']
  onAddNew?: TableProps<T>['onAddNew']
  statusSelected?: TableProps<T>['statusSelected']
  onStatusSelected?: TableProps<T>['onStatusSelected']
  statusItems?: DropdownInputProps['items']
}

export const TopContent = <T,>(props: TopContentProps<T>) => {
  const { rows, onAddNew, statusSelected = [], onStatusSelected, statusItems = [] } = props

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
          <DropdownInput
            uncontrolled
            name='profile-actions'
            selectionMode='multiple'
            variant='faded'
            closeOnSelect={false}
            selectedKeys={new Set(statusSelected)}
            onSelectionChange={(keys) => {
              onStatusSelected?.(Array.from(keys) as string[])
            }}
            items={statusItems}
            label='Status'
          />

          <Dropdown>
            <DropdownTrigger className='hidden sm:flex'>
              {/* <Button icon='FaChevronDown' label='Columns' variant='flat' placement='right' /> */}
              <ButtonNextUI variant='flat' endContent={<Icon name='FaChevronDown' />}>
                Columns
              </ButtonNextUI>
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

          {/* <Button icon='FaPlus' label='Add New' color='primary' onClick={onAddNew} placement='right' /> */}
          <ButtonNextUI color='primary' endContent={<Icon name='FaPlus' />} onClick={onAddNew}>
            Add New
          </ButtonNextUI>
        </div>
      </div>

      <div className='flex justify-between items-center'>
        <span className='text-default-400 text-small'>Total {rows.length} users</span>
      </div>
    </div>
  )
}
