import type { ShowOffContent } from './types'

import React from 'react'

import { ApiTable } from './ApiTable'
import { ContentDisplay } from './ContentDisplay'

type DocumentLayoutProps = {
  children?: React.ReactNode
  contents: ShowOffContent[]
}

export const DocumentLayout: React.FC<DocumentLayoutProps> = ({ children, contents }) => {
  return (
    <div className='flex gap-6'>
      <div className='[&>:not(:last-child)]:mb-8'>
        {children}

        <ApiTable />
      </div>

      <div className='min-w-[218px] select-none hidden lg:flex flex-col gap-2'>
        <div className='fixed'>
          <ContentDisplay contents={contents} />
        </div>
      </div>
    </div>
  )
}
