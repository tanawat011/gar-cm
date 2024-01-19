import type { ShowOffContent } from '@/types'

import React, { useCallback } from 'react'

type ContentDisplayProps = {
  title?: string
  contents: ShowOffContent[]
}

export const ContentDisplay: React.FC<ContentDisplayProps> = ({ title = 'Contents', contents }) => {
  const renderText = useCallback((text: string) => <p className='text-sm text-gray-400 hover:text-white'>{text}</p>, [])

  return (
    <>
      <p className='uppercase text-xs text-gray-500 font-bold mb-2'>{title}</p>

      <ul className='[&>:not(:last-child)]:mb-2'>
        {contents.map((content) => {
          return (
            <li key={content.id} className='cursor-pointer'>
              {renderText(content.title)}

              {content?.children && (
                <ul className='[&>:not(:last-child)]:mb-2 mt-2 ml-3'>
                  {content.children.map((child) => {
                    return (
                      <li key={child.id} className='cursor-pointer'>
                        {renderText(child.title)}
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </>
  )
}
