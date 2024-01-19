import React, { useMemo } from 'react'

import { TW_HEIGHT_SCREEN, generateTwClassName, type TwHeight } from '@/libs/pureTailwind'

type MockupBoxProps = {
  label: string
  className?: string
  height?: TwHeight
}

export const MockupBox: React.FC<MockupBoxProps> = ({ label, className, height = 'full' }) => {
  const generateClassName = useMemo(() => {
    return [
      className,
      'bg-zinc-900 px-2 py-3 rounded-xl flex items-center justify-center text-sm text-center',
      height && generateTwClassName(TW_HEIGHT_SCREEN, height),
    ]
      .join(' ')
      .replace(/  +/g, ' ')
  }, [height])

  return <div className={generateClassName} dangerouslySetInnerHTML={{ __html: label }} />
}
