'use client'

import React, { useEffect } from 'react'

type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export const FullScreenError: React.FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <main>
      <section>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
          <h1 className='mt-8 text-4xl md:text-6xl'>
            Oops, something went wrong!
          </h1>
          <p>{error.message}</p>
          <button onClick={reset} className='mt-4'>
            Try again
          </button>
        </div>
      </section>
    </main>
  )
}
