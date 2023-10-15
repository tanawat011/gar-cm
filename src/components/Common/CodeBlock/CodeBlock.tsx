import React from 'react'

import clsx from 'clsx'
import { CodeBlock as CodeBlockComp, atomOneDark } from 'react-code-blocks'

type CodeBlockProps = {
  text: string
  showLineNumbers?: boolean
  emphasize?: boolean
  width?: 'half' | 'full' | 'fit'
  className?: string
  oneLine?: boolean
  language?:
    | 'typescript'
    | 'javascript'
    | 'json'
    | 'tsx'
    | 'jsx'
    | 'css'
    | 'html'
    | 'bash'
    | 'shell'
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  text,
  showLineNumbers = false,
  emphasize,
  width = 'full',
  className,
  oneLine,
  language = 'typescript',
}) => {
  return (
    <div
      className={clsx(
        'bg-slate-700 rounded-lg',
        emphasize && 'p-3',
        width === 'half' && 'w-1/2',
        width === 'full' && 'w-full',
        width === 'fit' && 'w-fit',
        className,
      )}
    >
      <CodeBlockComp
        text={text}
        theme={atomOneDark}
        language={language}
        showLineNumbers={showLineNumbers}
        {...(oneLine && {
          codeContainerStyle: {
            padding: '0 8px',
          },
        })}
      />
    </div>
  )
}
