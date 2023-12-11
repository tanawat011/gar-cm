import type { DataSource } from '.'
import type { NextRequest } from 'next/server'

type Context = {
  dataSources: {
    auth: DataSource
  }
}

const getContext = (ctx: Context) => ctx.dataSources.auth

export const resolvers = {
  Mutation: {
    signIn: async (_: NextRequest, { email, password }: { email: string; password: string }, ctx: Context) => {
      console.log('signIn', email, password)

      const res = await getContext(ctx).signIn(email, password)

      return {
        ...res,
        _id: res._id.toString(),
        token: 'token',
      }
    },
  },
}
