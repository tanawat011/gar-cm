import type { FieldRef } from '@pothos/core'
import type { review_me as ReviewMe } from '@prisma/client'

import prisma from '@/libs/prisma'

import { builder } from '../builder'

type ReviewMeFieldObj = Record<keyof ReviewMe, FieldRef>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reviewMeFieldObj: (t: any) => ReviewMeFieldObj = (t) => ({
  review: t.exposeString('review', {}),
  name: t.exposeString('name', {}),

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

export class ReviewMeList {
  count: number
  data: ReviewMe[]

  constructor(count: number, data: ReviewMe[]) {
    this.count = count
    this.data = data
  }
}

const ReviewMeObj = builder.objectRef<ReviewMe>('reviewMeObj')

ReviewMeObj.implement({
  fields: reviewMeFieldObj,
})

builder.objectType(ReviewMeList, {
  name: 'reviewMeList',
  description: 'Review me list',
  fields: (t) => ({
    count: t.exposeInt('count', {}),
    data: t.field({
      type: [ReviewMeObj],
      resolve: (parent) => parent.data,
    }),
  }),
})

builder.prismaObject('review_me', {
  fields: reviewMeFieldObj,
})

builder.queryField('reviewMeList', (t) => {
  return t.field({
    type: ReviewMeList,
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
            },
          ],
        },
      }

      const [count = 0, data = []] = await prisma.$transaction([
        prisma.review_me.count(query),
        prisma.review_me.findMany({
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
