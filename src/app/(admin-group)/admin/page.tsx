'use client'

import { useState } from 'react'

import { signIn, signOut, useSession } from 'next-auth/react'

import { LottieCatSleepLoading } from '@/libs/lottie'

export default function AdminPage() {
  const { data } = useSession()
  const [loading, setLoading] = useState(false)

  const handleSignOut = () => {
    setLoading(true)

    setTimeout(() => {
      signOut({ redirect: true, callbackUrl: process.env.NEXT_PUBLIC_AUTH_SIGN_IN_URI })
    }, 3000)
  }

  return (
    <>
      {loading && <LottieCatSleepLoading />}

      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <div>
          {!data && <button onClick={() => signIn()}>Sign In</button>}
          {data && (
            <>
              {data.user && <p>Signed in as {data.user.name}</p>}
              <button onClick={handleSignOut}>Sign Out</button>
            </>
          )}
        </div>
      </main>
    </>
  )
}
