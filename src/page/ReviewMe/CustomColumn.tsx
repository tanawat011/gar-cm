import type { review_me as ReviewMe } from '@prisma/client'

import React from 'react'

type ColumnNameProps = {
  item: ReviewMe
}

export const ColumnName: React.FC<ColumnNameProps> = ({ item }) => {
  return <div className='flex flex-col gap-1'>{item.name}</div>
}
