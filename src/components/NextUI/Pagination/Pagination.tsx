import type { PaginationProps as NextUIPaginationProps } from '@nextui-org/react'

import React from 'react'

import { Pagination as NextUIPagination } from '@nextui-org/react'

export type PaginationProps = {
  page?: number
  countPages?: number
  onPageChange?: (page: number) => void
} & NextUIPaginationProps

export const Pagination: React.FC<PaginationProps> = ({ page = 1, countPages = 1, onPageChange, ...props }) => {
  return (
    <NextUIPagination
      showControls
      showShadow
      color='primary'
      isDisabled={countPages < 2}
      {...props}
      page={page}
      total={countPages || 1}
      onChange={onPageChange}
    />
  )
}
