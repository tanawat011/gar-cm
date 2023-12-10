import type { NextRequest } from 'next/server'

import { handlerApolloServer } from '@/libs/apolloServer'
import { initMongoDB } from '@/libs/mongoDB'

initMongoDB()

export async function GET(request: NextRequest) {
  return handlerApolloServer(request)
}

export async function POST(request: NextRequest) {
  return handlerApolloServer(request)
}
