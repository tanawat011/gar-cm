import type { TableColumnProps } from './TableColumn'
import type { TableCellProps as NextUITableCellProps } from '@nextui-org/react'

import React from 'react'

import { TableCell as NextUITableCell, getKeyValue } from '@nextui-org/react'

export type TableCellProps<T> = {
  key: React.Key
  column: TableColumnProps<T>
  item: T
  columnAlign?: TableColumnProps<T>['align']
} & Omit<NextUITableCellProps, 'children'>

export const TableCell = <T,>({ columnAlign, column, item, key, ...props }: TableCellProps<T>) => {
  const getAlignCell = () => {
    switch (columnAlign) {
      case 'center':
        return 'text-center'
      case 'end':
        return 'text-end'
    }

    return 'text-start'
  }

  const getAlignItem = () => {
    switch (columnAlign) {
      case 'center':
        return 'justify-center'
      case 'end':
        return 'justify-end'
    }

    return 'justify-start'
  }

  const renderCell = (row: T) => {
    const col = column

    if (col?.render) {
      return col.render(row)
    }

    return getKeyValue(row, key) || '-'
  }

  return (
    <NextUITableCell {...props} className={[props.className, getAlignCell()].join(' ')}>
      <div className={['flex', getAlignItem()].join(' ')}>{renderCell(item)}</div>
    </NextUITableCell>
  )
}
