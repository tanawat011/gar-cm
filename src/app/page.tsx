'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

export default function Home() {
  const { data } = useSession()

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        {!data && <button onClick={() => signIn()}>Sign In</button>}
        {data && (
          <>
            {data.user && <p>Signed in as {data.user.name}</p>}
            <button
              onClick={() => signOut({ redirect: true, callbackUrl: process.env.NEXTAUTH_SIGN_IN_URI || '/sign-in' })}
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </main>
  )
}
