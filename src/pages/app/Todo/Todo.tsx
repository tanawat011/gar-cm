'use client'

import type { TableRefetchData, TableState } from '@/components/NextUI'
import type { todo as Todo } from '@prisma/client'

import { useCallback, useMemo, useState } from 'react'

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
  const { loading, data, refetch, createItem, updateItem, deleteItem, forceDeleteItem } = useGqlCrud({
    queryList: queryTodos,
    mutationCreate: mutationCreateTodo,
    mutationUpdate: mutationUpdateTodo,
    mutationDelete: mutationDeleteTodo,
    mutationForceDelete: mutationForceDeleteTodo,
  })

  const modalForm = useDisclosure()
  const modalConfirm = useDisclosure()

  const [crudType, setCrudType] = useState<TableState>()

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

  const onSetItem = (item: Todo, state: TableState) => {
    setCrudType(state)

    if (state === 'delete' || state === 'force-delete') {
      return setValue('id', item.id)
    }

    if (state === 'edit') setValue('id', item.id)

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

    await refetch()
  }

  const handleRefetchData = useCallback(async (v: TableRefetchData<Todo>) => {
    await refetch({
      search: v.search,
      page: v.page,
      limit: v.limit,
      done: v.filter?.includes('done') || undefined,
      important: v.filter?.includes('important') || undefined,
      deleted: v.filter?.includes('deleted') || undefined,
      undone: v.filter?.includes('undone') || undefined,
      unimportant: v.filter?.includes('unimportant') || undefined,
      undeleted: v.filter?.includes('undeleted') || undefined,
    })
  }, [])

  const renderTable = useMemo(() => {
    return (
      <TableConfig
        data={data?.todos.data || []}
        total={data?.todos.count || 0}
        loading={loading}
        refetch={refetch}
        onOpenForm={modalForm.onOpen}
        onOpenModalConfirm={modalConfirm.onOpen}
        onSetItem={onSetItem}
        onStateChange={setCrudType}
        updateTodo={updateItem}
        deleteTodo={deleteItem}
        forceDeleteTodo={forceDeleteItem}
        onRefetchData={handleRefetchData}
      />
    )
  }, [data?.todos, loading])

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

      {renderTable}
    </>
  )
}
