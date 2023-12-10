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
    auth: async (_: NextRequest, { email, password }: { email: string; password: string }, ctx: Context) => {
      return getContext(ctx).signIn(email, password)
    },
  },
}
