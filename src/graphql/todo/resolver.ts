import type { DataSource } from '.'
import type { Document, InputDocument, InputPartialDocument } from './type'
import type { NextRequest, NextResponse } from 'next/server'

import { collectionName } from '.'

type Context = {
  dataSources: {
    [collectionName]: DataSource
  }
}

const nameSlice = collectionName.slice(0, -1)
const postfix = nameSlice.slice(0, 1).toUpperCase() + nameSlice.slice(1)
const getContext = (ctx: Context) => ctx.dataSources[collectionName]

export const resolvers = {
  Query: {
    [collectionName]: async (_: NextRequest, __: NextResponse, ctx: Context) => {
      return getContext(ctx).getAll()
    },
    [nameSlice]: async (_: NextRequest, { _id }: { _id: string }, ctx: Context) => {
      return getContext(ctx).getById(_id)
    },
  },
  Mutation: {
    [`create${postfix}`]: async (_: NextRequest, { input }: InputDocument, ctx: Context) => {
      return getContext(ctx).createItem({ input })
    },
    [`update${postfix}`]: async (_: NextRequest, { input }: InputPartialDocument, ctx: Context) => {
      return getContext(ctx).updateItem(input._id, { input })
    },
    [`delete${postfix}`]: async (_: NextRequest, { _id }: Pick<Document, '_id'>, ctx: Context) => {
      return getContext(ctx).deleteItem({ _id })
    },
    // [`deletePermanently${postfix}`]: async (_: NextRequest, { _id }: Pick<Document, '_id'>, ctx: Context) => {
    //   return getContext(ctx).deletePermanentlyItem({ _id })
    // },
  },
}
