'use client'

import type { TableLimitList } from '@/components/NextUI'
import type { todo as Todo } from '@prisma/client'

import { useEffect, useState } from 'react'

import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import { useForm } from 'react-hook-form'

import { ModalConfirm } from '@/components/NextUI'
import {
  mutationCreateTodo,
  mutationDeleteTodo,
  mutationForceDeleteTodo,
  mutationUpdateTodo,
  queryTodos,
} from '@/graphql/client/todo'
import { toCapitalCase } from '@/utils'

import { TodoForm } from './TodoForm'
import { TodoTable } from './TodoTable'
import { useGqlCrud } from './useGqlCrud'

export type ModalType = 'add' | 'edit' | 'copy' | 'delete' | 'f-delete' | 'clone'

export default function ToDo() {
  const { loading, dataList, refetchList, createItem, updateItem, deleteItem, forceDeleteItem } = useGqlCrud({
    queryList: queryTodos,
    mutationCreate: mutationCreateTodo,
    mutationUpdate: mutationUpdateTodo,
    mutationDelete: mutationDeleteTodo,
    mutationForceDelete: mutationForceDeleteTodo,
  })

  const modalForm = useDisclosure()
  const modalConfirm = useDisclosure()

  const [modalType, setModalType] = useState<ModalType>()
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState<TableLimitList>(10)
  const [filterSelected, setFilterSelected] = useState<string[]>([])
  const [columnSelected, setColumnSelected] = useState<string[]>([])

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

  const onSetItem = (item: Todo, _modalType: ModalType) => {
    setModalType(_modalType)

    if (_modalType === 'delete' || _modalType === 'f-delete') {
      return setValue('id', item.id)
    }

    if (_modalType === 'edit') setValue('id', item.id)

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

    switch (modalType) {
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
      case 'f-delete':
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
      <Modal isOpen={modalForm.isOpen} placement='center' onOpenChange={modalForm.onOpenChange} onClose={onCloseForm}>
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>{toCapitalCase(`${modalType}`)}</ModalHeader>

            <ModalBody>
              <TodoForm errors={errors} control={control} />
            </ModalBody>

            <ModalFooter>
              <Button color='danger' variant='light' onPress={onCloseForm}>
                Close
              </Button>
              <Button color='primary' type='submit'>
                Submit
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>

      <ModalConfirm
        {...modalConfirm}
        onSubmit={handleSubmit(onSubmit)}
        onClose={onCloseConfirm}
        title={`Confirm ${`${modalType === 'f-delete' ? 'delete' : modalType}`} Item`}
        msg={`Are you sure you want to ${toCapitalCase(
          `${modalType === 'f-delete' ? 'delete' : modalType}`,
        )} this item?`}
      />

      <TodoTable
        data={dataList?.todos.data || []}
        search={search}
        onSearch={setSearch}
        total={dataList?.todos.count || 0}
        page={page}
        limit={limit}
        loading={loading}
        refetch={refetchList}
        onOpenModalForm={modalForm.onOpen}
        onOpenModalConfirm={modalConfirm.onOpen}
        onSetItem={onSetItem}
        setModalType={setModalType}
        updateTodo={updateItem}
        deleteTodo={deleteItem}
        forceDeleteTodo={forceDeleteItem}
        filterSelected={filterSelected}
        onFilterSelected={setFilterSelected}
        columnSelected={columnSelected}
        onColumnSelected={setColumnSelected}
        onChangePage={setPage}
        onChangeLimit={setLimit}
      />
    </>
  )
}
