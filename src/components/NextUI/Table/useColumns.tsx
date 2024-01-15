import type { ColumnActionProps, TableColumnProps } from './types'
import type { DropdownInputProps } from '../Input'
import type { FieldValues } from 'react-hook-form'

import { useEffect, useMemo, useState } from 'react'

import { ColumnAction } from './ColumnAction'

export type UseColumnsPropsReturn<T extends FieldValues> = {
  columns: TableColumnProps<T>[]
  columnItems: DropdownInputProps['items']
  columnSelected: string[]
  setColumnSelected: (columnSelected: string[]) => void
}

export type UseColumnsProps<T extends FieldValues, U> = {
  columns: TableColumnProps<T>[]
} & Pick<
  ColumnActionProps<T, U>,
  'onEdit' | 'onCopy' | 'onClone' | 'onDelete' | 'onForceDelete' | 'showAction' | 'quickActionItems' | 'onQuickAction'
>

export const useColumns = <T extends FieldValues, U = never>(
  props: UseColumnsProps<T, U>,
): UseColumnsPropsReturn<T> => {
  const [columnItems, setColumnItems] = useState<DropdownInputProps['items']>([])
  const [columnSelected, setColumnSelected] = useState<string[]>([])

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
                  onEdit={props?.onEdit}
                  onCopy={props?.onCopy}
                  onClone={props?.onClone}
                  onDelete={props?.onDelete}
                  onForceDelete={props?.onForceDelete}
                  quickActionItems={props?.quickActionItems}
                  onQuickAction={props.onQuickAction}
                />
              ),
            },
          ] as TableColumnProps<T>[])
        : []),
    ],
    [props.columns],
  )

  useEffect(() => {
    // NOTE: set dropdown column items
    setColumnItems(defaultColumns.map((col) => ({ key: col.key, label: col.label })))

    // NOTE: set default selected columns
    if (!columnSelected.length) {
      setColumnSelected(defaultColumns.filter((col) => !!col.show).map((col) => `${col.key}`))
    }
  }, [defaultColumns])

  const columns = useMemo(() => {
    // NOTE: if columnSelected is not empty, filter columns by columnSelected
    if (columnSelected.length) return defaultColumns.filter((col) => columnSelected.includes(`${col.key}`))

    // NOTE: if columnSelected is empty, filter columns by show
    return defaultColumns.filter((col) => !!col.show)
  }, [columnSelected])

  return {
    columns,
    columnItems,
    columnSelected,
    setColumnSelected,
  }
}
