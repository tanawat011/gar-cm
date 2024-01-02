import type { DropdownInputProps } from '../Input'
import type { SelectionMode, TableColumnProps } from '@nextui-org/table'

import React, { useCallback, useMemo } from 'react'

import {
  Table as NextUITable,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
} from '@nextui-org/table'

import { LoadingSpinner } from '../Loading'

import { BottomContent } from './BottomContent'
import { TopContent } from './TopContent'

export type TableLimitList = number | undefined

export type TableColumn<T> = {
  key: keyof T | 'action'
  label?: string
  render?: (row: T) => React.ReactNode
} & Omit<TableColumnProps<T>, 'children'>

export type TableProps<T> = {
  // NOTE: Table configs
  columns: TableColumn<T>[]
  rows: ({ key?: string; id?: string } & T)[]
  page?: number
  total?: number
  limit?: number
  loading?: boolean
  selectedMode?: SelectionMode

  // NOTE: Items selected or Input value
  search?: string
  selected?: string[]
  filterSelected?: string[]
  columnSelected?: string[]

  // NOTE: Table Events
  onSearch?: (value: string) => void
  onSelected?: (selected: string[]) => void
  onChangePage?: (page: number) => void
  onFilterSelected?: (selected: string[]) => void
  onColumnSelected?: (selected: string[]) => void
  onAddNew?: () => void
  onChangeLimit?: (limit: TableLimitList) => void

  // NOTE: All items
  filterItems?: DropdownInputProps['items']
  columnItems?: DropdownInputProps['items']
  pageLimitItems?: DropdownInputProps['items']

  // NOTE: Show/Hide TOP and BOTTOM content
  showSearchInput?: boolean
  showFilterButton?: boolean
  showColumnButton?: boolean
  showAddButton?: boolean
  showTotal?: boolean
  showPageLimit?: boolean
  showTotalSelected?: boolean
  showPagination?: boolean
  showNavigation?: boolean
}

export const Table = <T,>(props: TableProps<T>) => {
  const {
    search,
    columns,
    rows,
    page,
    total,
    limit,
    loading,
    selectedMode = 'none',
    selected = [],
    onSelected,
    filterSelected,
  } = props

  const renderCell = useCallback((row: T, colKey: React.Key) => {
    const col = columns.find((c) => c.key === colKey)

    if (col?.render) {
      return col.render(row)
    }

    return getKeyValue(row, colKey)
  }, [])

  const topContent = useMemo(() => {
    return (
      <TopContent
        total={total}
        search={search}
        filterSelected={filterSelected}
        columnSelected={props.columnSelected}
        onSearch={props.onSearch}
        onFilterSelected={props.onFilterSelected}
        onColumnSelected={props.onColumnSelected}
        onAddNew={props.onAddNew}
        onChangeLimit={props.onChangeLimit}
        filterItems={props.filterItems}
        columnItems={props.columnItems}
        pageLimitItems={props.pageLimitItems}
        showSearchInput={props.showSearchInput}
        showFilterButton={props.showFilterButton}
        showColumnButton={props.showColumnButton}
        showAddButton={props.showAddButton}
        showTotal={props.showTotal}
        showPageLimit={props.showPageLimit}
      />
    )
  }, [search, rows.length, filterSelected, total])

  const bottomContent = useMemo(() => {
    if (selectedMode === 'none') return null

    return (
      <BottomContent
        rows={rows}
        page={page}
        total={total}
        limit={limit}
        selected={selected}
        onChangePage={props.onChangePage}
        showTotalSelected={props.showTotalSelected}
        showPagination={props.showPagination}
        showNavigation={props.showNavigation}
      />
    )
  }, [selected, rows.length, total, page, limit])

  return (
    <NextUITable
      fullWidth
      aria-label='Example table with dynamic content'
      selectionMode={selectedMode}
      selectedKeys={new Set(selected)}
      onSelectionChange={(keys) => {
        if (keys === 'all') {
          return onSelected?.(rows.map((row) => row?.key || row?.id) as string[])
        }

        onSelected?.(Array.from(keys) as string[])
      }}
      onRowAction={() => {}}
      topContent={topContent}
      bottomContent={bottomContent}
      topContentPlacement='outside'
      bottomContentPlacement='outside'
      isHeaderSticky
      classNames={{
        wrapper: 'min-h-[557px] max-h-[557px]',
      }}
    >
      <TableHeader columns={columns}>
        {(col) => (
          <TableColumn {...col} key={col.key as React.Key}>
            {col.label}
          </TableColumn>
        )}
      </TableHeader>

      <TableBody
        items={rows}
        emptyContent={<div className='flex items-center justify-center'>No rows to display.</div>}
        isLoading={loading}
        loadingContent={
          <div className='flex items-center justify-center w-full h-full z-20 backdrop-blur-sm'>
            <LoadingSpinner />
          </div>
        }
      >
        {(item) => (
          <TableRow key={item.key as React.Key}>
            {(colKey) => <TableCell>{renderCell(item, colKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </NextUITable>
  )
}
