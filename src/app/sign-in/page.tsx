'use client'

import { useRef } from 'react'

import { Checkbox, Image, Link } from '@nextui-org/react'
import clsx from 'clsx'
import NextImage from 'next/image'
import { signIn } from 'next-auth/react'

import { Button, PasswordInput, TextInput } from '@/components/NextUI'
import { Col, Row } from '@/libs/pureTailwind'

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
    <>
      <Image
        src='/temp-bg.jpg'
        as={NextImage}
        width={0}
        height={0}
        radius='none'
        alt='Sign In Background Image'
        classNames={{
          wrapper: 'fixed',
        }}
        sizes='100vw 100vh'
        style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
      />

      <Col
        alignItems={{ lg: 'end' }}
        justifyContent={{ default: 'center', lg: 'start' }}
        height={{ default: 'screen' }}
        className={clsx('min-h-[667px] p-12', 'lg:p-0')}
      >
        <form
          className={clsx(
            'px-8 py-10 bg-slate-400 rounded-2xl min-h-[628px] max-w-[456px] mx-auto z-10',
            'xs:min-w-[334px]',
            'lg:flex lg:mx-0 lg:h-full lg:rounded-none lg:w-[456px]',
          )}
        >
          <Col gap={5} width={'full'} className='relative'>
            <Row alignItems={'center'} justifyContent={{ default: 'center', lg: 'start' }} className='mb-8'>
              <Image src='/next.svg' width={48} height={48} alt='Logo' radius='full' shadow='sm' />
              <span className='text-4xl font-bold ml-2'>NextUI</span>
            </Row>

            <span className='text-2xl lg:text-4xl font-semibold lg:mb-2'>Welcome</span>

            <TextInput _ref={refUsername} label='Email or Username' placeholder='Please enter Email or Username' />
            <PasswordInput _ref={refPassword} label='Password' placeholder='Please enter Password' />

            <Row alignItems='center' justifyContent='between'>
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

            <Row alignItems='center' justifyContent='between'>
              <div className='border-t w-full' />
              <span className='text-center px-4'>OR</span>
              <div className='border-t w-full' />
            </Row>

            <div className='block lg:hidden'>
              <Row alignItems='center' justifyContent='center' gap={3}>
                <Button iconOnly icon='FaGithub' iconSize='2xl' />
                <Button iconOnly icon='FcGoogle' iconSize='2xl' />
              </Row>
            </div>

            <div className='hidden lg:block'>
              <Col alignItems='center' justifyContent='center' gap={3}>
                <Button icon='FaGithub' iconSize='2xl' label='Continue with Github' className='w-full' />
                <Button icon='FcGoogle' iconSize='2xl' label='Continue with Github' className='w-full' />
              </Col>
            </div>

            <span className='text-center text-sm mt-2'>
              Don`t have an account?{' '}
              <Link href='#' size='sm' className='font-semibold'>
                Sign Up
              </Link>
            </span>

            <div className='absolute bottom-0'>xxx</div>
          </Col>
        </form>
      </Col>
    </>
  )
}
