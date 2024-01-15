import type { TableColumnProps } from './types'

import React from 'react'

import { TableColumn as NextUITableColumn } from '@nextui-org/react'

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
      {props.key === 'action' ? <div className='pr-2'>{props.label}</div> : props.label}
    </NextUITableColumn>
  )
}
