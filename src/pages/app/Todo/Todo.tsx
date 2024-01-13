'use client'

import type { CrudType, TableLimitList } from '@/components/NextUI'
import type { todo as Todo } from '@prisma/client'

import { useEffect, useState } from 'react'

import { useDisclosure } from '@nextui-org/react'
import { useForm } from 'react-hook-form'

import { ModalConfirm, ModalForm } from '@/components/NextUI'
import {
  mutationCreateTodo,
  mutationDeleteTodo,
  mutationForceDeleteTodo,
  mutationUpdateTodo,
  queryTodos,
} from '@/graphql/client/todo'
import { useGqlCrud } from '@/hooks/useGqlCrud'
import { toCapital } from '@/libs/utilities'

import { FormConfig } from './FormConfig'
import { TableConfig } from './TableConfig'

export const AppTodo = () => {
  const { loading, dataList, refetchList, createItem, updateItem, deleteItem, forceDeleteItem } = useGqlCrud({
    queryList: queryTodos,
    mutationCreate: mutationCreateTodo,
    mutationUpdate: mutationUpdateTodo,
    mutationDelete: mutationDeleteTodo,
    mutationForceDelete: mutationForceDeleteTodo,
  })

  const modalForm = useDisclosure()
  const modalConfirm = useDisclosure()

  const [crudType, setCrudType] = useState<CrudType>()
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState<TableLimitList>(10)
  const [filterSelected, setFilterSelected] = useState<string[]>([])

  const {
    handleSubmit,
    formState: { errors },
    clearErrors,
    control,
    reset,
    setValue,
  } = useForm<Todo>({
    defaultValues: {
      name: '',
      detail: '',
      done: false,
      important: false,
    },
  })

  useEffect(() => {
    setPage(1)
    onRefetch(1)
  }, [filterSelected, search])

  useEffect(() => {
    onRefetch()
  }, [page, limit])

  const onRefetch = async (_page?: number) => {
    await refetchList({
      search,
      page: _page || page,
      limit,
      done: filterSelected.includes('done') || undefined,
      important: filterSelected.includes('important') || undefined,
      deleted: filterSelected.includes('deleted') || undefined,
      undone: filterSelected.includes('undone') || undefined,
      unimportant: filterSelected.includes('unimportant') || undefined,
      undeleted: filterSelected.includes('undeleted') || undefined,
    })
  }

  const onSetItem = (item: Todo, _crudType: CrudType) => {
    setCrudType(_crudType)

    if (_crudType === 'delete' || _crudType === 'force-delete') {
      return setValue('id', item.id)
    }

    if (_crudType === 'edit') setValue('id', item.id)

    setValue('name', item.name)
    setValue('detail', item.detail)
    setValue('done', item.done)
    setValue('important', item.important)
  }

  const onResetForm = () => {
    clearErrors()
    reset()
  }

  const onCloseForm = () => {
    modalForm.onClose()
    onResetForm()
  }

  const onCloseConfirm = () => {
    modalConfirm.onClose()
    onResetForm()
  }

  const onSubmit = async (variables: Todo) => {
    let action: (opt?: { variables: Todo }) => Promise<unknown> = () => Promise.resolve()

    switch (crudType) {
      case 'copy':
      case 'clone':
      case 'add':
        action = createItem
        break
      case 'edit':
        action = updateItem
        break
      case 'delete':
        action = deleteItem
        break
      case 'force-delete':
        action = forceDeleteItem
        break
    }

    await action({
      variables,
    })

    onCloseForm()
    onCloseConfirm()

    await onRefetch()
  }

  return (
    <>
      <ModalForm
        {...modalForm}
        onSubmit={handleSubmit(onSubmit)}
        onClose={onCloseForm}
        title={toCapital(`${crudType}`)}
        renderForm={() => <FormConfig errors={errors} control={control} />}
      />

      <ModalConfirm
        {...modalConfirm}
        onSubmit={handleSubmit(onSubmit)}
        onClose={onCloseConfirm}
        title={`Confirm ${`${crudType === 'force-delete' ? 'delete' : crudType}`} Item`}
        msg={`Are you sure you want to ${toCapital(`${crudType === 'force-delete' ? 'delete' : crudType}`)} this item?`}
      />

      <TableConfig
        data={dataList?.todos.data || []}
        search={search}
        onSearch={setSearch}
        total={dataList?.todos.count || 0}
        page={page}
        limit={limit}
        loading={loading}
        refetch={refetchList}
        onOpenForm={modalForm.onOpen}
        onOpenModalConfirm={modalConfirm.onOpen}
        onSetItem={onSetItem}
        setCrudType={setCrudType}
        updateTodo={updateItem}
        deleteTodo={deleteItem}
        forceDeleteTodo={forceDeleteItem}
        filterSelected={filterSelected}
        onFilterSelected={setFilterSelected}
        onChangePage={setPage}
        onChangeLimit={setLimit}
      />
    </>
  )
}
