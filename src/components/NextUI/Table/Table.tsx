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

import { BottomContent } from './BottomContent'
import { TopContent } from './TopContent'

export type TableColumn<T> = {
  key: keyof T | 'action'
  label?: string
  render?: (row: T) => React.ReactNode
} & Omit<TableColumnProps<T>, 'children'>

export type TableProps<T> = {
  columns: TableColumn<T>[]
  rows: ({ key?: string; id?: string } & T)[]
  hideSearch?: boolean
  hideFilter?: boolean
  hideColumnSelecter?: boolean
  hideAddNew?: boolean
  selectedMode?: SelectionMode
  selected?: string[]
  onSelected?: (selected: string[]) => void
  onAddNew?: () => void
}

export const Table = <T,>(props: TableProps<T>) => {
  const { columns, rows, selectedMode = 'none', selected = [], onSelected, onAddNew } = props

  const renderCell = useCallback((row: T, colKey: React.Key) => {
    const col = columns.find((c) => c.key === colKey)

    if (col?.render) {
      return col.render(row)
    }

    return getKeyValue(row, colKey)
  }, [])

  const topContent = React.useMemo(() => {
    return <TopContent rows={rows} onAddNew={onAddNew} />
  }, [rows.length])

  const bottomContent = useMemo(() => {
    if (selectedMode === 'none') return null

    return <BottomContent rows={rows} selected={selected} />
  }, [selected, rows.length])

  return (
    <NextUITable
      fullWidth
      classNames={{
        base: 'h-screen',
      }}
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
    >
      <TableHeader columns={columns}>
        {(col) => (
          <TableColumn {...col} key={col.key as React.Key}>
            {col.label}
          </TableColumn>
        )}
      </TableHeader>

      <TableBody items={rows} emptyContent={'No rows to display.'}>
        {(item) => (
          <TableRow key={item.key as React.Key}>
            {(colKey) => <TableCell>{renderCell(item, colKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </NextUITable>
  )
}
