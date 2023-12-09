import type { DataSource } from '.'
import type { Document, InputDocument } from './type'
import type { NextRequest, NextResponse } from 'next/server'

type Context = {
  dataSources: {
    users: DataSource
  }
}

export const resolvers = {
  Query: {
    users: async (_: NextRequest, __: NextResponse, ctx: Context) => {
      try {
        return await ctx.dataSources.users.getAllUsers()
      } catch (error) {
        throw new Error('Failed to fetch users')
      }
    },
  },
  Mutation: {
    createUser: async (_: NextRequest, __: NextResponse, { input }: InputDocument, ctx: Context) => {
      try {
        const newUser = await ctx.dataSources.users.createUser({
          input,
        })

        return newUser
      } catch (error) {
        throw new Error('Failed to create user')
      }
    },
    updateUser: async (_: NextRequest, __: NextResponse, { input }: InputDocument, ctx: Context) => {
      try {
        return await ctx.dataSources.users.updateUser({ input })
      } catch (error) {
        throw new Error('Failed to update user')
      }
    },
    deleteUser: async (_: NextRequest, __: NextResponse, { _id }: Partial<Document>, ctx: Context) => {
      try {
        return await ctx.dataSources.users.deleteUser({ _id })
      } catch (error) {
        throw new Error('Failed to delete user')
      }
    },
  },
}
