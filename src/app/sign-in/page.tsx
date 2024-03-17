'use client'

import { useRef } from 'react'

import { Checkbox, Link, Image } from '@nextui-org/react'
import clsx from 'clsx'
import { signIn } from 'next-auth/react'

import { Col, Row } from '@/components/Layout'
import { Button, PasswordInput, TextInput } from '@/components/NextUI'

export default function SignInPage() {
  const refUsername = useRef<HTMLInputElement>(null)
  const refPassword = useRef<HTMLInputElement>(null)

  const handleSignIn = () => {
    const username = refUsername.current?.value
    const password = refPassword.current?.value

    if (username && password) {
      signIn('credentials', {
        username,
        password,
        redirect: true,
        callbackUrl: process.env.NEXTAUTH_REDIRECT_URI || '/',
      })
    }
  }

  return (
    <Col justify='center' className={clsx('h-screen min-h-[667px] p-12', 'lg:p-0')}>
      <form
        className={clsx(
          'px-8 py-10 bg-slate-400 rounded-2xl min-h-[604px] max-w-[456px] mx-auto',
          'xs:min-w-[334px]',
          'lg:mx-0',
        )}
      >
        <Col gap={5}>
          <Row items='center' justify='center'>
            <Image src='/next.svg' width={48} height={48} alt='Logo' radius='full' shadow='sm' />
            <span className='text-3xl font-bold ml-2'>NextUI</span>
          </Row>

          <span className='text-2xl font-semibold'>Welcome</span>

          <TextInput _ref={refUsername} label='Email or Username' placeholder='Please enter Email or Username' />
          <PasswordInput _ref={refPassword} label='Password' placeholder='Please enter Password' />

          <Row items='center' justify='between'>
            <Checkbox defaultChecked size='sm'>
              Remember me
            </Checkbox>

            <Link href='#' size='sm' className='text-end'>
              Forgot Password?
            </Link>
          </Row>

          <Button className='mt-4' color='primary' onClick={handleSignIn}>
            Sign In
          </Button>

          <Row items='center' justify='between'>
            <div className='border-t w-full' />
            <span className='text-center px-4'>OR</span>
            <div className='border-t w-full' />
          </Row>

          <Row items='center' justify='center' gap={3}>
            <Button iconOnly icon='FaGithub' iconSize='2xl' />
            <Button iconOnly icon='FcGoogle' iconSize='2xl' />
          </Row>

          <span className='text-center text-sm mt-2'>
            Don`t have an account?{' '}
            <Link href='#' size='sm' className='font-semibold'>
              Sign Up
            </Link>
          </span>
        </Col>
      </form>
    </Col>
  )
}
