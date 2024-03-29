import type { Context } from './context'
import type PrismaTypes from '@pothos/plugin-prisma/generated'

import SchemaBuilder from '@pothos/core'
import PrismaPlugin from '@pothos/plugin-prisma'
import RelayPlugin from '@pothos/plugin-relay'
import { DateTimeResolver } from 'graphql-scalars'

import prisma from '@/libs/prisma'

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes
  Context: Context
  Scalars: {
    Date: {
      Input: Date
      Output: Date
    }
  }
}>({
  plugins: [PrismaPlugin, RelayPlugin],
  relayOptions: {},
  prisma: {
    client: prisma,
    onUnusedQuery: process.env.NODE_ENV === 'production' ? null : 'warn',
  },
})

builder.queryType({
  fields: (t) => ({
    ok: t.boolean({
      resolve: () => true,
    }),
  }),
})

builder.mutationType({
  fields: (t) => ({
    ok: t.boolean({
      resolve: () => true,
    }),
  }),
})

builder.addScalarType('Date', DateTimeResolver, {})

export class Ids {
  ids: string[]

  constructor(ids: string[]) {
    this.ids = ids
  }
}

builder.objectType(Ids, {
  name: 'ids',
  description: 'All id for multiple action',
  fields: (t) => ({
    ids: t.exposeStringList('ids'),
  }),
})
