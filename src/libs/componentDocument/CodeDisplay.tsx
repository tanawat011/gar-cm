import React from 'react'

import { Button } from '@/components/NextUI'
import { Box } from '@/libs/pureTailwind'

import { CodeBlock } from './CodeBlock'

type CodeDisplayProps = {
  id: string
  title: string
  detail?: string
  code: string
  children?: React.ReactNode
}

export const CodeDisplay: React.FC<CodeDisplayProps> = ({ id, title, detail, code, children }) => {
  const blockWrapperId = `block-wrapper-${id}`
  const blockContainerId = `block-container-${id}`

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code)
  }

  const handleShowCode = () => {
    const blockWrapper = document.getElementById(blockWrapperId)
    const blockContainer = document.getElementById(blockContainerId)

    if (blockWrapper && blockContainer) {
      const containerHeight = blockContainer.clientHeight

      if (blockWrapper.classList.contains('h-0')) {
        blockWrapper.classList.remove('h-0')
        blockWrapper.style.height = `${containerHeight}px`
        blockContainer.classList.remove('opacity-0')
      } else {
        blockWrapper.classList.add('h-0')
        blockWrapper.style.height = '0px'
        blockContainer.classList.add('opacity-0')
      }
    }
  }

  return (
    <div className='w-full'>
      <div className='mb-6'>
        <h2 className='mb-2 text-xl'>{title}</h2>
        <p className='text-gray-400 text-sm'>{detail}</p>
      </div>

      <Box className='overflow-auto'>
        <div className='p-6'>{children}</div>

        <div className='bg-zinc-800 px-6 overflow-auto'>
          <div className='text-end my-[6.5px]'>
            <Button variant='light' iconOnly size='sm' icon='FaCopy' onClick={handleCopyCode} />

            <Button variant='light' iconOnly size='sm' icon='FaCode' onClick={handleShowCode} />
          </div>

          <div id={blockWrapperId} className='h-0 overflow-hidden transition-height'>
            <div id={blockContainerId} className='opacity-0 pb-6 transition-opacity'>
              <CodeBlock code={code} />
            </div>
          </div>
        </div>
      </Box>
    </div>
  )
}
