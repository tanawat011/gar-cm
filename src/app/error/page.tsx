'use client'
import { FullScreenError } from '@/components/FullScreenError'

export default function Error() {
  return (
    <FullScreenError
      error={{ message: 'Test Error', name: 'Error' }}
      reset={() => void 0}
    />
  )
}
