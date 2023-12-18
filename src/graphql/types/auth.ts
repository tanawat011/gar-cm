import bcrypt from 'bcryptjs'

import { builder } from '../builder'

builder.queryField('auth', (t) =>
  t.prismaField({
    type: 'users',
    args: {
      email: t.arg.string({ required: true }),
      password: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args) => {
      const { email, password } = args

      const user = await prisma.users.findUnique({
        ...query,
        where: {
          email,
        },
      })

      if (!user) {
        throw new Error('User not found')
      }

      const isPass = bcrypt.compareSync(password, user.password)

      if (!isPass) {
        throw new Error('You don`t have permission to perform this action')
      }

      return user
    },
  }),
)

builder.mutationField('register', (t) =>
  t.prismaField({
    type: 'users',
    args: {
      email: t.arg.string({ required: true }),
      password: t.arg.string({ required: true }),
      passwordAgain: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args) => {
      const { email, password, passwordAgain } = args

      if (password !== passwordAgain) {
        throw new Error('Passwords do not match')
      }

      const user = await prisma.users.findUnique({
        ...query,
        where: {
          email,
        },
      })

      if (user) {
        throw new Error('User already exists')
      }

      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(password, salt)

      return prisma.users.create({
        ...query,
        data: {
          email,
          password: hash,
          role: 'USER',
        },
      })
    },
  }),
)
