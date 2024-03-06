import type { ShowOffContent } from './types'

import React, { useCallback, useEffect, useState } from 'react'

import clsx from 'clsx'

import { PREFIX_DOCUMENT_ID } from './constant'

type ContentDisplayProps = {
  containerId: string
  title?: string
  contents: ShowOffContent[]
  currElementId?: string
  onClick?: (id: string) => void
}

type UlProps = {
  children: React.ReactNode
  className?: string
}

type LiProps = {
  children: React.ReactNode
  className?: string
  key?: string
}

type ListProps = Partial<Pick<ContentDisplayProps, 'contents'>> & {
  key?: string
  id: string
  title: string
  activeId?: string
  onClick?: (id: string) => void
}

const getElementId = (id: string) => `${PREFIX_DOCUMENT_ID}-${id}`

const Ul: React.FC<UlProps> = ({ children, className }) => (
  <ul className={['[&>:not(:last-child)]:mb-2', className].join(' ')}>{children}</ul>
)

const Li: React.FC<LiProps> = ({ children, className }) => <li className={className}>{children}</li>

const List: React.FC<ListProps> = ({ id, title, contents, activeId, onClick }) => {
  const renderText = useCallback(
    (text: string, elId: string, active?: boolean) => (
      <p
        className={clsx('text-sm text-gray-400 hover:text-white cursor-pointer', active && 'text-white font-semibold')}
        onClick={() => onClick?.(getElementId(elId))}
      >
        {text}
      </p>
    ),
    [id, activeId],
  )

  return (
    <Li>
      {renderText(title, id, activeId === id)}

      {contents && (
        <Ul className='mt-2 ml-3'>
          {contents.map((content) => {
            return <Li key={content.id}>{renderText(content.title, content.id, activeId === content.id)}</Li>
          })}
        </Ul>
      )}
    </Li>
  )
}

export const ContentDisplay: React.FC<ContentDisplayProps> = ({
  containerId,
  title = 'Contents',
  contents,
  currElementId,
  onClick,
}) => {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    if (currElementId) setActiveId(currElementId.replace(`#${PREFIX_DOCUMENT_ID}-`, ''))
  }, [currElementId])

  useEffect(() => {
    const containerEl = document.getElementById(containerId)

    if (containerEl) {
      const handleContainerScroll = () => {
        contents
          .flatMap((content) => [content.id, ...(content?.children?.map((child) => child.id) || [])])
          .forEach((id) => {
            const el = document.getElementById(getElementId(id))

            if (el && containerEl.scrollTop + 100 >= el.offsetTop) {
              setActiveId(id)
            }
          })
      }

      containerEl.addEventListener('scroll', handleContainerScroll)

      return () => {
        containerEl.removeEventListener('scroll', handleContainerScroll)
      }
    }
  }, [containerId])

  const handleClick = (id: string) => {
    onClick?.(id)
    setActiveId(id.replace(`${PREFIX_DOCUMENT_ID}-`, ''))
  }

  return (
    <>
      <p className='uppercase text-xs text-gray-500 font-bold mb-2'>{title}</p>

      <Ul>
        {contents.map((content) => {
          return (
            <List
              key={content.id}
              id={content.id}
              title={content.title}
              contents={content?.children}
              activeId={activeId}
              onClick={handleClick}
            />
          )
        })}

        <List id='api' title='API' activeId={activeId} onClick={handleClick} />
      </Ul>
    </>
  )
}
