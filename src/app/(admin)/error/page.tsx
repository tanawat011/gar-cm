'use client'

import { Error } from '@/page/Error'

export default function PageError() {
  return <Error error={{ message: 'Test Error', name: 'Error' }} reset={() => void 0} />
}
