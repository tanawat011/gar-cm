'use client' // Error components must be Client Components

import type { Metadata } from 'next'

import * as React from 'react'

import { FullScreenError } from '@/components/FullScreenError'
import { METADATA_ERROR } from '@/constants'

export const metadata: Metadata = METADATA_ERROR

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return <FullScreenError error={error} reset={reset} />
}