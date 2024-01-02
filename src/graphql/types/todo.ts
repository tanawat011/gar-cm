import type { FieldRef } from '@pothos/core'
import type { todo as Todo } from '@prisma/client'

import prisma from '@/libs/prisma'

import { builder } from '../builder'

type TodoFieldObj = Record<keyof Todo, FieldRef>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const todoFieldObj: (t: any) => TodoFieldObj = (t) => ({
  name: t.exposeString('name'),
  detail: t.exposeString('detail', { nullable: true }),
  tags: t.exposeStringList('tags', { nullable: true }),
  done: t.exposeBoolean('done', { nullable: true }),
  important: t.exposeBoolean('important', { nullable: true }),
  duedate: t.expose('duedate', { type: 'Date', nullable: true }),

  // Audit record fields
  id: t.exposeID('id'),
  active: t.expose('active', { type: 'Boolean' }),
  createdAt: t.expose('createdAt', { type: 'Date' }),
  createdBy: t.exposeString('createdBy', { nullable: true }),
  updatedAt: t.expose('updatedAt', { type: 'Date' }),
  updatedBy: t.exposeString('createdBy', { nullable: true }),
  deletedAt: t.expose('deletedAt', { type: 'Date', nullable: true }),
  deletedBy: t.exposeString('deletedBy', { nullable: true }),
})

export class TodoList {
  count: number
  data: Todo[]

  constructor(count: number, data: Todo[]) {
    this.count = count
    this.data = data
  }
}

// All Object Type
const TodoObj = builder.objectRef<Todo>('todoo')

TodoObj.implement({
  fields: todoFieldObj,
})

builder.objectType(TodoList, {
  name: 'todos',
  description: 'Todo list',
  fields: (t) => ({
    count: t.exposeInt('count', {}),
    data: t.field({
      type: [TodoObj],
      resolve: (parent) => parent.data,
    }),
  }),
})

builder.prismaObject('todo', {
  fields: todoFieldObj,
})

// Query
builder.queryField('todos', (t) => {
  return t.field({
    type: TodoList,
    args: {
      search: t.arg.string(),
      done: t.arg.boolean(),
      important: t.arg.boolean(),
      deleted: t.arg.boolean(),
      undone: t.arg.boolean(),
      unimportant: t.arg.boolean(),
      undeleted: t.arg.boolean(),
      page: t.arg.int(),
      limit: t.arg.int(),
    },
    resolve: async (_parent, _args, ctx) => {
      const { search, limit, page, done, important, deleted, undone, unimportant, undeleted } = _args
      const _page = page || 1
      const _limit = limit ?? 10

      const query = {
        where: {
          AND: [
            {
              ...(!!search && { name: { contains: search } }),
              createdBy: ctx.user?.email,
            },
            ...(typeof deleted === 'undefined' ? [{ deletedAt: null }] : []),
            {
              OR: [
                ...(typeof done === 'undefined' ? [] : [{ done: !!done }]),
                ...(typeof undone === 'undefined' ? [] : [{ done: { not: !!undone } }]),
              ],
            },
            {
              OR: [
                ...(typeof important === 'undefined' ? [] : [{ important: !!important }]),
                ...(typeof unimportant === 'undefined' ? [] : [{ important: { not: !!unimportant } }]),
              ],
            },
            {
              OR: [
                ...(typeof deleted === 'undefined' ? [] : [{ deletedAt: { not: null } }]),
                ...(typeof undeleted === 'undefined' ? [] : [{ deletedAt: null }]),
              ],
            },
          ],
        },
      }

      const [count, data] = await prisma.$transaction([
        prisma.todo.count(query),
        prisma.todo.findMany({
          take: _limit,
          skip: (_page - 1) * _limit,
          ...(_limit === 0 && { take: undefined, skip: undefined }), // _limit = 0 will return all
          ...query,
        }),
      ])

      return {
        count,
        data,
      }
    },
  })
})

// Mutation
builder.mutationField('createTodo', (t) =>
  t.prismaField({
    type: 'todo',
    args: {
      name: t.arg.string({ required: true }),
      detail: t.arg.string(),
      tags: t.arg.stringList(),
      done: t.arg.boolean(),
      important: t.arg.boolean(),
      duedate: t.arg.string(),
    },
    resolve: async (query, _parent, _args, ctx) => {
      const { name, done, important, tags, duedate } = _args

      return prisma.todo.create({
        ...query,
        data: {
          name,
          done: !!done,
          important: !!important,
          tags: tags?.map((tag) => tag.toLowerCase()) ?? [],
          duedate,
          createdBy: ctx.user?.email,
          deletedAt: null,
          deletedBy: null,
        },
      })
    },
  }),
)

builder.mutationField('updateTodo', (t) =>
  t.prismaField({
    type: 'todo',
    args: {
      id: t.arg.string({ required: true }),
      name: t.arg.string(),
      detail: t.arg.string(),
      tags: t.arg.stringList(),
      done: t.arg.boolean(),
      important: t.arg.boolean(),
      duedate: t.arg.string(),
    },
    resolve: async (query, _parent, _args, ctx) => {
      const { id, name, done, important, detail, tags, duedate } = _args

      return prisma.todo.update({
        ...query,
        where: {
          id,
        },
        data: {
          ...(name && { name }),
          ...(detail && { detail }),
          ...(tags && { tags: tags?.map((tag) => tag.toLowerCase()) }),
          ...(duedate && { duedate }),
          ...(typeof done === 'boolean' && { done: !!done }),
          ...(typeof important === 'boolean' && { important: !!important }),
          updatedAt: new Date(),
          updatedBy: ctx.user?.email,
        },
      })
    },
  }),
)

builder.mutationField('deleteTodo', (t) =>
  t.prismaField({
    type: 'todo',
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, _args, ctx) => {
      const { id } = _args

      return prisma.todo.update({
        ...query,
        where: {
          id,
        },
        data: {
          deletedAt: new Date(),
          deletedBy: ctx.user?.email,
        },
      })
    },
  }),
)

builder.mutationField('forceDeleteTodo', (t) =>
  t.prismaField({
    type: 'todo',
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, _args) => {
      const { id } = _args

      return prisma.todo.delete({
        ...query,
        where: {
          id,
        },
      })
    },
  }),
)
