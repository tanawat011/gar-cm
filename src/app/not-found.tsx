import type { Metadata } from 'next'

import * as React from 'react'

import { NotFound as NotFoundPage } from '@/components/BaseLayout/NotFound'
import { METADATA_NOT_FOUND } from '@/constants'

export const metadata: Metadata = METADATA_NOT_FOUND

export default function NotFound() {
  return <NotFoundPage />
}
