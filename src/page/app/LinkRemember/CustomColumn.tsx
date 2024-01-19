import type { link_remember as LinkRemember } from '@prisma/client'

import React from 'react'

import Link from 'next/link'

type ColumnNameProps = {
  item: LinkRemember
}

export const ColumnName: React.FC<ColumnNameProps> = ({ item }) => {
  const NextLink = ({ href, label }: { href: string; label: string }) => {
    return (
      <p>
        <Link className='underline' href={href} target='_blank'>
          {label}
        </Link>
      </p>
    )
  }

  return (
    <div className='flex flex-col gap-1'>
      <NextLink label={item.name} href={item.link} />
    </div>
  )
}
