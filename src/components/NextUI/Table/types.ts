import type { UseColumnsPropsReturn } from './useColumns'
import type { ButtonProps } from '../Button'
import type { DropdownInputProps } from '../Input'
import type {
  TableCellProps as NextUITableCellProps,
  TableColumnProps as NextUITableColumnProps,
  SelectionMode,
} from '@nextui-org/react'

export type TableState =
  | 'default'
  | 'add'
  // | 'add-inline'
  | 'edit'
  // | 'edit-inline'
  | 'copy'
  // | 'copy-inline'
  | 'clone'
  | 'delete'
  | 'delete-all'
  | 'force-delete'
  | 'force-delete-all'

export type TableSortType = 'asc' | 'desc'
export type TableSort<T> = { [key in keyof T]: TableSortType }

export type TableRefetchData<T> = {
  search?: string
  filter?: string[]
  page?: number
  limit?: number
  sort?: TableSort<T>
}

export type TableConfig<T> = TableRefetchData<T> & {
  state: TableState
  columns: TableColumnProps<T>[] // NOTE: This is the list of columns that are visible
  columnItems: DropdownInputProps['items'] // NOTE: List of columns that can be selectable for showing/hiding
  columnSelected: string[] // NOTE: List of columns that are selected to be shown
  rowSelected: string[] // NOTE: List of rows that are selected
}

export type TableProps<T, U = never> = {
  // NOTE: Config
  selectedMode?: SelectionMode

  // NOTE: Data
  columns: TableColumnProps<T>[]
  rows: ({ key?: string; id?: string } & T)[]
  search?: string
  page?: number
  total?: number
  limit?: number
  loading?: boolean
  filterSelected?: string[]
  rowSelected?: string[]

  // NOTE: All Items
  filterItems?: DropdownInputProps['items']
  limitItems?: DropdownInputProps['items']
  quickActionItems?: ({
    key: U
    toggleColor?: (item: T) => ButtonProps['color']
  } & ButtonProps)[]

  // NOTE: Event/Action
  onSearch?: (value: string) => void
  onFilterSelected?: (selected: string[]) => void
  onColumnSelected?: (selected: string[]) => void
  onAdd?: () => void
  onDeleteSelected?: () => void
  onForceDeleteSelected?: () => void
  onLimitSelected?: (limit: number) => void
  onRowSelected?: (selected: string[]) => void
  onQuickAction?: (item: T, type: U) => void
  onEdit?: (item: T) => void
  onCopy?: (item: T) => void
  onClone?: (item: T) => void
  onDelete?: (item: T) => void
  onForceDelete?: (item: T) => void
  onPageChange?: (page: number) => void
  onRefetchData?: (config: TableRefetchData<T>) => void
  onConfigChange?: (config: TableConfig<T>) => void

  // NOTE: Show/Hide
  showSearch?: boolean
  showFilterButton?: boolean
  showColumnButton?: boolean
  showAddButton?: boolean
  showTotal?: boolean
  showDeleteSelectedButton?: boolean
  showForceDeleteSelectedButton?: boolean
  showPageLimit?: boolean
  showAction?: boolean
  showEditButton?: boolean
  showCopyButton?: boolean
  showCloneButton?: boolean
  showDeleteButton?: boolean
  showForceDeleteButton?: boolean
  showTotalSelected?: boolean
  showPagination?: boolean
  showNavigation?: boolean
}

export type TopContentProps<T> = Pick<
  TableProps<T> & UseColumnsPropsReturn<T>,
  // NOTE: Data
  | 'search'
  | 'filterSelected'
  | 'columnSelected'
  | 'total'
  | 'limit'
  | 'rowSelected'

  // NOTE: All Items
  | 'filterItems'
  | 'columnItems'
  | 'limitItems'

  // NOTE: Event/Action
  | 'onSearch'
  | 'onFilterSelected'
  | 'onColumnSelected'
  | 'onAdd'
  | 'onDeleteSelected'
  | 'onForceDeleteSelected'
  | 'onLimitSelected'

  // NOTE: Show/Hide
  | 'showSearch'
  | 'showFilterButton'
  | 'showColumnButton'
  | 'showAddButton'
  | 'showTotal'
  | 'showDeleteSelectedButton'
  | 'showForceDeleteSelectedButton'
  | 'showPageLimit'
>

export type BottomContentProps<T> = Pick<
  TableProps<T>,
  // NOTE: Data
  | 'rows'
  | 'page'
  | 'total'
  | 'limit'
  | 'rowSelected'
  | 'loading'

  // NOTE: Event/Action
  | 'onPageChange'

  // NOTE: Show/Hide
  | 'showTotalSelected'
  | 'showPagination'
  | 'showNavigation'
>

export type ColumnActionProps<T, U = never> = {
  item: T
} & Pick<
  TableProps<T, U>,
  'onEdit' | 'onCopy' | 'onClone' | 'onDelete' | 'onForceDelete' | 'quickActionItems' | 'onQuickAction'
>

export type TableCellProps<T> = {
  key: React.Key
  column: TableColumnProps<T>
  item: T
  columnAlign?: TableColumnProps<T>['align']
} & Omit<NextUITableCellProps, 'children'>

export type TableColumnProps<T> = {
  key: keyof T | 'action'
  label?: string
  show?: boolean
  render?: (row: T) => React.ReactNode
} & Omit<NextUITableColumnProps<T>, 'children'>
