import { builder } from '../builder'

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
    username: t.exposeString('username', {}),
    password: t.exposeString('password', { nullable: true }),
    nickname: t.exposeString('nickname', { nullable: true }),
    age: t.exposeInt('age', { nullable: true }),
    image: t.exposeString('image', { nullable: true }),
    role: t.expose('role', { type: Role, nullable: true }),
  }),
})

const Role = builder.enumType('Role', {
  values: ['USER', 'ADMIN'] as const,
})

builder.queryField('users', (t) =>
  t.prismaField({
    type: ['users'],
    resolve: async (query) =>
      prisma.users.findMany({
        ...query,
        // where: {
        //   OR: [
        //     {
        //       NOT: {
        //         deletedAt: undefined,
        //       },
        //     },
        //     {
        //       NOT: {
        //         deletedAt: null,
        //       },
        //     },
        //   ],
        // },
      }),
  }),
)

builder.mutationField('createUser', (t) =>
  t.prismaField({
    type: 'users',
    args: {
      email: t.arg.string({ required: true }),
      username: t.arg.string({ required: true }),
      password: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { email, password, username } = args

      if (!(await ctx).username) {
        throw new Error('You have to be logged in to perform this action')
      }

      const user = await prisma.users.findUnique({
        where: {
          email: (await ctx).username,
        },
      })

      if (!user || user.role !== 'ADMIN') {
        throw new Error('You don have permission ot perform this action')
      }

      return prisma.users.create({
        ...query,
        data: {
          email,
          password,
          username,
        },
      })
    },
  }),
)
