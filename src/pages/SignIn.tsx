import { useEffect } from 'react'

const SignIn = () => {
  useEffect(() => {
    window.location.href = '/api/auth/login'
  })

  return null
}

export default SignIn
