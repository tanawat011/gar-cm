import type { LANG as ALL_LANG } from '@/constants'

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react'

import { IconCountryFlag } from '@/components/IconCountryFlag'
import { LANG_LABEL } from '@/constants'
import { useLang } from '@/hooks/useLang'

type LANG = (typeof ALL_LANG)[keyof typeof ALL_LANG]

export const ToggleLang = () => {
  const { lang, toggleLang } = useLang()

  return (
    <Dropdown placement='bottom-end'>
      <DropdownTrigger>
        <div className='cursor-pointer'>
          <IconCountryFlag lang={lang} className='mx-3' />
        </div>
      </DropdownTrigger>

      <DropdownMenu
        aria-label='Lang Actions'
        variant='flat'
        disallowEmptySelection
        selectionMode='single'
        selectedKeys={[lang]}
        onAction={(key) => toggleLang(key as LANG)}
      >
        {LANG_LABEL.map(({ _, label }) => (
          <DropdownItem
            key={_}
            startContent={
              <IconCountryFlag lang={_ as never} className='mx-3' />
            }
          >
            {label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}
