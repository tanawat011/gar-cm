'use client'

import type { ShowOffContent } from './types'

import React, { useCallback, useMemo } from 'react'

import { useRouter } from 'next/navigation'

import { ApiTable } from './ApiTable'
import { ContentDisplay } from './ContentDisplay'
import { PREFIX_DOCUMENT_ID } from './constant'

type DocumentLayoutProps = {
  containerId: string
  contents: ShowOffContent[]
  apiContents?: ShowOffContent[]
  onClick?: (id: string) => void
}

export const DocumentLayout: React.FC<DocumentLayoutProps> = ({ containerId, contents, onClick }) => {
  const router = useRouter()

  const renderContent = useMemo(() => {
    return contents.flatMap((content) => {
      if (content?.children) {
        const newContent = { ...content }

        delete newContent.children

        return [newContent, ...content.children]
      }

      return [content]
    })
  }, [contents])

  const handleClick = useCallback(
    (id: string) => {
      onClick?.(id)
      router.push(`#${id}`)

      const containerEl = document.getElementById(containerId)
      const el = document.getElementById(id)

      if (containerEl && el) {
        containerEl.scrollTo({
          behavior: 'smooth',
          top: el.offsetTop - 100,
        })
      }
    },
    [containerId, document.getElementById(containerId)?.clientHeight],
  )

  return (
    <div className='flex gap-6'>
      <div className='[&>:not(:last-child)]:mb-8'>
        {renderContent.map((content) => {
          if (content?.render) return content?.render()

          return (
            <p key={content.id} id={`${PREFIX_DOCUMENT_ID}-${content.id}`} className='font-bold text-4xl'>
              {content.title}
            </p>
          )
        })}

        <ApiTable />
      </div>

      <div className='min-w-[218px] select-none hidden lg:flex flex-col gap-2'>
        <div className='fixed'>
          <ContentDisplay contents={contents} onClick={handleClick} />
        </div>
      </div>
    </div>
  )
}
