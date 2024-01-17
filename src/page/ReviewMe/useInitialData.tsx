import type { TableColumnProps } from '@/components/NextUI'
import type { review_me as ReviewMe } from '@prisma/client'

import { useMemo } from 'react'

export type QuickActionKey = 'done' | 'important'

export const useInitialData = () => {
  const columns: TableColumnProps<ReviewMe>[] = useMemo(
    () => [
      {
        key: 'name',
        label: 'Name',
        show: true,
      },
      {
        key: 'review',
        label: 'Detail',
        show: true,
      },
      {
        key: 'createdAt',
        label: 'Created At',
        show: true,
      },
    ],
    [],
  )

  return { columns }
}
