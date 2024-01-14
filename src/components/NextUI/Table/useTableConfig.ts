import type { TableColumnProps } from './TableColumn'

import { useState } from 'react'

export type TableState =
  | 'default'
  | 'add'
  | 'add-inline'
  | 'edit'
  | 'edit-inline'
  | 'copy'
  | 'copy-inline'
  | 'clone'
  | 'delete'
  | 'delete-all'
  | 'force-delete'
  | 'force-delete-all'

export type TableSortType = 'asc' | 'desc'
export type TableSort<T> = { [key in keyof T]: TableSortType }

export type UseTableConfigPropsReturn<T> = {
  tableConfig: {
    state: TableState
    search: string
    filter: string[]
    sort?: TableSort<T>
    limit: number
    page: number
    columnSelected: string[]
    rowSelected: string[]
  }

  setState: (state: TableState) => void
  setSearch: (search: string) => void
  setFilter: (filter: string[]) => void
  setSort: (sort: TableSort<T>) => void
  setLimit: (limit: number) => void
  setPage: (page: number) => void
  setColumnSelected: (columnSelected: string[]) => void
  setRowSelected: (rowSelected: string[]) => void
}

const defaultLimit = 10
const defaultSort = { createdAt: 'desc' }

export const useTableConfig = <T = { createdAt: string }>(): UseTableConfigPropsReturn<T> => {
  const [state, setState] = useState<TableState>('default')
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<string[]>([])
  const [sort, setSort] = useState(defaultSort as TableSort<T>)
  const [limit, setLimit] = useState(defaultLimit)
  const [page, setPage] = useState(1)
  const [columnSelected, setColumnSelected] = useState<string[]>([])
  const [rowSelected, setRowSelected] = useState<string[]>([])

  return {
    tableConfig: {
      state,
      search,
      filter,
      sort,
      limit,
      page,
      columnSelected,
      rowSelected,
    },

    setState,
    setSearch,
    setFilter,
    setSort,
    setLimit,
    setPage,
    setColumnSelected,
    setRowSelected,
  }
}
