import type { Context } from './context'
import type PrismaTypes from '@pothos/plugin-prisma/generated'

import SchemaBuilder from '@pothos/core'
import AddGraphQLPlugin from '@pothos/plugin-add-graphql'
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
  plugins: [PrismaPlugin, RelayPlugin, AddGraphQLPlugin],
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
    // Add query for a simple scalar type
    hello: t.string({
      resolve: () => 'hello, world!',
    }),
  }),
})

builder.mutationType({})

builder.addScalarType('Date', DateTimeResolver, {})
