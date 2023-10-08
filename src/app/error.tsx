'use client' // Error components must be Client Components

import type { Metadata } from 'next'

import * as React from 'react'

import { Error as ErrorPage } from '@/components/BaseLayout/Error'
import { METADATA_ERROR } from '@/constants'

export const metadata: Metadata = METADATA_ERROR

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return <ErrorPage error={error} reset={reset} />
}
