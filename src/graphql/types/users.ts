import { Role } from '@prisma/client'
import bcrypt from 'bcryptjs'

import { builder } from '../builder'

const RoleEnum = builder.enumType('Role', {
  values: Object.values(Role),
})

builder.prismaObject('users', {
  fields: (t) => ({
    id: t.exposeID('id'),
    createdAt: t.expose('createdAt', { type: 'Date' }),
    createdBy: t.exposeString('createdBy', { nullable: true }),
    updatedAt: t.expose('updatedAt', { type: 'Date' }),
    updatedBy: t.exposeString('createdBy', { nullable: true }),
    deletedAt: t.expose('deletedAt', { type: 'Date', nullable: true }),
    deletedBy: t.exposeString('deletedBy', { nullable: true }),
    email: t.exposeString('email', {}),
    nickname: t.exposeString('nickname', { nullable: true }),
    age: t.exposeInt('age', { nullable: true }),
    image: t.exposeString('image', { nullable: true }),
    role: t.expose('role', { type: RoleEnum, nullable: true }),
  }),
})

builder.queryField('users', (t) =>
  t.prismaField({
    type: ['users'],
    resolve: async (query) =>
      prisma.users.findMany({
        ...query,
      }),
  }),
)

builder.mutationField('createUser', (t) =>
  t.prismaField({
    type: 'users',
    args: {
      email: t.arg.string({ required: true }),
      password: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { email, password } = args

      if (!(await ctx).email) {
        throw new Error('You have to be logged in to perform this action')
      }

      const user = await prisma.users.findUnique({
        where: {
          email: (await ctx).email,
        },
      })

      if (!user || user.role !== 'ADMIN') {
        throw new Error('You don`t have permission to perform this action')
      }

      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(password, salt)

      return prisma.users.create({
        ...query,
        data: {
          email,
          password: hash,
        },
      })
    },
  }),
)
