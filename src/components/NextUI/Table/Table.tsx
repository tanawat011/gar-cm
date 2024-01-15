'use client'

import type { TableColumnProps, TableProps } from './types'
import type { Selection } from '@nextui-org/table'
import type { FieldValues } from 'react-hook-form'

import React, { useCallback, useMemo } from 'react'

import { Code, useDisclosure } from '@nextui-org/react'
import { Table as NextUITable, TableHeader, TableBody, TableRow } from '@nextui-org/table'
import { useForm } from 'react-hook-form'

import { kebabToCapital } from '@/libs/utilities'

import { LoadingSpinner } from '../Loading'
import { ModalConfirm, ModalForm } from '../Modal'

import { BottomContent } from './BottomContent'
import { TableCell } from './TableCell'
import { TableColumn } from './TableColumn'
import { TopContent } from './TopContent'
import { tableBodyEmptyStateHeight, tableBodyHeight } from './constant'
import { useTableConfig } from './useTableConfig'

export const Table = <T extends FieldValues, U>(props: TableProps<T, U>) => {
  const { defaultFormValues, formBuilder, rows, total, loading, selectedMode = 'none' } = props

  const {
    handleSubmit,
    formState: { errors },
    clearErrors,
    control,
    reset,
  } = useForm<T>({
    defaultValues: defaultFormValues,
  })

  const [itemSelected, setItemSelected] = React.useState<T>()

  const modalForm = useDisclosure()
  const modalConfirm = useDisclosure()

  const isSingleMode = selectedMode === 'single'
  const isMultipleMode = selectedMode === 'multiple'

  const handleAdd = () => {
    handleStateChange('add')
    modalForm.onOpen()
    props.onAdd?.()
  }

  const handleEdit = (item: T) => {
    handleStateChange('edit')
    modalForm.onOpen()
    reset(item)
  }

  const handleCopy = (item: T) => {
    handleStateChange('copy')
    modalForm.onOpen()
    reset(item)
  }

  const handleClone = (item: T) => {
    handleStateChange('clone')
    modalConfirm.onOpen()
    setItemSelected(item)
  }

  const handleDelete = (item: T) => {
    handleStateChange('delete')
    modalConfirm.onOpen()
    setItemSelected(item)
  }

  const handleForceDelete = (item: T) => {
    handleStateChange('force-delete')
    modalConfirm.onOpen()
    setItemSelected(item)
  }

  const handleDeleteSelected = () => {
    handleStateChange('delete-selected')
    modalConfirm.onOpen()
  }

  const handleForceDeleteSelected = () => {
    handleStateChange('force-delete-selected')
    modalConfirm.onOpen()
  }

  const handleCloseConfirmModal = () => {
    modalConfirm.onClose()
    props?.onCloseConfirmModal?.()
    setItemSelected(undefined)
  }

  const handleSubmitConfirmModal = () => {
    handleCloseConfirmModal()
    const isActionSelected = state.includes('selected')

    if (isActionSelected) {
      props?.onSubmitDeleteSelectedModal?.(state, rowSelected)
    }

    if (!isActionSelected && itemSelected) {
      props?.onSubmitConfirmModal?.(state, itemSelected)
    }

    handleRowSelected?.([])
  }

  const handleCloseFormModal = () => {
    modalForm.onClose()
    props?.onCloseFormModal?.()
    reset(defaultFormValues)
    clearErrors()
  }

  const handleSubmitFormModal = (itemSubmitted: T) => {
    handleCloseFormModal()
    props?.onSubmitFormModal?.(state, itemSubmitted)
  }

  const {
    state,
    search,
    filter,
    // sort,
    page,
    limit,
    columns,
    columnItems,
    columnSelected,
    rowSelected,
    handleStateChange,
    handleSearch,
    handleFilter,
    // handleSort,
    handleLimitChange,
    handlePageChange,
    handleColumnSelected,
    handleRowSelected,
  } = useTableConfig({
    columns: props.columns,
    showAction: props.showAction,
    quickActionItems: props.quickActionItems,
    handleRefetchData: props?.onRefetchData,
    handleConfigChange: props?.onConfigChange,
    onQuickAction: props?.onQuickAction,
    onEdit: handleEdit,
    onCopy: handleCopy,
    onClone: handleClone,
    onDelete: handleDelete,
    onForceDelete: handleForceDelete,
  })

  const renderColumn = useCallback((column: TableColumnProps<T>) => {
    return TableColumn(column)
  }, [])

  const renderCell = useCallback((key: React.Key, item: T) => {
    const column = columns.find((c) => c.key === key) as TableColumnProps<T>

    return TableCell({ column, item, key, columnAlign: column?.align })
  }, [])

  const topContent = useMemo(() => {
    return (
      <TopContent
        // NOTE: Data
        search={search}
        filterSelected={filter}
        columnSelected={columnSelected}
        total={total}
        rowSelected={rowSelected}
        // NOTE: All Items
        filterItems={props.filterItems}
        columnItems={columnItems}
        limitItems={props.limitItems}
        // NOTE: Event/Action
        onSearch={handleSearch}
        onFilterSelected={handleFilter}
        onColumnSelected={handleColumnSelected}
        onAdd={handleAdd}
        onDeleteSelected={handleDeleteSelected}
        onForceDeleteSelected={handleForceDeleteSelected}
        onLimitSelected={handleLimitChange}
        // NOTE: Show/Hide
        showSearch={props.showSearch}
        showFilterButton={props.showFilterButton}
        showColumnButton={props.showColumnButton}
        showAddButton={props.showAddButton}
        showTotal={props.showTotal}
        showDeleteSelectedButton={isMultipleMode && props.showDeleteSelectedButton}
        showForceDeleteSelectedButton={isMultipleMode && props.showForceDeleteSelectedButton}
        showPageLimit={props.showPageLimit}
      />
    )
  }, [rowSelected, total])

  const bottomContent = useMemo(() => {
    return (
      <BottomContent
        rows={rows}
        page={page}
        total={total}
        limit={limit}
        rowSelected={rowSelected}
        onPageChange={handlePageChange}
        showTotalSelected={isMultipleMode && props.showTotalSelected}
        showPagination={props.showPagination}
        showNavigation={props.showNavigation}
        loading={loading}
      />
    )
  }, [rowSelected, rows.length, loading])

  const onSelectionChange = useCallback(
    (keys: Selection) => {
      if (keys === 'all') {
        return handleRowSelected?.(rows.map((row) => row?.key || row?.id) as string[])
      }

      handleRowSelected?.(Array.from(keys) as string[])
    },
    [rows],
  )

  const handleSingleRowSelected = useCallback((key: React.Key) => {
    onSelectionChange?.(new Set([key]))
  }, [])

  return (
    <>
      <ModalConfirm
        {...modalConfirm}
        onSubmit={handleSubmitConfirmModal}
        onClose={handleCloseConfirmModal}
        title={`Confirm ${kebabToCapital(state)} Item`}
        msg={
          <p>
            Are you sure you want to <Code>{kebabToCapital(state)}</Code> this item?
          </p>
        }
      />

      {formBuilder && (
        <ModalForm
          {...modalForm}
          onSubmit={handleSubmit(handleSubmitFormModal)}
          onClose={handleCloseFormModal}
          title={kebabToCapital(state)}
          renderForm={() => formBuilder(control, errors)}
        />
      )}

      <NextUITable
        fullWidth
        aria-label='Table with dynamic content'
        selectionMode={selectedMode}
        selectedKeys={new Set(rowSelected)}
        onSelectionChange={onSelectionChange}
        onRowAction={isSingleMode ? handleSingleRowSelected : () => {}}
        topContent={topContent}
        bottomContent={bottomContent}
        topContentPlacement='outside'
        bottomContentPlacement='outside'
        isHeaderSticky
        checkboxesProps={{
          className: isMultipleMode ? 'max-w-[44px]' : '',
        }}
        classNames={{
          wrapper: tableBodyHeight,
          th: [isMultipleMode ? 'first:w-[44px]' : ''],
        }}
      >
        <TableHeader columns={columns}>{(col) => renderColumn(col)}</TableHeader>

        <TableBody
          items={rows}
          emptyContent={
            <div className={['flex items-center justify-center', tableBodyEmptyStateHeight].join(' ')}>
              No rows to display.
            </div>
          }
          isLoading={loading}
          loadingContent={
            <div className='flex items-center justify-center w-full h-full z-20 backdrop-blur-sm'>
              <LoadingSpinner />
            </div>
          }
        >
          {(item) => <TableRow key={item.key as React.Key}>{(key) => renderCell(key, item)}</TableRow>}
        </TableBody>
      </NextUITable>
    </>
  )
}
