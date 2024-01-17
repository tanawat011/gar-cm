'use client' // Error components must be Client Components

import { Error } from '@/page/Error'

export default function PageError(props: { error: Error & { digest?: string }; reset: () => void }) {
  return <Error {...props} />
}
