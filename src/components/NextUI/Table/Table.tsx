'use client'

import type { TableColumnProps, TableProps } from './types'
import type { Selection } from '@nextui-org/table'

import React, { useCallback, useMemo } from 'react'

import { Table as NextUITable, TableHeader, TableBody, TableRow } from '@nextui-org/table'

import { LoadingSpinner } from '../Loading'

import { BottomContent } from './BottomContent'
import { ColumnAction } from './ColumnAction'
import { TableCell } from './TableCell'
import { TableColumn } from './TableColumn'
import { TopContent } from './TopContent'
import { useTableConfig } from './useTableConfig'

export const Table = <T, U>(props: TableProps<T, U>) => {
  const tableBodyHeight =
    'max-h-[calc(100vh-var(--navbar-container-h)-var(--navbar-h)-var(--footer-h)-(theme(space.4)*3)-52px-(40px*2))]'
  const tableBodyEmptyStateHeight =
    'h-[calc(100vh-var(--navbar-container-h)-var(--navbar-h)-var(--footer-h)-(theme(space.4)*5)-52px-(40px*3)-5px)]'
  const { rows, total, loading, selectedMode = 'none' } = props

  const isSingleMode = selectedMode === 'single'
  const isMultipleMode = selectedMode === 'multiple'

  const defaultColumns = useMemo(
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
                    handleRowSelected?.([])
                    props.onDelete?.(_item)
                  }}
                  onForceDelete={(_item) => {
                    handleRowSelected?.([])
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

  const renderColumn = useCallback((column: TableColumnProps<T>) => {
    return TableColumn(column)
  }, [])

  const renderCell = useCallback((key: React.Key, item: T) => {
    const column = columns.find((c) => c.key === key) as TableColumnProps<T>

    return TableCell({ column, item, key, columnAlign: column?.align })
  }, [])

  const {
    search,
    filter,
    // sort,
    page,
    limit,
    columns,
    columnItems,
    columnSelected,
    rowSelected,
    // handleStateChange,
    handleSearch,
    handleFilter,
    // handleSort,
    handleLimitChange,
    handlePageChange,
    handleColumnSelected,
    handleRowSelected,
  } = useTableConfig({
    columns: defaultColumns,
    handleRefetchData: props?.onRefetchData,
    handleConfigChange: props?.onConfigChange,
  })

  const topContent = useMemo(() => {
    return (
      <TopContent
        // NOTE: Data
        search={search}
        filterSelected={filter}
        columnSelected={columnSelected}
        total={total}
        rowSelected={rowSelected}
        // NOTE: All Items
        filterItems={props.filterItems}
        columnItems={columnItems}
        limitItems={props.limitItems}
        // NOTE: Event/Action
        onSearch={handleSearch}
        onFilterSelected={handleFilter}
        onColumnSelected={handleColumnSelected}
        onAdd={props.onAdd}
        onDeleteSelected={props.onDeleteSelected}
        onForceDeleteSelected={props.onForceDeleteSelected}
        onLimitSelected={handleLimitChange}
        // NOTE: Show/Hide
        showSearch={props.showSearch}
        showFilterButton={props.showFilterButton}
        showColumnButton={props.showColumnButton}
        showAddButton={props.showAddButton}
        showTotal={props.showTotal}
        showDeleteSelectedButton={isMultipleMode && props.showDeleteSelectedButton}
        showForceDeleteSelectedButton={isMultipleMode && props.showForceDeleteSelectedButton}
        showPageLimit={props.showPageLimit}
      />
    )
  }, [rowSelected, total])

  const bottomContent = useMemo(() => {
    return (
      <BottomContent
        rows={rows}
        page={page}
        total={total}
        limit={limit}
        rowSelected={rowSelected}
        onPageChange={handlePageChange}
        showTotalSelected={isMultipleMode && props.showTotalSelected}
        showPagination={props.showPagination}
        showNavigation={props.showNavigation}
        loading={loading}
      />
    )
  }, [rowSelected, rows.length, loading])

  const onSelectionChange = useCallback(
    (keys: Selection) => {
      if (keys === 'all') {
        return handleRowSelected?.(rows.map((row) => row?.key || row?.id) as string[])
      }

      handleRowSelected?.(Array.from(keys) as string[])
    },
    [rows],
  )

  const handleSingleRowSelected = useCallback((key: React.Key) => {
    onSelectionChange?.(new Set([key]))
  }, [])

  return (
    <NextUITable
      fullWidth
      aria-label='Table with dynamic content'
      selectionMode={selectedMode}
      selectedKeys={new Set(rowSelected)}
      onSelectionChange={onSelectionChange}
      onRowAction={isSingleMode ? handleSingleRowSelected : () => {}}
      topContent={topContent}
      bottomContent={bottomContent}
      topContentPlacement='outside'
      bottomContentPlacement='outside'
      isHeaderSticky
      checkboxesProps={{
        className: isMultipleMode ? 'max-w-[44px]' : '',
      }}
      classNames={{
        wrapper: tableBodyHeight,
        th: [isMultipleMode ? 'first:w-[44px]' : ''],
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
