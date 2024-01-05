import type { TableColumnProps } from './TableColumn'
import type { DropdownInputProps } from '../Input'

import { useEffect, useMemo, useState } from 'react'

export const useColumns = <T>(baseColumns: TableColumnProps<T>[]) => {
  const [columnItems, setColumnItems] = useState<DropdownInputProps['items']>([])
  const [columnSelected, setColumnSelected] = useState<string[]>([])

  useEffect(() => {
    setColumnItems(baseColumns.map((col) => ({ key: col.key, label: col.label })))
  }, [baseColumns])

  const columns = useMemo(() => {
    if (columnSelected.length) return baseColumns.filter((col) => columnSelected.includes(`${col.key}`))

    return baseColumns.filter((col) => !!col.show)
  }, [columnSelected])

  return {
    columns,
    columnItems,
    columnSelected,
    setColumnSelected,
  }
}
