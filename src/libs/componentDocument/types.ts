import type { CodeDisplayProps } from './CodeDisplay'

import type React from 'react'

export type ShowOffContent = {
  title: string
  id: string
  element?: JSX.Element
  children?: ShowOffContent[]
} & Omit<CodeDisplayProps, 'code' | 'children'>

export type ComponentDocumentFC = React.FC<Omit<CodeDisplayProps, 'code' | 'children'>>
