import type { TableColumnProps } from './TableColumn'
import type { DropdownInputProps } from '../Input'
import type { ButtonProps, Selection } from '@nextui-org/react'
import type { SelectionMode } from '@nextui-org/table'

import React, { useCallback, useMemo } from 'react'

import { Table as NextUITable, TableHeader, TableBody, TableRow } from '@nextui-org/table'

import { LoadingSpinner } from '../Loading'

import { BottomContent } from './BottomContent'
import { ColumnAction } from './ColumnAction'
import { TableCell } from './TableCell'
import { TableColumn } from './TableColumn'
import { TopContent } from './TopContent'
import { useColumns } from './useColumns'

export type TableLimitList = number | undefined

export type CrudType = 'add' | 'edit' | 'copy' | 'delete' | 'force-delete' | 'clone'

export type TableProps<T, U = never> = {
  // NOTE: Table configs
  columns: TableColumnProps<T>[]
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
  quickActionItems?: ({
    key: U
    toggleColor?: (item: T) => ButtonProps['color']
  } & ButtonProps)[]

  // NOTE: Table Events
  onSearch?: (value: string) => void
  onSelected?: (selected: string[]) => void
  onChangePage?: (page: number) => void
  onFilterSelected?: (selected: string[]) => void
  onAddNew?: () => void
  onChangeLimit?: (limit: TableLimitList) => void
  onOpenForm?: () => void
  onOpenModalConfirm?: () => void
  onSetItem?: (item: T, crudType: CrudType) => void
  onQuickAction?: (item: T, type: U) => void

  // NOTE: All items
  filterItems?: DropdownInputProps['items']
  pageLimitItems?: DropdownInputProps['items']

  // NOTE: Show/Hide TOP and BOTTOM content
  showSearchInput?: boolean
  showFilterButton?: boolean
  showColumnButton?: boolean
  showAddButton?: boolean
  showTotal?: boolean
  showPageLimit?: boolean
  showAction?: boolean
  showTotalSelected?: boolean
  showPagination?: boolean
  showNavigation?: boolean
}

export const Table = <T, U>(props: TableProps<T, U>) => {
  const tableBodyHeight =
    'max-h-[calc(100vh-var(--navbar-container-h)-var(--navbar-h)-var(--footer-h)-(theme(space.4)*3)-52px-(40px*2))]'
  const tableBodyEmptyStateHeight =
    'h-[calc(100vh-var(--navbar-container-h)-var(--navbar-h)-var(--footer-h)-(theme(space.4)*5)-52px-(40px*3)-5px)]'
  const {
    search,
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

  const baseColumns = useMemo(
    () => [
      ...props.columns,
      ...(props.showAction
        ? ([
            {
              key: 'action',
              label: 'Action',
              align: 'end',
              width: 120,
              show: true,
              render: (item) => (
                <ColumnAction
                  item={item}
                  quickActionItems={props.quickActionItems}
                  onQuickAction={props.onQuickAction}
                  onOpenForm={props.onOpenForm}
                  onOpenModalConfirm={props.onOpenModalConfirm}
                  onSetItem={props.onSetItem}
                />
              ),
            },
          ] as TableColumnProps<T>[])
        : []),
    ],
    [props.columns],
  )
  const { columns, columnItems, columnSelected, setColumnSelected } = useColumns(baseColumns)

  const renderColumn = useCallback((column: TableColumnProps<T>) => {
    return TableColumn(column)
  }, [])

  const renderCell = useCallback((key: React.Key, item: T) => {
    const column = columns.find((c) => c.key === key) as TableColumnProps<T>

    return TableCell({ column, item, key, columnAlign: column?.align })
  }, [])

  const topContent = useMemo(() => {
    return (
      <TopContent
        total={total}
        search={search}
        filterSelected={filterSelected}
        columnSelected={columnSelected}
        onSearch={props.onSearch}
        onFilterSelected={props.onFilterSelected}
        onColumnSelected={setColumnSelected}
        onAddNew={props.onAddNew}
        onChangeLimit={props.onChangeLimit}
        filterItems={props.filterItems}
        columnItems={columnItems}
        pageLimitItems={props.pageLimitItems}
        showSearchInput={props.showSearchInput}
        showFilterButton={props.showFilterButton}
        showColumnButton={props.showColumnButton}
        showAddButton={props.showAddButton}
        showTotal={props.showTotal}
        showPageLimit={props.showPageLimit}
      />
    )
  }, [search, rows.length, filterSelected, columnSelected, total])

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
        onSelected={props.onSelected}
        showTotalSelected={props.showTotalSelected}
        showPagination={props.showPagination}
        showNavigation={props.showNavigation}
      />
    )
  }, [selected, rows.length, total, page, limit])

  const onSelectionChange = useCallback(
    (keys: Selection) => {
      if (keys === 'all') {
        return onSelected?.(rows.map((row) => row?.key || row?.id) as string[])
      }

      onSelected?.(Array.from(keys) as string[])
    },
    [rows],
  )

  return (
    <NextUITable
      fullWidth
      aria-label='Example table with dynamic content'
      selectionMode={selectedMode}
      selectedKeys={new Set(selected)}
      onSelectionChange={onSelectionChange}
      onRowAction={() => {}}
      topContent={topContent}
      bottomContent={bottomContent}
      topContentPlacement='outside'
      bottomContentPlacement='outside'
      isHeaderSticky
      checkboxesProps={{
        className: 'max-w-[44px]',
      }}
      classNames={{
        wrapper: tableBodyHeight,
        th: ['first:w-[44px]'],
      }}
    >
      <TableHeader columns={columns}>{(col) => renderColumn(col)}</TableHeader>

      <TableBody
        items={rows}
        emptyContent={
          <div className={['flex items-center justify-center', tableBodyEmptyStateHeight].join(' ')}>
            No rows to display.
          </div>
        }
        isLoading={loading}
        loadingContent={
          <div className='flex items-center justify-center w-full h-full z-20 backdrop-blur-sm'>
            <LoadingSpinner />
          </div>
        }
      >
        {(item) => <TableRow key={item.key as React.Key}>{(key) => renderCell(key, item)}</TableRow>}
      </TableBody>
    </NextUITable>
  )
}
