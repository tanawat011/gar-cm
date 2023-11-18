'use client'

import { useEffect, useState } from 'react'

import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from '@nextui-org/react'
import clsx from 'clsx'
import { isMobile } from 'react-device-detect'

import { Icon } from '@/components/Icon'

import { CountryFlagIcon } from '../CountryFlagIcon'

import { Loading } from './Loading'

type SidebarContainerProps = {
  children: React.ReactNode
}

export default function Container({ children }: SidebarContainerProps) {
  const langs = [
    {
      lang: 'th',
      label: 'ไทย',
    },
    {
      lang: 'en',
      label: 'English',
    },
  ]

  const [isLoading, setIsLoading] = useState(true)
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>()

  const setupChildrenContainerHeight = () => {
    const elNavbar = document.getElementById('navbar')
    const navbarHeight = elNavbar?.clientHeight || 0

    document
      .getElementsByTagName('html')[0]
      .style.setProperty('--navbar-h', `${navbarHeight + 1}px`)
  }

  useEffect(() => {
    window.addEventListener('resize', setupChildrenContainerHeight)

    // NOTE: for mobile or IPad device
    window.addEventListener(
      'orientationchange',
      setupChildrenContainerHeight,
      false,
    )

    return () => {
      window.removeEventListener('resize', setupChildrenContainerHeight)

      // NOTE: for mobile or IPad device
      window.removeEventListener(
        'orientationchange',
        setupChildrenContainerHeight,
      )
    }
  }, [])

  useEffect(() => {
    setupChildrenContainerHeight()
  }, [isLoading])

  useEffect(() => {
    setIsMobileDevice(isMobile)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [isMobile])

  if (isLoading) return <Loading />

  return (
    <div className='flex'>
      <div
        className={clsx(
          'dark:bg-base-gradient-sidebar dark:border-gunmetal border-solid border-r',
          isMobileDevice ? 'hidden' : 'hidden lg:block',
        )}
      >
        <div className='w-60'>Sidebar</div>
      </div>

      <div
        className={clsx(
          'overflow-y-scroll scrolling-touch',
          !isMobileDevice && 'scrolling-auto h-screen',
        )}
      >
        <div
          id='navbar'
          className={clsx(
            'dark:bg-base-gradient-navbar dark:border-gunmetal border-solid border-b flex justify-between w-full top-0',
            isMobileDevice ? 'fixed' : 'sticky',
          )}
        >
          <div className='ml-6 py-4 flex items-center'>
            <div className={clsx(isMobileDevice ? 'block' : 'block lg:hidden')}>
              <Icon name='FaBars' className='cursor-pointer mx-3' />
            </div>
          </div>

          <div className='mr-6 py-4 flex items-center'>
            <Input
              size='sm'
              placeholder='Quick Search...'
              className='mx-2 w-60 hidden lg:block'
              startContent={<Icon name='FaMagnifyingGlass' />}
              classNames={{
                inputWrapper:
                  'bg-transparent hover:bg-transparent focus:bg-transparent',
              }}
            />

            <Icon
              name='FaGear'
              className='cursor-pointer mx-3 block lg:hidden'
            />

            <div className='items-center hidden lg:flex'>
              <Icon
                name='FaRegBell'
                className='cursor-pointer mx-3 hover:opacity-80'
              />
              <Icon
                name='FaRegMoon'
                className='cursor-pointer mx-3 hover:opacity-80'
              />

              <Dropdown placement='bottom-end'>
                <DropdownTrigger>
                  <div className='cursor-pointer'>
                    <CountryFlagIcon lang='th' className='mx-3' />
                  </div>
                </DropdownTrigger>

                <DropdownMenu aria-label='Profile Actions' variant='flat'>
                  {langs.map(({ lang, label }) => (
                    <DropdownItem
                      key={lang}
                      startContent={
                        <CountryFlagIcon
                          lang={lang as never}
                          className='mx-3'
                        />
                      }
                    >
                      {label}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>
            <Dropdown placement='bottom-end'>
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as='button'
                  className='transition-transform mx-3'
                  color='success'
                  name='Jason Hughes'
                  size='sm'
                  src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                />
              </DropdownTrigger>

              <DropdownMenu aria-label='Profile Actions' variant='flat'>
                <DropdownItem key='profile' className='h-14 gap-2'>
                  <p className='font-semibold'>Signed in as</p>
                  <p className='font-semibold'>tanawat.p@example.com</p>
                </DropdownItem>
                <DropdownItem key='settings'>My Settings</DropdownItem>
                <DropdownItem key='help_and_feedback'>
                  Help & Feedback
                </DropdownItem>
                <DropdownItem key='logout' color='danger'>
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        <div
          className={clsx(
            'dark:bg-base-gradient-content px-6 pt-4 pb-6',
            isMobileDevice ? 'mt-[--navbar-h]' : 'mt-0',
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
