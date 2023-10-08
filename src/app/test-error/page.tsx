'use client'
import { useEffect } from 'react'

export default function TestError() {
  useEffect(() => {
    setTimeout(() => {
      throw new Error('Test Error')
    }, 1000)
  }, [])

  return <>Test Error</>
}
