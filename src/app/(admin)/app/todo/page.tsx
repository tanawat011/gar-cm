'use client'

import type { TableLimitList } from '@/components/NextUI'
import type { todo as Todo } from '@prisma/client'

import { useEffect, useState } from 'react'

import { useMutation, useQuery } from '@apollo/client'
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

export type ModalType = 'add' | 'edit' | 'copy' | 'delete' | 'f-delete' | 'clone'

export default function ToDo() {
  const { data, refetch, loading } = useQuery<{ todos: { data: Todo[]; count: number } }>(queryTodos)
  const [createTodo] = useMutation(mutationCreateTodo)
  const [updateTodo] = useMutation(mutationUpdateTodo)
  const [deleteTodo] = useMutation(mutationDeleteTodo)
  const [forceDeleteTodo] = useMutation(mutationForceDeleteTodo)

  const modalForm = useDisclosure()
  const modalConfirm = useDisclosure()

  const [modalType, setModalType] = useState<ModalType>()
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
    await refetch({
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
      case 'add':
        action = createTodo
        break
      case 'edit':
        action = updateTodo
        break
      case 'delete':
        action = deleteTodo
        break
      case 'f-delete':
        action = forceDeleteTodo
        break
      case 'clone':
        action = createTodo
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
        data={data?.todos.data || []}
        search={search}
        onSearch={setSearch}
        total={data?.todos.count || 0}
        page={page}
        limit={limit}
        loading={loading}
        refetch={refetch}
        onOpenModalForm={modalForm.onOpen}
        onOpenModalConfirm={modalConfirm.onOpen}
        onSetItem={onSetItem}
        setModalType={setModalType}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        forceDeleteTodo={forceDeleteTodo}
        filterSelected={filterSelected}
        onFilterSelected={setFilterSelected}
        onChangePage={setPage}
        onChangeLimit={setLimit}
      />
    </>
  )
}
