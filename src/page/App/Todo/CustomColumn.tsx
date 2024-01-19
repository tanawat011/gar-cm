import type { todo as Todo } from '@prisma/client'

import React from 'react'

import { Chip } from '@nextui-org/react'

type ColumnNameProps = {
  item: Todo
}

export const ColumnName: React.FC<ColumnNameProps> = ({ item }) => {
  return (
    <div className='flex flex-col gap-1'>
      <p className={item.done ? 'line-through text-slate-500' : ''}>{item.name}</p>

      <div className='flex gap-1'>
        {item?.tags?.map((tag, idx) => {
          return (
            <Chip key={`${idx}${tag}`} variant='flat' color='primary' size='sm' radius='sm'>
              {tag}
            </Chip>
          )
        })}
      </div>
    </div>
  )
}
