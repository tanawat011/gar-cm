'use client'

import type { todo as Todo } from '@prisma/client'

import { useContext, useEffect, useState } from 'react'

import { useMutation, useQuery } from '@apollo/client'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import { useForm } from 'react-hook-form'

import { CoreLayoutContext } from '@/components/CoreLayout/Provider'
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
  const { onLoading } = useContext(CoreLayoutContext)

  const { data, refetch, loading } = useQuery<{ todos: { data: Todo[]; count: number } }>(queryTodos, {
    variables: {
      where: {
        deletedAt: null,
      },
    },
  })
  const [createTodo] = useMutation(mutationCreateTodo)
  const [updateTodo] = useMutation(mutationUpdateTodo)
  const [deleteTodo] = useMutation(mutationDeleteTodo)
  const [forceDeleteTodo] = useMutation(mutationForceDeleteTodo)

  const modalForm = useDisclosure()
  const modalConfirm = useDisclosure()

  const [modalType, setModalType] = useState<ModalType>()
  const [page, setPage] = useState(1)
  const [statusSelected, setStatusSelected] = useState<string[]>([])

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
    onLoading(loading)
  }, [loading])

  useEffect(() => {
    refetch({
      page,
      done: statusSelected.includes('done') || undefined,
      important: statusSelected.includes('important') || undefined,
      deleted: statusSelected.includes('deleted') || undefined,
      undone: statusSelected.includes('undone') || undefined,
      unimportant: statusSelected.includes('unimportant') || undefined,
      undeleted: statusSelected.includes('undeleted') || undefined,
    })
  }, [statusSelected, page])

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
    onLoading(false)
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
    onLoading(true)

    if (variables.id) {
      await updateTodo({
        variables,
      })
    } else {
      await createTodo({
        variables,
      })
    }

    await refetch({
      variables: {
        where: {
          deletedAt: null,
        },
      },
    })
    onCloseForm()
  }

  const onSubmitConfirm = async (variables: Todo) => {
    onLoading(true)

    let action: (opt?: { variables: Todo }) => Promise<unknown> = () => Promise.resolve()

    switch (modalType) {
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

    await refetch({
      variables: {
        where: {
          deletedAt: null,
        },
      },
    })
    onCloseConfirm()
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

      <Modal
        isOpen={modalConfirm.isOpen}
        placement='center'
        onOpenChange={modalConfirm.onOpenChange}
        onClose={onCloseConfirm}
      >
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmitConfirm)}>
            <ModalHeader>Confirm Delete Item</ModalHeader>

            <ModalBody>
              <p>
                Are you sure you want to {toCapitalCase(`${modalType === 'f-delete' ? 'delete' : modalType}`)} this
                item?
              </p>
            </ModalBody>

            <ModalFooter>
              <Button color='danger' variant='light' onPress={onCloseConfirm}>
                Close
              </Button>
              <Button color='primary' type='submit'>
                Confirm
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>

      <TodoTable
        data={data?.todos.data || []}
        total={data?.todos.count || 0}
        page={page}
        refetch={refetch}
        onOpenModalForm={modalForm.onOpen}
        onOpenModalConfirm={modalConfirm.onOpen}
        onSetItem={onSetItem}
        setModalType={setModalType}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        forceDeleteTodo={forceDeleteTodo}
        statusSelected={statusSelected}
        onStatusSelected={setStatusSelected}
        onChangePage={setPage}
      />

      {/* <div>
        <p className='line-through text-slate-500'>NextUI</p>
        <p className='line-through text-slate-500'>Core Layout</p>
        <p className='line-through text-slate-500'>Dark Theme</p>
        <p className='line-through text-slate-500'>Light Theme</p>
        <p className='line-through text-slate-500'>Toggle Theme</p>
        <p className='line-through text-slate-500'>Toggle Language</p>
        <p className='line-through text-slate-500'>Support Mobile Device(IOS & ANDROID)</p>
        <p className='line-through text-slate-500'>Support IPad & Tablet Device</p>
        <p className='line-through text-slate-500'>Redux & Redux Toolkit</p>
        <p className='line-through text-slate-500'>Sidebar Toggle</p>
        <p className='line-through text-slate-500'>Full Sidebar</p>
        <p className='line-through text-slate-500'>Mini Sidebar</p>
        <p className='line-through text-slate-500'>Drawer Sidebar</p>
        <p className='line-through text-slate-500'>Setting drawer position</p>
        <p className='line-through text-slate-500'>Setting sidebar type</p>
        <p className='line-through text-slate-500'>Setting sidebar style</p>
        <p className='line-through text-slate-500'>Setting navbar fixed</p>
        <p className='line-through text-slate-500'>Setting navbar style</p>
        <p>Setting font family</p>
        <p>Setting Core Color</p>
        <p className='line-through text-slate-500'>Mobile Device Option Setting</p>
        <p className='line-through text-slate-500'>Mobile Device Sidebar Toggle</p>
        <p>Modal Notification List</p>
        <p>Modal Quick Search</p>
        <p className='line-through text-slate-500'>Sidebar Drawer</p>
        <p className='line-through text-slate-500'>Sidebar Mini</p>
        <p className='line-through text-slate-500'>Sidebar Full</p>
        <p className='line-through text-slate-500'>Sidebar Logo</p>
        <p className='line-through text-slate-500'>Sidebar Menu</p>
        <p className='line-through text-slate-500'>Sidebar Footer</p>
        <p className='line-through text-slate-500'>Footer</p>
        <p>Navbar Modern Style</p>
        <p>Favicon</p>
        <p className='line-through text-slate-500'>DrawerSetting Decoration</p>
        <p className='line-through text-slate-500'>Sidebar Decoration</p>
        <p>Manage Dark Theme Color</p>
        <p>Manage Light Theme Color</p>
        <p>Refactor Core Layout Container</p>
        <p>Refactor Core Layout Navbar Left</p>
        <p className='line-through text-slate-500'>Styled component</p>
        <p>Breadcrumb</p>
        <p>Card</p>
        <p>Colors</p>
        <p>Typography</p>
        <p>Grid</p>
        <p>Flex</p>
        <p>Todo List Application</p>
        <p>Link Remember Application</p>
        <p>Expense Tracker Application</p>
        <p>Money Saving Simulation Application</p>
        <p>Home Loan Calculation Application</p>
        <p>Car Loan Calculation Application</p>
        <p>Tax Calculation Application</p>
        <p>I18N</p>
        <p>Storybook</p>
        <p className='line-through text-slate-500'>Yoga GraphiQL Server</p>
        <p className='line-through text-slate-500'>GraphQL</p>
        <p className='line-through text-slate-500'>MongoDB</p>
        <p className='line-through text-slate-500'>Prisma</p>
        <p className='line-through text-slate-500'>Auth0</p>
        <p>Form.io</p>
      </div> */}
    </>
  )
}
