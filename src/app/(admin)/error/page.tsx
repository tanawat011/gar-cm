'use client'

import { Error } from '@/pages/Error'

export default function PageError() {
  return <Error error={{ message: 'Test Error', name: 'Error' }} reset={() => void 0} />
}
