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

export type CrudType =
  | 'add'
  | 'edit'
  | 'copy'
  | 'clone'
  | 'delete'
  | 'force-delete'
  | 'delete-selected'
  | 'force-delete-selected'

export type TableProps<T, U = never> = {
  // NOTE: Table configs & Common Data
  columns: TableColumnProps<T>[]
  rows: ({ key?: string; id?: string } & T)[]
  page?: number
  total?: number
  limit?: number
  loading?: boolean
  showTotal?: boolean
  showAction?: boolean

  // NOTE: Search Action
  onSearch?: (value: string) => void
  showSearch?: boolean
  search?: string

  // NOTE: Filter Action
  onFilterSelected?: (selected: string[]) => void
  showFilterButton?: boolean
  filterItems?: DropdownInputProps['items']
  filterSelected?: string[]

  // NOTE: Column Action
  showColumnButton?: boolean

  // NOTE: Add Action
  onAdd?: () => void
  showAddButton?: boolean

  // NOTE: Delete Selected Action
  onDeleteSelected?: () => void
  showDeleteSelectedButton?: boolean

  // NOTE: Force Delete Selected Action
  onForceDeleteSelected?: () => void
  showForceDeleteSelectedButton?: boolean

  // NOTE: Limit Action
  onChangeLimit?: (limit: TableLimitList) => void
  showPageLimit?: boolean
  pageLimitItems?: DropdownInputProps['items']

  // NOTE: Selected Action
  onSelected?: (selected: string[]) => void
  selectedMode?: SelectionMode
  showTotalSelected?: boolean
  selected?: string[]

  // NOTE: Edit Action
  onEdit?: (item: T) => void
  showEditButton?: boolean

  // NOTE: Copy Action
  onCopy?: (item: T) => void
  showCopyButton?: boolean

  // NOTE: Clone Action
  onClone?: (item: T) => void
  showCloneButton?: boolean

  // NOTE: Delete Action
  onDelete?: (item: T) => void
  showDeleteButton?: boolean

  // NOTE: Force Delete Action
  onForceDelete?: (item: T) => void
  showForceDeleteButton?: boolean

  // NOTE: Quick Action
  onQuickAction?: (item: T, type: U) => void
  quickActionItems?: ({
    key: U
    toggleColor?: (item: T) => ButtonProps['color']
  } & ButtonProps)[]

  // NOTE: Change Page Action
  onChangePage?: (page: number) => void
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
                  onEdit={props.onEdit}
                  onCopy={props.onCopy}
                  onClone={props.onClone}
                  onDelete={(_item) => {
                    onSelected?.([])
                    props.onDelete?.(_item)
                  }}
                  onForceDelete={(_item) => {
                    onSelected?.([])
                    props.onForceDelete?.(_item)
                  }}
                  quickActionItems={props.quickActionItems}
                  onQuickAction={props.onQuickAction}
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
        showTotal={props.showTotal}
        // NOTE: Search Action
        onSearch={props.onSearch}
        showSearch={props.showSearch}
        search={search}
        // NOTE: Filter Action
        onFilterSelected={props.onFilterSelected}
        showFilterButton={props.showFilterButton}
        filterItems={props.filterItems}
        filterSelected={filterSelected}
        // NOTE: Column Action
        showColumnButton={props.showColumnButton}
        columnItems={columnItems}
        columnSelected={columnSelected}
        setColumnSelected={setColumnSelected}
        // NOTE: Add Action
        onAdd={props.onAdd}
        showAddButton={props.showAddButton}
        // NOTE: Delete Selected Action
        onDeleteSelected={props.onDeleteSelected}
        showDeleteSelectedButton={props.showDeleteSelectedButton}
        // NOTE: Force Delete Selected Action
        onForceDeleteSelected={props.onForceDeleteSelected}
        showForceDeleteSelectedButton={props.showForceDeleteSelectedButton}
        // NOTE: Limit Action
        onChangeLimit={props.onChangeLimit}
        showPageLimit={props.showPageLimit}
        pageLimitItems={props.pageLimitItems}
        // NOTE: Selected Action
        selected={selected}
      />
    )
  }, [search, selected, rows.length, filterSelected, columnSelected, total])

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
      aria-label='Table with dynamic content'
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
