import type { TableColumnProps } from '@/components/NextUI'
import type { link_remember as LinkRemember } from '@prisma/client'

import { useMemo } from 'react'

import { ColumnName } from './CustomColumn'

export const useInitialData = () => {
  const columns: TableColumnProps<LinkRemember>[] = useMemo(
    () => [
      {
        key: 'name',
        label: 'Link',
        show: true,
        render: (item) => <ColumnName item={item} />,
      },
    ],
    [],
  )

  return { columns }
}
