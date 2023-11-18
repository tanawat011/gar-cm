import type { Metadata } from 'next'

import * as React from 'react'

import { FullScreenNotFound } from '@/components/FullScreenNotFound'
import { METADATA_NOT_FOUND } from '@/constants'

export const metadata: Metadata = METADATA_NOT_FOUND

export default function NotFound() {
  return <FullScreenNotFound />
}
