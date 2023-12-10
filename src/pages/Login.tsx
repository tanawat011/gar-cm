import { useState } from 'react'

import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react'
import Link from 'next/link'

import { Icon } from '@/components/Icon'

const Login = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  return (
    <div className='flex items-center justify-center w-full h-screen'>
      <div className='w-full h-full p-6'>
        <div className='bg-black w-full h-full rounded-2xl'></div>
      </div>

      <div className='w-full h-full p-6 flex flex-col items-center justify-center'>
        <Card className='px-4 py-4 w-96'>
          <CardHeader className='px-4 flex-col items-start'>
            <p className='text-center w-full mb-8'>GU ASK REAL</p>

            <h1>Sign in</h1>
            {/* <small className='text-default-500'>12 Tracks</small> */}
          </CardHeader>

          <CardBody className='gap-4'>
            <Input type='email' label='Email' />

            <div className='flex flex-col items-end gap-1 mb-3'>
              <Input
                type={isVisible ? 'text' : 'password'}
                label='Password'
                endContent={
                  <button className='focus:outline-none' type='button' onClick={toggleVisibility}>
                    {isVisible ? <Icon name='FaEyeSlash' /> : <Icon name='FaEye' />}
                  </button>
                }
              />

              <Link href='/forgot-password' className='text-primary text-sm'>
                Forgot password?
              </Link>
            </div>

            <Button color='primary'>SIGN IN</Button>

            <div className='text-sm mb-1'>
              <p className='text-gray-300'>
                Don`t have an account?{' '}
                <Link href='/register' className='text-primary'>
                  Sign up
                </Link>
              </p>
            </div>

            <div className='flex items-center justify-center gap-2'>
              <div className='w-1/2 h-px bg-gray-300'></div>
              <p className='text-gray-300'>OR</p>
              <div className='w-1/2 h-px bg-gray-300'></div>
            </div>

            <div className='flex items-center justify-center gap-2'>
              <button className='focus:outline-none'>
                <Icon name='FaGoogle' />
              </button>
              <button className='focus:outline-none'>
                <Icon name='FaFacebook' />
              </button>
              <button className='focus:outline-none'>
                <Icon name='FaGithub' />
              </button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Login
