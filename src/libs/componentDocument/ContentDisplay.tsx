import type { ShowOffContent } from './types'

import React, { useCallback } from 'react'

import clsx from 'clsx'

import { PREFIX_DOCUMENT_ID } from './constant'

type ContentDisplayProps = {
  title?: string
  contents: ShowOffContent[]
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
  active?: boolean
  onClick?: (id: string) => void
}

const Ul: React.FC<UlProps> = ({ children, className }) => (
  <ul className={['[&>:not(:last-child)]:mb-2', className].join(' ')}>{children}</ul>
)

const Li: React.FC<LiProps> = ({ children, className }) => <li className={className}>{children}</li>

const List: React.FC<ListProps> = ({ id, title, contents, active, onClick }) => {
  const renderText = useCallback(
    (text: string, elId: string) => (
      <p
        className={clsx('text-sm text-gray-400 hover:text-white cursor-pointer', active && 'text-white font-semibold')}
        onClick={() => onClick?.(`${PREFIX_DOCUMENT_ID}-${elId}`)}
      >
        {text}
      </p>
    ),
    [],
  )

  return (
    <Li>
      {renderText(title, id)}

      {contents && (
        <Ul className='mt-2 ml-3'>
          {contents.map((content) => {
            return <Li key={content.id}>{renderText(content.title, content.id)}</Li>
          })}
        </Ul>
      )}
    </Li>
  )
}

export const ContentDisplay: React.FC<ContentDisplayProps> = ({ title = 'Contents', contents, onClick }) => {
  const handleClick = useCallback((id: string) => {
    onClick?.(id)
  }, [])

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
              active
              onClick={handleClick}
            />
          )
        })}

        <List id='api' title='API' onClick={handleClick} />
      </Ul>
    </>
  )
}
