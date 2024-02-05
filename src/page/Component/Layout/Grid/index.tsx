'use client'

import { ComponentDocument } from '@/libs/componentDocument'

import { useData } from './useData'

export const ComponentLayoutGrid = () => {
  const { contents } = useData()

  return <ComponentDocument containerId='content-container' contents={contents} />
}
