'use client'

import { useEffect } from 'react'

import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from '@nextui-org/react'

import { Icon } from '@/components/Icon'

type SidebarContainerProps = {
  children: React.ReactNode
}

export default function Container({ children }: SidebarContainerProps) {
  const setChildrenContainerHeight = () => {
    const elNavbar = document.getElementById('navbar')
    const navbarHeight = elNavbar?.clientHeight || 0

    document
      .getElementsByTagName('html')[0]
      .style.setProperty('--navbar-h', `${navbarHeight + 1}px`)
  }

  useEffect(() => {
    setChildrenContainerHeight()
  }, [])

  return (
    <div className='flex'>
      <div className='dark:bg-[#111c44]'>
        <div className='w-60'>Sidebar</div>
      </div>

      <div>
        <div
          id='navbar'
          className='dark:bg-[#111c44] dark:border-gray-600 border-solid border-b flex justify-between'
        >
          <div className='ml-6 py-4 flex items-center'>Navbar</div>
          <div className='mr-6 py-4 flex items-center'>
            <Input
              size='sm'
              placeholder='Quick Search...'
              className='mx-2 w-48'
              startContent={<Icon name='FaMagnifyingGlass' />}
            />

            <Dropdown placement='bottom-end'>
              <DropdownTrigger>
                <div className='cursor-pointer'>
                  <Icon name='FaGear' className='mx-2' />
                </div>
              </DropdownTrigger>

              <DropdownMenu aria-label='Profile Actions' variant='flat'>
                <DropdownItem key='profile' className='h-14 gap-2'>
                  <p className='font-semibold'>Signed in as</p>
                  <p className='font-semibold'>zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key='settings'>My Settings</DropdownItem>
                <DropdownItem key='team_settings'>Team Settings</DropdownItem>
                <DropdownItem key='analytics'>Analytics</DropdownItem>
                <DropdownItem key='system'>System</DropdownItem>
                <DropdownItem key='configurations'>Configurations</DropdownItem>
                <DropdownItem key='help_and_feedback'>
                  Help & Feedback
                </DropdownItem>
                <DropdownItem key='logout' color='danger'>
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Dropdown placement='bottom-end'>
              <DropdownTrigger>
                <div className='cursor-pointer'>
                  <Icon name='FaBell' className='mx-2' />
                </div>
              </DropdownTrigger>

              <DropdownMenu aria-label='Profile Actions' variant='flat'>
                <DropdownItem key='profile' className='h-14 gap-2'>
                  <p className='font-semibold'>Signed in as</p>
                  <p className='font-semibold'>zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key='settings'>My Settings</DropdownItem>
                <DropdownItem key='team_settings'>Team Settings</DropdownItem>
                <DropdownItem key='analytics'>Analytics</DropdownItem>
                <DropdownItem key='system'>System</DropdownItem>
                <DropdownItem key='configurations'>Configurations</DropdownItem>
                <DropdownItem key='help_and_feedback'>
                  Help & Feedback
                </DropdownItem>
                <DropdownItem key='logout' color='danger'>
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Dropdown placement='bottom-end'>
              <DropdownTrigger>
                <div className='flex items-center cursor-pointer'>
                  <Avatar
                    isBordered
                    as='button'
                    className='transition-transform mx-2'
                    color='secondary'
                    name='Jason Hughes'
                    size='sm'
                    src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                  />

                  <p>Tanawat P</p>
                </div>
              </DropdownTrigger>

              <DropdownMenu aria-label='Profile Actions' variant='flat'>
                <DropdownItem key='profile' className='h-14 gap-2'>
                  <p className='font-semibold'>Signed in as</p>
                  <p className='font-semibold'>zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key='settings'>My Settings</DropdownItem>
                <DropdownItem key='team_settings'>Team Settings</DropdownItem>
                <DropdownItem key='analytics'>Analytics</DropdownItem>
                <DropdownItem key='system'>System</DropdownItem>
                <DropdownItem key='configurations'>Configurations</DropdownItem>
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

        <div className='dark:bg-[#051139] px-6 pt-4 pb-6 overflow-auto h-[calc(100vh-var(--navbar-h))]'>
          {children}
        </div>
      </div>
    </div>
  )
}
