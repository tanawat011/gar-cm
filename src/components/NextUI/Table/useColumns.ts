import type { TableColumnProps } from './TableColumn'
import type { DropdownInputProps } from '../Input'

import { useEffect, useMemo, useState } from 'react'

export const useColumns = <T>(baseColumns: TableColumnProps<T>[]) => {
  const [columnItems, setColumnItems] = useState<DropdownInputProps['items']>([])
  const [columnSelected, setColumnSelected] = useState<string[]>([])

  useEffect(() => {
    // NOTE: set dropdown column items
    setColumnItems(baseColumns.map((col) => ({ key: col.key, label: col.label })))

    // NOTE: set default selected columns
    if (!columnSelected.length) {
      setColumnSelected(baseColumns.filter((col) => !!col.show).map((col) => `${col.key}`))
    }
  }, [baseColumns])

  const columns = useMemo(() => {
    // NOTE: if columnSelected is not empty, filter columns by columnSelected
    if (columnSelected.length) return baseColumns.filter((col) => columnSelected.includes(`${col.key}`))

    // NOTE: if columnSelected is empty, filter columns by show
    return baseColumns.filter((col) => !!col.show)
  }, [columnSelected])

  return {
    columns,
    columnItems,
    columnSelected,
    setColumnSelected,
  }
}
