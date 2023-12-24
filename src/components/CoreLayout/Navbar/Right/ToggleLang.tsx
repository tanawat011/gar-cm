import type { Lang } from '@/types'

import { useEffect } from 'react'

import { useSelector } from 'react-redux'

import { IconCountryFlag } from '@/components/IconCountryFlag'
import { DropdownInput } from '@/components/Input'
import { DEFAULT_APP_SETTING } from '@/configs'
import { LANG_LABEL, LS_LANG } from '@/constants'
import { useToggleAppSetting } from '@/hooks'
import { appSettingSelector } from '@/store/selector'
import { setLang } from '@/store/slice'

export const ToggleLang = () => {
  const { lang } = useSelector(appSettingSelector)
  const { toggleSetting } = useToggleAppSetting({
    storageName: LS_LANG,
    defaultValue: DEFAULT_APP_SETTING.lang,
    items: [...LANG_LABEL],
    dispatchSetting: setLang,
  })

  useEffect(() => {
    toggleSetting(lang, true)
  }, [lang])

  return (
    <DropdownInput
      ariaLabel='Lang Actions'
      mode='single'
      disallowEmptySelection
      selectedKeys={[lang]}
      onSelected={(key) => toggleSetting(key as Lang)}
      items={[...LANG_LABEL].map((allLang) => ({
        ...allLang,
        startContent: <IconCountryFlag lang={allLang.key as Lang} className='mx-3' />,
      }))}
    >
      <div className='cursor-pointer'>
        <IconCountryFlag lang={lang} className='mx-3' />
      </div>
    </DropdownInput>
  )
}
