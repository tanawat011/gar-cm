'use client'

import { useEffect } from 'react'

export default function SignIn() {
  useEffect(() => {
    window.location.href = '/api/auth/login'
  })

  return null
}
