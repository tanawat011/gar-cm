import prisma from '@/libs/prisma'

import { builder } from '../builder'

builder.prismaObject('todo', {
  fields: (t) => ({
    id: t.exposeID('id'),
    active: t.expose('active', { type: 'Boolean' }),
    createdAt: t.expose('createdAt', { type: 'Date' }),
    createdBy: t.exposeString('createdBy', { nullable: true }),
    updatedAt: t.expose('updatedAt', { type: 'Date' }),
    updatedBy: t.exposeString('createdBy', { nullable: true }),
    deletedAt: t.expose('deletedAt', { type: 'Date', nullable: true }),
    deletedBy: t.exposeString('deletedBy', { nullable: true }),
    name: t.exposeString('name', {}),
    done: t.exposeBoolean('done', { nullable: true }),
    category: t.exposeString('category', { nullable: true }),
  }),
})

builder.queryField('todos', (t) =>
  t.prismaField({
    type: ['todo'],
    resolve: async (query) => {
      return prisma.todo.findMany({
        ...query,
        where: {
          deletedAt: {
            not: undefined,
          },
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
      done: t.arg.boolean(),
      category: t.arg.string(),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { name, done, category = '' } = args

      return prisma.todo.create({
        ...query,
        data: {
          name,
          done: !!done,
          category,
          createdBy: ctx.user?.email,
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
      done: t.arg.boolean(),
      category: t.arg.string(),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { id, name, done, category } = args

      return prisma.todo.update({
        ...query,
        where: {
          id,
        },
        data: {
          ...(name && { name }),
          done: !!done,
          category,
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
    resolve: async (query, _parent, args, ctx) => {
      const { id } = args

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
    resolve: async (query, _parent, args) => {
      const { id } = args

      return prisma.todo.delete({
        ...query,
        where: {
          id,
        },
      })
    },
  }),
)
