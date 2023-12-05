import React from 'react'

import { Divider } from '@/components/Common'

type ItemProps = {
  label: string
  children: React.ReactNode
  center?: boolean
  hideDivider?: boolean
}

export const Item: React.FC<ItemProps> = ({ label, children, center, hideDivider }) => {
  return (
    <>
      <div className='my-4 select-none'>
        <p className='text-lg font-bold flex mb-2'>
          <span>{label}</span>
        </p>

        <div className={['flex', center ? 'items-center justify-around' : 'gap-2'].join(' ')}>{children}</div>
      </div>

      {!hideDivider && <Divider gradient />}
    </>
  )
}
