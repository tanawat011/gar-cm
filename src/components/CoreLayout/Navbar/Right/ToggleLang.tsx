import type { LANG as ALL_LANG } from '@/constants'

import { useEffect } from 'react'

import { useSelector } from 'react-redux'

import { IconCountryFlag } from '@/components/IconCountryFlag'
import { DropdownInput } from '@/components/Input'
import { LANG_LABEL } from '@/constants'
import { useLang } from '@/hooks'
import { appSettingSelector } from '@/store/selector'

type LANG = (typeof ALL_LANG)[keyof typeof ALL_LANG]

export const ToggleLang = () => {
  const { lang } = useSelector(appSettingSelector)
  const { toggleLang } = useLang()

  useEffect(() => {
    toggleLang(lang, true)
  }, [lang])

  return (
    <DropdownInput
      ariaLabel='Lang Actions'
      mode='single'
      disallowEmptySelection
      selectedKeys={[lang]}
      onSelected={(key) => toggleLang(key as LANG)}
      items={[...LANG_LABEL].map((allLang) => ({
        ...allLang,
        startContent: <IconCountryFlag lang={allLang.key} className='mx-3' />,
      }))}
    >
      <div className='cursor-pointer'>
        <IconCountryFlag lang={lang} className='mx-3' />
      </div>
    </DropdownInput>
  )
}
