import type { TableColumnProps as NextUITableColumnProps } from '@nextui-org/react'

import React from 'react'

import { TableColumn as NextUITableColumn } from '@nextui-org/react'

export type TableColumnProps<T> = {
  key: keyof T | 'action'
  label?: string
  show?: boolean
  render?: (row: T) => React.ReactNode
} & Omit<NextUITableColumnProps<T>, 'children'>

export const TableColumn = <T,>(props: TableColumnProps<T>) => {
  const getAlign = () => {
    switch (props.align) {
      case 'center':
        return 'text-center'
      case 'end':
        return 'text-end'
    }

    return 'text-start'
  }

  return (
    <NextUITableColumn {...props} key={props.key as React.Key} className={[props.className, getAlign()].join(' ')}>
      {props.label}
    </NextUITableColumn>
  )
}
