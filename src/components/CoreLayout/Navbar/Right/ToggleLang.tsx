import type { Lang } from '@/types'

import { useEffect } from 'react'

import { useSelector } from 'react-redux'

import { IconCountryFlag } from '@/components/IconCountryFlag'
import { DropdownInput } from '@/components/Input'
import { LANG_LABEL } from '@/constants'
import { useLang } from '@/hooks'
import { appSettingSelector } from '@/store/selector'

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
      onSelected={(key) => toggleLang(key as Lang)}
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
