import type { DataSource } from '.'
import type { Document, InputDocument } from './type'
import type { NextRequest, NextResponse } from 'next/server'

import { collectionName } from '.'

type Context = {
  dataSources: {
    [collectionName]: DataSource
  }
}

const nameSlice = collectionName.slice(0, -1)
const postfix = nameSlice.slice(0, 1).toUpperCase() + nameSlice.slice(1)

export const resolvers = {
  Query: {
    [collectionName]: async (_: NextRequest, __: NextResponse, ctx: Context) => {
      return ctx.dataSources[collectionName].getAll()
    },
    [nameSlice]: async (_: NextRequest, { _id }: { _id: string }, ctx: Context) => {
      return ctx.dataSources[collectionName].getById(_id)
    },
  },
  Mutation: {
    [`create${postfix}`]: async (_: NextRequest, { input }: InputDocument, ctx: Context) => {
      return ctx.dataSources[collectionName].createItem({
        input,
      })
    },
    [`update${postfix}`]: async (_: NextRequest, { input }: InputDocument, ctx: Context) => {
      return ctx.dataSources[collectionName].updateItem({ input })
    },
    [`delete${postfix}`]: async (_: NextRequest, { _id }: Pick<Document, '_id'>, ctx: Context) => {
      return ctx.dataSources[collectionName].deleteItem({ _id })
    },
  },
}
