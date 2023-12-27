import type { NextRequest, NextResponse } from 'next/server'

export type Context = {
  request: NextRequest
  response: NextResponse
} & ReturnType<typeof createContext>

export async function createContext() {
  return {
    example: 'xxx',
  }
}
