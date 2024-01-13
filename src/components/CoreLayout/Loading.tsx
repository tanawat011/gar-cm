import { useContext } from 'react'

import { FullScreenLoading } from '../Loading'

import { CoreLayoutContext } from './Provider'

export const Loading = () => {
  const { loading } = useContext(CoreLayoutContext)

  if (!loading) return null

  return <FullScreenLoading />
}
