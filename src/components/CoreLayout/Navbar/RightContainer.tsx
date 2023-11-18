import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from '@nextui-org/react'

import { Icon } from '@/components/Icon'
import { IconCountryFlag } from '@/components/IconCountryFlag'

export const RightContainer = () => {
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

  return (
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

      <Icon name='FaGear' className='cursor-pointer mx-3 block lg:hidden' />

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
              <IconCountryFlag lang='th' className='mx-3' />
            </div>
          </DropdownTrigger>

          <DropdownMenu aria-label='Profile Actions' variant='flat'>
            {langs.map(({ lang, label }) => (
              <DropdownItem
                key={lang}
                startContent={
                  <IconCountryFlag lang={lang as never} className='mx-3' />
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
          <DropdownItem key='help_and_feedback'>Help & Feedback</DropdownItem>
          <DropdownItem key='logout' color='danger'>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}
