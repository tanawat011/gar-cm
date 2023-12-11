import type { DataSource } from '.'
import type { Document, InputDocument, InputPartialDocument } from './type'
import type { NextRequest, NextResponse } from 'next/server'

import bcrypt from 'bcryptjs'

import { COLLECTION_NAME, RESOLVER } from './constant'

type Context = {
  dataSources: {
    [COLLECTION_NAME]: DataSource
  }
}

const getContext = (ctx: Context) => ctx.dataSources[COLLECTION_NAME]

export const resolvers = {
  Query: {
    [RESOLVER.GET_ALL]: async (_: NextRequest, __: NextResponse, ctx: Context) => {
      return getContext(ctx).getAll()
    },
    [RESOLVER.GET_BY_ID]: async (_: NextRequest, { _id }: { _id: string }, ctx: Context) => {
      return getContext(ctx).getById(_id)
    },
  },
  Mutation: {
    [RESOLVER.CREATE]: async (_: NextRequest, { input }: InputDocument, ctx: Context) => {
      const salt = bcrypt.genSaltSync(12)
      const hash = bcrypt.hashSync(input.password, salt)

      console.log('input.password', input.password)
      console.log('hash', hash)

      const payload = {
        ...input,
        password: hash,
      }

      return getContext(ctx).createItem({ input: payload })
    },
    [RESOLVER.UPDATE]: async (_: NextRequest, { input }: InputPartialDocument, ctx: Context) => {
      return getContext(ctx).updateItem(input._id, { input })
    },
    [RESOLVER.DELETE]: async (_: NextRequest, { _id }: Pick<Document, '_id'>, ctx: Context) => {
      return getContext(ctx).deleteItem({ _id })
    },
    // [RESOLVER.DELETE_PERMANENTLY]: async (_: NextRequest, { _id }: Pick<Document, '_id'>, ctx: Context) => {
    //   return getContext(ctx).deletePermanentlyItem({ _id })
    // },
  },
}
