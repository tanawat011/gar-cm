'use client'

import { useRef, useState } from 'react'

import { Checkbox, Image, Link } from '@nextui-org/react'
import clsx from 'clsx'
import NextImage from 'next/image'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

import { Button, PasswordInput, TextInput } from '@/components/NextUI'
import { Col, Row } from '@/libs/pureTailwind'

export default function SignInPage() {
  const router = useRouter()

  const refUsername = useRef<HTMLInputElement>(null)
  const refPassword = useRef<HTMLInputElement>(null)

  const [isInvalid, setIsInvalid] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleValueChange = () => {
    setIsInvalid(false)
  }

  const handleSignIn = async () => {
    setIsLoading(true)

    const username = refUsername.current?.value
    const password = refPassword.current?.value
    const resetFormState = (invalid = false) => {
      setIsLoading(false)
      setIsInvalid(invalid)
    }

    if (!username || !password) return resetFormState(true)

    const result = await signIn('credentials', {
      username,
      password,
      redirect: false,
      callbackUrl: process.env.NEXTAUTH_REDIRECT_URI || '/',
    })

    if (!result?.ok) return resetFormState(true)

    router.push(process.env.NEXTAUTH_REDIRECT_URI || '/')
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

            <Col>
              <TextInput
                _ref={refUsername}
                label='Email or Username'
                placeholder='Please enter Email or Username'
                className='mb-5'
                invalid={isInvalid}
                color={isInvalid ? 'danger' : 'default'}
                onChange={handleValueChange}
              />
              <PasswordInput
                _ref={refPassword}
                label='Password'
                placeholder='Please enter Password'
                className='h-[64px]'
                invalid={isInvalid}
                errorMessage={isInvalid && 'Wrong username or password.'}
                color={isInvalid ? 'danger' : 'default'}
                onChange={handleValueChange}
              />

              <Row alignItems='center' justifyContent='between'>
                <Checkbox defaultChecked size='sm'>
                  Remember me
                </Checkbox>

                <Link href='#' size='sm' className='text-end'>
                  Forgot Password?
                </Link>
              </Row>
            </Col>

            <Button className='mt-4' color='primary' onClick={handleSignIn} loading={isLoading}>
              Sign In
            </Button>

            <Row alignItems='center' justifyContent='between'>
              <div className='border-t w-full' />
              <span className='text-center px-4'>OR</span>
              <div className='border-t w-full' />
            </Row>

            <div className='block lg:hidden'>
              <Row alignItems='center' justifyContent='center' gap={3}>
                <Button iconOnly icon='FaGithub' iconSize='2xl' loading={isLoading} />
                <Button iconOnly icon='FcGoogle' iconSize='2xl' loading={isLoading} />
              </Row>
            </div>

            <div className='hidden lg:block'>
              <Col alignItems='center' justifyContent='center' gap={3}>
                <Button
                  icon='FaGithub'
                  iconSize='2xl'
                  label='Continue with Github'
                  className='w-full'
                  loading={isLoading}
                />
                <Button
                  icon='FcGoogle'
                  iconSize='2xl'
                  label='Continue with Github'
                  className='w-full'
                  loading={isLoading}
                />
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
