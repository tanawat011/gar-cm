'use client'

import React, { useEffect } from 'react'

type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export const FullScreenError: React.FC<ErrorProps> = ({ error, reset }) => {
  const onClick = () => {
    reset()

    // NOTE: temporary
    window.location.replace('/')
  }

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-white dark:bg-base-gradient-content flex flex-col items-center justify-center text-center'>
      <h1 className='mt-8 text-4xl md:text-6xl'>Oops, something went wrong!</h1>
      <p>{error.message}</p>
      <button onClick={onClick} className='mt-4'>
        Try again
      </button>
    </div>
  )
}
