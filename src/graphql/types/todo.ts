import prisma from '@/libs/prisma'

import { builder } from '../builder'

builder.prismaObject('todo', {
  fields: (t) => ({
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
  }),
})

builder.queryField('todos', (t) =>
  t.prismaField({
    type: ['todo'],
    args: {
      done: t.arg.boolean(),
      important: t.arg.boolean(),
      deleted: t.arg.boolean(),
      undone: t.arg.boolean(),
      unimportant: t.arg.boolean(),
      undeleted: t.arg.boolean(),
      orderBy: t.arg.string(),
      cursor: t.arg.string(),
      skip: t.arg.int(),
      take: t.arg.int(),
    },
    resolve: async (_query, _parent, _args, ctx) => {
      const { take, skip, done, important, deleted = true, undone, unimportant, undeleted } = _args

      return prisma.todo.findMany({
        take: take ?? 10,
        skip: skip ?? 0,
        where: {
          AND: [
            {
              createdBy: ctx.user?.email,
            },
            ...(done ? [{ done: true }] : []),
            ...(important ? [{ important: true }] : []),
            ...(deleted ? [{ deletedAt: null }] : []),
            ...(undone ? [{ done: false }] : []),
            ...(unimportant ? [{ important: false }] : []),
            ...(undeleted ? [{ deletedAt: { not: null } }] : []),
          ],
          // done: !!_args.done,
          // important: !!_args.important,
          // deletedAt: _args.deleted ? { not: null } : null,
          // createdBy: ctx.user?.email,
        },
      })
    },
  }),
)

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
