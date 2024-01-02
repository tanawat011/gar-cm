import type { SpinnerProps } from '@nextui-org/react'

import React from 'react'

import { Spinner } from '@nextui-org/react'

type LoadingSpinnerProps = SpinnerProps

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = (props) => {
  return <Spinner size='lg' {...props} />
}
