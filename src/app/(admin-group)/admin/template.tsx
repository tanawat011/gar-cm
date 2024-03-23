'use client'

import { useEffect, useState } from 'react'

import { LottieCatPlayingLoading } from '@/libs/lottie'

export default function AdminTemplate({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <>
      {loading && <LottieCatPlayingLoading />}

      {!loading && children}
    </>
  )
}
