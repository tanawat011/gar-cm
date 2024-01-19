import React from 'react'

import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism-light'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

type CodeBlockProps = {
  code: string
}

SyntaxHighlighter.registerLanguage('tsx', tsx)

export const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  return (
    <SyntaxHighlighter language='tsx' style={vscDarkPlus} wrapLongLines customStyle={{ borderRadius: '8px' }}>
      {code}
    </SyntaxHighlighter>
  )
}
