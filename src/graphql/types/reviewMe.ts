import prisma from '@/libs/prisma'

import { builder } from '../builder'

builder.prismaObject('review_me', {
  fields: (t) => ({
    id: t.exposeID('id'),
    active: t.expose('active', { type: 'Boolean' }),
    createdAt: t.expose('createdAt', { type: 'Date' }),
    createdBy: t.exposeString('createdBy', { nullable: true }),
    updatedAt: t.expose('updatedAt', { type: 'Date' }),
    updatedBy: t.exposeString('createdBy', { nullable: true }),
    deletedAt: t.expose('deletedAt', { type: 'Date', nullable: true }),
    deletedBy: t.exposeString('deletedBy', { nullable: true }),
    review: t.exposeString('review', {}),
    name: t.exposeString('name', {}),
  }),
})

builder.queryField('review', (t) =>
  t.prismaField({
    type: ['review_me'],
    resolve: async (query) =>
      prisma.review_me.findMany({
        ...query,
      }),
  }),
)

builder.mutationField('reviewMe', (t) =>
  t.prismaField({
    type: 'review_me',
    args: {
      review: t.arg.string({ required: true }),
      name: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args) => {
      const { review, name } = args

      return prisma.review_me.create({
        ...query,
        data: {
          review,
          name,
        },
      })
    },
  }),
)
