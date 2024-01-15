import type { TableConfig, TableSort, TableState } from './types'
import type { UseColumnsProps } from './useColumns'
import type { FieldValues } from 'react-hook-form'

import { useEffect, useMemo, useState } from 'react'

import { useColumns } from './useColumns'

export type UseTableConfigPropsReturn<T extends FieldValues> = TableConfig<T> & {
  handleStateChange: (state: TableState) => void
  handleSearch: (search: string) => void
  handleFilter: (filter: string[]) => void
  handleSort: (sort: TableSort<T>) => void
  handleLimitChange: (limit: number) => void
  handlePageChange: (page: number) => void
  handleColumnSelected: (columnSelected: string[]) => void
  handleRowSelected: (rowSelected: string[]) => void
}

export type UseTableConfigProps<T extends FieldValues, U> = {
  tableConfig?: TableConfig<T>
  handleRefetchData?: (config: Pick<TableConfig<T>, 'search' | 'filter' | 'page' | 'limit' | 'sort'>) => void
  handleConfigChange?: (config: TableConfig<T>) => void
} & UseColumnsProps<T, U>

const defaultLimit = 10
const defaultSort = { createdAt: 'desc' }

export const useTableConfig = <T extends FieldValues, U = never>({
  tableConfig,
  handleRefetchData,
  handleConfigChange,
  ...props
}: UseTableConfigProps<T, U>): UseTableConfigPropsReturn<T> => {
  const { columns, columnItems, columnSelected, setColumnSelected } = useColumns({ ...props })

  const [isNotFirstRender, setIsNotFirstRender] = useState(false)
  const [state, setState] = useState<TableState>(tableConfig?.state || 'default')
  const [search, setSearch] = useState(tableConfig?.search || '')
  const [filter, setFilter] = useState<string[]>(tableConfig?.filter || [])
  const [sort, setSort] = useState(tableConfig?.sort || (defaultSort as TableSort<T>))
  const [limit, setLimit] = useState(tableConfig?.limit || defaultLimit)
  const [page, setPage] = useState(tableConfig?.page || 1)
  const [rowSelected, setRowSelected] = useState<string[]>(tableConfig?.rowSelected || [])

  const newTableConfig = useMemo(
    () => ({
      state,
      search,
      filter,
      sort,
      limit,
      page,
      columns,
      columnItems,
      columnSelected,
      rowSelected,
    }),
    [state, search, filter, sort, limit, page, columns, columnItems, columnSelected, rowSelected],
  )

  useEffect(() => {
    if (isNotFirstRender) {
      handleRefetchData?.({ search, filter, page, limit, sort })
    }
  }, [search, filter, sort, limit, page])

  useEffect(() => {
    if (isNotFirstRender) {
      handleConfigChange?.({ ...newTableConfig })
    }
  }, [newTableConfig])

  const handleStateChange = (newState: TableState) => {
    setState(newState)
  }

  const handleSearch = (newSearch: string) => {
    setIsNotFirstRender(true)
    setSearch(newSearch)
    setPage(1)
    setRowSelected([])
  }

  const handleFilter = (newFilter: string[]) => {
    setIsNotFirstRender(true)
    setFilter(newFilter)
    setPage(1)
    setRowSelected([])
  }

  const handleSort = (newSort: TableSort<T>) => {
    setIsNotFirstRender(true)
    setSort(newSort)
    setPage(1)
    setRowSelected([])
  }

  const handleLimitChange = (newLimit: number) => {
    setIsNotFirstRender(true)
    setLimit(newLimit)
    setPage(1)
    setRowSelected([])
  }

  const handlePageChange = (newPage: number) => {
    setIsNotFirstRender(true)
    setPage(newPage)
    setRowSelected([])
  }

  const handleColumnSelected = (newColumnSelected: string[]) => {
    setColumnSelected(newColumnSelected)
  }

  const handleRowSelected = (newRowSelected: string[]) => {
    setRowSelected(newRowSelected)
  }

  return {
    ...newTableConfig,

    handleStateChange,
    handleSearch,
    handleFilter,
    handleSort,
    handleLimitChange,
    handlePageChange,
    handleColumnSelected,
    handleRowSelected,
  }
}
