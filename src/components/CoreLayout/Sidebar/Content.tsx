import React from 'react'

import clsx from 'clsx'
import Link from 'next/link'

export type ContentProps = {
  className?: string
}

export const Content: React.FC<ContentProps> = ({ className }) => {
  return (
    <div className={clsx('transition-width', className)}>
      <div className='flex items-center justify-between'>
        <p>Sidebar</p>
      </div>

      <br />
      <br />

      <p className='underline'>
        <Link href={'/'}>Dashboard</Link>
      </p>

      <p className='underline'>
        <Link href={'/app/link-remember'}>Link Remember</Link>
      </p>

      <p className='underline'>
        <Link href={'/app/to-do'}>Road Map</Link>
      </p>

      <p className='underline'>
        <Link href={'/error'}>Example Error Page</Link>
      </p>

      <p className='underline'>
        <Link href={'/not-found'}>Example Not-Found Page</Link>
      </p>
    </div>
  )
}
