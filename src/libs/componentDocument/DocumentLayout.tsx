'use client'

import type { ShowOffContent } from './types'

import React, { useCallback, useEffect, useMemo } from 'react'

import { useLocationHash } from '@/hooks'

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
  const { getHash, setHash } = useLocationHash()

  const renderContent = useMemo(() => {
    return contents.flatMap((content) => {
      if (content?.children) {
        const newContent = { ...content }

        delete newContent.children

        return [newContent, ...content.children]
      }

      return [{ ...content, firstLvl: true }]
    })
  }, [contents])

  const handleScroll = (id: string, smooth?: boolean) => {
    const containerEl = document.getElementById(containerId)
    const el = document.getElementById(id)

    if (containerEl && el) {
      containerEl.scrollTo({
        behavior: smooth ? 'smooth' : 'instant',
        top: el.offsetTop - 100,
      })
    }
  }

  const handleClick = useCallback(
    (id: string) => {
      onClick?.(id)
      setHash(id)
      handleScroll(id, true)
    },
    [containerId, document.getElementById(containerId)?.clientHeight],
  )

  useEffect(() => {
    const hash = getHash()

    if (hash) handleScroll(hash.replace('#', ''))
  }, [])

  const renderTitleAndDetail = useCallback(
    (id: string, title: string, detail?: string) => (
      <p key={id} id={`${PREFIX_DOCUMENT_ID}-${id}`} className='font-bold text-4xl'>
        {title}

        {detail && <p className='text-gray-400 text-sm'>{detail}</p>}
      </p>
    ),
    [],
  )

  return (
    <div className='flex gap-6'>
      <div className='[&>:not(:last-child)]:mb-8'>
        {renderContent.map((content) => {
          const titleAndDetail = renderTitleAndDetail(content.id, content.title, content?.detail)

          if (content?.element) {
            return (
              <>
                {content?.firstLvl && titleAndDetail}

                {React.cloneElement(content.element || <p>Not found Element</p>, {
                  ...content,
                })}
              </>
            )
          }

          return titleAndDetail
        })}

        <ApiTable />
      </div>

      <div className='min-w-[218px] select-none hidden lg:flex flex-col gap-2'>
        <div className='fixed'>
          <ContentDisplay
            containerId={containerId}
            contents={contents}
            currElementId={getHash()}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  )
}
