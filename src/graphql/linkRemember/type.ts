import type { FieldRef } from '@pothos/core'
import type { link_remember as LinkRemember } from '@prisma/client'

import prisma from '@/libs/prisma'

import { Ids, builder } from '../builder'

type LinkRememberFieldObj = Record<keyof LinkRemember, FieldRef>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const linkRememberFieldObj: (t: any) => LinkRememberFieldObj = (t) => ({
  name: t.exposeString('name'),
  link: t.exposeString('link'),

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

export class LinkRememberList {
  count: number
  data: LinkRemember[]

  constructor(count: number, data: LinkRemember[]) {
    this.count = count
    this.data = data
  }
}

// All Object Type
const LinkRememberObj = builder.objectRef<LinkRemember>('linkRememberObj')

LinkRememberObj.implement({
  fields: linkRememberFieldObj,
})

builder.objectType(LinkRememberList, {
  name: 'linkRemembers',
  description: 'Link Remember list',
  fields: (t) => ({
    count: t.exposeInt('count', {}),
    data: t.field({
      type: [LinkRememberObj],
      resolve: (parent) => parent.data,
    }),
  }),
})

builder.prismaObject('link_remember', {
  fields: linkRememberFieldObj,
})

// Query
builder.queryField('linkRemembers', (t) => {
  return t.field({
    type: LinkRememberList,
    args: {
      search: t.arg.string(),
      page: t.arg.int(),
      limit: t.arg.int(),
    },
    resolve: async (_parent, _args, ctx) => {
      const { search, limit, page } = _args
      const _page = page || 1
      const _limit = limit ?? 10

      const query = {
        where: {
          AND: [
            {
              ...(!!search && { name: { contains: search } }),
              createdBy: ctx.user?.email,
            },
          ],
        },
      }

      const [count = 0, data = []] = await prisma.$transaction([
        prisma.link_remember.count(query),
        prisma.link_remember.findMany({
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
builder.mutationField('createLinkRemember', (t) =>
  t.prismaField({
    type: 'link_remember',
    args: {
      name: t.arg.string({ required: true }),
      link: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, _args, ctx) => {
      const { name, link } = _args

      return prisma.link_remember.create({
        ...query,
        data: {
          name,
          link,
          createdBy: ctx.user?.email,
          deletedAt: null,
          deletedBy: null,
        },
      })
    },
  }),
)

builder.mutationField('updateLinkRemember', (t) =>
  t.prismaField({
    type: 'link_remember',
    args: {
      id: t.arg.string({ required: true }),
      name: t.arg.string(),
      link: t.arg.string(),
    },
    resolve: async (query, _parent, _args, ctx) => {
      const { id, name, link } = _args

      return prisma.link_remember.update({
        ...query,
        where: {
          id,
        },
        data: {
          ...(name && { name }),
          ...(link && { link }),
          updatedAt: new Date(),
          updatedBy: ctx.user?.email,
        },
      })
    },
  }),
)

builder.mutationField('deleteLinkRemember', (t) =>
  t.prismaField({
    type: 'link_remember',
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, _args, ctx) => {
      const { id } = _args

      return prisma.link_remember.update({
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

builder.mutationField('forceDeleteLinkRemember', (t) =>
  t.prismaField({
    type: 'link_remember',
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, _args) => {
      const { id } = _args

      return prisma.link_remember.delete({
        ...query,
        where: {
          id,
        },
      })
    },
  }),
)

builder.mutationField('deleteSelectedLinkRemember', (t) => {
  return t.field({
    type: Ids,
    args: {
      ids: t.arg.stringList({ required: true }),
    },
    resolve: async (_parent, _args, ctx) => {
      const { ids } = _args

      await prisma.link_remember.updateMany({
        where: {
          id: {
            in: ids,
          },
        },
        data: {
          deletedAt: new Date(),
          deletedBy: ctx.user?.email,
        },
      })

      return { ids }
    },
  })
})

builder.mutationField('forceDeleteSelectedLinkRemember', (t) => {
  return t.field({
    type: Ids,
    args: {
      ids: t.arg.stringList({ required: true }),
    },
    resolve: async (_parent, _args) => {
      const { ids } = _args

      await prisma.link_remember.deleteMany({
        where: {
          id: {
            in: ids,
          },
        },
      })

      return { ids }
    },
  })
})
